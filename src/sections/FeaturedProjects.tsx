import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "../types/Projects";
import { PROJECTS_DATA } from "../types/ProjectsData";
import { ProjectCard } from "../components/common/Projects/ProjectCard";
import ProjectModal from "../components/common/Projects/ProjectModal";
import { ChevronRight, LayoutGrid } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-main-bg relative overflow-hidden"
    >
      {/* Background Decor - إضاءة خلفية خفيفة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - العنوان كما في الصورة */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <LayoutGrid size={14} className="text-accent" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">
              Selected Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Featured <span className="text-gray-500">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-mono text-sm uppercase tracking-widest max-w-2xl mx-auto"
          >
            Full-stack applications, SaaS products, and real-time systems
          </motion.p>
        </div>

        {/* Projects Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              // --- Hover Effects ---
              whileHover={{ y: -12 }} // يرتفع الكارت للأعلى
              className="cursor-pointer group relative"
            >
              {/* Glow Effect on Hover - توهج خلفي يظهر عند الهوفر */}
              <div className="absolute inset-0 bg-accent/20 blur-[30px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full">
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* View All on GitHub Button 🔥 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-20 flex justify-center"
      >
        <a
          href="https://github.com/nmtcode" // ضع رابط حسابك هنا
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
          {/* الأيقونة والنص كما في الصورة */}
          <GitHubIcon className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-gray-300 group-hover:text-white font-bold tracking-wide">
            View All on GitHub
          </span>
          <ChevronRight
            size={18}
            className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all"
          />

          {/* تأثير التوهج الخفي خلف الزر عند الهوفر */}
          <div className="absolute inset-0 -z-10 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
