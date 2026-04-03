import type { Project } from "../../../types/Projects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="h-full bg-[#0d1117]/80 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-[#121825]">
      {/* Image with Zoom on Hover */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay darker on hover */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="p-5">
        <h3 className="text-white font-bold mb-2 group-hover:text-accent transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 text-[11px] line-clamp-2 mb-4 group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>

        {/* Tech Stack Mini Tags */}
        <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
