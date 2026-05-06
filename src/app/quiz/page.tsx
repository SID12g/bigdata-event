"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundCharacter from "@/components/BackgroundCharacter";
import Box from "@/components/Box";
import NextButton from "@/components/NextButton";

const QUESTIONS: {
  question: string;
  answer: "O" | "X";
  explanation: string;
}[] = [
  {
    question: "빅데이터 마이크로디그리(MD)의 총 이수학점은 12학점이다.",
    answer: "O",
    explanation: "마이크로디그리의 총 이수학점은 12학점이랍니다.",
  },
  {
    question:
      "마이크로디그리는 빅데이터 표준 마이크로디그리와 빅데이터 연계융합 마이크로디그리, 이렇게 두 종류로 구성되어 있다.",
    answer: "O",
    explanation:
      "마이크로디그리는 표준 영역과 연계융합 영역의 두 가지로 구성되어 있답니다.",
  },
  {
    question:
      "빅데이터 표준 마이크로디그리(MD)는 3학점짜리 빅데이터 표준 교과목 4개를 이수하는 방식으로 구성된다.",
    answer: "O",
    explanation:
      "표준 마이크로디그리는 3학점 표준 교과목 4개, 총 12학점으로 구성되어 있답니다.",
  },
  {
    question:
      "마이크로디그리(MD)는 기존 학사학위를 대체하는 새로운 학위 제도이다.",
    answer: "X",
    explanation:
      "마이크로디그리는 학사학위를 대체하는 것이 아니라, 학사학위와 별개로 소정의 학점을 이수하여 취득하는 학점당 학위제랍니다.",
  },
];

type Role = "tity" | "iroume" | "both";

type IntroStep =
  | { type: "message"; text: string; response: string; role: Role }
  | {
      type: "input";
      text: string;
      submitText: string;
      placeholder: string;
      field: "studentId" | "instagramId";
      role: Role;
    };

const INTRO_STEPS: IntroStep[] = [
  {
    type: "message",
    text: "안녕하세요. 저는 티티에요.",
    response: "안녕, 반가워!",
    role: "tity",
  },
  {
    type: "message",
    text: "안녕하세요. 저는 이루매에요.",
    response: "안녕!",
    role: "iroume",
  },
  {
    type: "message",
    text: "저희는 0과 1로 이루어진 파도 속에서 빅데이터에 대한 정보를 찾고 있어요.",
    response: "그렇구나",
    role: "both",
  },
  {
    type: "message",
    text: "저희의 탐험에 동참하시겠어요?",
    response: "물론이지",
    role: "both",
  },
  {
    type: "message",
    text: "좋아요! 그러면 함께 떠나보아요!",
    response: "좋아!",
    role: "both",
  },
  {
    type: "input",
    text: "우선 탐험가님의 학번을 입력해주세요!",
    submitText: "입력",
    placeholder: "예시) 2026010001",
    role: "tity",
    field: "studentId",
  },
  {
    type: "input",
    text: "그리고 탐험가님의 인스타그램 아이디를 입력해주세요!",
    submitText: "입력",
    placeholder: "예시) uos_bigdata (@ 제외)",
    role: "iroume",
    field: "instagramId",
  },
  {
    type: "message",
    text: "",
    response: "맞아!",
    role: "both",
  },
  {
    type: "message",
    text: "저희의 탐험은 OX 퀴즈 4문제로 이루어져 있어요. 뒤에 선물도 기다리고 있으니, 끝까지 함께해주세요!",
    response: "물론이지!",
    role: "both",
  },
];

const OUTRO_STEPS = (
  id: string,
  n: number,
): { text: string; response: string; role: Role }[] => [
  {
    text: `${id}님 총 ${n}문제를 맞추셨네요!`,
    response: "맞아!",
    role: "both",
  },
  {
    text: `${id}님을 빅데이터 박사로 인정합니다!`,
    response: "고마워!",
    role: "both",
  },
  {
    text: "결과를 인스타그램 스토리로 공유한 뒤 @uos_bigdata를 언급해주시면, 선물을 드리고 있어요. 꼭 참여해주세요!",
    response: "꼭 참여할게",
    role: "both",
  },
];

const ROLE_NAMES: Record<Role, string> = {
  tity: "티티",
  iroume: "이루매",
  both: "티티, 이루매",
};

function ChatBox({ text, role = "tity" }: { text: string; role?: Role }) {
  return (
    <Box
      backgroundColor="var(--color-brown-bg)"
      borderColor="var(--color-brown-border)"
      className="w-full"
    >
      <div className="flex flex-col items-start px-[12px] py-[14px] w-full">
        <p className="text-[16px] text-[var(--color-yellow-primary)]">
          {ROLE_NAMES[role]}
        </p>
        <p className="text-[14px] text-white mt-[8px] text-left leading-[170%]">
          {text}
        </p>
      </div>
    </Box>
  );
}

