import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface NavContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      // threshold: 0.5 يعني لما يظهر 50% من السيكشن في الشاشة
      threshold: 0.5,
      // rootMargin: تعويض المسافة العلوية (النافبار) لضمان دقة الرصد
      rootMargin: "-10% 0px -40% 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // إذا السيكشن دخل في مجال الرؤية
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // ابحث عن كل الـ sections اللي عندها id وابدأ راقبها
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <NavContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav must be used within a NavProvider");
  return context;
};
