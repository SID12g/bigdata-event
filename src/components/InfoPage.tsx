"use client";

import Image from "next/image";
import { useState } from "react";
import Box from "./Box";
import CharacterImage from "@/../public/images/character.svg";
import SmallButton from "./SmallButton";

function PrivacyPolicyContent() {
  return (
    <div className="w-full text-left text-[12px] leading-relaxed space-y-[14px]">
      <p className="text-[16px] font-bold text-center">개인정보 처리방침</p>

      <p>
        <strong>서울시립대학교 빅데이터혁신융합대학사업단</strong>(이하
        &ldquo;사업단&rdquo;이라 함)은 정보주체의 자유와 권리 보호를 위해
        ｢개인정보 보호법｣ 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를
        처리하고 안전하게 관리하고 있습니다. 이에 ｢개인정보 보호법｣ 제30조에
        따라 정보주체에게 개인정보의 처리와 보호에 관한 절차 및 기준을 안내하고,
        이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과
        같이 개인정보 처리방침을 수립·공개합니다. 본 개인정보 처리방침은
        개인정보 처리방침 작성지침(2025.4.)를 바탕으로 작성되었습니다.
      </p>

      <blockquote className="border-l-2 border-gray-400 pl-[10px] text-gray-300">
        본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의
        기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반시
        정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
      </blockquote>

      <hr className="border-gray-600" />

      <div>
        <p className="font-semibold mb-[4px]">제1조 (개인정보의 처리 목적)</p>
        <p className="mb-[6px]">
          사업단 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
          개인정보는 다음의 목적 외의 용도로는 이용되지 않으며, 이용 목적이
          변경되는 경우에는 ｢개인정보 보호법｣ 제18조에 따라 별도의 동의를 받는
          등 필요한 조치를 이행할 예정입니다.
        </p>
        <ol className="list-decimal list-outside pl-[16px] space-y-[4px]">
          <li>
            재화 또는 서비스 제공: 서비스 제공, 사용자 식별, 서비스 기록 등의
            목적으로 개인정보를 처리합니다.
          </li>
          <li>
            서비스 개선 및 분석: 서비스 이용에 대한 분석, 인구통계학적 분석 및
            서비스 개선을 목적으로 개인정보를 처리합니다.
          </li>
          <li>
            서비스 개발: 기존 서비스와 별개의 신규 서비스 개발 목적으로
            개인정보를 처리합니다.
          </li>
          <li>
            마케팅 및 광고에 활용: 광고 게재, 이벤트 운영, 광고성 정보 전달을
            목적으로 개인정보를 처리합니다.(회원의 개인정보를 광고를 의뢰한
            개인이나 단체에 제공하지 않습니다.)
          </li>
        </ol>
      </div>

      <div>
        <p className="font-semibold mb-[6px]">
          제2조 (처리하는 개인정보의 항목)
        </p>
        <p className="mb-[6px]">
          사업단은 서비스 제공을 위해 다음과 같은 필요한 최소한의 개인정보를
          수집하고 있습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11px]">
            <thead>
              <tr className="border border-gray-500">
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  구분
                </th>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  수집 항목
                </th>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  수집 방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  필수 항목
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  인스타그램 아이디 등
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  서비스 이용 과정 중, 오프라인
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  선택 항목
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  서비스 관련 상세 내용, 이벤트 참여 유무 등
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  서비스 이용 과정 중, 오프라인
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  자동 수집
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  IP 주소, 쿠키, 캐시 등
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  서비스 이용 과정 중 자동 생성
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className="font-semibold mb-[6px]">
          제3조 (개인정보의 처리 및 보유 기간)
        </p>
        <p className="mb-[6px]">
          사업단은 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터
          개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서
          개인정보를 처리·보유합니다.
        </p>
        <div className="overflow-x-auto mb-[6px]">
          <table className="w-full border-collapse text-[11px]">
            <thead>
              <tr>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  내용
                </th>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  보유 기간
                </th>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  개인정보 항목
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  「통신비밀보호법」 제15조의2제2항에 따른 통신사실확인자료 보관
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  3개월
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-[4px]">
          다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 개인정보를
          처리·보유합니다.
        </p>
        <ol className="list-decimal list-outside pl-[16px] space-y-[4px]">
          <li>
            관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당
            수사·조사 종료 시까지
          </li>
          <li>
            홈페이지 이용에 따른 채권·채무관계 잔존 시에는 해당 채권·채무관계
            정산 시까지
          </li>
        </ol>
      </div>

      <div>
        <p className="font-semibold mb-[6px]">
          제4조 (개인정보의 파기 절차 및 방법에 관한 사항)
        </p>
        <ol className="list-decimal list-outside pl-[16px] space-y-[4px] mb-[6px]">
          <li>
            사업단은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </li>
          <li>
            정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
            달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
            하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
            보관장소를 달리하여 보존합니다.
          </li>
          <li>개인정보 파기의 절차 및 방법은 다음과 같습니다.</li>
        </ol>
        <ul className="list-disc list-outside pl-[16px] space-y-[4px]">
          <li>
            파기절차: 사업단은 파기 사유가 발생한 개인정보를 선정하고, 사업단의
            개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
          </li>
          <li>
            파기방법: 사업단은 전자적 파일 형태로 기록·저장된 개인정보는 기록을
            재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는
            분쇄기로 분쇄하거나 소각하여 파기합니다.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold mb-[6px]">
          제5조 (개인정보의 국외 수집 및 이전에 관한 사항)
        </p>
        <p className="mb-[6px]">
          사업단은 서비스 이용자로부터 수집한 개인정보를 아래와 같이 국외에
          이전하고 있으며, ⸢개인정보 보호법⸥ 제28조의8제2항에 따라 국외이전에
          대해 다음과 같이 안내합니다. 국외 이전을 거부할 경우 서비스 이용이
          불가능합니다. 국외 이전을 원치 않을 경우 고객센터를 통하여 계약 체결
          전 서비스 이용 기록 삭제를 요청할 수 있습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11px]">
            <thead>
              <tr>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  제공받는 자
                </th>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  이전 국가
                </th>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  제공 항목
                </th>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  보유 및 이용기간
                </th>
                <th className="border border-gray-500 px-[6px] py-[4px] text-left">
                  제공 목적
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  Supabase Inc
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  미국
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  인스타그램 아이디, 서비스 관련 상세 내용, 이벤트 참여 여부, IP
                  주소, 쿠키, 캐시 등
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  3개월
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  DB 사용
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  Vercel Inc.
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  미국
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  IP 주소, 쿠키, 캐시 등
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  3개월
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  호스팅 사용
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  Cloudflare, Inc.
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  미국
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  IP 주소, 쿠키, 캐시 등
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  3개월
                </td>
                <td className="border border-gray-500 px-[6px] py-[4px]">
                  호스팅 사용
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className="font-semibold mb-[6px]">
          제6조 (개인정보의 안전성 확보조치에 관한 사항)
        </p>
        <p className="mb-[6px]">
          사업단은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
          있습니다.
        </p>
        <ol className="list-decimal list-outside pl-[16px] space-y-[4px]">
          <li>관리적 조치 : 내부 관리계획 수립·시행</li>
          <li>
            기술적 조치 : 개인정보처리시스템에 대한 등의 접근 권한의 관리,
            접근통제시스템 설치 및 기타 관련 보호 조치, 인터넷망 차단 조치,
            개인정보의 암호화, 접속기록의 보관 및 점검
          </li>
          <li>물리적 조치 : 전산실, 자료보관실 등의 접근통제</li>
        </ol>
      </div>

      <div>
        <p className="font-semibold mb-[6px]">
          제7조 (정보주체와 법정대리인의 권리·의무 및 행사방법에 관한 사항)
        </p>
        <ol className="list-decimal list-outside pl-[16px] space-y-[4px]">
          <li>
            정보주체는 사업단에 대해 언제든지 개인정보
            열람·전송·정정·삭제·처리정지 및 동의 철회 등을 요구(이하 &ldquo;권리
            행사&rdquo;라 함)할 수 있습니다. 단 14세 미만 아동의 권리 행사는
            법정대리인이 직접 해야 하며, 14세 이상의 미성년자인 정보주체는
            정보주체의 개인정보에 관하여 미성년자 본인이 권리를 행사하거나
            법정대리인을 통하여 권리를 행사할 수 있습니다.
          </li>
          <li>
            권리 행사는 사업단에 대해 고객센터를 통하여 하실 수 있으며, 사업단은
            이에 대해 지체없이 조치하겠습니다.
          </li>
          <li>
            권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을
            통하여 하실 수도 있습니다. 이 경우 법적 효력이 유효한 위임장을
            제출하셔야 합니다.
          </li>
          <li>
            정보주체가 개인정보 열람 및 처리 정지를 요구할 권리는 「개인정보
            보호법」 제35조 제4항 및 제37조 제2항에의하여 제한될 수 있습니다.
          </li>
          <li>
            다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는
            해당 개인정보의 삭제를 요구할 수 없습니다.
          </li>
          <li>
            사업단은 권리 행사를 한 자가 본인이거나 정당한 대리인인지를
            확인합니다.
          </li>
          <li>
            정보주체는 권리 행사의 대상을 아래의{" "}
            <strong>&apos;제9조 (개인정보 보호책임자에 관한 사항)&apos;</strong>
            에서 확인 할 수 있습니다. 사업단은 정보주체로부터 권리행사를
            청구받은 날로부터 10일(전송요구의 경우 지체 없이) 이내
            회신하겠습니다.
          </li>
        </ol>
      </div>

      <div>
        <p className="font-semibold mb-[6px]">
          제8조 (개인정보 보호책임자에 관한 사항)
        </p>
        <p className="font-semibold mb-[4px]">개인정보 보호책임자</p>
        <ul className="list-disc list-outside pl-[16px] space-y-[4px]">
          <li>성명: 조성민</li>
          <li>연락처: sid12g@bigdata.uos.ac.kr</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold mb-[4px]">
          제9조 (개인정보 처리방침의 변경에 관한 사항)
        </p>
        <p>이 개인정보 처리방침은 2026년 4월 27일 부터 적용됩니다.</p>
      </div>
    </div>
  );
}