export default function QuizPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"intro" | "quiz" | "outro">("intro");
  const [introStep, setIntroStep] = useState(0);
  const [, setStudentId] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswer, setUserAnswer] = useState<"O" | "X" | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [outroStep, setOutroStep] = useState(0);

  if (phase === "intro") {
    const step = INTRO_STEPS[introStep];
    const isInputStep = step.type === "input";
    const introText = introStep === 7 ? `${instagramId}님이시군요!` : step.text;

    const handleNext = () => {
      if (introStep === INTRO_STEPS.length - 1) {
        setPhase("quiz");
      } else {
        setIntroStep((s) => s + 1);
      }
    };

    const handleInputSubmit = () => {
      const trimmed = inputValue.trim();
      if (!trimmed) return;
      if (step.type !== "input") return;
      if (step.field === "studentId") {
        setStudentId(trimmed);
      } else {
        setInstagramId(trimmed);
      }
      setInputValue("");
      setIntroStep((s) => s + 1);
    };

    return (
      <>
        <div className="absolute bottom-[32px] left-[20px] right-[20px] flex flex-col items-end gap-[8px]">
          <ChatBox text={introText} role={step.role} />
          {isInputStep ? (
            <div className="flex gap-[8px] w-full items-stretch flex-row-reverse">
              <NextButton
                text={step.submitText}
                onClick={handleInputSubmit}
                backgroundColor="var(--color-green-bg)"
                borderColor="var(--color-green-border)"
              />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleInputSubmit()}
                placeholder={step.placeholder}
                className="min-w-0 flex-1 bg-[var(--color-navy-bg)] border-[4px] border-[var(--color-navy-border)] text-white text-[14px] px-[6px] py-[8px] outline-none placeholder-[var(--color-grey)]"
              />
            </div>
          ) : (
            <NextButton text={step.response} onClick={handleNext} />
          )}
        </div>
        <BackgroundCharacter />
      </>
    );
  }

  if (phase === "quiz") {
    const q = QUESTIONS[currentQ];
    const isCorrect = userAnswer === q.answer;

    const handleAnswer = (answer: "O" | "X") => {
      setUserAnswer(answer);
      if (answer === q.answer) setCorrectCount((n) => n + 1);
    };

    const handleNextQuestion = () => {
      setUserAnswer(null);
      if (currentQ === 3) {
        setPhase("outro");
      } else {
        setCurrentQ((n) => n + 1);
      }
    };

    return (
      <>
        <div className="absolute top-[40px] left-[20px] right-[20px] h-[calc(100vh-60px)] flex flex-col items-end gap-[8px]">
          <Box
            backgroundColor="var(--color-brown-bg)"
            borderColor="var(--color-brown-border)"
            className="w-full"
          >
            <div className="flex flex-col items-start px-[12px] py-[14px] w-full">
              <p className="text-[var(--color-yellow-primary)] text-[16px] text-left mb-[8px]">
                Q{currentQ + 1} / 4
              </p>
              <p className="text-[14px] text-white text-left leading-[170%]">
                {q.question}
              </p>
            </div>
          </Box>
          <div className="flex-1" />
          {userAnswer === null ? (
            <div className="flex gap-[8px] w-full">
              <button
                className="flex-1"
                onClick={() => handleAnswer("O")}
                style={{ touchAction: "manipulation" }}
              >
                <Box
                  backgroundColor="var(--color-blue-bg)"
                  borderColor="var(--color-blue-border)"
                  className="w-[120px] h-[120px] pointer-events-none"
                >
                  <p className="text-[64px] text-[var(--color-white)]">O</p>
                </Box>
              </button>
              <button
                onClick={() => handleAnswer("X")}
                style={{ touchAction: "manipulation" }}
              >
                <Box
                  backgroundColor="var(--color-red-bg)"
                  borderColor="var(--color-red-border)"
                  className="w-[120px] h-[120px] pointer-events-none"
                >
                  <p className="text-[64px] text-[var(--color-white)]">X</p>
                </Box>
              </button>
            </div>
          ) : (
            <>
              <Box
                backgroundColor="var(--color-brown-bg)"
                borderColor="var(--color-brown-border)"
                className="w-full"
              >
                <div className="flex flex-col items-start px-[12px] py-[14px] w-full">
                  <p className="text-[16px] text-[var(--color-yellow-primary)]">
                    티티
                  </p>
                  <p className="text-[14px] text-white mt-[8px] text-left leading-[170%]">
                    {q.answer}, {isCorrect ? "정답이에요!" : "오답이에요 😭"}
                    <br />
                    {q.explanation}
                  </p>
                </div>
              </Box>
              <NextButton text="다음" onClick={handleNextQuestion} />
            </>
          )}
          <div className="h-[32px]" />
        </div>
        <BackgroundCharacter />
      </>
    );
  }

  const outroSteps = OUTRO_STEPS(instagramId, correctCount);
  const step = outroSteps[outroStep];

  const handleOutroNext = () => {
    if (outroStep === outroSteps.length - 1) {
      router.push(
        `/result?id=${encodeURIComponent(instagramId)}&score=${correctCount}`,
      );
      return;
    }
    setOutroStep((s) => s + 1);
  };

  return (
    <>
      <div className="absolute bottom-[32px] left-[20px] right-[20px] flex flex-col items-end gap-[8px]">
        <ChatBox text={step.text} role={step.role} />
        <NextButton text={step.response} onClick={handleOutroNext} />
      </div>
      <BackgroundCharacter />
    </>
  );
}
