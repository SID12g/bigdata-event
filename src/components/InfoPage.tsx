"use client";

import Image from "next/image";
import { useState } from "react";
import Box from "./Box";
import CharacterImage from "@/../public/images/character.png";
import SmallButton from "./SmallButton";

function PrivacyPolicyContent() {
  return (
    <div className="w-full text-left text-[12px] leading-relaxed space-y-[14px]">
      <p className="text-[16px] font-bold text-center">개인정보 처리방침</p>
      <p>
        서울시립대학교 빅데이터혁신융합대학사업단(이하 &apos;운영팀&apos;)은
        빅데이터 퀴즈 서비스(이하 &apos;서비스&apos;) 운영 과정에서 아래와 같이
        개인정보를 처리합니다.
      </p>
      <div>
        <p className="font-semibold mb-[4px]">1. 수집하는 개인정보 항목</p>
        <p>
          서비스는 별도의 회원가입 없이 이용 가능하며, 개인정보를 수집하지
          않습니다.
        </p>
      </div>
      <div>
        <p className="font-semibold mb-[4px]">2. 개인정보의 처리 목적</p>
        <p>수집된 개인정보가 없으므로 별도의 처리 목적이 존재하지 않습니다.</p>
      </div>
      <div>
        <p className="font-semibold mb-[4px]">
          3. 개인정보의 보유 및 이용 기간
        </p>
        <p>수집된 개인정보가 없으므로 보유 및 이용 기간이 적용되지 않습니다.</p>
      </div>
      <div>
        <p className="font-semibold mb-[4px]">4. 개인정보의 제3자 제공</p>
        <p>운영팀은 이용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
      </div>
      <div>
        <p className="font-semibold mb-[4px]">5. 문의처</p>
        <p>개인정보 관련 문의는 아래로 연락해 주시기 바랍니다.</p>
        <p className="mt-[4px]">이메일: sead12g@gmail.com</p>
      </div>
      <p className="text-[10px] text-gray-400">시행일: 2026년 4월 24일</p>
    </div>
  );
}

export default function InfoPage({ onClose }: { onClose: () => void }) {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 w-full w500:w-[calc(100vh*428/874)] justify-self-center text-white px-[40px]"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full">
        <Box
          backgroundColor="var(--color-brown-bg)"
          borderColor="var(--color-brown-border)"
          paddingX={32}
          paddingY={32}
          className="relative mt-[40px] mb-[40px]"
          width="100%"
        >
          <div className="absolute top-[20px] right-[20px] flex gap-[8px]">
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

          {showPrivacy ? (
            <div className="w-full mt-[80px] overflow-y-auto max-h-[60vh]">
              <PrivacyPolicyContent />
            </div>
          ) : (
            <>
              <div className="w-full flex flex-col mt-[108px] items-center text-center gap-[20px]">
                <Image src={CharacterImage} alt="Character Image" />
                <p className="text-[20px]">빅데이터 퀴즈 v1.0</p>
                <p className="text-[14px]">
                  서울시립대학교
                  <br />
                  빅데이터혁신융합대학사업단
                </p>
                <p className="text-[10px]">
                  © 2026 sid12g All rights reserved.
                </p>
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
                <SmallButton
                  text="개인정보 처리방침"
                  onClick={() => setShowPrivacy(true)}
                />
                <SmallButton text="오픈소스 라이브러리" href="#" />
              </div>
            </>
          )}
        </Box>
      </div>
    </div>
  );
}
