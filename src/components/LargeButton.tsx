"use client";

import Box from "./Box";

export default function LargeButton({
  text,
  backgroundColor,
  borderColor,
  onClick,
}: {
  text: string;
  backgroundColor: string;
  borderColor: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{ touchAction: "manipulation", cursor: "pointer" }}
    >
      <Box
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        paddingX={12}
        paddingY={14}
        className="pointer-events-none"
      >
        <p className="text-[32px] text-[var(--color-white)]">{text}</p>
      </Box>
    </button>
  );
}
