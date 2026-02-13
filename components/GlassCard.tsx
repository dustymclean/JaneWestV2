
import React, { useState } from 'react';
import { JANE_WEST_CONTACT } from '../constants';
import VCFButton from './VCFButton';

const GlassCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // URL for the QR code. Using api.qrserver.com to generate a real, scannable code.
  // Color 4c0519 matches Tailwind's rose-950 for the etched look.
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(JANE_WEST_CONTACT.website)}&color=4c0519&bgcolor=ffffff00&qzone=1`;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[500px] mx-auto overflow-visible py-10">
      <div 
        className="perspective-2000 w-full cursor-pointer group relative h-[280px] sm:h-[320px]"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Floating highlight behind card to create depth */}
        <div className="absolute inset-0 bg-rose-400/15 blur-[100px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-1000"></div>
        
        <div className={`relative w-full h-full duration-1000 preserve-3d transition-transform ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front Face */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-[24px] overflow-hidden glass-glow rose-gold-glass flex flex-col shadow-2xl">
            {/* Glossy Overlay for glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-rose-200/10 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 w-full h-full p-8 sm:p-10 flex flex-col justify-between text-rose-950">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="serif italic text-3xl sm:text-4xl font-bold tracking-tighter etch-shadow">Jane West</div>
                <div className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30 mt-2">Private Access</div>
              </div>

              {/* Center Info */}
              <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-7">
                {/* QR Code - Real Scannable Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/70 p-2 sm:p-3 rounded-2xl border border-white/80 shadow-inner flex items-center justify-center backdrop-blur-md overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={qrCodeUrl} 
                    alt="Jane West QR Code" 
                    className="w-full h-full object-contain mix-blend-multiply opacity-90"
                    loading="lazy"
                  />
                </div>
                
                <div className="text-center">
                  <div className="text-sm sm:text-base tracking-[0.3em] font-black uppercase text-rose-950/90 mb-1 etch-shadow">janewest.com</div>
                  <div className="text-[11px] sm:text-[12px] font-bold tracking-widest text-rose-800/50 uppercase">{JANE_WEST_CONTACT.email}</div>
                </div>

                <div onClick={(e) => e.stopPropagation()} className="transform hover:scale-105 transition-transform duration-300">
                    <VCFButton light />
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-end border-t border-rose-950/10 pt-6">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-black serif text-rose-950/60 italic">
                  {JANE_WEST_CONTACT.tagline}
                </div>
                <div className="flex space-x-2 pb-1 opacity-40">
                   <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                   <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                </div>
              </div>
            </div>

            {/* Sweep Reflection Animation */}
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-35deg] group-hover:left-[200%] transition-all duration-1500 ease-in-out"></div>
          </div>

          {/* Back Face (Phantom View) */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[24px] overflow-hidden glass-glow rose-gold-glass shadow-2xl">
            {/* Blank Phantom Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-3xl bg-pink-100/10"></div>
            
            {/* Content Container */}
            <div className="relative z-10 w-full h-full p-8 sm:p-10 flex flex-col justify-center items-center text-rose-950 text-center">
              <div className="space-y-8 w-full">
                {/* Upper Line */}
                <div className="space-y-1">
                  <div className="serif italic text-lg sm:text-xl font-bold etch-shadow">Jane West</div>
                  <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] opacity-60">CEO & Founder of Jane West | EST. 2014</div>
                </div>

                {/* Tagline */}
                <div className="py-4 border-y border-rose-950/10">
                  <div className="text-sm sm:text-lg font-black uppercase tracking-[0.5em] text-rose-500">
                    THE END OF THE ORDINARY
                  </div>
                </div>

                {/* Lower Line */}
                <div className="space-y-1">
                  <div className="serif italic text-lg sm:text-xl font-bold etch-shadow">Jane West</div>
                  <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] opacity-60">CEO & Founder of Women Grow. | EST. 2014</div>
                </div>
              </div>
            </div>

            {/* Inner Depth Effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/20 via-transparent to-white/30 pointer-events-none"></div>
            
            {/* Holographic light play */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-rose-300 blur-[100px] rounded-full"></div>
            </div>
            
            {/* Sweep Reflection Animation (Reverse) */}
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-35deg] group-hover:left-[200%] transition-all duration-1500 ease-in-out"></div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-[10px] text-rose-400 uppercase tracking-[0.5em] font-black animate-pulse opacity-60">
        Tap to interact
      </p>
    </div>
  );
};

export default GlassCard;
