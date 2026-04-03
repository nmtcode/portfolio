import { motion } from "framer-motion";
// استيراد أيقونات MUI 🔥
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X"; // بديل تويتر الجديد
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#0a0a0a] pt-16 pb-8 overflow-hidden">
      {/* الخط الجمالي العلوي */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-front-800 flex items-center justify-center text-white font-black shadow-lg shadow-accent/20">
                N
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                Nawaf <span className="text-gray-500">Mohammed</span>
              </span>
            </div>
            <p className="text-gray-500 font-mono text-sm max-w-xs">
              $ echo "Building the future, one commit at a time"
            </p>
          </div>

          {/* Socials - MUI Version 🔥 */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-5">
              {[
                {
                  icon: <GitHubIcon fontSize="small" />,
                  href: "https://github.com/nawaf",
                },
                {
                  icon: <LinkedInIcon fontSize="small" />,
                  href: "https://linkedin.com/in/nawaf",
                },
                { icon: <XIcon fontSize="small" />, href: "#" },
                {
                  icon: <EmailIcon fontSize="small" />,
                  href: "mailto:nawaf@example.com",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-mono text-gray-500 hover:text-white transition-all tracking-widest"
          >
            SCROLL TO TOP
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
              <KeyboardArrowUpIcon sx={{ fontSize: 18 }} />
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-gray-600 tracking-[0.2em] uppercase">
          <p>© {currentYear} ALL RIGHTS RESERVED. MADE WITH ❤️ BY NAWAF</p>
          <div className="flex gap-8">
            <span className="hover:text-accent/50 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-accent/50 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute -bottom-10 left-0 right-0 text-[12rem] font-black text-white/[0.01] select-none pointer-events-none text-center leading-none">
        NAWAF
      </div>
    </footer>
  );
};
