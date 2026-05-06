import Image from "next/image";
import BackgroundCharacterImage from "@/../public/images/background_character.png";
export default function BackgroundCharacter() {
  return (
    <div>
      <div className="fixed inset-0 z-[-10] flex overflow-hidden">
        <Image
          src={BackgroundCharacterImage}
          alt="Background Image"
          fill
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
