import type { Project } from "./Projects";

// (1) سحب كل الصور من مجلد معين تلقائياً
// حدد المسار الصحيح لمجلد الصور الخاص بمشروع DVLD
// ✅ التعديل الصحيح للمسارات
const dvldImages = import.meta.glob(
  "/projects/dvld/*.{png,jpg,jpeg,webp}", // أزلنا /public
  { eager: true, query: "?url", import: "default" }, // الطريقة الأضمن لـ Vite 5+
);

const ulmsImages = import.meta.glob("/projects/ulms/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

// تحويل الكائنات إلى مصفوفة
const dvldScreenshots = Object.values(dvldImages) as string[];
const ulmsScreenshots = Object.values(ulmsImages) as string[];

export const PROJECTS_DATA: Project[] = [
  {
    id: "DVLD",
    title: "DVLD - Driving vehicle license department",
    category: "Fullstack",
    date: "11/2025 - 3/2026",
    logo: "/projects/dvld-logo.png", // 🔥 إضافة مسار اللوجو
    description: "Collaborated with backend team using ASP.NET Core Web API.",
    thumbnail: "/projects/project1.jpg",
    // (3) هنا نضع المصفوفة التي سحبناها تلقائياً
    screenshots: dvldScreenshots,
    techStack: ["React", "TypeScript", "Tailwind"],
    links: {
      live: "google.com",
      video: "youtube.com/nmtcode",
      github: "github.com/nmtcode",
    },
  },
  {
    id: "ULMS",
    title: "ULMS - University Library Management System",
    category: "Fullstack",
    date: "11/2025 - 3/2026",
    logo: "/projects/dvld-logo.png", // 🔥 إضافة مسار اللوجو
    description: "Collaborated with backend team using ASP.NET Core Web API.",
    thumbnail: "/projects/project2.jpg",
    // (3) هنا نضع المصفوفة التي سحبناها تلقائياً
    screenshots: ulmsScreenshots,
    techStack: ["React", "TypeScript", "Tailwind"],
    links: {},
  },
];
