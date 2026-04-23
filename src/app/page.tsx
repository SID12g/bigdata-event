import Image from "next/image";
import Background from "@/../public/images/background.png";
export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src={Background}
        alt="Background Image"
        fill
        loading="eager"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
