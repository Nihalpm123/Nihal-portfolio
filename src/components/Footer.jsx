import React, { useState, useEffect } from 'react';
import { ArrowUp, Smile } from 'lucide-react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-brand-bg border-t-2 border-brand-blue py-12 px-6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Brand logo */}
        <div className="flex items-center space-x-2 text-zinc-950 font-display font-bold">
          <Smile className="w-5 h-5 text-brand-blue" />
          <span className="text-sm uppercase tracking-wider">
            Nihal P M • Developer Portfolio
          </span>
        </div>

        {/* Custom human footer text */}
        <div className="text-zinc-500 text-xs text-center md:text-right font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Nihal P M. Handcrafted in Kerala, India. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top floating button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 border-2 border-brand-blue rounded-xl bg-white text-brand-blue shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
