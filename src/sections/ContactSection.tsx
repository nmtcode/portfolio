import { useState, useRef } from "react";
// import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // استبدل هذه القيم ببياناتك من حساب EmailJS
    emailjs
      .sendForm(
        "nmtcode-service",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_PUBLIC_KEY",
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
          <Mail size={12} className="inline mr-2" /> Let's Connect
        </span>
        <h2 className="text-5xl md:text-6xl font-black text-white">
          Ready to <span className="text-accent">Collaborate?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether you have a project idea or just want to chat about tech, I'd
          love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Cards */}
        {[
          {
            icon: <Mail />,
            label: "Email",
            value: "nawaf.almawry@example.com",
          },
          { icon: <Phone />, label: "Phone", value: "+967 XXX XXX XXX" },
          { icon: <MapPin />, label: "Location", value: "Sana'a, Yemen" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4"
          >
            <div className="p-3 rounded-xl bg-white/5 text-gray-400">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                {item.label}
              </p>
              <p className="text-white font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Form */}
      <div className="bg-[#0d1117] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-8 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 ml-1">
                Your Name
              </label>
              <input
                name="user_name"
                type="text"
                required
                placeholder="Nawaf Mohammed"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent/50 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 ml-1">
                Email Address
              </label>
              <input
                name="user_email"
                type="email"
                required
                placeholder="nawaf@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent/50 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-500 ml-1">
              Your Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent/50 outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-3 px-10 py-4 bg-[#e2e8f0] hover:bg-white text-black rounded-2xl font-bold transition-all disabled:opacity-50"
          >
            {loading ? (
              "Sending..."
            ) : status === "success" ? (
              "Message Sent!"
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </form>

        {/* Footer Socials */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 font-mono text-xs">or connect directly</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all"
            >
              <GitHubIcon />
            </a>
            <a
              href="#"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
