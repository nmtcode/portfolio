/* eslint-disable react-hooks/static-components */
import { Box, Typography, Container, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CornerRightDown,
  Database,
  Zap,
  Code2,
  Cpu,
} from "lucide-react";
import Grid from "@mui/material/GridLegacy"; // تأكد من استخدام Grid العادي لضمان التوافق
import { useState, useEffect, type ReactNode } from "react";

interface FlowStep {
  id: string;
  label: string;
  side: "frontend" | "backend" | "middle";
  icon: string | ReactNode;
}

interface ComponentProps {
  title?: string;
  dir?: string;
  col?: string;
  children?: ReactNode;
  icon?: string | ReactNode;
  label?: string;
  type?: "active" | "muted";
  stepId?: string;
  side?: "frontend" | "backend" | "middle";
}

const FLOW_STEPS: FlowStep[] = [
  { id: "action", label: "User Action", side: "frontend", icon: "🖱️" },
  { id: "request", label: "API Request", side: "middle", icon: "🌐" },
  { id: "route", label: "Route Handler", side: "backend", icon: <CornerRightDown size={14} /> },
  { id: "database", label: "Database Query", side: "backend", icon: <Zap size={14} /> },
  { id: "response", label: "JSON Response", side: "middle", icon: "📄" },
  { id: "state", label: "State Update", side: "frontend", icon: "🔄" },
  { id: "render", label: "UI Re-render", side: "frontend", icon: "✨" },
];

