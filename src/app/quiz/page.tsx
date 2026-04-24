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
  {
    question:
      "서울대학교 빅데이터 마이크로디그리의 경우, 표준 교과목과 연계융합 표준 교과목을 각각 최소 3학점 이상 이수하여 총 12학점을 채우면 된다.",
    answer: "O",
    explanation:
      "표준 3학점 이상 + 연계융합 3학점 이상의 조합으로 총 12학점을 이수하면 된답니다.",
  },
  {
    question:
      "마이크로디그리 이수 조건을 충족하면, 이수확인 신청서를 연 1회 제출할 수 있다.",
    answer: "X",
    explanation:
      "이수확인 신청서는 연 1회가 아니라 학기별 1회 제출이 가능하답니다.",
  },
  {
    question:
      "마이크로디그리를 취득하면 디지털 인재양성 혁신융합대학 명의의 이수증이 발급된다.",
    answer: "O",
    explanation:
      "마이크로디그리 이수 시 디지털 인재양성 혁신융합대학 명의의 이수증이 수여된답니다.",
  },
  {
    question: "고급 마이크로디그리는 전공 3~4학년 수준의 학생을 대상으로 한다.",
    answer: "X",
    explanation:
      "고급 마이크로디그리는 전공 3~4학년이 아닌 전공 4학년 이상을 대상으로 하며, 전공 3~4학년 수준은 중급 마이크로디그리에 해당한답니다.",
  },
  {
    question:
      "고급 마이크로디그리의 인재양성 목표는 빅데이터 분야 석박사급 R&D 수요를 반영한 기술개발형 인재 양성이다.",
    answer: "O",
    explanation:
      "고급 마이크로디그리는 교수자·재직전문가와 산학협력과제를 수행할 수 있는 기술개발형 인재를 목표로 한답니다.",
  },
  {
    question:
      "마이크로디그리 표준 교육과정 중 '빅데이터 초급' 과정에서는 빅데이터 개론과 자료구조가 필수 교과목으로 지정되어 있다.",
    answer: "O",
    explanation:
      "빅데이터 초급 교육과정의 필수 과목은 빅데이터 개론(A-1A 또는 A-1B)과 자료구조(A-2)랍니다.",
  },
];

const INTRO_STEPS = [
  { daity: "안녕하세요. 저는 티티에요.", response: "안녕, 반가워!" },
  {
    daity: "지금부터 마이크로디그리에대해 알아볼까요?",
    response: "좋아, 떠나보자!",
  },
  {
    daity:
      "그러면 마이크로디그리에 대한 퀴즈를 풀어주세요! 퀴즈는 OX 10문제에요!",
    response: "좋아!",
  },
  {
    daity: "뒤에 이벤트도 준비되어있으니 기대해주세요!",
    response: "그래!",
  },
];

const OUTRO_STEPS = (id: string, n: number) => [
  { daity: `${id}님 총 ${n} 문제를 맞추셨네요!`, response: "맞아!" },
  { daity: `${id}님을 빅데이터 박사로 인정합니다!`, response: "고마워!" },
  {
    daity: "빅데이터 박사님을 위해 준비한 선물을 받아가주세요!",
    response: "알겠어!",
  },
  {
    daity:
      "그리고, 결과를 인스타그램 스토리에 공유한 뒤에 @uos_bigdata를 언급후 팔로우 해주시면, 추첨을 통해 치킨을 드립니다!",
    response: "꼭 참여할게!",
  },
];

function ChatBox({ text }: { text: string }) {
  return (
    <Box
      backgroundColor="var(--color-brown-bg)"
      borderColor="var(--color-brown-border)"
      className="w-full"
    >
      <div className="flex flex-col items-start px-[12px] py-[14px] w-full">
        <p className="text-[16px] text-[var(--color-yellow-primary)]">티티</p>
        <p className="text-[14px] text-white mt-[8px] text-justify leading-[170%]">
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
  const [instagramId, setInstagramId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswer, setUserAnswer] = useState<"O" | "X" | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [outroStep, setOutroStep] = useState(0);

  if (phase === "intro") {
    const isInputStep = introStep === 4;
    const isConfirmStep = introStep === 5;

    const daityText = isConfirmStep
      ? `${instagramId}님이시군요! 그럼 문제를 풀어보러 떠나요!`
      : isInputStep
        ? "문제를 풀기 전에 용사님의 인스타그램 아이디를 입력해주세요!"
        : INTRO_STEPS[introStep].daity;

    const responseText = isConfirmStep
      ? "가자!"
      : INTRO_STEPS[introStep]?.response;

    const handleNext = () => {
      if (isConfirmStep) {
        setPhase("quiz");
      } else {
        setIntroStep((s) => s + 1);
      }
    };

    const handleInputSubmit = () => {
      const trimmed = inputValue.trim();
      if (!trimmed) return;
      setInstagramId(trimmed);
      setIntroStep(5);
    };

    return (
      <>
        <div className="absolute bottom-[32px] left-[20px] right-[20px] flex flex-col items-end gap-[8px]">
          <ChatBox text={daityText} />
          {isInputStep ? (
            <div className="flex gap-[8px] w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleInputSubmit()}
                placeholder="인스타그램 아이디"
                className="flex-1 bg-[var(--color-brown-bg)] border-[4px] border-[var(--color-brown-border)] text-white text-[14px] px-[12px] py-[10px] outline-none placeholder-[var(--color-grey)]"
              />
              <NextButton text="입력하기" onClick={handleInputSubmit} />
            </div>
          ) : (
            <NextButton text={responseText!} onClick={handleNext} />
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
      if (currentQ === 9) {
        setPhase("outro");
      } else {
        setCurrentQ((n) => n + 1);
      }
    };

    return (
      <>
        <div className="absolute top-[80px] left-[20px] right-[20px] h-[calc(100vh-80px)] flex flex-col items-end gap-[8px]">
          <Box
            backgroundColor="var(--color-brown-bg)"
            borderColor="var(--color-brown-border)"
            className="w-full"
          >
            <div className="flex flex-col items-start px-[12px] py-[14px] w-full">
              <p className="text-[var(--color-yellow-primary)] text-[16px] text-left mb-[8px]">
                Q{currentQ + 1} / 10
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
                  <p className="text-[14px] text-white mt-[8px] text-justify leading-[170%]">
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
    if (outroStep === 3) {
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
        <ChatBox text={step.daity} />
        <NextButton text={step.response} onClick={handleOutroNext} />
      </div>
      <BackgroundCharacter />
    </>
  );
}
