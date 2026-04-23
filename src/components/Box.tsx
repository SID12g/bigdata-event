export default function Box({
  children,
  backgroundColor,
  borderColor,
  paddingX,
  paddingY,
  width,
  height,
  className = "mt-[80px]",
}: {
  children: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  paddingX?: number;
  paddingY?: number;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center border-[8px] ${className}`}
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
