import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import portrait from "../../assets/portrait.jpg";
import { NeuralBackground, FloatingParticles } from "./NeuralBackground";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // mouse parallax on portrait
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 80, damping: 12 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 80, damping: 12 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="gradient-cherry grain relative min-h-screen w-full overflow-hidden"
    >
      <NeuralBackground className="opacity-40" />
      <FloatingParticles />

      {/* Top nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 flex items-center justify-between px-6 pt-8 md:px-16"
      >
        <div className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight text-cherry">
          <Sparkles className="h-4 w-4" /> N
        </div>
        <ul className="hidden gap-10 font-sans text-xs uppercase tracking-[0.25em] text-cherry/70 md:flex">
          {["About", "Skills", "Work", "Experience", "Contact"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="transition hover:text-cherry">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-cherry/40 px-5 py-2 font-sans text-xs uppercase tracking-[0.2em] text-cherry transition hover:bg-cherry hover:text-cream md:inline-block"
        >
          Get in Touch
        </a>
      </motion.nav>

      {/* Issue tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-20 mt-6 flex items-center justify-between px-6 font-sans text-[10px] uppercase tracking-[0.4em] text-cherry/60 md:px-16"
      >
        <span>portfolio</span>
        <span className="hidden md:block"></span>
        <span>Nandhini Raju</span>
      </motion.div>

      {/* Main grid */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 grid grid-cols-1 items-center gap-8 px-6 pt-12 pb-24 md:grid-cols-12 md:gap-4 md:px-16 md:pt-20"
      >
        {/* Left: oversized type */}
        <div className="col-span-1 md:col-span-7 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-sans text-xs uppercase tracking-[0.5em] text-cherry/60"
          >
            — The Portfolio of
          </motion.p>

          <h1 className="mt-4 font-serif leading-[0.85] tracking-tight text-cherry">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="block text-[18vw] font-black italic md:text-[10vw]"
            >
              Nandhini
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="text-outline block text-[18vw] font-black md:text-[10vw]"
            >
              Raju
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 max-w-md font-serif text-lg italic text-wine md:text-xl"
          >
            AI & Data Science Student · AI Engineer · ML Enthusiast 
            training models & curating pixels
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cherry px-7 py-4 font-sans text-xs uppercase tracking-[0.25em] text-cream transition hover:bg-wine"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowDown className="relative z-10 h-3.5 w-3.5 -rotate-45 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#resume"
              className="group inline-flex items-center gap-3 rounded-full border border-cherry/40 px-7 py-4 font-sans text-xs uppercase tracking-[0.25em] text-cherry transition hover:border-cherry hover:bg-cherry/5"
            >
              <Download className="h-3.5 w-3.5" /> Resume
            </a>
          </motion.div>

          {/* Social rail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex items-center gap-6"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-cherry/50">
              Connect
            </span>
            <div className="h-px w-12 bg-cherry/30" />
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/nandhiniraju/" },
              { icon: Github, href: "https://github.com/Nandhiiniraju" },
              { icon: Mail, href: "nandhiniraju3101@gmail,com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="group relative grid h-10 w-10 place-items-center rounded-full border border-cherry/30 text-cherry transition hover:border-cherry hover:bg-cherry hover:text-cream"
              >
                <Icon className="h-4 w-4" />
                <span className="pulse-ring absolute inset-0 rounded-full border border-cherry/30" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <div className="col-span-1 md:col-span-5">
          <motion.div
            onMouseMove={onMove}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
            className="relative mx-auto aspect-[3/4] w-full max-w-md"
          >
            {/* Outlined backdrop type */}
            <span
              aria-hidden
              className="text-outline pointer-events-none absolute -top-10 -left-12 font-serif text-[18vw] font-black italic leading-none md:text-[9vw]"
            >
              muse
            </span>

            {/* Spinning ring */}
            <div className="spin-slow pointer-events-none absolute -inset-6">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path
                    id="circ"
                    d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
                  />
                </defs>
                <text fill="#47131C" fontSize="8" letterSpacing="6" fontFamily="Inter">
                  <textPath href="#circ">
                  </textPath>
                </text>
              </svg>
            </div>

            <motion.div
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              className="relative h-full w-full"
            >
              <div className="shadow-luxe relative h-full w-full overflow-hidden rounded-[2px] border border-cherry/20">
                <img
                  src={portrait}
                  alt="Aanya Mehra — AI & Data Science portfolio portrait"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                {/* holographic overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-overlay"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,215,231,0.35), transparent 35%, rgba(168,58,82,0.25) 70%, rgba(255,253,233,0.3))",
                  }}
                />
                {/* glass frame */}
                <div className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md px-4 py-3">
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-cherry/60">
                      Cover · 2026
                    </p>
                    <p className="font-serif text-sm italic text-cherry"></p>
                  </div>
                  <Sparkles className="h-4 w-4 text-cherry" />
                </div>
              </div>
            </motion.div>

            
          </motion.div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-cherry/60">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="mx-auto mt-2 h-8 w-px bg-cherry/40"
        />
      </motion.div>
    </section>
  );
}
