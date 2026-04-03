export interface Course {
  id: number;
  title: string;
  provider: string; // مثل Programming Advices
  completionDate: string;
  category:
    | "Programming"
    | "Algorithms"
    | "Database"
    | "Backend"
    | "Frontend"
    | "DSA";
  description: string;
  thumbnail: string; // صورة الكورس
  certificateImage: string; // صورة الشهادة
  courseLink: string; // رابط الكورس
}
