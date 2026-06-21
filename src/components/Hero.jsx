import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Mail, Phone, ArrowDown, ArrowRight, Star } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  // Framer Motion 3D tilt tracking variables for the profile photo
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to snappy, minor 2D/3D offsets
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);
  const shadowX = useTransform(x, [-150, 150], [12, 4]);
  const shadowY = useTransform(y, [-150, 150], [12, 4]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-brand-bg select-none"
    >
      {/* Decorative Grid Lines to give a draftboard/canvas feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(46,84,254,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,84,254,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Floating Creative 2D Shapes */}
      <div className="absolute top-[20%] left-[8%] w-12 h-12 text-brand-peach opacity-30 animate-bounce pointer-events-none">
        <Star className="w-full h-full fill-current" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 py-12 flex-grow">
        {/* Left Side: Copywriting and Bold Headers */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-8"
        >
          {/* Greeting Badges (Human feeling, hand-drawn outline style) */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border-2 border-brand-blue bg-brand-bg text-brand-blue text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
            <span>Kakkad, India • Open for Work</span>
          </div>

          {/* Bold Display Typography */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-brand-blue uppercase tracking-wide">
              Hello, visitor. I'm
            </h2>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black font-display text-zinc-900 tracking-tight leading-[0.9] uppercase">
              Nihal <br /> P M
            </h1>
            <p className="text-2xl sm:text-3xl font-bold font-sans text-brand-blue tracking-tight">
              Junior Software & Full-Stack Developer.
            </p>
          </div>

          {/* Creative, Human Description */}
          <p className="text-base sm:text-lg text-zinc-700 max-w-xl font-medium leading-relaxed">
            I craft clean, high-performance web applications using the MERN stack. I value structure, motion, and building digital spaces that are creative yet functionally robust. Not just code—I build systems that connect with humans.
          </p>

          {/* Action CTAs (Brutalist offsets) */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleScrollToSection('projects')}
              className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-brand-blue rounded-xl font-bold text-white bg-brand-blue shadow-[4px_4px_0px_0px_#FFBC95] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={() => handleScrollToSection('contact')}
              className="flex items-center justify-center px-8 py-4 border-2 border-brand-blue rounded-xl font-bold text-brand-blue bg-brand-bg shadow-[4px_4px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer"
            >
              Let's Chat
            </button>
          </div>

          {/* Clean Social Handles */}
          <div className="flex items-center space-x-4 pt-2">
            <a 
              href="https://github.com/Nihalpm123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border-2 border-brand-blue rounded-xl bg-brand-bg hover:bg-brand-peach/10 shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-zinc-900"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:nihal.pm9633@gmail.com" 
              className="p-3 border-2 border-brand-blue rounded-xl bg-brand-bg hover:bg-brand-peach/10 shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-zinc-900"
              aria-label="Email Address"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+919633443070" 
              className="p-3 border-2 border-brand-blue rounded-xl bg-brand-bg hover:bg-brand-peach/10 shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-zinc-900"
              aria-label="Phone Number"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Interactive Profile Card & Hand-drawn SVGs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Hand-drawn Squid arrow decoration (animates drawing on mount) */}
          <svg 
            className="absolute -left-12 bottom-6 w-24 h-24 text-brand-blue hidden xl:block pointer-events-none" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3.5"
            strokeLinecap="round"
          >
            <motion.path 
              d="M10 20 C 30 10, 50 30, 45 50 C 40 70, 75 75, 80 55" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            <motion.path 
              d="M70 50 L80 55 L75 68" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            />
          </svg>
          <span className="absolute -left-20 bottom-2 text-xs font-mono font-bold text-brand-blue rotate-[-12deg] hidden xl:block">
            hey, it's me!
          </span>

          {/* Rotating Text Badge - Creative Designer detail */}
          <div className="absolute -top-10 -right-6 w-28 h-28 hidden md:block animate-[spin_10s_linear_infinite] z-20 pointer-events-none select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-blue font-bold text-[9px] fill-current">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text>
                <textPath href="#circlePath" spacing="auto" className="tracking-widest uppercase">
                  • NIHAL P M • CREATIVE FULL STACK DEVELOPER
                </textPath>
              </text>
            </svg>
          </div>

          {/* Interactive Profile Frame Container */}
          <motion.div 
            className="relative cursor-pointer group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d" 
            }}
          >
            {/* Solid offset shadow card that aligns to mouse position */}
            <motion.div 
              className="absolute inset-0 rounded-[28px] bg-brand-peach border-2 border-brand-blue z-0"
              style={{
                x: shadowX,
                y: shadowY,
              }}
            />

            {/* Inner Border Card */}
            <div 
              className="relative w-72 h-72 sm:w-80 sm:h-80 xl:w-[380px] xl:h-[380px] rounded-[28px] border-2 border-brand-blue bg-white overflow-hidden p-3 z-10"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="w-full h-full rounded-[18px] overflow-hidden bg-brand-bg relative">
                <img 
                  src={profileImg} 
                  alt="Nihal P M" 
                  className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-108"
                />
              </div>
            </div>

            {/* Parallax Floating Tags */}
            <div 
              className="absolute bottom-4 -left-6 px-4 py-2 bg-brand-blue border-2 border-brand-blue rounded-xl text-white text-xs font-bold shadow-[2px_2px_0px_0px_rgba(250,246,240,1)] z-20 pointer-events-none"
              style={{ transform: "translateZ(40px)" }}
            >
              CYRA JUNIOR DEV
            </div>
            
            <div 
              className="absolute -top-6 right-6 px-4 py-2 bg-white border-2 border-brand-blue rounded-xl text-brand-blue text-xs font-bold shadow-[2px_2px_0px_0px_rgba(46,84,254,1)] z-20 pointer-events-none"
              style={{ transform: "translateZ(45px)" }}
            >
              MERN STACK
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <div className="hidden lg:block self-center mt-6">
        <button
          onClick={() => handleScrollToSection('about')}
          className="p-2 border-2 border-brand-blue bg-brand-bg rounded-xl hover:translate-y-[-2px] transition-all shadow-[2px_2px_0px_0px_rgba(46,84,254,1)] text-brand-blue cursor-pointer"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* High-Contrast Infinite Text Ticker at the bottom */}
      <div className="w-full bg-brand-blue border-y-2 border-brand-blue py-3 overflow-hidden mt-12 rotate-[-1deg] scale-105 z-20">
        <div className="animate-marquee flex whitespace-nowrap text-white font-display text-sm font-black uppercase tracking-wider">
          {Array(8).fill(null).map((_, idx) => (
            <span key={idx} className="mx-6 flex items-center">
              REACTJS <span className="mx-2 text-brand-peach">✦</span> 
              NODEJS <span className="mx-2 text-brand-peach">✦</span> 
              MONGODB <span className="mx-2 text-brand-peach">✦</span> 
              REST APIS <span className="mx-2 text-brand-peach">✦</span> 
              ADMIN DASHBOARDS <span className="mx-2 text-brand-peach">✦</span> 
              FRONTEND WEB ENG <span className="mx-2 text-brand-peach">✦</span> 
              CREATIVE USER EXPERIENCE <span className="mx-2 text-brand-peach">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

