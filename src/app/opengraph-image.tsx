import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Elite Precision GPR — Utility Locating & GPR Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "linear-gradient(135deg, #ff6b35, #ff8c5a)",
            marginBottom: 32,
          }}
        >
          {/* Radar icon approximation */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
            <path d="M4 6h.01" />
            <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
            <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
            <path d="M12 18h.01" />
            <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
            <circle cx="12" cy="12" r="2" />
            <path d="m13.41 10.59 5.66-5.66" />
          </svg>
        </div>

        {/* Brand name */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Elite Precision
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ff6b35",
              letterSpacing: "-0.02em",
            }}
          >
            GPR
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 24,
            color: "#9ca3af",
            marginTop: 16,
            letterSpacing: "0.02em",
          }}
        >
          Utility Locating &amp; GPR Services
        </p>
      </div>
    ),
    { ...size }
  );
}
