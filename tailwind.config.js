/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64748b",
        secondary: "#94a3b8",
        accent: "#0ea5e9",
        "dark-bg": "#0f172a",
        "darker-bg": "#020617",
        "text-light": "#f8fafc",
        "text-gray": "#94a3b8",
        "accent-dark": "#1e293b",
        "border-color": "#334155",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #64748b 0%, #94a3b8 100%)",
        "gradient-hero": "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
        "gradient-radial":
          "radial-gradient(circle at 20% 50%, rgba(100, 116, 139, 0.1) 0%, transparent 50%)",
      },
      boxShadow: {
        primary: "0 4px 12px rgba(100, 116, 139, 0.15)",
        "primary-hover": "0 8px 24px rgba(100, 116, 139, 0.25)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "bounce-custom": "bounce-custom 3s infinite",
      },
      keyframes: {
        "bounce-custom": {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateX(-50%) translateY(0)",
          },
          "40%": { transform: "translateX(-50%) translateY(-5px)" },
          "60%": { transform: "translateX(-50%) translateY(-2px)" },
        },
      },
    },
  },
  plugins: [],
};
