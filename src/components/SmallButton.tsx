"use client";

import Link from "next/link";
import Box from "./Box";

export default function SmallButton({
  text,
  href,
  onClick,
}: {
  text: string;
  href?: string;
  onClick?: () => void;
}) {
  const box = (
    <Box
      backgroundColor="var(--color-navy-bg)"
      borderColor="var(--color-navy-border)"
      paddingX={20}
      paddingY={4}
      borderW={4}
      className="w-full"
    >
      <p className="text-[14px] text-[var(--color-white)]">{text}</p>
    </Box>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="contents">
        {box}
      </button>
    );
  }

  return (
    <Link href={href ?? "#"} className="contents">
      {box}
    </Link>
  );
}
