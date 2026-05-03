import { ImageResponse } from "next/og";

export const alt = "osmon — software, written by software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#0b0f14",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "system-ui, -apple-system, Helvetica",
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 80% 0%, rgba(61,168,255,0.18), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: "-0.04em",
          }}
        >
          osmon
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontFamily: "ui-monospace, Menlo, monospace",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6b7280",
            }}
          >
            Agentic software studio
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              maxWidth: 980,
            }}
          >
            Software, written by software.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#6b7280",
          }}
        >
          <span>osmon.io</span>
          <span>hello@osmon.io</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
