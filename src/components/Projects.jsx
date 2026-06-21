import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Nihal Portfolio',
    duration: '3 Days',
    description: 'Built this personal portfolio website to showcase projects, skills, and certifications. Designed a modern, editorial UI using React, Tailwind CSS, and Framer Motion.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    github: 'https://github.com/Nihalpm123/weather-app',
    bg: '#FFBC95',
  },
  {
    title: 'Le_cygnex',
    duration: '2 Weeks',
    description: 'Worked on web presence and marketing-related features. Assisted in improving UI responsiveness and campaign landing structure, leading to a better user experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Nihalpm123',
    bg: '#FFBC95',
  },
  {
    title: 'PRISTINABELLA',
    duration: '1 Week',
    description: 'Developed a professional website for digital marketing services. Designed responsive layouts for better user engagement, and optimized website performance and SEO basics.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO Basics', 'Optimization'],
    github: 'https://github.com/Nihalpm123',
    bg: '#FFBC95',
  },
  {
    title: 'Fast Track Tennis Academy',
    duration: '4 Days',
    description: 'Developed a website for a sports training academy. Implemented program details, registrations, and contact forms. Focused on delivering a clean, user-friendly interface.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'CSS Modules'],
    github: 'https://github.com/Nihalpm123',
    bg: '#FFBC95',
  },
  {
    title: 'Peyman Zokaie Real Estate',
    duration: '2 Weeks',
    description: 'Built a real estate website to showcase property listings. Developed dynamic pages for property details and inquiry forms, prioritizing user experience and mobile compatibility.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Nihalpm123',
    bg: '#FFBC95',
  }
];

