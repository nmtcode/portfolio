/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // يمكنك تخصيص ألوانك الخاصة هنا لاحقاً
        primary: "#0a192f",
        secondary: "#64ffda",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: "#64ffda",    // الأخضر الخاص بك
        frontend: "#ef4444",  // الأحمر للفرونت إند
        backend: "#8b5cf6",   // البنفسجي للباك إند (اختياري)
        dark: "#0a0a0a",      // الخلفية الأساسية
        card: "#111111",      // لون البطاقات
      },
    },
  },
}
