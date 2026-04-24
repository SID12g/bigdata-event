"use client";

import Box from "./Box";

export default function NextButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  const box = (
    <Box
      backgroundColor="var(--color-navy-bg)"
      borderColor="var(--color-navy-border)"
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
