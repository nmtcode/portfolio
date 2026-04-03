import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle, Globe, Maximize2 } from "lucide-react";
import { useState } from "react";
import type { Project } from "../../../types/Projects";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ModalProps) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 40, opacity: 0 }}
          className="bg-[#0d0f14] border border-white/5 w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-3xl relative shadow-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header 🔥 تم تعديل هذا الجزء كلياً لتنسيق اللوجو والعنوان */}
          <div className="sticky top-0 z-20 bg-[#0d0f14]/90 backdrop-blur-xl px-8 py-6 border-b border-white/5 flex justify-between items-center">
            {/* التنسيق الجديد: اللوجو على اليسار، العنوان بجانبه */}
            <div className="flex items-center gap-5">
              {/* 1. Project Logo (مكون اللوجو) 🔥 */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 p-2 shadow-inner">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="max-w-full max-h-full object-contain" // لضمان عدم تمدد الصورة
                />
              </div>

              {/* 2. Project Title and Meta 🔥 */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] bg-accent/10 px-2 py-0.5 rounded inline-block">
                  {project.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-3 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8">
            {/* Screenshots Grid 🔥 كما هي، بس حسنت المظهر */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.screenshots.map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }} // حركة هوفر بسيطة على الصور
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border border-white/5 bg-white/5 aspect-video shadow-lg"
                  onClick={() => setActiveImage(src)}
                >
                  <img
                    src={src}
                    alt="screenshot"
                    className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white blur-[1px]" size={36} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* بقية معلومات المشروع (المنظور) كما هي */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-white/5 pt-10">
              <div className="lg:col-span-2 space-y-5">
                <h4 className="text-white font-bold flex items-center gap-2.5">
                  <PlayCircle size={18} className="text-accent" /> Project
                  Overview
                </h4>
                <p className="text-gray-400 leading-relaxed font-inter text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-white font-bold mb-4 text-sm tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* روابط المشروع 🔥 */}
                {/* روابط المشروع 🔥 */}
                <div className="flex flex-col gap-4">
                  {/* زر الفيديو - الإضافة الجديدة هنا 👇 */}
                  {project.links.video && (
                    <a
                      href={project.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-red-600/10 border border-red-600/20 text-red-500 py-3.5 rounded-xl font-bold text-sm hover:bg-red-600/20 transition-all shadow-lg hover:translate-y-[-2px]"
                    >
                      <PlayCircle size={18} />
                      Watch Demo Video
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      className="flex items-center justify-center gap-2 bg-white text-black py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-xl hover:translate-y-[-2px]"
                    >
                      <Globe size={18} /> Live Demo
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors shadow-inner"
                    >
                      <GitHubIcon /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* الانبثاق الفردي للصورة كما هو */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 p-12"
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -30 }}
              src={activeImage}
              className="max-w-full max-h-full rounded-2xl shadow-4xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;
