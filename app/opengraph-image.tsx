import { ImageResponse } from "next/og";

export const alt = "osmon — software, written by software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Pull TTF URLs from Google Fonts (UA trick gets TTF instead of woff2,
// which @vercel/og's satori needs). Cached by the platform after first hit.
async function loadFont(weight: 400 | 600): Promise<ArrayBuffer> {
  const css = await fetch(`https://fonts.googleapis.com/css?family=Inter:${weight}`, {
    headers: { "User-Agent": "Mozilla/4.0" },
    cache: "force-cache",
  }).then((r) => r.text());
  const url = css.match(/src: url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
  if (!url) throw new Error("could not locate Inter TTF url in CSS");
  const r = await fetch(url, { cache: "force-cache" });
  if (!r.ok) throw new Error(`font fetch failed: ${url}`);
  return r.arrayBuffer();
}

export default async function OG() {
  const [regular, semibold] = await Promise.all([loadFont(400), loadFont(600)]);

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
          fontFamily: "Inter",
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 80% 0%, rgba(61,168,255,0.18), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 600,
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
              fontFamily: "Inter",
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
              fontWeight: 600,
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
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
