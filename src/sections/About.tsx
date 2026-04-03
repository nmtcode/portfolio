import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import { User, MapPin, GraduationCap, Code2, Terminal } from "lucide-react";
import Grid from "@mui/material/GridLegacy";

const About = () => {
  // بيانات الـ Timeline مباشرة بالإنجليزي لضمان السرعة ومنع الجلتشات
  const timelineData = [
    {
      year: "2023",
      title: "Academic Foundation",
      desc: "Deep-dived into Computer Science fundamentals, focusing on C# and Software Architecture at Sana'a University.",
      icon: <GraduationCap size={18} />,
      tag: "Education",
    },
    {
      year: "2024",
      title: "Backend Mastery",
      desc: "Built complex systems including a Warehouse Management System (WMS) and mastered RESTful API security.",
      icon: <Code2 size={18} />,
      tag: "Milestone",
    },
    {
      year: "2025 - Present",
      title: "Full-Stack Transition",
      desc: "Scaling applications using React, MUI v6, and .NET Core with a focus on Clean Architecture.",
      icon: <User size={18} />,
      tag: "Professional",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="mb-16 text-center md:text-left">
          <Typography
            variant="body2"
            className="font-mono text-accent mb-2 opacity-80 flex items-center gap-2 justify-center md:justify-start"
          >
            <Terminal size={16} /> cat ./about-me.md
          </Typography>
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            About Me
          </Typography>
          <div className="h-1.5 w-20 bg-accent mt-4 rounded-full mx-auto md:mx-0 shadow-[0_0_15px_#64ffda]" />
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 10 }}
          alignItems="flex-start"
        >
          {/* Left Side: Identity Card */}
          <Box className="flex-1 w-full">
            <Paper className="bg-[#111111] border border-white/5 p-8 rounded-3xl relative overflow-hidden shadow-2xl group hover:border-accent/20 transition-colors">
              {/* Window Controls */}
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 bg-[#FF5F56] rounded-full" />
                <div className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
                <div className="w-3 h-3 bg-[#27C93F] rounded-full" />
              </div>

              <Typography
                variant="body1"
                className="text-gray-400 leading-relaxed font-mono text-base"
              >
                <span className="text-accent font-bold">nawaf@almawri:~$</span>{" "}
                I'm a Software Engineering student and Full-Stack Developer
                based in Sana'a. I specialize in building robust backend systems
                and modern web interfaces.
                <br />
                <br />
                My philosophy revolves around Clean Code and N-tier
                Architecture, ensuring that every project is not just
                functional, but scalable and maintainable.
              </Typography>

              <Stack spacing={3} className="mt-10 border-t border-white/5 pt-8">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                    <MapPin size={20} />
                  </div>
                  <Typography className="font-medium">Sana'a, Yemen</Typography>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <Typography className="font-medium">
                    Sana'a University - Software Engineering
                  </Typography>
                </div>
              </Stack>
            </Paper>
          </Box>

          {/* Right Side: Visual Timeline */}
          <Box className="flex-[1.2] w-full pt-4">
            <div className="relative border-l-2 border-white/10 ml-6 md:ml-0">
              {timelineData.map((item, index) => (
                <Box key={index} className="mb-12 ml-10 relative group">
                  {/* Glowing Node */}
                  <div className="absolute -left-[51px] top-1 w-6 h-6 bg-[#0a0a0a] border-2 border-accent rounded-full z-10 shadow-[0_0_15px_rgba(100,255,218,0.4)] group-hover:scale-125 transition-all duration-300" />

                  <Box className="bg-[#161616]/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 transform hover:-translate-x-2">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      className="mb-3"
                    >
                      <span className="text-[10px] font-mono px-2.5 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 uppercase tracking-tighter">
                        {item.tag}
                      </span>
                      <span className="text-gray-500 font-mono text-sm">
                        {item.year}
                      </span>
                    </Stack>

                    <Typography
                      variant="h6"
                      className="text-white font-bold mb-2 flex items-center gap-3"
                    >
                      <span className="text-accent">{item.icon}</span>
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="text-gray-400 leading-relaxed text-base opacity-80"
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </div>
          </Box>
          </Stack>
          {/* Stats Bar Section - يضاف تحت الـ Stack الرئيسي في ملف About */}
          <Box className="mt-16">
            <Grid container spacing={3}>
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Built", value: "15+" },
                { label: "Courses Completed", value: "40+" },
                { label: "Certificates Earned", value: "25+" },
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Paper
                    elevation={0}
                    className="bg-[#111111]/50 border border-white/5 p-6 rounded-2xl text-center group hover:border-accent/30 transition-all duration-300"
                  >
                    <Typography
                      variant="h3"
                      className="text-white font-bold text-2xl md:text-4xl mb-2 font-mono group-hover:text-accent transition-colors"
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-500 font-mono uppercase tracking-tighter text-[10px] md:text-xs"
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        
      </Container>
    </section>
  );
};

export default About;
