import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",       // near-black, primary ground
        paper: "#f2f2f2",     // warm off-white, primary ground (light sections)
        smoke: "#8a8a8a",     // mid grey, secondary text
        hairline: "#292929",  // hairline rule on dark
        "hairline-light": "#d4d4d4", // hairline rule on light
        bone: "#e3e3e3",      // subtle panel tint on light
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 11vw, 10rem)", { lineHeight: "0.92", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "0.94", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem, 4.2vw, 3.5rem)", { lineHeight: "0.98", letterSpacing: "-0.005em" }],
      },
      maxWidth: {
        content: "1600px",
        prose: "62ch",
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        15: "0.15",
        22: "0.22",
        28: "0.28",
        35: "0.35",
        45: "0.45",
        48: "0.48",
        55: "0.55",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        65: "0.65",
        66: "0.66",
        68: "0.68",
        72: "0.72",
        92: "0.92",
      },
      transitionTimingFunction: {
        caos: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
