import { Box, Typography, Container, Paper } from "@mui/material";
import { Monitor, Move3d, Zap, Accessibility } from "lucide-react";
import Grid from "@mui/material/GridLegacy";

const Frontend = () => {
  const skills = [
    { name: "React", proficiency: "90%" },
    { name: "Next.js", proficiency: "88%" },
    { name: "TypeScript", proficiency: "85%" },
    { name: "Tailwind CSS", proficiency: "92%" },
    { name: "Three.js", proficiency: "70%" },
    { name: "GSAP", proficiency: "85%" },
  ];

  const features = [
    {
      title: "Responsive Design",
      desc: "Pixel-perfect layouts that adapt seamlessly across all devices.",
      icon: <Monitor className="text-accent" size={24} />,
    },
    {
      title: "3D & Motion",
      desc: "Immersive experiences with Three.js and smooth GSAP animations.",
      icon: <Move3d className="text-accent" size={24} />,
    },
    {
      title: "Performance",
      desc: "Optimized bundles, lazy loading, and lightning-fast interactions.",
      icon: <Zap className="text-accent" size={24} />,
    },
    {
      title: "Accessibility",
      desc: "Inclusive design with proper semantics and keyboard navigation.",
      icon: <Accessibility className="text-accent" size={24} />,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-main-bg relative overflow-hidden">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-accent/5 border border-accent/10 mb-4">
            <Typography variant="caption" className="text-accent font-mono">
              {"<Frontend Artistry />"}
            </Typography>
          </div>
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-text-main mb-4 font-inter"
          >
            Frontend <span className="text-text-muted">Artistry</span>
          </Typography>
          <Typography
            variant="body1"
            className="text-text-muted max-w-2xl mx-auto"
          >
            Where creativity meets code — crafting immersive digital experiences
          </Typography>
        </Box>

        {/* Floating Skills Pills */}
        <Box className="flex flex-wrap justify-center gap-4 mb-20">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-full bg-surface border border-white/5 flex items-center gap-3 hover:border-accent/30 transition-all group cursor-default shadow-lg"
            >
              {/* التوهج الأحمر المعتمد في ملف الـ CSS */}
              <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
              <Typography className="text-text-main font-mono text-sm">
                {skill.name}
              </Typography>
              <Typography className="text-text-muted text-[10px] font-mono">
                {skill.proficiency}
              </Typography>
            </div>
          ))}
        </Box>

        {/* Feature Cards Grid */}
        <Grid container spacing={3} className="mb-20">
          {features.map((f, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Paper className="p-8 bg-surface/40 border border-white/5 rounded-2xl h-full hover:bg-surface/60 transition-all group backdrop-blur-sm">
                <Box className="mb-6 transition-transform group-hover:scale-110 duration-300">
                  {f.icon}
                </Box>
                <Typography
                  variant="h6"
                  className="text-text-main font-bold mb-3 text-base font-inter"
                >
                  {f.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-text-muted leading-relaxed"
                >
                  {f.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Code Snippet Window - Terminal Style */}
        <Box className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#020617] shadow-2xl">
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <Typography variant="caption" className="text-text-muted font-mono">
              Artistry.tsx
            </Typography>
          </div>
          <Box className="p-6 font-mono text-sm leading-relaxed text-gray-500">
            <pre className="overflow-x-auto whitespace-pre-wrap">
              {`import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="frontend-magic"
    >
      {/* ✨ Crafting UI with Passion */}
    </motion.div>
  );
};`}
            </pre>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Frontend;
