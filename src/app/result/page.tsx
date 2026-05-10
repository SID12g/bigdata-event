import Background from "@/components/Background";
import Box from "@/components/Box";
import Logo from "@/components/Logo";
import Image from "next/image";
import ImageDownloadButton from "@/components/ImageDownloadButton";
import { getExplorerRank, getExplorerRankImagePath } from "@/lib/explorerRank";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; score?: string }>;
}) {
  const { id = "", score = "0" } = await searchParams;
  const scoreNum = Math.max(0, Math.min(4, parseInt(score, 10) || 0));
  const explorerRank = getExplorerRank(scoreNum);
  const explorerRankImagePath = getExplorerRankImagePath(scoreNum);

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
            위 탐험가를 {explorerRank}로
            <br />
            임명합니다.
          </p>
          <Image
            src={explorerRankImagePath}
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
            결과를 인스타그램 스토리에 공유한 뒤에 @uos_bigdata를 언급해주시면,
            선물을 드립니다! <br />
            공유 후 서포터즈에게 인증해주세요!
          </p>
        </Box>
      </div>

      <Background />
    </>
  );
}
