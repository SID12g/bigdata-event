"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import TitleImage from "@/../public/images/title.svg";

export default function Logo() {
  const router = useRouter();

  const handleClick = () => {
    const shouldMoveHome = window.confirm("홈으로 이동하시겠습니까?");

    if (shouldMoveHome) {
      router.push("/");
    }
  };

  return (
    <div className="mt-[40px]">
      {/* <Box
        backgroundColor="var(--color-brown-bg)"
        borderColor="var(--color-brown-border)"
        paddingX={16}
        paddingY={14}
      >
        <p className="text-[24px] mb-[4px] text-[var(--color-yellow-light)]">
          BIG DATA
        </p>
        <p className="text-[40px] text-[var(--color-yellow-primary)]">
          빅데이터 퀴즈
        </p>
      </Box> */}
      <button type="button" onClick={handleClick} aria-label="홈으로 이동">
        <Image width={280} src={TitleImage} alt="Title" />
      </button>
    </div>
  );
}
