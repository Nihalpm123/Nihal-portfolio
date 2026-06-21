import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Cpu, Server, Database, GitBranch, Layout, FileCode, ArrowRight } from 'lucide-react';

const skills = [
  {
    name: 'React.js',
    icon: Cpu,
    details: 'Custom Hooks, Context APIs, React 19, State flow systems, Vite'
  },
  {
    name: 'Node.js',
    icon: Server,
    details: 'Express.js backend server architectures, RESTful APIs, Middleware flows'
  },
  {
    name: 'MongoDB',
    icon: Database,
    details: 'Schema design, Mongoose validations, secure database management'
  },
  {
    name: 'JavaScript',
    icon: FileCode,
    details: 'Asynchronous flows, ES6+, array methods, responsive logic'
  },
  {
    name: 'HTML/CSS',
    icon: Layout,
    details: 'Semantic HTML5 structure, responsive layout designs, Tailwind CSS'
  },
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    details: 'Version control branching, PR reviews, codebase integrity'
  }
];

function SkillCard({ skill }) {
  const cardRef = useRef(null);
  
  // Motion Values for mouse tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Snappy spring tilt outputs
  const rotateX = useTransform(y, [-120, 120], [8, -8]);
  const rotateY = useTransform(x, [-120, 120], [-8, 8]);
  const shadowX = useTransform(x, [-120, 120], [10, 4]);
  const shadowY = useTransform(y, [-120, 120], [10, 4]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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

  const Icon = skill.icon;

  return (
    <div className="relative group">
      {/* Brutalist offset shadow card mapping mouse position */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-brand-peach border-2 border-brand-blue z-0"
        style={{
          x: shadowX,
          y: shadowY,
        }}
      />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative border-2 border-brand-blue bg-white rounded-2xl p-6 hover:bg-brand-bg transition-colors duration-300 z-10 cursor-pointer min-h-[170px]"
      >
        <div style={{ transform: 'translateZ(15px)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 border-2 border-brand-blue rounded-xl bg-brand-bg text-brand-blue shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-base font-black font-display text-zinc-950 uppercase tracking-tight">{skill.name}</span>
          </div>

          <p className="text-zinc-600 text-sm font-medium leading-relaxed font-sans">
            {skill.details}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-brand-bg border-b-2 border-brand-blue relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> Technical matrix
          </h2>
          <h1 className="text-4xl md:text-5xl font-black font-display text-zinc-900 uppercase">
            Skills & Expertise
          </h1>
          <div className="h-[3px] w-24 bg-brand-blue mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
            />
          ))}
        </div>

        {/* Full-Stack Dynamic Connections Visual Block */}
        <div className="mt-20 border-2 border-brand-blue bg-white rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(46,84,254,1)]">
          <h3 className="text-lg font-black font-display text-zinc-950 uppercase mb-6 flex items-center gap-2">
            🚀 The Full-Stack Pipeline
          </h3>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative pt-4">
            
            {/* Visual SVG connecting pipeline */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-brand-blue/15 hidden md:block z-0" />

            {/* Block 1: MongoDB */}
            <div className="relative border-2 border-brand-blue bg-brand-bg p-5 rounded-2xl text-center w-48 shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] z-10">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Database Layer</span>
              <h4 className="text-base font-black font-display uppercase mt-2 text-zinc-950">MongoDB</h4>
              <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">Data Storage & Schemas</p>
            </div>

            <ArrowRight className="w-6 h-6 text-brand-blue rotate-90 md:rotate-0 z-10" />

            {/* Block 2: Node.js / Express */}
            <div className="relative border-2 border-brand-blue bg-brand-bg p-5 rounded-2xl text-center w-48 shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] z-10">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">Logic Controller</span>
              <h4 className="text-base font-black font-display uppercase mt-2 text-zinc-950">Express & Node</h4>
              <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">REST APIs & Security</p>
            </div>

            <ArrowRight className="w-6 h-6 text-brand-blue rotate-90 md:rotate-0 z-10" />

            {/* Block 3: React.js */}
            <div className="relative border-2 border-brand-blue bg-brand-bg p-5 rounded-2xl text-center w-48 shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] z-10">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Presentation Layer</span>
              <h4 className="text-base font-black font-display uppercase mt-2 text-zinc-950">React App</h4>
              <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">UI & Component State</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

