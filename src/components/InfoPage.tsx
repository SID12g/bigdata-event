"use client";

import Image from "next/image";
import Box from "./Box";
import CharacterImage from "@/../public/images/character.png";
import SmallButton from "./SmallButton";

export default function InfoPage({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 w-full text-white px-[40px]"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full">
      <Box
        backgroundColor="var(--color-brown-bg)"
        borderColor="var(--color-brown-border)"
        paddingX={32}
        paddingY={32}
        className="relative"
        width="100%"
      >
        <div className="absolute top-[20px] right-[20px]">
          <button onClick={onClose}>
            <Box
              backgroundColor="var(--color-red-bg)"
              borderColor="var(--color-red-border)"
              width="48px"
              height="48px"
            >
              <p className="text-[var(--color-white)] text-[20px] font-bold">
                X
              </p>
            </Box>
          </button>
        </div>
        <div className="w-full flex flex-col mt-[108px] items-center text-center gap-[20px]">
          <Image src={CharacterImage} alt="Character Image" />
          <p className="text-[20px]">빅데이터 퀴즈 v1.0</p>
          <p className="text-[14px]">
            서울시립대학교
            <br />
            빅데이터혁신융합대학사업단
          </p>
          <p className="text-[10px]">© 2026 sid12g All rights reserved.</p>
        </div>
        <div className="w-full gap-[6px] flex flex-col mt-[70px]">
          <SmallButton
            text="Instagram"
            href="https://www.instagram.com/uos_bigdata"
          />
          <SmallButton
            text="GitHub"
            href="https://github.com/SID12g/bigdata-event"
          />
          <SmallButton text="개인정보 처리방침" href="#" />
          <SmallButton text="오픈소스 라이브러리" href="#" />
        </div>
      </Box>
      </div>
    </div>
  );
}
