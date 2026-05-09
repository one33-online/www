import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "One33";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0e0c0a";
const CREAM = "#eae4da";
const TERRACOTTA = "#b85c38";

export default async function Image() {
  const svgText = await readFile(
    join(process.cwd(), "public/one-33-logo.svg"),
    "utf-8"
  );

  const coloredSvg = svgText
    // Cascade cream to circle + wordmark paths (no explicit fill set)
    .replace("<svg ", `<svg fill="${CREAM}" `)
    // Bird figure is hardcoded white — invert to bg so it reads as a cutout
    .replace("fill:#fff;", `fill:${BG};`);

  const svgSrc = `data:image/svg+xml;base64,${Buffer.from(coloredSvg).toString("base64")}`;

  // viewBox is 0 0 403 136 — aspect ratio 403:136
  const logoWidth = 560;
  const logoHeight = Math.round(logoWidth * (136 / 403));

  return new ImageResponse(
    <div
      style={{
        background: BG,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "36px",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: next/image is not supported in ImageResponse/Satori */}
      <img alt="" height={logoHeight} src={svgSrc} width={logoWidth} />
      <div style={{ width: "48px", height: "2px", background: TERRACOTTA }} />
    </div>,
    { ...size }
  );
}
