"use client";

import Box from "./Box";

export default function InfoPage({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <Box
        backgroundColor="var(--color-brown-bg)"
        borderColor="var(--color-brown-border)"
        paddingX={32}
        paddingY={32}
        className="relative"
      >
        <div className="absolute top-[20px] right-[20px]">
          <button onClick={onClose}>
            <Box
              backgroundColor="var(--color-red-bg)"
              borderColor="var(--color-red-border)"
              width={48}
              height={48}
              className=""
            >
              <p className="text-[var(--color-white)] text-[20px] font-bold">X</p>
            </Box>
          </button>
        </div>
        <p className="text-[var(--color-white)] text-[24px]">INFO</p>
      </Box>
    </div>
  );
}
