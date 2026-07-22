import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8b0000 0%, #6a0000 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 120, display: "flex" }}>🐔</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            marginTop: 16,
            display: "flex",
          }}
        >
          Satyanarayana Poultry Farm
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 20,
            color: "#ffb703",
            display: "flex",
          }}
        >
          Quality Chicken, Trusted by Hundreds of People
        </div>
      </div>
    ),
    { ...size }
  );
}