const OPEN_SOURCE_LIBS = [
  {
    name: "Next.js",
    version: "16.2.4",
    license: "MIT",
    url: "https://nextjs.org",
  },
  {
    name: "React",
    version: "19.2.4",
    license: "MIT",
    url: "https://react.dev",
  },
  {
    name: "react-dom",
    version: "19.2.4",
    license: "MIT",
    url: "https://react.dev",
  },
  {
    name: "html-to-image",
    version: "1.11.13",
    license: "MIT",
    url: "https://github.com/bubkoo/html-to-image",
  },
  {
    name: "Tailwind CSS",
    version: "4.2.4",
    license: "MIT",
    url: "https://tailwindcss.com",
  },
  {
    name: "TypeScript",
    version: "5.9.3",
    license: "Apache-2.0",
    url: "https://www.typescriptlang.org",
  },
];

function OpenSourceContent() {
  return (
    <div className="w-full text-left text-[12px] leading-relaxed space-y-[14px]">
      <p className="text-[16px] font-bold text-center">오픈소스 라이브러리</p>
      <p>이 앱은 다음 오픈소스 라이브러리를 사용합니다.</p>
      <div className="space-y-[10px]">
        {OPEN_SOURCE_LIBS.map((lib) => (
          <div
            key={lib.name}
            className="border border-gray-600 rounded px-[12px] py-[10px]"
          >
            <p className="font-semibold">{lib.name}</p>
            <p className="text-gray-300 mt-[2px]">
              v{lib.version} · {lib.license}
            </p>
            <a
              href={lib.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline break-all mt-[2px] inline-block"
            >
              {lib.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InfoPage({ onClose }: { onClose: () => void }) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showOpenSource, setShowOpenSource] = useState(false);

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
          ) : showOpenSource ? (
            <div className="w-full mt-[80px] overflow-y-auto max-h-[60vh]">
              <OpenSourceContent />
            </div>
          ) : (
            <>
              <div className="w-full flex flex-col mt-[60px] items-center text-center gap-[20px]">
                <Image
                  src={CharacterImage}
                  alt="Character Image"
                  className="w-[120px] h-[120px]"
                />
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
              <div className="w-full gap-[6px] flex flex-col mt-[40px]">
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
                <SmallButton
                  text="오픈소스 라이브러리"
                  onClick={() => setShowOpenSource(true)}
                />
              </div>
            </>
          )}
        </Box>
      </div>
    </div>
  );
}
