import Background from "@/components/Background";
import Box from "@/components/Box";
import Logo from "@/components/Logo";
import CharacterImage from "@/../public/images/character.svg";
import Image from "next/image";
import ImageDownloadButton from "@/components/ImageDownloadButton";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; score?: string }>;
}) {
  const { id = "", score = "0" } = await searchParams;
  const scoreNum = Math.max(0, Math.min(4, parseInt(score, 4) || 0));

  return (
    <>
      <div className="flex flex-col items-center w-full w500:w-[calc(100vh*428/874)] h-[100vh] px-[20px]">
        <Logo />
        <Box
          backgroundColor="var(--color-brown-bg)"
          borderColor="var(--color-brown-border)"
          className="w-full mt-[20px] mb-[24px]"
        >
          <p className="text-[36px] text-[var(--color-yellow-primary)] mt-[30px] mb-[4px]">
            {scoreNum}/4
          </p>
          <p className="mb-[4px] text-[var(--color-white)] text-[12px]">
            @{id}
          </p>
          <p className="mb-[20px] text-[var(--color-white)] text-[12px] leading-[180%]">
            위 사람을 데이티가 빅데이터
            <br />
            박사님으로 인정합니다.
          </p>
          <Image
            src={CharacterImage}
            alt="character"
            width={240}
            height={240}
            className="mb-[20px] w-[120px] h-[120px]"
          />
        </Box>
        <ImageDownloadButton id={id} score={scoreNum} />
        <Box
          backgroundColor="var(--color-brown-bg)"
          borderColor="var(--color-brown-border)"
          paddingX={12}
          paddingY={10}
          className="mb-[32px] mt-[20px]"
        >
          <p className="text-[var(--color-white)] text-[12px] text-left leading-[170%]">
            이 화면을 서포터즈에게 보여준 뒤에, 선물을 가져가주세요!
            <br />
            그리고, 결과를 인스타그램 스토리에 공유한 뒤에 @uos_bigdata를 언급후
            팔로우 해주시면, 추첨을 통해 치킨을 드립니다!
          </p>
        </Box>
      </div>

      <Background />
    </>
  );
}
