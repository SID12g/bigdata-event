"use client";

import { useState } from "react";
import Background from "@/components/Background";
import Logo from "@/components/Logo";
import LargeButton from "@/components/LargeButton";
import InfoPage from "@/components/InfoPage";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between items-center w-full w500:w-[calc(100vh*428/874)] h-[100vh] px-[20px]">
        <Logo />
        <div className="flex justify-between w-full mb-[60px]">
          <LargeButton
            text="START"
            backgroundColor="var(--color-green-bg)"
            borderColor="var(--color-green-border)"
          />
          <LargeButton
            text="INFO"
            backgroundColor="var(--color-navy-bg)"
            borderColor="var(--color-navy-border)"
            onClick={() => setShowInfo(true)}
          />
        </div>
      </div>
      {showInfo && <InfoPage onClose={() => setShowInfo(false)} />}
      <Background />
    </>
  );
}
