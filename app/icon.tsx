import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 36,
          fontWeight: 600,
          letterSpacing: "-0.06em",
          fontFamily: "system-ui, -apple-system, Helvetica",
          borderRadius: 12,
        }}
      >
        o
      </div>
    ),
    { ...size },
  );
}
