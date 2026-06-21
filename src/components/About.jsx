import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, Briefcase, Languages, Clock, Sparkles, Smile, Code } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '98%', label: 'Clean Deliveries' },
];

const infoItems = [
  { icon: User, label: 'Role', value: 'Junior Software Developer (MERN)' },
  { icon: Clock, label: 'Work tenure', value: '2 Years 0 Months' },
  { icon: MapPin, label: 'Coordinates', value: 'Kakkad, Kerala, India' },
  { icon: Languages, label: 'Languages', value: 'English, Arabic (Conversational)' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('dev');

  return (
    <section id="about" className="py-24 bg-brand-bg border-b-2 border-brand-blue relative overflow-hidden">
      {/* Background visual lines */}
      <div className="absolute left-0 top-1/4 w-full h-[2px] bg-brand-blue/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Headline */}
        <div className="mb-16 text-left">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
            <User className="w-4 h-4" /> Biography
          </h2>
          <h1 className="text-4xl md:text-5xl font-black font-display text-zinc-900 uppercase">
            About Nihal P M
          </h1>
          <div className="h-[3px] w-24 bg-brand-blue mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Personality & Summary */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Custom Interactive Tab Controls */}
            <div className="flex border-2 border-brand-blue rounded-2xl bg-white p-1.5 shadow-[4px_4px_0px_0px_rgba(46,84,254,1)] w-max">
              <button
                onClick={() => setActiveTab('dev')}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'dev'
                    ? 'bg-brand-blue text-white shadow-[2px_2px_0px_0px_#FFBC95]'
                    : 'text-zinc-700 hover:text-brand-blue'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>The Developer</span>
              </button>
              
              <button
                onClick={() => setActiveTab('human')}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'human'
                    ? 'bg-brand-blue text-white shadow-[2px_2px_0px_0px_#FFBC95]'
                    : 'text-zinc-700 hover:text-brand-blue'
                }`}
              >
                <Smile className="w-4 h-4" />
                <span>The Human</span>
              </button>
            </div>

            {/* Tab Panels */}
            <div className="border-2 border-brand-blue bg-white rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(46,84,254,1)] min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'dev' ? (
                  <motion.div
                    key="dev-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-brand-orange mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">Stack Summary & Focus</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-zinc-900 uppercase">
                      Engineering Solutions using React, Node.js & Databases
                    </h3>
                    <p className="text-zinc-700 font-medium leading-relaxed">
                      I have hands-on experience building scalable applications using the MERN stack. My professional journey includes building custom admin dashboards and secure database authentication engines. 
                    </p>
                    <p className="text-zinc-600 font-medium leading-relaxed text-sm">
                      I specialize in API creation, React state flow structures, and responsive user interfaces. I treat code as a craft, aiming for clean architectures, performant databases, and modular front-end components.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="human-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-brand-orange mb-2">
                      <Smile className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">Beyond the terminal</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-zinc-900 uppercase">
                      Music lover, badminton player & Kerala resident
                    </h3>
                    <p className="text-zinc-700 font-medium leading-relaxed">
                      I reside in Kakkad, Kerala. Yes, I write code, but I'm also someone who listens to high-fidelity music (you can spot my headphones in the profile picture!), plays badminton, and values human connection. 
                    </p>
                    <p className="text-zinc-600 font-medium leading-relaxed text-sm">
                      I speak English and Arabic, and I believe design should have personality. I avoid standard, template-looking layouts in favor of things that are bold, memorable, and distinct. Humor is a valuable design tool in my book!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stats Block */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t-2 border-brand-blue/10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-black font-display text-brand-blue uppercase">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-500 font-bold uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Quick Facts Card */}
            <div className="border-2 border-brand-blue bg-white rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(46,84,254,1)] flex-1">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6 block">Quick Parameters</span>
              
              <div className="space-y-6">
                {infoItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 border-2 border-brand-blue rounded-xl bg-brand-bg text-brand-blue shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-sm sm:text-base text-zinc-900 font-bold mt-0.5">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Accent Preferences Card */}
            <div className="border-2 border-brand-blue bg-white rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(46,84,254,1)] flex items-center justify-between hover:bg-brand-peach/10 transition-colors">
              <div>
                <div className="text-[10px] font-bold text-brand-blue tracking-widest uppercase">Work Preferences</div>
                <div className="text-sm sm:text-base font-black font-display text-zinc-900 uppercase mt-1">Remote & Hybrid Developer</div>
              </div>
              <div className="p-2 border-2 border-brand-blue rounded-xl bg-brand-bg">
                <Briefcase className="w-5 h-5 text-brand-blue" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

