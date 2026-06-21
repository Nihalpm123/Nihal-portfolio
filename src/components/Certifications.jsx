import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

const certifications = [
  {
    title: 'Full Stack Web Developer',
    issuer: 'Professional Certification',
    description: 'Comprehensive certification covering HTML5, CSS3, JavaScript, frontend frameworks, API design, and databases.',
    icon: Award,
    shadowClass: 'shadow-brutal',
  },
  {
    title: 'UI Engineer Specialist',
    issuer: 'Interface Design Spec',
    description: 'Credential focused on building accessible, pixel-perfect user interfaces, clean micro-interactions, and responsive layouts.',
    icon: Zap,
    shadowClass: 'shadow-brutal',
  },
  {
    title: 'MERN Stack Specialist',
    issuer: 'Database & Backend',
    description: 'In-depth focus on building enterprise web application architectures using MongoDB, Express, React, and Node.js.',
    icon: ShieldCheck,
    shadowClass: 'shadow-brutal',
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-brand-bg border-b-2 border-brand-blue relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
            <Award className="w-4 h-4" /> Credentials
          </h2>
          <h1 className="text-4xl md:text-5xl font-black font-display text-zinc-900 uppercase">
            Certifications
          </h1>
          <div className="h-[3px] w-24 bg-brand-blue mt-4" />
        </div>

        {/* Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className={`border-2 border-brand-blue bg-white rounded-3xl p-8 flex flex-col justify-between items-center text-center hover:bg-brand-bg transition-colors duration-200 cursor-pointer ${cert.shadowClass}`}
              >
                <div className="flex flex-col items-center">
                  {/* Outlined Icon Box */}
                  <div className="p-3.5 border-2 border-brand-blue rounded-2xl bg-brand-bg text-brand-blue shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-black font-display text-zinc-950 uppercase mb-2 tracking-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-4">
                    {cert.issuer}
                  </div>

                  <p className="text-zinc-600 text-xs font-medium leading-relaxed font-sans">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center space-x-2 text-[10px] font-bold text-zinc-400">
                  <span>Verified Credential</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

