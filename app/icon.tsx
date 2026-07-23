import { ImageResponse } from "next/og";

// Google requires search-result favicons to be square and a multiple of
// 48px (min 48x48); 96x96 keeps it crisp on high-DPI screens too.
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8b0000",
          borderRadius: 18,
        }}
      >
        <div style={{ fontSize: 64, display: "flex" }}>🐔</div>
      </div>
    ),
    { ...size }
  );
}
