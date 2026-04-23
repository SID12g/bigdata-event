export default function Box({
  children,
  backgroundColor,
  borderColor,
  paddingX,
  paddingY,
  borderW,
  width,
  height,
  className,
}: {
  children: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  paddingX?: number;
  paddingY?: number;
  borderW?: number;
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
        padding: paddingX ? `${paddingY}px ${paddingX}px` : undefined,
        borderWidth: borderW ? borderW : "8px",
      }}
    >
      {children}
    </div>
  );
}
