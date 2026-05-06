import Image from "next/image";
import Box from "./Box";
import TitleImage from "@/../public/images/title.svg";
export default function Logo() {
  return (
    <div className="mt-[40px]">
      {/* <Box
        backgroundColor="var(--color-brown-bg)"
        borderColor="var(--color-brown-border)"
        paddingX={16}
        paddingY={14}
      >
        <p className="text-[24px] mb-[4px] text-[var(--color-yellow-light)]">
          BIG DATA
        </p>
        <p className="text-[40px] text-[var(--color-yellow-primary)]">
          빅데이터 퀴즈
        </p>
      </Box> */}
      <Image width={280} src={TitleImage} alt="Title" />
    </div>
  );
}
