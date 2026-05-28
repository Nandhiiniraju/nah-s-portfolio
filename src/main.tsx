import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Projects } from "./components/portfolio/Projects";
import { Experience } from "./components/portfolio/Experience";
import { Resume, Contact, Footer } from "./components/portfolio/ResumeContactFooter";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume/>
      <Contact/>
      <Footer/> /
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);