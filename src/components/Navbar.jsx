import React, { useState, useEffect } from 'react';
import { Menu, X, Smile } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Stickers', href: '#stickers' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // height of fixed navbar + safety margins
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
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-brand-bg/95 border-b-2 border-brand-blue shadow-[0_4px_20px_rgba(46,84,254,0.05)]' 
        : 'py-6 bg-transparent border-b-2 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home')}
          className="flex items-center space-x-2 text-brand-blue font-bold tracking-tight text-xl group font-display"
        >
          <Smile className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="text-zinc-900 group-hover:text-brand-blue transition-colors">
            nihal.pm
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  isActive
                    ? 'text-brand-blue bg-brand-peach/10 border-brand-blue shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] translate-y-[-2px]'
                    : 'text-zinc-700 border-transparent hover:text-brand-blue hover:border-brand-blue/30'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-zinc-900 border-2 border-brand-blue bg-brand-bg shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-brand-bg border-l-2 border-brand-blue shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b-2 border-brand-blue">
          <span className="font-display font-bold text-zinc-900 text-lg">Menu</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 border-2 border-brand-blue rounded-lg bg-brand-bg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex flex-col pt-6 px-6 pb-8 space-y-3 overflow-y-auto flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  isActive
                    ? 'text-brand-blue bg-brand-peach/10 border-brand-blue shadow-[3px_3px_0px_0px_rgba(46,84,254,1)]'
                    : 'text-zinc-700 border-transparent hover:text-brand-blue'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-zinc-950/20 backdrop-blur-xs z-30 transition-opacity"
        />
      )}
    </nav>
  );
}
