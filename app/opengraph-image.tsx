// The preview image shown when the site is shared on LinkedIn, Slack, iMessage, etc.
// Generated at build time. To use a designed image instead, delete this file and
// add app/opengraph-image.png (1200 x 630).

import { ImageResponse } from "next/og";
import { hero } from "@/lib/copy";

export const alt = "Tieout: Recurring financial workflows, automated.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #ffffff 55%, #eff4ff 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 12, background: "#1d4ed8" }} />
          <div style={{ fontSize: 40, fontWeight: 700 }}>Tieout</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{hero.headline}</div>
          <div style={{ fontSize: 32, color: "#475569", maxWidth: 950 }}>
            Business rules learned from your history, validated and approved by your analysts.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
