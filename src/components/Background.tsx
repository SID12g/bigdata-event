import Image from "next/image";
import BackgroundImage from "@/../public/images/background.png";

export default function Background() {
  return (
    <div>
      <div className="fixed inset-0 z-[-10] flex w500:hidden overflow-hidden">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          fill
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* 500px 이상: 원본 크기로 중앙 정렬 */}
      <div className="fixed inset-0 z-[-10] hidden w500:flex items-center justify-center overflow-hidden">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          loading="eager"
          style={{ width: "auto", height: "100vh" }}
        />
      </div>
    </div>
  );
}
