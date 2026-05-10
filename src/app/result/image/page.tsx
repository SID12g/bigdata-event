import Image from "next/image";
import BackgroundResultImage from "@/../public/images/background_result.png";
import Box from "@/components/Box";
import CharacterImage from "@/../public/images/character.svg";
import { getExplorerRank } from "@/lib/explorerRank";

export default async function ResultImagePage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; score?: string }>;
}) {
  const { id = "", score = "0" } = await searchParams;
  const scoreNum = Math.max(0, Math.min(4, parseInt(score, 10) || 0));
  const explorerRank = getExplorerRank(scoreNum);
  return (
    <div className="relative inline-block">
      <Image
        src={BackgroundResultImage}
        alt="BackgroundResult Image"
        loading="eager"
      />
      <div className="absolute inset-[30px]">
        <Box
          backgroundColor="var(--color-brown-bg)"
          borderColor="var(--color-brown-border)"
          className="w-full"
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
            src={CharacterImage}
            alt="character"
            width={240}
            height={240}
            className="mb-[20px] w-[120px] h-[120px]"
          />
        </Box>
      </div>
    </div>
  );
}
