import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StickerSandbox from './components/StickerSandbox';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-zinc-900 selection:bg-brand-blue selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Custom Reactive Cursor */}
      <CustomCursor />

      {/* Navbar Header */}
      <Navbar />

      {/* Landing Layout Elements */}
      <main className="relative z-10">
        {/* Hero Landing view */}
        <Hero />

        {/* Biography Block */}
        <About />

        {/* Interactive Sticker Sandbox */}
        <StickerSandbox />

        {/* Technical stack matrix */}
        <Skills />

        {/* Timeline (Experience & Education) */}
        <Experience />

        {/* Project reveal list */}
        <Projects />

        {/* Certifications badges */}
        <Certifications />

        {/* Contact fields */}
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}
