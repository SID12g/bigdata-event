"use client";

import Link from "next/link";
import Box from "./Box";

export default function SmallButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className="contents">
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
    </Link>
  );
}
