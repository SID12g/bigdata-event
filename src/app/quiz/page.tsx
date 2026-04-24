import BackgroundCharacter from "@/components/BackgroundCharacter";
import Box from "@/components/Box";
import NextButton from "@/components/NextButton";

export default function QuizPage() {
  return (
    <>
      <div className="absolute bottom-[32px] left-[20px] right-[20px] flex flex-col items-end">
        <Box
          backgroundColor="var(--color-brown-bg)"
          borderColor="var(--color-brown-border)"
          className="mb-[8px]"
        >
          <div className="flex flex-col items-start px-[12px] py-[14px]">
            <p className="text-[16px] text-[var(--color-yellow-primary)]">
              데이티
            </p>
            <p className="text-[14px] text-white mt-[8px] text-justify leading-[170%]">
              clwm_222님이시군요! 그럼 문제를 풀어보러 떠나요!
              clwm_222님이시군요! 그럼 문제를 풀어보러 떠나요!
            </p>
          </div>
        </Box>
        <NextButton text="다음" />
      </div>
      <BackgroundCharacter />
    </>
  );
}
