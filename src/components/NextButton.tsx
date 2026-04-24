"use client";

import Box from "./Box";

export default function NextButton({
  text,
  onClick,
  backgroundColor = "var(--color-navy-bg)",
  borderColor = "var(--color-navy-border)",
}: {
  text: string;
  onClick?: () => void;
  backgroundColor?: string;
  borderColor?: string;
}) {
  const box = (
    <Box
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      paddingX={20}
      paddingY={12}
      borderW={4}
      className="w-fit"
    >
      <p className="text-[16px] text-[var(--color-white)]">{text}</p>
    </Box>
  );

  return (
    <button onClick={onClick} className="contents">
      {box}
    </button>
  );
}
