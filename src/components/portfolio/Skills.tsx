import { motion } from "framer-motion";

const groups = [
  {
    title: "Programming",
    items: ["Python", "TypeScript", "C++", "SQL", "R"],
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "OpenCV"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Express", "GraphQL"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Pinecone", "Redis"],
  },
  {
    title: "Tools",
    items: ["Docker", "AWS", "Git", "Figma", "Weights & Biases"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-cherry px-6 py-32 text-cream md:px-16">
      {/* radial bg */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #ffd7e7 0%, transparent 40%), radial-gradient(circle at 20% 90%, #f8c8d8 0%, transparent 40%)",
        }}
      />

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-cotton/70">02 — Skills</p>
          <h2 className="mt-4 font-serif text-6xl leading-[1] text-cream md:text-7xl">
            The <span className="italic text-cotton">tools</span>
            <br /> of the trade.
          </h2>
          <p className="mt-6 max-w-xs font-serif text-lg italic text-cotton/80">
            A wardrobe of frameworks — curated.
          </p>

          {/* orbit visual */}
          <div className="relative mt-12 hidden aspect-square w-full max-w-sm md:block">
            <div className="absolute inset-0 rounded-full border border-cotton/20" />
            <div className="absolute inset-8 rounded-full border border-cotton/15" />
            <div className="absolute inset-16 rounded-full border border-cotton/10" />
            <div className="spin-slow absolute inset-0">
              {["AI", "ML", "DL", "NLP", "CV", "RAG"].map((t, i) => {
                const angle = (i / 6) * Math.PI * 2;
                const x = 50 + 45 * Math.cos(angle);
                const y = 50 + 45 * Math.sin(angle);
                return (
                  <span
                    key={t}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-cotton px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-cherry shadow-glow"
                  >
                    {t}
                  </span>
                );
              })}
            </div>
            <div className="absolute inset-0 grid place-items-center font-serif text-5xl italic">
              ✦
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:col-span-8 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm border border-cotton/15 bg-wine/40 p-6 backdrop-blur transition hover:border-cotton/50 hover:bg-wine/70"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl italic text-cotton">{g.title}</h3>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cotton/40">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-cotton/30 px-3 py-1 font-sans text-xs text-cotton transition hover:bg-cotton hover:text-cherry"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
