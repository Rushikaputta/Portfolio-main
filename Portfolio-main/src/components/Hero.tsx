import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-[#050505]">
      {/* Hyper-Visual Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/30 rounded-full blur-[160px] animate-[pulse_8s_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/20 rounded-full blur-[160px] animate-[pulse_10s_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-accent font-mono tracking-[0.3em] uppercase text-sm block"
            >
              Creative Developer & AI Explorer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none"
            >
              <span className="inline-block hover:scale-[1.05] transition-transform duration-500 cursor-default">
                RUSHIKA PUTTA
              </span>
            </motion.h1>

          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-3xl text-muted-foreground/80 mx-auto max-w-4xl leading-tight font-light tracking-tight text-balance"
          >
            Pioneering the intersection of <span className="text-foreground font-bold italic underline decoration-accent/40 underline-offset-8 decoration-2">Applied Intelligence</span> and modern software architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <div className="px-10 py-4 rounded-full glass border-accent/20 text-accent font-black text-xl hover:bg-accent hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] group cursor-pointer">
              B.Tech CSE (AI)
              <span className="ml-2 group-hover:translate-x-2 inline-block transition-transform">→</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2 opacity-50"
      >
        <div className="w-1 h-2 bg-accent rounded-full" />
      </motion.div>
    </section>
  );
};
