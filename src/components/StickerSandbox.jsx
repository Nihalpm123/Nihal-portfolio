import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trash2 } from 'lucide-react';

const INITIAL_STICKERS = [
  { id: 'react', text: '⚛️ React.js', rotate: -5, bg: '#E0F2FE', color: '#0369A1' },
  { id: 'node', text: '🟢 Node.js', rotate: 8, bg: '#DCFCE7', color: '#15803D' },
  { id: 'coffee', text: '☕ Coffee Fueled', rotate: -12, bg: '#FEF3C7', color: '#B45309' },
  { id: 'kerala', text: '🌴 Kerala, India', rotate: 6, bg: '#FEE2E2', color: '#B91C1C' },
  { id: 'headphones', text: '🎧 Bass Head', rotate: -6, bg: '#F3E8FF', color: '#6B21A8' },
  { id: 'bug', text: '🐛 Bug Free*', rotate: 15, bg: '#FFEDD5', color: '#C2410C' },
  { id: 'mongodb', text: '🍃 MongoDB', rotate: -3, bg: '#E2FBE8', color: '#14532D' },
  { id: 'nihal', text: 'nihal.pm ✦', rotate: -8, bg: '#2E54FE', color: '#FFFFFF', isBrand: true },
];

const STICKER_POSITIONS = {
  mobile: [
    { id: 'react', left: '6%', top: '8%' },
    { id: 'coffee', left: '50%', top: '14%' },
    { id: 'nihal', left: '10%', top: '28%' },
    { id: 'node', left: '52%', top: '36%' },
    { id: 'kerala', left: '5%', top: '52%' },
    { id: 'headphones', left: '50%', top: '58%' },
    { id: 'bug', left: '8%', top: '74%' },
    { id: 'mongodb', left: '52%', top: '80%' },
  ],
  desktop: [
    { id: 'react', left: '8%', top: '15%' },
    { id: 'coffee', left: '28%', top: '10%' },
    { id: 'nihal', left: '75%', top: '5%' },
    { id: 'kerala', left: '70%', top: '28%' },
    { id: 'node', left: '42%', top: '35%' },
    { id: 'headphones', left: '72%', top: '55%' },
    { id: 'bug', left: '12%', top: '55%' },
    { id: 'mongodb', left: '40%', top: '65%' },
  ]
};

const STAMP_SHAPES = [
  '😊', '⭐️', '💖', '🔥', '💻', '✨', '⚡️', '✌️'
];

export default function StickerSandbox() {
  const constraintsRef = useRef(null);
  const [stamps, setStamps] = useState([]);
  const [stampIndex, setStampIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stickers = INITIAL_STICKERS.map(sticker => {
    const pos = isMobile 
      ? STICKER_POSITIONS.mobile.find(p => p.id === sticker.id) 
      : STICKER_POSITIONS.desktop.find(p => p.id === sticker.id);
    return { ...sticker, ...pos };
  });

  const handleCanvasClick = (e) => {
    // Avoid stamping if clicking directly on a button or sticker
    if (
      e.target.closest('.sticker-item') || 
      e.target.closest('button')
    ) {
      return;
    }

    const rect = constraintsRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newStamp = {
      id: `stamp-${Date.now()}-${Math.random()}`,
      text: STAMP_SHAPES[stampIndex],
      x: x - 20, // offset half size
      y: y - 20,
      scale: [0, 1.3, 1],
      rotate: Math.random() * 40 - 20,
    };

    setStamps((prev) => [...prev, newStamp]);
    setStampIndex((prev) => (prev + 1) % STAMP_SHAPES.length);
  };

  const clearStamps = () => {
    setStamps([]);
  };

  return (
    <section 
      id="stickers" 
      className="py-24 bg-brand-bg border-b-2 border-brand-blue relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Interactive Playground
            </h2>
            <h1 className="text-4xl md:text-5xl font-black font-display text-zinc-900 uppercase">
              Sticker Sandbox
            </h1>
            <p className="text-zinc-600 mt-2 max-w-xl font-medium">
              Click anywhere inside the box to **stamp** custom shapes, or **drag and toss** these developer badges around. Go ahead, make a mess!
            </p>
          </div>
          
          {stamps.length > 0 && (
            <button
              onClick={clearStamps}
              className="flex items-center space-x-2 px-4 py-2 border-2 border-brand-blue rounded-xl font-bold text-brand-blue bg-white hover:bg-brand-blue hover:text-white shadow-[2px_2px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer text-xs uppercase tracking-wider"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Canvas</span>
            </button>
          )}
        </div>

        {/* The Sandbox Box */}
        <div 
          ref={constraintsRef}
          onClick={handleCanvasClick}
          className="w-full h-[450px] border-2 border-brand-blue bg-white rounded-3xl relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(46,84,254,1)] cursor-crosshair group select-none"
          data-cursor-text="STAMP!"
        >
          {/* Background grid indicators */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(46,84,254,0.1)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="absolute bottom-4 left-6 right-6 text-[10px] font-mono font-bold text-zinc-400 pointer-events-none uppercase tracking-wider text-center md:text-left">
            {isMobile 
              ? '[ Stamp Canvas • Drag Badges ]' 
              : '[ Physics Boundary Sandbox • Click Canvas to Stamp • Drag Badges ]'
            }
          </div>

          {/* Render Stamps (Stamps are stationary but animate on mount) */}
          {stamps.map((stamp) => (
            <motion.div
              key={stamp.id}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: stamp.rotate }}
              className="absolute text-4xl pointer-events-none select-none z-10"
              style={{
                left: stamp.x,
                top: stamp.y,
              }}
            >
              {stamp.text}
            </motion.div>
          ))}

          {/* Render Draggable Stickers */}
          {stickers.map((sticker) => (
            <motion.div
              key={`${sticker.id}-${isMobile}`}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.15}
              dragTransition={{ power: 0.2, bounceStiffness: 200, bounceDamping: 15 }}
              whileDrag={{ scale: 1.1, rotate: sticker.rotate * 1.5, zIndex: 30 }}
              className="sticker-item absolute px-5 py-2.5 rounded-2xl border-2 border-brand-blue font-bold text-sm tracking-wide cursor-grab active:cursor-grabbing select-none z-20 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-[box-shadow,transform]"
              style={{
                backgroundColor: sticker.bg,
                color: sticker.color,
                rotate: sticker.rotate,
                borderColor: sticker.isBrand ? '#2E54FE' : '#1c1917',
                left: sticker.left,
                top: sticker.top,
              }}
              data-cursor-type="drag"
            >
              {sticker.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
