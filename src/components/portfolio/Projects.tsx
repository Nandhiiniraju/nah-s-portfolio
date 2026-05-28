import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "SaaS kit",
    category: "Other Projects",
    desc: "A scalable multi-tenant SaaS platform featuring tenant-based workspace isolation.",
    stack: ["JavaScript", "Authentication", "Multi-Tenant Architecture", "Dashboard Systems", "Full-Stack Development"],
  },
  {
    id: "02",
    title: "Orion",
    category: "AI/ML",
    desc: "An ML-powered fatigue detection system using hyperspectral imaging and spectral pattern analysis for early cognitive fatigue identification",
    stack: ["Machine Learning", "Computer Vision", "Hyperspectral Imaging", "Python", "OpenCV"],
  },
  {
    id: "03",
    title: "EnKrypto",
    category: "Other Projects",
    desc: "A blockchain-powered platform enabling secure fractional asset ownership through tokenization on the Weliptic Weil Chain ecosystem.",
    stack: ["Blockchain", "Smart Contracts", "Web3", "Tokenization", "Ethereum"],
  },
  {
    id: "04",
    title: "QuantaFin",
    category: "Data Science",
    desc: "An adaptive financial risk simulation platform using AI-assisted prediction logic and scenario-based modelling for intelligent financial analysis.",
    stack: ["Python", "Machine Learning", "Data Analytics", "Predictive Modelling", "Pandas", "NumPy"],
  },
  {
    id: "05",
    title: "MetaVault",
    category: "AI/ML",
    desc: "A decentralized KYC identity vault enabling secure, reusable, and verifiable digital identity management using blockchain-based authentication and distributed storage.",
    stack: ["Ethereum", "IPFS", "Pinata", "MetaMask", "Magic Auth", "Solidity", "Web3"],
  },
  {
    id: "06",
    title: "UNOIC",
    category: "Research",
    desc: "Published and presented a research paper at UNOIC focused on AI-driven innovation, exploring intelligent system design, emerging technologies, and practical real-world applications of machine learning",
    stack: ["Artificial Intelligence", "Machine Learning", "Research", "Data Analysis", "Technical Writing"],
  },
];

const categories = ["All", "AI/ML", "Other Projects", "Data Science", "Research"];

function TiltCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [6, -6]), { stiffness: 120, damping: 12 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-6, 6]), { stiffness: 120, damping: 12 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.06 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-cherry/20 bg-card p-6 shadow-luxe transition hover:border-cherry"
    >
      {/* visual */}
      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-sm">
        <div
          className="absolute inset-0 transition duration-700 group-hover:scale-110"
          style={{
            background: `linear-gradient(${135 + i * 30}deg, #47131C 0%, #5a1824 30%, #f8c8d8 70%, #ffd7e7 100%)`,
          }}
        />
        <div className="absolute inset-0 mix-blend-overlay opacity-60"
          style={{
            background: "radial-gradient(circle at 70% 30%, rgba(255,253,233,0.6), transparent 50%)",
          }}
        />
        <div className="absolute bottom-3 left-3 font-serif text-6xl italic text-cream/90">
          {p.id}
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-cream/90 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.25em] text-cherry">
          {p.category}
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-3xl italic text-cherry">{p.title}</h3>
        <a
          href="#"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cherry/30 text-cherry transition group-hover:bg-cherry group-hover:text-cream"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <p className="mt-3 font-sans text-sm leading-relaxed text-wine/80">{p.desc}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-cherry/15 px-2.5 py-0.5 font-sans text-[10px] uppercase tracking-wider text-cherry/70"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3 border-t border-cherry/10 pt-4">
        <a href="#" className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-cherry/70 hover:text-cherry">
          <Github className="h-3.5 w-3.5" /> Code
        </a>
        <span className="text-cherry/20">·</span>
        <a href="#" className="font-sans text-xs uppercase tracking-widest text-cherry/70 hover:text-cherry">
          Live demo →
        </a>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative overflow-hidden bg-rose/30 px-6 py-32 md:px-16">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background: "radial-gradient(circle at 50% 0%, #ffd7e7 0%, transparent 50%)",
        }}
      />

      <div className="relative mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-cherry/60">
            03 — Selected Works
          </p>
          <h2 className="mt-3 font-serif text-6xl leading-[1] text-cherry md:text-7xl">
            The <span className="italic">collection.</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] transition ${
                filter === c
                  ? "border-cherry bg-cherry text-cream"
                  : "border-cherry/30 text-cherry hover:bg-cherry/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <TiltCard key={p.id} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
