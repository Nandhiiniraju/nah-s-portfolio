import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check, Linkedin, Github, Mail, Send, Download, FileText } from "lucide-react";

const recruiterFacts = [
  { k: "Available", v: "Summer / Full-time 2026" },
  { k: "Location", v: "Chennai · Remote · Relocate" },
  { k: "Focus", v: "Applied ML · AI · Full-stack ML · Data Science " },
  { k: "Notice", v: "Immediate (internship)" },
];

export function Resume() {
  return (
    <section id="resume" className="relative overflow-hidden bg-rose/40 px-6 py-32 md:px-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-cherry/60">06 — Work  </p>
          <h2 className="mt-3 font-serif text-6xl leading-[1] text-cherry md:text-7xl">
            The <span className="italic">resume.</span>
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-wine/80">
            A two-page edition for recruiters — every line earned, every project shipped.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {recruiterFacts.map((f) => (
              <div key={f.k} className="rounded-sm border border-cherry/20 bg-card p-4">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-cherry/50">
                  {f.k}
                </p>
                <p className="mt-1 font-serif text-lg italic text-cherry">{f.v}</p>
              </div>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1of4kj9OBItfteBf9Cl_PqQztBD7duLzg/view?usp=sharing"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-cherry px-7 py-4 font-sans text-xs uppercase tracking-[0.25em] text-cream transition hover:bg-wine"
          >
            <Download className="h-4 w-4" /> Download PDF ·
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <div className="shadow-luxe aspect-[1/1.3] overflow-hidden rounded-sm border border-cherry/20 bg-cream p-8 md:p-10">
            <div className="flex items-center justify-between border-b border-cherry/20 pb-4">
              <div>
                <p className="font-serif text-3xl italic text-cherry">Nandhini Raju</p>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-wine/70">
                  AI & Data Science Engineer
                </p>
              </div>
              <FileText className="h-5 w-5 text-cherry/40" />
            </div>
            <div className="mt-5 space-y-4 font-sans text-xs text-wine/80">
              <div>
                <p className="font-serif text-sm italic text-cherry">Education</p>
                <p>
                B.Tech Artificial Intelligence and Data Science |                                                                                                                                 2024– 2028                                         
                Chennai Institute Of Technology (Autonomous), Chennai, India |
                III Year - Graduating 2028 |
                CGPA - 7.5
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-serif text-sm italic text-cherry">Experience</p>
                  <ul className="mt-1 space-y-1">
                    <li>· AI/ML Intern — Google AI</li>
                    <li>· Data Science Intern — Siemens</li>
                    <li>· Researcher — CIT AI\DS</li>
                  </ul>
                </div>
                <div>
                  <p className="font-serif text-sm italic text-cherry">Stack</p>
                  <p>Python, PyTorch, LangChain, FastAPI, React, AWS, Postgres.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-2 rounded-full bg-cherry/10" style={{ opacity: 1 - i * 0.08 }} />
              ))}
            </div>
            <p className="mt-6 text-center font-sans text-[10px] uppercase tracking-[0.4em] text-cherry/40">
              · Preview only · Download for full edition ·
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const email = "aanya.mehra@gmail.com";

  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-cherry px-6 py-32 text-cream md:px-16">
      {/* world-map style grid bg */}
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 100 60" preserveAspectRatio="none">
        <defs>
          <pattern id="dots" width="2" height="2" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.3" fill="#FFD7E7" />
          </pattern>
        </defs>
        <rect width="100" height="60" fill="url(#dots)" />
      </svg>
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(circle at 80% 50%, #5a1824 0%, transparent 50%)",
        }}
      />

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-cotton/60">07 — Reach Out </p>
          <h2 className="mt-3 font-serif text-6xl leading-[0.95] text-cream md:text-8xl">
            Let's <span className="italic text-cotton">create</span>
            <br />something.
          </h2>
          <p className="mt-6 max-w-md font-serif text-lg italic text-cotton/70">
            For collaborations, internships, or a quiet espresso conversation about AI.
          </p>

          <div className="mt-10 space-y-3">
            <button
              onClick={copy}
              className="group flex w-full items-center justify-between rounded-sm border border-cotton/20 bg-wine/40 p-5 text-left backdrop-blur transition hover:border-cotton/60"
            >
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-cotton/50">Email</p>
                <p className="font-serif text-xl italic text-cotton">{email}</p>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full border border-cotton/30">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </div>
            </button>

            {[
              { icon: Linkedin, label: "LinkedIn", v: "https://www.linkedin.com/in/nandhiniraju/" },
              { icon: Github, label: "GitHub", v: "@https://github.com/Nandhiiniraju" },
              { icon: Mail, label: "Mail", v: "nandhiniraju3101@gmail.com" },
            ].map((c) => (
              <a
                key={c.label}
                href="#"
                className="group flex items-center justify-between rounded-sm border border-cotton/20 bg-wine/40 p-5 backdrop-blur transition hover:border-cotton/60 hover:bg-wine/70"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-cotton text-cherry">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-cotton/50">
                      {c.label}
                    </p>
                    <p className="font-serif text-lg italic text-cotton">{c.v}</p>
                  </div>
                </div>
                <span className="font-serif text-2xl italic opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark relative h-fit space-y-5 rounded-sm p-8 md:col-span-7 md:p-12"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-cotton/60">
            Compose a message
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Your name" placeholder="xyz" />
            <Field label="Email" type="email" placeholder="abc123@gmail.com" />
          </div>
          <Field label="Subject" placeholder="A summer ML internship" />
          <div>
            <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-cotton/50">
              Message
            </label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your project, your team, your ambitions…"
              className="mt-2 w-full resize-none border-b border-cotton/30 bg-transparent pb-3 font-serif text-lg italic text-cream placeholder:text-cotton/30 focus:border-cotton focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-3 rounded-full bg-cotton px-7 py-4 font-sans text-xs uppercase tracking-[0.25em] text-cherry transition hover:bg-cream"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Message sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4 transition group-hover:translate-x-1" /> Send dispatch
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-cotton/50">
        {label}
      </label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full border-b border-cotton/30 bg-transparent pb-3 font-serif text-lg italic text-cream placeholder:text-cotton/30 focus:border-cotton focus:outline-none"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream px-6 py-16 md:px-16">
      <div className="flex flex-col items-center justify-between gap-8 border-t border-cherry/15 pt-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-4xl italic text-cherry">nandhiniraju</p>
          <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.4em] text-cherry/50">
            · All editions reserved ·
          </p>
        </div>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-full border border-cherry/30 px-5 py-3 font-sans text-[10px] uppercase tracking-[0.3em] text-cherry transition hover:bg-cherry hover:text-cream"
        >
          ↑ Back to cover
        </a>

        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-cherry/50">
          Built with React, Framer Motion & a little couture
        </p>
      </div>
    </footer>
  );
}
