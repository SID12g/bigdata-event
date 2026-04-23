import Box from "./Box";

export default function Logo() {
  return (
    <div>
      <Box
        backgroundColor="var(--color-brown-bg)"
        borderColor="var(--color-brown-border)"
        paddingX={16}
        paddingY={14}
      >
        <p className="text-[24px] mb-[4px] text-[var(--color-yellow-light)]">
          BIG DATA
        </p>
        <p className="text-[40px] text-[var(--color-yellow-primary)]">
          빅데이터 퀴즈
        </p>
      </Box>
    </div>
  );
}
