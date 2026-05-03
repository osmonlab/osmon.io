import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0f14",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: "-0.06em",
          fontFamily: "system-ui, -apple-system, Helvetica",
          borderRadius: 6,
        }}
      >
        o
      </div>
    ),
    { width: 32, height: 32 },
  );
}
