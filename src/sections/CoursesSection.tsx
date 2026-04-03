import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Course } from "../types/Courses";
import { COURSES_DATA } from "../types/CoursesData";
import { CourseModal } from "../components/common/Courses/CourseModal";
import { ArrowUpRight } from "lucide-react";

export const CoursesSection = () => {
  const [filter, setFilter] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    "All",
    "Programming",
    "Algorithms",
    "DSA",
    "Database",
    "Backend",
  ];

  const filteredCourses =
    filter === "All"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === filter);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header Stats */}
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-6xl font-black text-white">
          40+ Courses Completed
        </h2>
        <p className="text-gray-400 font-mono">
          Self-taught through dedication and{" "}
          <span className="text-red-500">25+ certifications</span>
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                filter === cat
                  ? "bg-white text-black"
                  : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            layout
            onClick={() => setSelectedCourse(course)}
            className="group cursor-pointer bg-[#0d1117] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all"
          >
            <div className="relative aspect-video">
              <img
                src={course.thumbnail}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[9px] font-bold rounded">
                {course.category}
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-white text-[10px] font-bold line-clamp-2 leading-tight mb-1">
                {course.title}
              </h3>
              <p className="text-gray-500 text-[9px] font-mono">
                {course.provider}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LinkedIn Button - مكانه الصحيح خارج الـ Grid 🔥 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-20 flex justify-center"
      >
        <a
          href="https://www.linkedin.com/in/nawaf-almawry/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-10 py-4 rounded-2xl border border-blue-500/10 bg-[#0a66c2]/5 hover:bg-[#0a66c2]/10 transition-all duration-500 shadow-2xl"
        >
          <svg
            className="w-5 h-5 fill-[#0a66c2] group-hover:fill-white transition-colors duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>

          <span className="text-gray-300 group-hover:text-white font-bold tracking-tight">
            View all certifications on{" "}
            <span className="text-[#0a66c2] group-hover:text-white transition-colors">
              LinkedIn
            </span>
          </span>

          <ArrowUpRight
            size={18}
            className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          />

          <div className="absolute inset-0 -z-10 bg-[#0a66c2]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>

      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
