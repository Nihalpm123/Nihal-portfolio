import React from 'react';
import { Briefcase, GraduationCap, Calendar, Check } from 'lucide-react';

const workExperience = [
  {
    title: 'Junior Software Developer',
    company: 'CYRA',
    duration: 'Sep 2024 – Mar 2025',
    type: 'Full-Time',
    description: 'Developed and optimized client-facing web applications. Conducted system debugging and added core MERN stack capabilities.'
  }
];

const internships = [
  {
    title: 'Admin Dashboard Intern',
    company: 'CYRA',
    duration: '3 Months',
    type: 'Internship',
    bullets: [
      'Developed and implemented an Admin Dashboard, enhancing administrative efficiency by streamlining key processes and improving UI responsiveness by 20%',
      'Collaborated with cross-functional teams to gather requirements and deliver a functional dashboard, contributing to a 15% reduction in data retrieval time',
      'Conducted rigorous testing and debugging, ensuring a 98% bug-free release'
    ]
  },
  {
    title: 'Database Authentication Intern',
    company: 'Avodha',
    duration: '3 Months',
    type: 'Internship',
    bullets: [
      'Developed and implemented a secure database authentication system that improved access control efficiency by 25% over a 3-month internship period',
      'Conducted comprehensive testing and debugging of authentication protocols, reducing system vulnerabilities by 15% and enhancing overall security',
      'Collaborated with cross-functional teams to integrate authentication features, contributing to a 20% increase in user satisfaction through improved ease of access'
    ]
  }
];

const education = [
  {
    degree: 'B.A.',
    institution: 'IGNOU',
    year: '2026',
    details: 'Bachelor of Arts program focused on developing strong written and verbal analytical communication skills.'
  },
  {
    degree: '12th (HSC)',
    institution: 'Kerala Board (Malayalam Medium)',
    year: '2021',
    details: 'Completed higher secondary education with a strong academic background.'
  },
  {
    degree: '10th (SSLC)',
    institution: 'Kerala Board (Malayalam Medium)',
    year: '2018',
    details: 'Completed secondary school certificate with high distinction.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-brand-bg border-b-2 border-brand-blue relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Timeline pipeline
          </h2>
          <h1 className="text-4xl md:text-5xl font-black font-display text-zinc-900 uppercase">
            Experience & Education
          </h1>
          <div className="h-[3px] w-24 bg-brand-blue mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Work & Internships (Timeline) */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            <div className="flex items-center space-x-3 text-brand-blue">
              <div className="p-2 border-2 border-brand-blue rounded-xl bg-brand-bg shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-black font-display text-zinc-950 uppercase tracking-tight">Professional History</h3>
            </div>

            <div className="border-l-2 border-brand-blue pl-6 ml-4 space-y-12 relative">
              {/* Work Experience */}
              {workExperience.map((exp, idx) => (
                <div key={`work-${idx}`} className="relative group">
                  {/* Custom Dot */}
                  <span className="absolute -left-[31px] top-2 flex h-3.5 w-3.5 rounded-full bg-brand-blue border-2 border-brand-bg z-10 group-hover:scale-125 transition-transform" />
                  
                  <div className="border-2 border-brand-blue bg-white rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(46,84,254,1)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-black font-display text-zinc-950 uppercase tracking-tight">{exp.title}</h4>
                      <span className="px-2.5 py-0.5 border border-brand-blue bg-brand-bg text-brand-blue text-[10px] font-bold uppercase rounded-md">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs font-bold text-zinc-500 mb-4 uppercase tracking-wider">
                      <span className="text-brand-blue font-black font-display">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-zinc-700 text-sm font-medium leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}

              {/* Internships */}
              {internships.map((intern, idx) => (
                <div key={`intern-${idx}`} className="relative group">
                  {/* Custom Dot */}
                  <span className="absolute -left-[31px] top-2 flex h-3.5 w-3.5 rounded-full bg-brand-peach border-2 border-brand-bg z-10 group-hover:scale-125 transition-transform" />
                  
                  <div className="border-2 border-brand-blue bg-white rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(46,84,254,1)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-black font-display text-zinc-950 uppercase tracking-tight">{intern.title}</h4>
                      <span className="px-2.5 py-0.5 border border-brand-blue bg-brand-bg text-brand-blue text-[10px] font-bold uppercase rounded-md">
                        {intern.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs font-bold text-zinc-500 mb-4 uppercase tracking-wider">
                      <span className="text-brand-blue font-black font-display">{intern.company}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {intern.duration}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {intern.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-zinc-700 text-xs font-medium leading-relaxed">
                          <span className="p-0.5 border border-brand-blue rounded bg-brand-bg text-brand-blue mr-2.5 mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education (Timeline) */}
          <div className="lg:col-span-5 flex flex-col space-y-12 w-full">
            <div className="flex items-center space-x-3 text-brand-orange">
              <div className="p-2 border-2 border-brand-blue rounded-xl bg-brand-bg shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
              </div>
              <h3 className="text-xl md:text-2xl font-black font-display text-zinc-950 uppercase tracking-tight">Academic History</h3>
            </div>

            <div className="border-l-2 border-brand-blue pl-6 ml-4 space-y-12 relative">
              {education.map((edu, idx) => (
                <div key={`edu-${idx}`} className="relative group">
                  {/* Custom Dot */}
                  <span className="absolute -left-[31px] top-2 flex h-3.5 w-3.5 rounded-full bg-brand-orange border-2 border-brand-bg z-10 group-hover:scale-125 transition-transform" />
                  
                  <div className="border-2 border-brand-blue bg-white rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(46,84,254,1)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-black font-display text-zinc-950 uppercase tracking-tight">{edu.degree}</h4>
                      <span className="px-2.5 py-0.5 border border-brand-blue bg-brand-bg text-brand-blue text-[10px] font-bold uppercase rounded-md font-mono">
                        {edu.year}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-wider">
                      {edu.institution}
                    </div>

                    <p className="text-zinc-700 text-xs font-medium leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

