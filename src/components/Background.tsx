import Image from "next/image";
import BackgroundImage from "@/../public/images/background.png";

export default function Background() {
  return (
    <div>
      <div className="fixed inset-0 z-[-10] flex overflow-hidden">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          fill
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
