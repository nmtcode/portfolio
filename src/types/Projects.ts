// types/project.ts
export interface Project {
  id: string;
  title: string;
  category: "Fullstack" | "Frontend" | "Backend";
  date: string;
  logo: string; // 🔥 الإضافة الجديدة: مسار لوجو المشروع (مثل .png أو .svg)
  description: string;
  thumbnail: string; // الصورة الأساسية للكارت
  screenshots: string[]; // مجموعة الصور التي تظهر داخل الـ Modal (مثل صورة Botify)
  techStack: string[];
  features?: string[]; // اختياري: مميزات المشروع
  links: {
    github?: string;
    live?: string;
    video?: string;
  };
}
