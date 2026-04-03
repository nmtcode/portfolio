import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64ffda", // الأخضر الفسفوري (Backend & General Accent)
      contrastText: "#020617",
    },
    secondary: {
      main: "#ef4444", // الأحمر الدافئ (Frontend Artistry)
    },
    background: {
      default: "#020617", // الخلفية العميقة جداً
      paper: "#0f172a", // خلفية البطاقات
    },
    text: {
      primary: "#f8fafc",
      secondary: "#94a3b8",
    },
    // إضافة ألوان مخصصة للـ Status أو التميز
    info: {
      main: "#3b82f6", // الأزرق للـ DevOps والـ Cloud
    },
  },
  typography: {
    // إلغاء Cairo حالياً والتركيز على Inter وخطوط الكود
    fontFamily: '"Inter", "Fira Code", "JetBrains Mono", monospace',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    button: {
      fontWeight: 600,
      textTransform: "none", // لإبقاء النصوص كما هي (مثلاً: hire-me.sh)
    },
  },
  shape: {
    borderRadius: 16, // زوايا أكثر عصرية تتناسب مع ستايل الـ Glassmorphism
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "10px 24px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(100, 255, 218, 0.15)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(45deg, #64ffda 30%, #2dd4bf 90%)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none", // إزالة التظليل الافتراضي لـ MUI في النمط الداكن
          backgroundColor: "rgba(15, 23, 42, 0.8)", // جعلها شفافة قليلاً للـ Glassmorphism
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        },
      },
    },
  },
});
