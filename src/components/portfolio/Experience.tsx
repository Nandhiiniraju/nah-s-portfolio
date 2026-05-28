import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, Trophy, Award, Star } from "lucide-react";

const experiences = [
  {
    type: "Internship",
    role: "AI/ML Intern",
    org: "Google",
    year: "Summer 2025",
    icon: Briefcase,
    desc: "Worked on machine learning workflows, model development, optimization, and real-world AI pipeline implementation using Python-based frameworks.",
  },
  {
    type: "Internship",
    role: "FinTech Intern",
    org: "Chennai Institute of Technology",
    year: "Winter 2025",
    icon: Briefcase,
    desc: "Built MetaVault, a decentralized KYC identity vault using Ethereum, IPFS, and Web3 authentication for secure digital identity management.",
  },
  {
    type: "Research",
    role: "Undergraduate Researcher",
    org: "Chennai Institute of Technology",
    year: "2026-IEEE Research",
    icon: GraduationCap,
    desc: "Currently working on AI-driven research and intelligent system development focused on real-world machine learning applications.",
  },
  {
    type: "Internship",
    role: "Data Science Intern",
    org: "Siemens",
    year: "summer 2026",
    icon: Sparkles,
    desc: "Working on data science and machine learning workflows involving predictive modelling, data analysis, and AI-driven solution development.",
  },
];

const achievements = [
  { icon: Trophy, title: "Winner — Next bytes 2026 Hackathon", year: "2026", note: "National Finals · AI track" },
  { icon: Award, title: "Finalist - East India Hackathon", year: "2025", note: "Professional credential" },
  { icon: Star, title: "Joint Secretary, Quant Club ", year: "2026", note: "Organized events and coordinated activities focused on quantitative analysis and trading" },
  { icon: Trophy, title: "Patent Filed — UNOIC", year: "2026", note: "IEEE" },
  { icon: Award, title: "TEDx Organiser", year: "2025-26", note: "Chennai Institute of Technology" },
  { icon: Star, title: "Selected for the Blueprint Startup Event", year: "2025", note: "the project was shortlisted for its startup potential and scalability." },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-cream px-6 py-32 md:px-16">
      <h2
        aria-hidden
        className="text-outline pointer-events-none absolute -top-8 right-0 select-none font-serif text-[20vw] font-black italic leading-none md:text-[14vw]"
      >
        chapters
      </h2>

      <div className="relative pt-32">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-cherry/60">04 — Experience</p>
        <h3 className="mt-3 font-serif text-6xl leading-[1] text-cherry md:text-7xl">
           <span className="italic">Internship.</span>
        </h3>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cherry via-cherry/40 to-transparent md:left-1/2" />
          <div className="space-y-12">
            {experiences.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.05 * i }}
                className={`relative grid grid-cols-[2rem_1fr] gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:last-child]:order-first"
                }`}
              >
                <div className="relative md:hidden">
                  <div className="pulse-ring absolute inset-0 rounded-full bg-cherry/30" />
                  <div className="relative grid h-8 w-8 place-items-center rounded-full bg-cherry text-cream">
                    <e.icon className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* desktop dot */}
                <div className="pointer-events-none absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
                  <div className="pulse-ring absolute inset-0 rounded-full bg-cherry/30" />
                  <div className="relative grid h-9 w-9 place-items-center rounded-full bg-cherry text-cream">
                    <e.icon className="h-4 w-4" />
                  </div>
                </div>

                <div className={i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cherry/50">
                    {e.year} · {e.type}
                  </span>
                  <h4 className="mt-2 font-serif text-3xl italic text-cherry">{e.role}</h4>
                  <p className="mt-1 font-sans text-sm text-wine/70">{e.org}</p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-wine/80">{e.desc}</p>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-32">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-cherry/60">05 — Honors</p>
          <h3 className="mt-3 font-serif text-6xl leading-[1] text-cherry md:text-7xl">
            <span className="italic">Distinctions</span> & accolades.
          </h3>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-sm border border-cherry/20 bg-card p-6 transition hover:border-cherry"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(248,200,216,0.6), transparent 50%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-cherry text-cream">
                      <a.icon className="h-4 w-4" />
                    </div>
                    <span className="font-serif text-2xl italic text-cherry/40">{a.year}</span>
                  </div>
                  <h4 className="mt-5 font-serif text-xl text-cherry">{a.title}</h4>
                  <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-wine/60">
                    {a.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