const upcomingProjects = [
  {
    title: 'Library Management System',
    description: 'A comprehensive digital platform designed to catalog books, manage member accounts, track transactions, and automate overdue notifications.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    bg: '#C5F2E0',
    status: 'In Pipeline'
  },
  {
    title: 'Organization Management System',
    description: 'A corporate administrative portal integrating employee directories, department management, and role-based permissions access control.',
    tags: ['React.js', 'Redux Toolkit', 'Node.js', 'PostgreSQL'],
    bg: '#D4E2FC',
    status: 'In Pipeline'
  },
  {
    title: 'AI Receptionist',
    description: 'An AI-driven receptionist integrating NLP to handle bookings, answer FAQs, and route calls with speech-to-text integration.',
    tags: ['React.js', 'OpenAI API', 'Python', 'WebSockets'],
    bg: '#FAD4FC',
    status: 'Designing'
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Position motion values for floating card
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs to lag/trail behind the cursor
  const springX = useSpring(mouseX, { damping: 30, stiffness: 250, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 250, mass: 0.5 });

  const handleMouseMove = (e) => {
    // Position the floating card relative to viewport coordinates
    mouseX.set(e.clientX + 20); // offset right
    mouseY.set(e.clientY - 110); // offset center height
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-brand-bg border-b-2 border-brand-blue relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background decoration lines */}
      <div className="absolute inset-y-0 left-1/3 w-[2px] bg-brand-blue/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
            <FolderGit2 className="w-4 h-4" /> Selected index
          </h2>
          <h1 className="text-4xl md:text-5xl font-black font-display text-zinc-900 uppercase">
            Featured Projects
          </h1>
          <div className="h-[3px] w-24 bg-brand-blue mt-4" />
        </div>

        {/* Desktop Vertical Index List Layout */}
        <div className="hidden md:block relative border-2 border-brand-blue rounded-3xl bg-white overflow-hidden shadow-[6px_6px_0px_0px_rgba(46,84,254,1)]">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b-2 border-brand-blue last:border-b-0 px-8 py-7 flex items-center justify-between transition-colors duration-300 hover:bg-brand-bg select-none"
              data-cursor-text="VIEW"
            >
              {/* Left Column: Number & Title */}
              <div className="flex items-center space-x-6">
                <span className="text-sm font-mono font-bold text-zinc-400">
                  0{index + 1}
                </span>
                <h3 className="text-2xl xl:text-3xl font-black font-display text-zinc-900 uppercase group-hover:text-brand-blue transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Middle Column: Tags Summary */}
              <div className="hidden lg:flex items-center space-x-2">
                {project.tags.slice(0, 3).map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-0.5 border-2 border-brand-blue bg-white rounded-md text-[10px] font-bold text-brand-blue uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Right Column: Duration & Link */}
              <div className="flex items-center space-x-8">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  {project.duration}
                </span>
                <div className="p-2 border-2 border-brand-blue rounded-xl bg-white text-brand-blue shadow-[2px_2px_0px_0px_rgba(46,84,254,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Details Reveal Container (Follows cursor, desktop only) */}
        {hoveredIndex !== null && (
          <motion.div
            className="fixed top-0 left-0 w-80 pointer-events-none z-30 overflow-hidden"
            style={{
              x: springX,
              y: springY,
            }}
          >
            {/* The Floating Card structure */}
            <div 
              className="border-2 border-brand-blue rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(46,84,254,1)] bg-white space-y-4"
            >
              {/* Mini visual mockup colored box */}
              <div 
                className="w-full h-24 border-2 border-brand-blue rounded-xl flex items-center justify-center font-display font-black text-lg uppercase tracking-tight"
                style={{ backgroundColor: projects[hoveredIndex].bg }}
              >
                {projects[hoveredIndex].title}
              </div>

              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                {projects[hoveredIndex].description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {projects[hoveredIndex].tags.slice(0, 3).map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2 py-0.5 border border-brand-blue/30 rounded bg-brand-bg text-[9px] font-bold text-brand-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile Viewport Layout: Clean brutalist cards grid */}
        <div className="grid grid-cols-1 md:hidden gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border-2 border-brand-blue bg-white rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(46,84,254,1)] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-zinc-400">0{index + 1}</span>
                <h3 className="text-xl font-black font-display text-zinc-950 uppercase mt-1 mb-3">{project.title}</h3>
                
                {/* Visual block */}
                <div 
                  className="w-full h-20 border-2 border-brand-blue rounded-xl mb-4" 
                  style={{ backgroundColor: project.bg }}
                />

                <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 border border-brand-blue/30 bg-brand-bg rounded text-[9px] font-bold text-brand-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-brand-blue/10">
                <span className="text-[10px] font-bold text-zinc-500 uppercase">{project.duration}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 border-2 border-brand-blue rounded-xl bg-white text-xs font-bold text-brand-blue"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Major Projects Heading */}
        <div className="mt-24 mb-12 text-left">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
            <FolderGit2 className="w-4 h-4" /> Next Releases
          </h2>
          <h1 className="text-3xl md:text-4xl font-black font-display text-zinc-900 uppercase">
            Upcoming Major Projects
          </h1>
          <div className="h-[3px] w-24 bg-brand-blue mt-4" />
        </div>

        {/* Upcoming Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingProjects.map((project, index) => (
            <div 
              key={index}
              className="border-2 border-brand-blue bg-white rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(46,84,254,1)] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(46,84,254,1)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 font-bold">UPCOMING 0{index + 1}</span>
                  <span className="px-2.5 py-0.5 border border-brand-blue bg-brand-bg text-brand-blue text-[9px] font-bold uppercase rounded-md">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-black font-display text-zinc-950 uppercase mb-3">
                  {project.title}
                </h3>
                
                {/* Visual block */}
                <div 
                  className="w-full h-24 border-2 border-brand-blue rounded-xl mb-4 flex items-center justify-center font-display font-black text-xs uppercase tracking-tight text-zinc-800 text-center px-4" 
                  style={{ backgroundColor: project.bg }}
                >
                  {project.title}
                </div>

                <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-blue/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 border border-brand-blue/30 bg-brand-bg rounded text-[9px] font-bold text-brand-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

