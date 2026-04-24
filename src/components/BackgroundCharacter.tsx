import Image from "next/image";
import BackgroundCharacterImage from "@/../public/images/background_character.png";
export default function BackgroundCharacter() {
  return (
    <div>
      <div className="fixed inset-0 z-[-10] flex w500:hidden overflow-hidden">
        <Image
          src={BackgroundCharacterImage}
          alt="Background Image"
          fill
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* 500px 이상: 원본 크기로 중앙 정렬 */}
      <div className="fixed inset-0 z-[-10] hidden w500:flex items-center justify-center overflow-hidden">
        <Image
          src={BackgroundCharacterImage}
          alt="Background Image"
          loading="eager"
          style={{ width: "auto", height: "100vh" }}
          sizes="fill"
        />
      </div>
    </div>
  );
}
