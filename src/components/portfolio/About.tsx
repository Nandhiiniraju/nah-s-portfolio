import { motion } from "framer-motion";
import { Award, BookOpen, Code2, Sparkles } from "lucide-react";

const stats = [
  { value: "07", label: "Projects", icon: Code2 },
  { value: "08", label: "Certifications", icon: Award },
  { value: "20+", label: "hackathons", icon: Sparkles },
  { value: "02", label: "Internships", icon: BookOpen },
];

const timeline = [
  { year: "2024–2028", title: "B.Tech, AI & Data Science", place: "Chennai Institute of Technology" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream px-6 py-32 md:px-16">
      {/* huge outline label */}
      <h2
        aria-hidden
        className="text-outline pointer-events-none absolute -top-6 left-0 right-0 select-none font-serif text-[28vw] font-black italic leading-none md:text-[18vw]"
      >
        about
      </h2>

      <div className="relative grid grid-cols-1 gap-16 pt-40 md:grid-cols-12 md:gap-12">
        {/* Left holographic card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <div className="glass shadow-luxe relative aspect-[4/5] overflow-hidden rounded-sm border border-cherry/20 p-8">
            <div className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, #ffd7e7 0%, transparent 50%), radial-gradient(circle at 80% 80%, #f8c8d8 0%, transparent 60%)",
              }}
            />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-cherry/60">
                  Identity Card
                </span>
                <Sparkles className="h-4 w-4 text-cherry" />
              </div>

              {/* avatar plate */}
              <div className="relative mx-auto my-6 grid aspect-square w-48 place-items-center">
                <div className="absolute inset-0 rounded-full border border-cherry/30" />
                <div className="absolute inset-3 rounded-full border border-cherry/20" />
                <div className="spin-slow absolute inset-0">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#47131C" strokeWidth="0.3" strokeDasharray="2 4" />
                  </svg>  
                </div>
                <div className="font-serif text-7xl italic text-cherry">N</div>
              </div>

              <div>
                <p className="font-serif text-2xl italic text-cherry">Nandhini Raju</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.3em] text-cherry/60">
                  AI Engineer · Class of 2028
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded border border-cherry/20 p-2">
                    <p className="text-[9px] uppercase tracking-widest text-cherry/50">Place</p>
                    <p className="font-serif italic">Chennai, IN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right text + stats */}
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-[0.4em] text-cherry/60"
          >
            01 — The Editorial
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-serif text-5xl leading-[1.05] text-cherry md:text-6xl"
          >
            Hello
            <span className="italic"> I'm Nandhini</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 space-y-5 font-sans text-base leading-relaxed text-wine/90"
          >
            <p>
            A third-year B.Tech student specialising in Artificial Intelligence and Data Science. I’m passionate about building intelligent systems across AI, machine learning, NLP, and computer vision, with a focus on creating scalable and human-centred digital experiences.
            </p>
            <p>
            Beyond development, I actively participate in hackathons, public speaking, and organising events including TEDx, blending technology, creativity, and leadership into everything I build.
            </p>
          </motion.div>

          {/* stats */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden rounded-sm border border-cherry/20 bg-card p-5 transition hover:bg-cherry hover:text-cream"
              >
                <s.icon className="mb-4 h-4 w-4 opacity-60" />
                <p className="font-serif text-4xl italic">{s.value}</p>
                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.25em] opacity-70">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* timeline */}
          <div className="mt-14">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-cherry/50">
              Education
            </p>
            <div className="mt-6 space-y-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 border-t border-cherry/15 pt-5"
                >
                  <span className="font-serif text-lg italic text-cherry/70">{t.year}</span>
                  <div>
                    <p className="font-serif text-xl text-cherry">{t.title}</p>
                    <p className="font-sans text-sm text-wine/70">{t.place}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
