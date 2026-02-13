
import React, { useState } from 'react';
import { JANE_WEST_CONTACT } from '../constants';

const GlassCard: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const qrColor = isDarkMode ? 'fee2e2' : '1a050a';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(JANE_WEST_CONTACT.website)}&color=${qrColor}&bgcolor=ffffff00&qzone=1`;

  const accentColor = isDarkMode ? "#C5A381" : "#B76E79";
  const textColor = isDarkMode ? "#FEE2E2" : "#1A050A";

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[500px] mx-auto overflow-visible py-4 select-none">
      <div 
        className="perspective-2000 w-full cursor-pointer group relative h-[320px] sm:h-[360px]"
        onClick={() => setIsFlipped(!isFlipped)}
        aria-label="Interactive 3D Luxury Glass Card"
      >
        {/* Dynamic Atmospheric Aura */}
        <div className={`absolute inset-0 blur-[130px] rounded-full scale-90 group-hover:scale-110 transition-all duration-1000 opacity-60 ${isDarkMode ? 'bg-[#C5A381]/20' : 'bg-[#B76E79]/20'}`}></div>
        
        <div className={`relative w-full h-full duration-1000 preserve-3d transition-transform ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front Face */}
          <div className={`absolute inset-0 w-full h-full backface-hidden rounded-[40px] overflow-hidden backdrop-blur-[30px] flex flex-col border transition-all duration-1000 shadow-2xl ${isDarkMode ? 'border-[#B76E79]/40 bg-black/40' : 'border-[#D9BBAE]/40 bg-white/70'}`}>
            {/* Glossy Highlights */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5 pointer-events-none z-0"></div>
            
            <div className="relative z-10 w-full h-full p-8 sm:p-12 flex flex-col justify-between" style={{ color: textColor }}>
              <div className="flex justify-between items-start">
                <div className="serif italic text-3xl sm:text-5xl font-black tracking-tighter drop-shadow-sm transition-colors duration-1000">Jane West</div>
                <div className="flex flex-col items-end space-y-1">
                   <div className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">Identity</div>
                   <div className={`w-10 h-[2px] transition-colors duration-1000`} style={{ backgroundColor: accentColor }}></div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-10">
                <div className={`w-24 h-24 sm:w-36 sm:h-36 p-3 sm:p-4 rounded-[32px] border shadow-2xl flex items-center justify-center backdrop-blur-[30px] overflow-hidden transform group-hover:scale-105 transition-all duration-1000 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white/50 border-white/60'}`}>
                  <img 
                    src={qrCodeUrl} 
                    alt="Jane West Website QR" 
                    className={`w-full h-full object-contain transition-all duration-1000 ${isDarkMode ? 'invert-0' : 'mix-blend-multiply opacity-90'}`}
                    loading="lazy"
                  />
                </div>
                
                <div className="text-center space-y-1">
                  <div className="text-xs sm:text-base tracking-[0.5em] font-black uppercase transition-colors duration-1000" style={{ color: accentColor }}>janewest.com</div>
                  <div className="text-[9px] sm:text-[11px] font-bold tracking-[0.3em] opacity-40 uppercase transition-colors duration-1000">{JANE_WEST_CONTACT.email}</div>
                </div>
              </div>

              <div className={`flex justify-between items-end border-t pt-6 transition-colors duration-1000 ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.4em] font-black serif italic opacity-50">
                  {JANE_WEST_CONTACT.tagline}
                </div>
              </div>
            </div>

            {/* Premium Specular Sweep */}
            <div className="absolute top-0 -left-[120%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-40deg] group-hover:left-[280%] transition-all duration-[2500ms] ease-in-out"></div>
          </div>

          {/* Back Face */}
          <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[40px] overflow-hidden backdrop-blur-[30px] shadow-2xl border transition-all duration-1000 ${isDarkMode ? 'border-[#B76E79]/40 bg-black/60' : 'border-[#D9BBAE]/40 bg-white/80'}`}>
            <div className="relative z-10 w-full h-full p-10 sm:p-14 flex flex-col justify-center items-center text-center" style={{ color: textColor }}>
              <div className="space-y-12 w-full flex flex-col items-center">
                <div className="space-y-2">
                  <div className="serif italic text-xl sm:text-2xl font-black drop-shadow-sm transition-colors duration-1000">Jane West</div>
                  <div className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] opacity-40">CEO & Founder | EST. 2014</div>
                </div>

                <div className={`py-12 w-full border-y transition-colors duration-1000 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                  <div className={`text-xs sm:text-base font-black uppercase tracking-[0.8em] transition-colors duration-1000`} style={{ color: accentColor }}>
                    THE END OF THE ORDINARY
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="serif italic text-xl sm:text-2xl font-black drop-shadow-sm transition-colors duration-1000">Jane West</div>
                  <div className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] opacity-40">Innovation in Utility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