const FullstackSynergy = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = FLOW_STEPS[currentStepIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % FLOW_STEPS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const FE_COL = "var(--color-frontend)";
  const BE_COL = "var(--color-accent)";
  const ACTIVE_COLOR = currentStep.side === "frontend" ? FE_COL : currentStep.side === "backend" ? BE_COL : "#fff";

  const TerminalWindow = ({ title, dir, children }: ComponentProps) => (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="w-full max-w-sm rounded-xl overflow-hidden border border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <Stack direction="row" spacing={1}>
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </Stack>
        <Typography variant="caption" className="text-text-muted font-mono font-medium tracking-widest uppercase text-[10px]">
          {title}
        </Typography>
        <Box className="flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded border border-white/5">
          <Code2 size={10} className="text-text-muted" />
          <span className="text-[9px] font-mono text-text-muted">{dir}</span>
        </Box>
      </div>
      <Box className="p-5 space-y-3 relative">
        {/* تأثير أسطر الكود الخلفية */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none font-mono text-[10px] p-4 leading-relaxed">
            {`{
  data: fetch(api),
  method: "POST",
  headers: { "Content-Type": "json" },
  body: JSON.stringify(payload)
}`}
        </div>
        {children}
      </Box>
    </motion.div>
  );

  const TechItem = ({ icon, label, col, type }: ComponentProps) => {
    const isActive = type === "active";
    return (
      <motion.div
        animate={{ 
          x: isActive ? 5 : 0,
          backgroundColor: isActive ? "rgba(255,255,255,0.05)" : "transparent"
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-500 ${
          isActive ? `border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.02)]` : "border-transparent"
        }`}
      >
        <div style={{ color: isActive ? col : "var(--text-muted)" }} className="transition-colors duration-500">
          {icon}
        </div>
        <Typography variant="body2" className={`font-mono text-sm transition-all ${isActive ? "text-white font-bold" : "text-text-muted opacity-50"}`}>
          {label}
        </Typography>
        {isActive && (
          <motion.div layoutId="active-dot" className="ml-auto w-1.5 h-1.5 rounded-full" style={{ backgroundColor: col }} />
        )}
      </motion.div>
    );
  };

  const ActionBox = ({ stepId, label, side }: ComponentProps) => {
    const isActive = currentStep.id === stepId;
    const col = side === "frontend" ? FE_COL : BE_COL;
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        animate={{ 
          scale: isActive ? 1.05 : 1, 
          opacity: isActive ? 1 : 0.3,
          borderColor: isActive ? col : "rgba(255,255,255,0.05)"
        }}
        className={`px-4 py-3 rounded-lg border text-center font-mono text-[10px] tracking-tighter uppercase transition-all duration-700 ${
          isActive ? `bg-white/5 text-white shadow-[0_0_30px_-10px_${col}]` : "text-gray-500"
        }`}
      >
        {label}
      </motion.div>
    );
  };

  return (
    <section id="synergy" className="py-32 bg-main-bg relative overflow-hidden">
      {/* 🌌 Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          background: `radial-gradient(circle at center, ${ACTIVE_COLOR}15 0%, transparent 70%)`,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      <Container maxWidth="lg" className="relative">
        {/* Section Header */}
        <Box className="text-center mb-24">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex justify-center items-center gap-2 mb-4">
                <Cpu size={16} className="text-accent" />
                <Typography variant="caption" className="font-mono text-accent tracking-[0.3em] uppercase">Architecture in Motion</Typography>
            </motion.div>
            <Typography variant="h3" className="text-white font-black mb-6 tracking-tight">
                Fullstack <span className="text-text-muted">Synergy</span>
            </Typography>
        </Box>

        <Grid container spacing={8} alignItems="center" justifyContent="center">
          {/* Frontend Side */}
          <Grid item xs={12} md={4}>
            <Stack spacing={4} alignItems={{ xs: 'center', md: 'flex-end' }}>
              <TerminalWindow title="Client Engine" dir="react/app">
                <TechItem icon="⚛️" label="React Interface" col={FE_COL} type={currentStep.side === "frontend" && currentStepIndex >= 5 ? "active" : "muted"} />
                <TechItem icon="🛡️" label="Zustand Store" col={FE_COL} type="muted" />
              </TerminalWindow>
              <Stack spacing={2} className="w-full max-w-[280px]">
                <ActionBox stepId="action" label="User Interaction" side="frontend" />
                <ActionBox stepId="state" label="Local State Sync" side="frontend" />
                <ActionBox stepId="render" label="Virtual DOM Update" side="frontend" />
              </Stack>
            </Stack>
          </Grid>

          {/* Middleware / Data Flow */}
          <Grid item xs={12} md={4} className="relative flex flex-col items-center justify-center min-h-[300px]">
            <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                className="z-10"
              />
                {currentStep.side === "middle" ? (
                    <Box className="bg-[#020617] border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-md">
                        <Stack direction="row" spacing={2} alignItems="center">
                            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>
                                {currentStep.id === "request" ? <ArrowRight className="text-accent" /> : <ArrowLeft className="text-frontend" />}
                            </motion.div>
                            <Box>
                                <Typography variant="caption" className="block text-[8px] text-text-muted uppercase font-bold tracking-widest mb-1">Packet Transfer</Typography>
                                <Typography variant="body2" className="text-white font-mono text-xs font-bold tracking-tight">{currentStep.label}</Typography>
                            </Box>
                        </Stack>
                    </Box>
                ) : (
                    <div className="w-3 h-3 rounded-full bg-white/20 blur-[2px]" />
                )}
              </AnimatePresence>
          </Grid>

          {/* Backend Side */}
          <Grid item xs={12} md={4}>
            <Stack spacing={4} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <TerminalWindow title="Core Service" dir="dotnet/api">
                <TechItem icon="🟣" label="ASP.NET Web API" col={BE_COL} type={currentStep.side === "backend" ? "active" : "muted"} />
                <TechItem icon={<Database size={16} />} label="Entity Framework" col={BE_COL} type="muted" />
              </TerminalWindow>
              <Stack spacing={2} className="w-full max-w-[280px]">
                <ActionBox stepId="route" label="Auth & Routing" side="backend" />
                <ActionBox stepId="database" label="Transactional Query" side="backend" />
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Floating Status Bar */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 max-w-fit mx-auto px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md flex items-center gap-6"
        >
            <Stack direction="row" spacing={1.5}>
                {FLOW_STEPS.map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ 
                            width: i === currentStepIndex ? 24 : 8,
                            backgroundColor: i === currentStepIndex ? ACTIVE_COLOR : "rgba(255,255,255,0.1)"
                        }}
                        className="h-2 rounded-full transition-all"
                    />
                ))}
            </Stack>
            <Typography variant="caption" className="font-mono text-text-muted text-[10px] border-l border-white/10 pl-6 uppercase tracking-tighter">
                System Status: <span className="text-white">Optimal Flow</span>
            </Typography>
        </motion.div>
      </Container>
    </section>
  );
};

export default FullstackSynergy;