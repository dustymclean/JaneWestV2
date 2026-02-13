
import React from 'react';
import { motion } from 'framer-motion';
import { COLLECTIONS_EXTENDED } from '../constants';

const DecoPattern = ({ type, color }: { type: number, color: string }) => {
  if (type === 0) { // Sunburst
    return (
      <svg className={`absolute inset-0 w-full h-full opacity-[0.03] ${color}`} viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 L52 48 L100 50 L52 52 L50 100 L48 52 L0 50 L48 48 Z" />
        <circle cx="50" cy="50" r="2" />
      </svg>
    );
  }
  if (type === 1) { // Linear Grid
    return (
      <div className={`absolute inset-0 opacity-[0.05] ${color}`} style={{ backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    );
  }
  return ( // Fans
    <svg className={`absolute inset-0 w-full h-full opacity-[0.03] ${color}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
      <circle cx="50" cy="100" r="40" />
      <circle cx="50" cy="100" r="30" />
      <circle cx="50" cy="100" r="20" />
      <line x1="50" y1="100" x2="10" y2="60" />
      <line x1="50" y1="100" x2="90" y2="60" />
      <line x1="50" y1="100" x2="50" y2="50" />
    </svg>
  );
};

const CollectionsPage: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const accentColor = isDarkMode ? "#C5A381" : "#B76E79";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Slightly larger offset for the mobile sticky nav
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
    <div className={`min-h-screen transition-colors duration-1000 ${isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'}`}>
      <section className="relative z-10 pt-44 pb-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="mb-24">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl"
              >
                <div className="flex items-center space-x-8 mb-12">
                  <div className="w-20 h-[2px]" style={{ backgroundColor: accentColor }}></div>
                  <span className="text-[11px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>Architectural Archive</span>
                </div>
                <h1 className={`text-6xl md:text-[10.5rem] font-black serif italic leading-[0.8] mb-14 tracking-tighter transition-colors duration-1000`}>
                  Curating the <br /> <span style={{ color: accentColor }}>Modern Ritual.</span>
                </h1>
                <p className={`text-xl md:text-3xl font-bold max-w-2xl leading-relaxed opacity-60 transition-colors duration-1000`}>
                  A decade of industrial precision. Jane West harmonizes the rugged durability of scientific borosilicate with the immortal elegance of Art Deco architecture.
                </p>
              </motion.div>
            </div>
          </header>

          {/* Luxury Navigation Bar - Optimized for Mobile Scrolling */}
          <div className="sticky top-24 md:top-28 z-40 mb-20 md:mb-36 px-2">
            <div className={`p-1.5 md:p-2.5 rounded-full border backdrop-blur-[30px] flex overflow-x-auto scrollbar-hide space-x-2 md:space-x-3 transition-colors duration-1000 ${isDarkMode ? 'bg-black/60 border-white/10' : 'bg-white/80 border-[#D9BBAE]/20 shadow-2xl'}`}>
              {COLLECTIONS_EXTENDED.map((col) => (
                <button
                  key={col.id}
                  onClick={() => scrollToSection(col.id)}
                  className={`flex-shrink-0 px-6 md:px-10 py-4 md:py-5 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all duration-500 whitespace-nowrap ${
                    isDarkMode ? 'text-[#FEE2E2]/60 hover:bg-[#C5A381]/20 hover:text-[#C5A381]' : 'text-[#1A050A]/60 hover:bg-[#B76E79]/10 hover:text-[#1A050A]'
                  }`}
                >
                  {col.category}
                </button>
              ))}
            </div>
          </div>

          {/* Main Collection Display */}
          <div className="space-y-48 md:space-y-72">
            {COLLECTIONS_EXTENDED.map((col, idx) => (
              <motion.article 
                id={col.id}
                key={col.id} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                className={`relative group scroll-mt-48 md:scroll-mt-36 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}
              >
                <div className={`absolute inset-y-0 ${idx % 2 === 0 ? '-left-24' : '-right-24'} w-1/2 opacity-5 pointer-events-none overflow-hidden`}>
                   <DecoPattern type={idx % 3} color={isDarkMode ? 'text-[#C5A381]' : 'text-[#B76E79]'} />
                </div>

                <div className={`max-w-6xl mx-auto flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'}`}>
                  <div className="w-full">
                    <div className={`flex items-center space-x-8 mb-10 md:mb-14 ${idx % 2 === 0 ? '' : 'flex-row-reverse space-x-reverse'}`}>
                      <span className="text-[12px] font-black uppercase tracking-[0.8em]" style={{ color: accentColor }}>
                        {col.category}
                      </span>
                      <div className="h-px w-16 md:w-28" style={{ backgroundColor: isDarkMode ? `${accentColor}33` : `${accentColor}33` }}></div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.5em] opacity-30">
                        SERIES // 0{idx + 1}
                      </span>
                    </div>
                    
                    <a href={col.mainLink} target="_blank" rel="noreferrer" className="block group/title">
                      <h2 className="text-4xl md:text-[9rem] font-black serif italic mb-8 md:mb-14 leading-none tracking-tighter transition-colors duration-1000 group-hover/title:text-[#C5A381]">{col.title}</h2>
                    </a>
                    
                    <div className={`max-w-4xl ${idx % 2 === 0 ? '' : 'ml-auto'}`}>
                      <p className={`text-2xl md:text-6xl mb-12 md:mb-24 leading-tight font-bold italic tracking-tight opacity-90 transition-colors duration-1000`}>
                        {col.subtitle}
                      </p>

                      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 mb-12 md:mb-24 border-y py-12 md:py-20 transition-colors duration-1000 ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
                        <div className="space-y-4 md:space-y-6">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: accentColor }}>Material Engineering</span>
                          <p className="text-xs md:text-base font-black uppercase tracking-[0.3em]">Lab-Grade Borosilicate 3.3</p>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: accentColor }}>Design Philosophy</span>
                          <p className="text-xs md:text-base font-black uppercase tracking-[0.3em]">Architectural Art Deco</p>
                        </div>
                      </div>
                      
                      <p className="text-lg md:text-2xl leading-relaxed mb-12 md:mb-24 font-bold tracking-tight opacity-50">
                        {col.description}
                      </p>

                      <div className={`flex flex-wrap gap-4 md:gap-6 mb-20 md:mb-28 ${idx % 2 === 0 ? '' : 'justify-end'}`}>
                        {col.featuredItems.map((item) => {
                          const link = col.itemLinks?.[item];
                          return (
                            <a 
                              key={item} 
                              href={link} 
                              target="_blank" 
                              rel="noreferrer"
                              className={`text-[9px] md:text-[10px] font-black px-8 md:px-12 py-4 md:py-6 rounded-full tracking-[0.4em] border transition-all duration-700 shadow-xl ${
                                isDarkMode 
                                  ? 'border-[#B76E79]/20 bg-black/40 text-[#C5A381] hover:border-[#C5A381] hover:bg-black/60' 
                                  : 'border-[#D9BBAE]/20 bg-white text-[#1A050A] hover:border-[#B76E79] hover:bg-[#FDF2F2]'
                              }`}
                            >
                              {item}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.015 }}
                    className={`p-10 md:p-24 rounded-[40px] md:rounded-[64px] relative overflow-hidden w-full text-left transition-all duration-1000 backdrop-blur-[30px] ${
                      isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-[#D9BBAE]/20'
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center space-x-6 mb-8 md:mb-12">
                        <div className="w-12 h-px" style={{ backgroundColor: accentColor }}></div>
                        <span className="text-[11px] font-black uppercase tracking-[0.8em]" style={{ color: accentColor }}>The Designer's Manifesto</span>
                      </div>
                      <p className={`text-xs md:text-lg font-bold uppercase tracking-[0.25em] leading-loose italic opacity-30 transition-colors duration-1000`}>
                        {col.seoCluster}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Credo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-48 md:mt-72 p-10 md:p-48 rounded-[60px] md:rounded-[100px] text-center space-y-20 md:space-y-24 border relative overflow-hidden transition-all duration-1000 backdrop-blur-[30px] ${
              isDarkMode ? 'bg-black/50 border-white/10' : 'bg-white/70 border-[#D9BBAE]/20 shadow-2xl'
            }`}
          >
            <div className="relative z-10 space-y-16 md:space-y-20">
              <h3 className="text-[12px] font-black uppercase tracking-[1.2em]" style={{ color: accentColor }}>The Jane West Credo</h3>
              <div className="space-y-10 md:space-y-12">
                <h4 className={`text-4xl md:text-[11rem] font-black serif italic leading-[0.75] tracking-tighter transition-colors duration-1000`}>
                  Architected to be <br /> timeless.
                </h4>
                <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
                   <p className="text-lg md:text-3xl leading-relaxed font-bold tracking-tight opacity-60">
                     Every Jane West piece undergoes rigorous quality control to ensure that the intersection of form and function is never compromised. Our borosilicate glass is hand-blown and machine-finished for mathematical precision.
                   </p>
                </div>
              </div>

              {/* Stat Grid Restoration */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pt-16 md:pt-24 border-t transition-colors duration-1000 ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
                <div className="space-y-4 md:space-y-6">
                  <div className="text-5xl md:text-8xl font-black serif italic tracking-tighter">10+</div>
                  <div className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] opacity-40">Years of Design</div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="text-5xl md:text-8xl font-black serif italic tracking-tighter">3.3</div>
                  <div className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] opacity-40">Expansion Grade</div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="text-5xl md:text-8xl font-black serif italic tracking-tighter">01</div>
                  <div className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] opacity-40">Jane West</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CollectionsPage;
