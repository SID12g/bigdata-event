"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundCharacter from "@/components/BackgroundCharacter";
import Box from "@/components/Box";
import NextButton from "@/components/NextButton";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [router]);

  return (
    <>
      <div className="absolute bottom-[32px] left-[20px] right-[20px] flex flex-col items-end gap-[8px]">
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
              404! 앗, 길을 잃어버렸네요! 이 페이지는 존재하지 않아요.
            </p>
          </div>
        </Box>
        <div className="flex flex-col items-end gap-[4px]">
          <NextButton text="홈으로 이동하기" onClick={() => router.push("/")} />
          <p className="text-[11px] text-[var(--color-white)] pr-[2px]">
            {countdown}초 후 자동으로 홈으로 이동해요
          </p>
        </div>
      </div>
      <BackgroundCharacter />
    </>
  );
}
