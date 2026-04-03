import { Box, Typography, Container, Paper, Stack } from "@mui/material";
// import { Terminal, Cpu, Database, Zap, Globe, Layers } from "lucide-react";
import Grid from "@mui/material/GridLegacy";

const Backend = () => {
  // بيانات مهاراتك
  const skills = [
    { name: "C#", icon: "💜", level: "90%" },
    { name: "ASP.NET Core", icon: "🟣", level: "95%" },
    { name: "Node.js", icon: "🟢", level: "80%" },
    { name: "Express", icon: "⚡", level: "85%" },
    { name: "REST APIs", icon: "📡", level: "95%" },
    { name: "SQL Server", icon: "💾", level: "90%" },
    { name: "PostgreSQL", icon: "🐘", level: "80%" },
    { name: "MongoDB", icon: "🍃", level: "75%" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative">
      <Container maxWidth="lg">
        {/* العنوان العلوي */}
        <Box className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Typography variant="caption" className="text-gray-400 font-mono">
              $ cd ./backend
            </Typography>
          </div>
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Backend Mastery
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-500 font-mono italic"
          >
            2+ years of building robust, scalable server-side solutions
          </Typography>
        </Box>

        {/* نافذة الـ Terminal */}
        <Box className="max-w-4xl mx-auto mb-16 rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl">
          {/* شريط النافذة العلوي */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <Typography
              variant="caption"
              className="text-gray-500 font-mono ml-2"
            >
              mery@dev: ~/backend
            </Typography>
          </div>

          {/* محتوى الـ Terminal */}
          <Box className="p-6 font-mono text-sm sm:text-base leading-relaxed">
            <div className="flex gap-2 mb-2">
              <span className="text-accent">➜</span>
              <span className="text-blue-400">~/backend</span>
              <span className="text-white">$ cat ./skills/backend.json</span>
            </div>
            <pre className="text-gray-400 ml-4">
              {`{
  "languages": ["C#", "TypeScript", "TSQL", "Node.js"],
  "frameworks": [".NET Core 8", "Express.js"],
  "databases": ["SQL Server", "PostgreSQL", "MongoDB"],
  "devops": ["Docker", "GitHub Actions", "Git"],
  "apis": ["REST", "GraphQL", "WebSockets"]
}`}
            </pre>
            <div className="flex gap-2 mt-2">
              <span className="text-accent">➜</span>
              <span className="text-blue-400">~/backend</span>
              <span className="text-white animate-pulse">_</span>
            </div>
          </Box>
        </Box>

        {/* شبكة المهارات (The Cards) */}
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper
                elevation={0}
                className="relative group overflow-hidden bg-[#111111] border border-white/5 p-6 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 shadow-2xl"
              >
                {/* تأثير الخلفية المضيئة عند الهوفر */}
                <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Stack spacing={2} className="relative z-10">
                  {/* الأيقونة مع تأثير التوهج */}
                  <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 drop-shadow-[0_0_8px_rgba(100,255,218,0.3)]">
                    {skill.icon}
                  </div>

                  <Box>
                    <Typography
                      variant="body2"
                      className="text-white font-bold font-mono tracking-tight group-hover:text-accent transition-colors"
                    >
                      {skill.name}
                    </Typography>

                    {/* إحصائية رقمية خفية تظهر عند الهوفر */}
                    <Typography
                      variant="caption"
                      className="text-[10px] text-gray-600 font-mono block mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      STATUS: OPTIMIZED
                    </Typography>
                  </Box>

                  {/* شريط التقدم المطور - Industrial Style */}
                  <Box className="relative pt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-[9px] text-gray-500 font-mono">
                        STRENGTH
                      </span>
                      <span className="text-[9px] text-accent font-mono">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden flex">
                      <div
                        className="h-full bg-accent shadow-[0_0_12px_#64ffda] transition-all duration-1000 ease-out rounded-full"
                        style={{
                          width: skill.level,
                          // إضافة أنيميشن بسيط عند ظهور السيكشن
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </Box>
                </Stack>

                {/* زاوية ديكورية صغيرة توحي بالبرمجة */}
                <div className="absolute top-0 right-0 p-1 opacity-20">
                  <div className="w-4 h-4 border-t border-r border-white/40 rounded-tr-lg" />
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Backend;
