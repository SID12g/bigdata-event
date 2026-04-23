"use client";

import Box from "./Box";

export default function LargeButton({
  text,

  backgroundColor,
  borderColor,
}: {
  text: string;

  backgroundColor: string;
  borderColor: string;
}) {
  return (
    <button className="contents" onClick={() => alert("clicked!")}>
      <Box
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        paddingX={12}
        paddingY={14}
      >
        <p className="text-[32px] text-[var(--color-white)]">{text}</p>
      </Box>
    </button>
  );
}
