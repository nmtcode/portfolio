import { AnimatePresence, motion } from "framer-motion";
import { X, LinkIcon, BookmarkIcon, Maximize2 } from "lucide-react";
import type { Course } from "../../../types/Courses";
import { useState } from "react";

export const CourseModal = ({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) => {
  const [isCertOpen, setIsCertOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-[#0d0f14] border border-white/10 w-full max-w-4xl p-8 rounded-3xl relative shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* زر الإغلاق الرئيسي */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-all"
          >
            <X
              size={24}
              className="border border-red-500/30 rounded-md p-1 text-red-500"
            />
          </button>

          {/* محتوى الكورس (العنوان والصور) */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">
              {course.title}
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              {course.provider} • {course.completionDate}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* قسم الكورس */}
            <div className="space-y-4">
              <h4 className="text-gray-500 text-center text-[10px] font-mono tracking-[0.3em] uppercase">
                Course Layout
              </h4>
              <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/5 aspect-video flex items-center">
                <img
                  src={course.thumbnail}
                  alt="Course"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* قسم الشهادة مع إمكانية الضغط للتكبير 🔥 */}
            <div className="space-y-4">
              <h4 className="text-gray-500 text-center text-[10px] font-mono tracking-[0.3em] uppercase">
                Official Certificate
              </h4>
              <div
                onClick={() => setIsCertOpen(true)}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white p-1 cursor-zoom-in group relative"
              >
                <img
                  src={course.certificateImage}
                  alt="Certificate"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-black" size={30} />
                </div>
              </div>
            </div>
          </div>

          {/* أزرار التحكم */}
          <div className="flex justify-center gap-4">
            <a
              href={course.courseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-200 text-black rounded-xl font-bold transition-all shadow-lg"
            >
              <LinkIcon size={18} /> View Course
            </a>

            {/* تحديث زر الشهادة ليعمل 🔥 */}
            <button
              onClick={() => setIsCertOpen(true)}
              className="flex items-center gap-2 px-8 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all"
            >
              <BookmarkIcon size={18} /> Fullscreen Certificate
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* نافذة تكبير الشهادة (Lightbox) 🔥 */}
      <AnimatePresence>
        {isCertOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/98 p-6 md:p-20"
            onClick={() => setIsCertOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full"
            >
              <img
                src={course.certificateImage}
                className="w-full h-auto rounded-lg shadow-2xl border-4 border-white/10"
                alt="Full Certificate"
              />
              <button
                onClick={() => setIsCertOpen(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white flex items-center gap-2 font-mono text-sm"
              >
                Close <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
