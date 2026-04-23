import Background from "@/components/Background";
import Logo from "@/components/Logo";
import LargeButton from "@/components/LargeButton";

export default function Home() {
  return (
    <>
      <Background />
      <div className="flex flex-col justify-between items-center w-full h-[100vh] px-[40px]">
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
          />
        </div>
      </div>
    </>
  );
}
