import type { Project } from "./Projects";

// (1) سحب كل الصور من مجلد معين تلقائياً
// حدد المسار الصحيح لمجلد الصور الخاص بمشروع DVLD
const dvldImages = import.meta.glob(
  "/public/projects/dvld/*.{png,jpg,jpeg,webp}",
  { eager: true, as: "url" },
);
const ulmsImages = import.meta.glob(
  "/public/projects/ulms/*.{png,jpg,jpeg,webp}",
  { eager: true, as: "url" },
);

// (2) تحويل الكائنات المستوردة إلى مصفوفة روابط (Strings)
const dvldScreenshots = Object.values(dvldImages);
const ulmsScreenshots = Object.values(ulmsImages);

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
