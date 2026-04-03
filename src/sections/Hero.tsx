import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { Code, Sparkles, Download } from "lucide-react";
import { useTypist } from "../hooks/useTypist";


const Hero = () => {
  // نصوص ثابتة بالإنجليزي مباشرة
  const intro = "Hi, I'm";
  const name = "Nawaf Almawri";
  const role = "<Full-Stack Software Engineer />";

  const typedIntro = useTypist(intro, 70);
  const typedName = useTypist(name, 100);
  const typedRole = useTypist(role, 120);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
    >
      <Container maxWidth="xl" className="relative z-10 px-4">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={8}
          alignItems="center"
          justifyContent="center"
        >
          <Box className="flex-[1.2] space-y-6 text-center md:text-left w-full">
            <Typography
              variant="body2"
              className="font-mono text-text-muted opacity-70 tracking-widest text-sm"
            >
              nawaf-almawri $ profile
            </Typography>

            <Typography
              variant="h1"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text-main tracking-tighter"
            >
              <span className="opacity-80 font-light">{typedIntro}</span>{" "}
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {typedName}
              </span>
              <span className="text-accent animate-pulse">|</span>
            </Typography>

            <Typography
              variant="h4"
              className="font-mono text-xl md:text-3xl text-accent font-semibold"
            >
              {typedRole}
            </Typography>

            <Typography
              variant="body1"
              className="text-lg text-text-muted max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Building scalable backend systems and crafting interactive
              frontends. Experienced in converting complex requirements into
              elegant code. 3+ years of professional development.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              className="pt-6 justify-center md:justify-start"
            >
              <Button
                variant="contained"
                startIcon={<Code size={18} />}
                className="bg-[#e2e2d5] text-black font-bold rounded-xl px-8 py-4 normal-case shadow-xl"
              >
                View My Projects
              </Button>
              <Button
                variant="outlined"
                startIcon={<Sparkles size={18} />}
                className="border-white/10 text-text-main rounded-xl px-8 py-4 hover:bg-white/5 normal-case"
              >
                Let's Collaborate
              </Button>
              <Button
                variant="outlined"
                startIcon={<Download size={18} />}
                className="border-white/10 text-text-main rounded-xl px-8 py-4 hover:bg-white/5 normal-case"
              >
                Download Resume
              </Button>
            </Stack>
          </Box>

          <Box className="flex-1 flex justify-center w-full">
            <Box className="relative w-[280px] h-[360px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute top-4 left-4 flex gap-2 z-20">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <img
                src="/assets/Face.png"
                alt="Nawaf"
                className="w-full h-full object-cover"
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default Hero;
