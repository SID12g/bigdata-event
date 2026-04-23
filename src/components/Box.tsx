export default function Box({
  children,
  backgroundColor,
  borderColor,
  paddingX,
  paddingY,
  width,
  height,
}: {
  children: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  paddingX?: number;
  paddingY?: number;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={
        `flex flex-col items-center justify-center text-center flex mt-[80px] bg-[${backgroundColor}] border-[2px] border-[${borderColor}] border-[8px]` +
        (paddingX ? ` px-[${paddingX}px]` : "") +
        (paddingY ? ` py-[${paddingY}px]` : "") +
        (width ? `w-[${width}px]` : "") +
        (height ? `h-[${height}px]` : "")
      }
    >
      {children}
    </div>
  );
}
