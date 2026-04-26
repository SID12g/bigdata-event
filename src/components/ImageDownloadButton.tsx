"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import Box from "./Box";

const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 375;

export default function ImageDownloadButton({
  id,
  score,
}: {
  id: string;
  score: number;
}) {
  const captureRef = useRef<HTMLDivElement>(null);

  const handleSave = async () => {
    if (!captureRef.current) return;

    const dataUrl = await toPng(captureRef.current, {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      pixelRatio: 3,
    });

    const filename = `bigdata-uos-@${id}.png`;

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();

    if (navigator.share && navigator.canShare) {
      const [, base64] = dataUrl.split(",");
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const blob = new Blob([bytes], { type: "image/png" });
      const file = new File([blob], filename, { type: "image/png" });

      if (navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file] }).catch(() => {});
      }
    }
  };

  return (
    <>
      {/* Hidden capture target */}
      <div
        style={{
          position: "fixed",
          left: -9999,
          top: 0,
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          ref={captureRef}
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/background_result.png"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            crossOrigin="anonymous"
          />
          {/* Content overlay */}
          <div
            style={{
              position: "absolute",
              inset: 30,
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <Box
              backgroundColor="#5c3520"
              borderColor="#2c1810"
              className="w-full"
            >
              <p
                style={{
                  fontSize: 36,
                  color: "#ffe033",
                  marginTop: 30,
                  marginBottom: 4,
                }}
              >
                {score}/10
              </p>
              <p style={{ marginBottom: 4, color: "#ffffff", fontSize: 12 }}>
                @{id}
              </p>
              <p
                style={{
                  marginBottom: 20,
                  color: "#ffffff",
                  fontSize: 12,
                  lineHeight: "180%",
                  textAlign: "center",
                }}
              >
                위 사람을 데이티가 빅데이터
                <br />
                박사님으로 인정합니다.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/character.png"
                alt="character"
                style={{
                  width: 120,
                  height: 120,
                  marginBottom: 20,
                  objectFit: "contain",
                }}
                crossOrigin="anonymous"
              />
            </Box>
          </div>
        </div>
      </div>

      {/* Visible button */}
      <button onClick={handleSave} className="contents">
        <Box
          backgroundColor="var(--color-navy-bg)"
          borderColor="var(--color-navy-border)"
          paddingX={20}
          paddingY={4}
          borderW={4}
          className="w-full mt-[20px]"
        >
          <p className="text-[14px] text-[var(--color-white)]">이미지 저장</p>
        </Box>
      </button>
    </>
  );
}
