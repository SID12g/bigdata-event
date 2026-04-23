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
      className="flex flex-col items-center justify-center text-center flex mt-[80px] border-[2px] border-[8px]"
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        width: `${width}px`,
        height: `${height}px`,
        padding: paddingX ? `${paddingX}px ${paddingY}px` : undefined,
      }}
    >
      {children}
    </div>
  );
}
