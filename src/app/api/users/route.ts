import { NextResponse } from "next/server";

type Answer = "O" | "X";

type ExistingUser = {
  student_id: string;
  instagram_id: string;
  score: number;
};

const STUDENT_ID_PATTERN = /^\d{10}$/;
const INSTAGRAM_ID_PATTERN = /^[A-Za-z0-9._]+$/;
const ANSWERS: Answer[] = ["O", "O", "O", "X"];

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase 환경변수(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)가 설정되지 않았습니다.",
    );
  }

  return {
    url: url.replace(/\/$/, ""),
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
    },
  };
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "";

  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    ""
  );
}

function validateStudentId(studentId: unknown) {
  return typeof studentId === "string" && STUDENT_ID_PATTERN.test(studentId);
}

function validateInstagramId(instagramId: unknown) {
  return (
    typeof instagramId === "string" && INSTAGRAM_ID_PATTERN.test(instagramId)
  );
}

function validateAnswers(answers: unknown): answers is Answer[] {
  return (
    Array.isArray(answers) &&
    answers.length === ANSWERS.length &&
    answers.every((answer) => answer === "O" || answer === "X")
  );
}

function calculateScore(answers: Answer[]) {
  return answers.reduce(
    (score, answer, index) => score + (answer === ANSWERS[index] ? 1 : 0),
    0,
  );
}

async function findExistingUser(params: {
  studentId?: string;
  instagramId?: string;
}) {
  const { url, headers } = getSupabaseConfig();
  const filters: string[] = ["select=student_id,instagram_id,score", "limit=1"];

  if (params.studentId) {
    filters.push(`student_id=eq.${encodeURIComponent(params.studentId)}`);
  }

  if (params.instagramId) {
    filters.push(`instagram_id=eq.${encodeURIComponent(params.instagramId)}`);
  }

  const response = await fetch(`${url}/rest/v1/users?${filters.join("&")}`, {
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Supabase 조회 요청에 실패했습니다.");
  }

  const users = (await response.json()) as ExistingUser[];
  return users[0] ?? null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get("studentId")?.trim();
  const instagramId = searchParams.get("instagramId")?.trim();

  try {
    if (studentId !== undefined && !validateStudentId(studentId)) {
      return jsonError("학번은 숫자 10자리여야 합니다.", 400);
    }

    if (instagramId !== undefined && !validateInstagramId(instagramId)) {
      return jsonError(
        "인스타그램 아이디는 공백 없는 영어 형식이어야 합니다.",
        400,
      );
    }

    if (!studentId && !instagramId) {
      return jsonError("studentId 또는 instagramId가 필요합니다.", 400);
    }

    const user = await findExistingUser({
      studentId: studentId || undefined,
      instagramId: instagramId || undefined,
    });

    return NextResponse.json({
      exists: Boolean(user),
      user: user
        ? {
            studentId: user.student_id,
            instagramId: user.instagram_id,
            score: user.score,
          }
        : null,
    });
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "알 수 없는 DB 오류입니다.",
      500,
    );
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonError("요청 본문이 올바른 JSON이 아닙니다.", 400);
  }

  const payload = body as {
    studentId?: unknown;
    instagramId?: unknown;
    answers?: unknown;
  };
  const studentId =
    typeof payload.studentId === "string" ? payload.studentId.trim() : "";
  const instagramId =
    typeof payload.instagramId === "string" ? payload.instagramId.trim() : "";

  if (!validateStudentId(studentId)) {
    return jsonError("학번은 숫자 10자리여야 합니다.", 400);
  }

  if (!validateInstagramId(instagramId)) {
    return jsonError(
      "인스타그램 아이디는 공백 없는 영어 형식이어야 합니다.",
      400,
    );
  }

  if (!validateAnswers(payload.answers)) {
    return jsonError("정답 내역은 O 또는 X 4개여야 합니다.", 400);
  }

  const score = calculateScore(payload.answers);

  try {
    const existingUser = await findExistingUser({ studentId });
    if (existingUser) {
      return jsonError("이미 참여한 사용자 입니다.", 409);
    }

    const existingInstagramUser = await findExistingUser({ instagramId });
    if (existingInstagramUser) {
      return jsonError("이미 참여한 사용자 입니다.", 409);
    }

    const { url, headers } = getSupabaseConfig();
    const response = await fetch(`${url}/rest/v1/users`, {
      method: "POST",
      headers: {
        ...headers,
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        student_id: studentId,
        instagram_id: instagramId,
        answers: payload.answers,
        score,
        ip_address: getClientIp(request),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Supabase 저장 요청에 실패했습니다.");
    }

    return NextResponse.json(
      { studentId, instagramId, score },
      { status: 201 },
    );
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "알 수 없는 DB 오류입니다.",
      500,
    );
  }
}
