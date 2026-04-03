import {
  Box,
  Tooltip,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Home,
  User,
  // GraduationCap,
  Mail,
  // Briefcase,
  Server,
  Layout,
  Layers,
  Code2,
  BookOpen,
  MessagesSquare,
} from "lucide-react";
import { useNav } from "../../context/NavContext";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },

  // أقسام التخصص التقني 🔥
  { id: "backend", icon: Server, label: "Backend" }, // Server تعبر عن الـ Logic والـ API
  { id: "frontend", icon: Layout, label: "Frontend" }, // Layout تعبر عن الواجهات والـ UI
  { id: "fullstackSynergy", icon: Layers, label: "Fullstack" }, // Layers تعبر عن دمج الطبقات (N-tier)

  // المحتوى والإنجازات
  { id: "projects", icon: Code2, label: "Projects" },
  { id: "courses", icon: BookOpen, label: "Courses" }, // BookOpen أنسب للتعلم المستمر
  // { id: "experience", icon: Briefcase, label: "Experience" },
  // { id: "education", icon: GraduationCap, label: "Education" },

  // التواصل
  // { id: "contact", icon: Mail, label: "Contact" },
  { id: "contactUs", icon: MessagesSquare, label: "Contact Us" }, // أيقونة محادثة لتمييزها عن الإيميل
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { activeSection, setActiveSection } = useNav();

  // دالة التمرير مع تحديث الحالة فوراً لحل مشكلة التحديد
  const scrollToSection = (id: string) => {
    setActiveSection(id); // تحديث الأيقونة النشطة فوراً قبل الحركة

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-4 md:top-6 w-full z-50 px-4 flex items-center justify-between">
      {/* 1. اليسار: البراند */}
      <div className="flex items-center gap-2 bg-[var(--color-surface)]/80 backdrop-blur-md px-3 md:px-4 py-2 rounded-xl border border-white/10 shadow-lg">
        <span className="text-[var(--color-accent)] font-mono font-bold text-lg">{`>_`}</span>
        {!isMobile && (
          <span className="text-[var(--color-text-main)] font-mono text-sm tracking-tighter opacity-80">
            ~/nawaf-almawri
          </span>
        )}
      </div>

      {/* 2. المنتصف: الـ Floating Dock */}
      <Box
        className={`flex items-center bg-[var(--color-surface)]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-500
          ${isMobile ? "gap-1 px-2 py-1" : "gap-2 px-3 py-2"}`}
      >
        {navItems.map((item) => (
          <Tooltip key={item.id} title={isMobile ? "" : item.label} arrow>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              size={isMobile ? "small" : "medium"}
              className={`transition-all duration-300 relative group ${
                activeSection === item.id
                  ? "text-[var(--color-accent)] bg-white/5 scale-110"
                  : "text-gray-500 hover:text-[var(--color-text-main)]"
              }`}
            >
              <item.icon
                size={isMobile ? 18 : 20}
                strokeWidth={activeSection === item.id ? 2.5 : 1.5}
              />
              {activeSection === item.id && (
                <span className="absolute -bottom-1 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
              )}
            </IconButton>
          </Tooltip>
        ))}
      </Box>

      {/* 3. اليمين: زر الـ Action (Desktop) */}
      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={() => scrollToSection("contact")}
          className="group relative bg-[var(--color-accent)] text-[var(--color-main-bg)] px-5 py-2 rounded-xl font-mono text-sm font-bold flex items-center gap-2 hover:brightness-110 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-[0_0_20px_rgba(100,255,218,0.2)]"
        >
          <span>{`>_ ./hire-me.sh`}</span>
        </button>
      </div>

      {/* زر الاتصال العائم للجوال */}
      {isMobile && activeSection !== "contact" && (
        <button
          onClick={() => scrollToSection("contact")}
          className="fixed bottom-6 right-6 bg-[var(--color-accent)] text-[var(--color-main-bg)] p-4 rounded-full shadow-2xl animate-bounce flex items-center justify-center border-none outline-none"
        >
          <Mail size={24} />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
