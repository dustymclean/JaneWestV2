
import React, { useState } from 'react';
import { COLLECTIONS_EXTENDED } from '../constants';

const CollectionsPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isDarkMode ? 'bg-[#050505] text-rose-50' : 'bg-[#fffafb] text-rose-950'}`}>
      {/* Decorative Background Refraction */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-rose-200 to-transparent blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-rose-300/30 to-transparent blur-[120px]"></div>
      </div>

      <section className="relative z-10 pt-40 pb-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <header className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-[1px] bg-rose-500"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.8em] text-rose-500">The Catalog</span>
                </div>
                <h1 className={`text-5xl md:text-9xl font-bold serif italic leading-tight mb-8 ${isDarkMode ? 'text-white' : 'text-rose-950'}`}>
                  Designing the <br /> Modern Ritual.
                </h1>
                <p className={`text-lg md:text-xl font-medium max-w-2xl leading-relaxed ${isDarkMode ? 'text-rose-100/40' : 'text-rose-900/50'}`}>
                  For over a decade, Jane West has balanced the precision of scientific glass with the elegance of Art Deco design, creating a new vernacular for sophisticated consumption.
                </p>
              </div>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`group flex items-center space-x-4 px-8 py-4 rounded-full border transition-all duration-500 ${
                  isDarkMode ? 'border-rose-800 text-rose-400 hover:bg-rose-900/20' : 'border-rose-200 text-rose-900 hover:bg-rose-50'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {isDarkMode ? 'Lunar View' : 'Solar View'}
                </span>
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${isDarkMode ? 'bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.5)]' : 'bg-rose-900'}`}></div>
              </button>
            </div>
          </header>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-48">
            {[
              { title: 'MATERIALITY', desc: 'Sourcing laboratory-grade borosilicate for thermal shock resistance and unparalleled clarity.' },
              { title: 'DISCRETION', desc: 'Objects designed to sit proudly on your bookshelf or disappear seamlessly into your daily carry.' },
              { title: 'AESTHETIC', desc: 'A design language rooted in Art Deco symmetry and mid-century modern architectural silhouettes.' }
            ].map((tenet, i) => (
              <div key={i} className={`p-10 rounded-[32px] border ${isDarkMode ? 'border-rose-900/20 bg-rose-950/10' : 'border-rose-100 bg-white shadow-sm'}`}>
                <h3 className="text-[10px] font-black tracking-[0.4em] text-rose-500 mb-6">{tenet.title}</h3>
                <p className={`text-sm leading-relaxed font-medium ${isDarkMode ? 'text-rose-100/50' : 'text-rose-900/60'}`}>{tenet.desc}</p>
              </div>
            ))}
          </div>

          {/* Main Collection Display */}
          <div className="space-y-48">
            {COLLECTIONS_EXTENDED.map((col, idx) => (
              <article 
                key={col.id} 
                className={`max-w-4xl mx-auto`}
              >
                {/* Content Area */}
                <div className="flex flex-col justify-center">
                  <div className="mb-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-500">
                        {col.category}
                      </span>
                      <div className="h-px flex-grow bg-rose-500/10"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-500/30">
                        Series // 00{idx + 1}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-7xl font-bold serif italic mb-8">{col.title}</h2>
                    <p className={`text-xl md:text-2xl mb-12 leading-relaxed font-medium italic ${isDarkMode ? 'text-rose-100/70' : 'text-rose-900/70'}`}>
                      {col.subtitle}
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-12 border-y border-rose-500/10 py-8">
                      <div className="space-y-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">Primary Material</span>
                        <p className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-rose-950'}`}>Borosilicate 3.3</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">Design Era</span>
                        <p className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-rose-950'}`}>Art Deco / MCM</p>
                      </div>
                    </div>
                    
                    <p className={`text-lg leading-relaxed mb-12 ${isDarkMode ? 'text-rose-100/40' : 'text-rose-900/50'}`}>
                      {col.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-12">
                      {col.featuredItems.map((item) => (
                        <span key={item} className={`text-[9px] font-black px-5 py-3 rounded-full tracking-widest border transition-all ${
                          isDarkMode 
                            ? 'border-rose-900/40 bg-rose-950/20 text-rose-400 hover:border-rose-500 hover:text-rose-200' 
                            : 'border-rose-100 bg-white text-rose-800 hover:border-rose-300 hover:bg-rose-50'
                        }`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Curators Insight / SEO Cluster */}
                  <div className={`p-10 rounded-[40px] relative overflow-hidden ${
                    isDarkMode ? 'bg-rose-950/30' : 'bg-rose-50/50'
                  }`}>
                    <span className="text-[9px] font-black uppercase tracking-widest text-rose-400 mb-6 block underline decoration-rose-500/30 underline-offset-4">Designer's Journal</span>
                    <p className={`text-[12px] md:text-sm font-medium uppercase tracking-[0.12em] leading-loose italic ${
                      isDarkMode ? 'text-rose-100/30' : 'text-rose-900/40'
                    }`}>
                      {col.seoCluster}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Technical Masterclass Section */}
          <div className={`mt-64 p-12 md:p-24 rounded-[60px] text-center space-y-12 border ${
            isDarkMode ? 'bg-gradient-to-b from-rose-950/20 to-transparent border-rose-900/30' : 'bg-white border-rose-100 shadow-2xl'
          }`}>
            <h3 className="text-[10px] font-black uppercase tracking-[0.8em] text-rose-500">Crafting Excellence</h3>
            <h4 className="text-4xl md:text-7xl font-bold serif italic text-rose-950 leading-tight">
              Architected to be <br /> timeless.
            </h4>
            <div className="max-w-3xl mx-auto space-y-8">
               <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-rose-100/50' : 'text-rose-900/60'}`}>
                 Every Jane West piece undergoes rigorous quality control to ensure that the intersection of form and function is never compromised. Our borosilicate glass is hand-blown and machine-finished for mathematical precision.
               </p>
               <div className="flex justify-center space-x-12 pt-12">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">10+</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-rose-400">Years of Design</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">3.3</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-rose-400">Expansion Grade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">01</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-rose-400">Jane West</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <footer className="py-20 text-center opacity-30">
        <div className="text-[10px] font-black uppercase tracking-[1em]">The End of the Ordinary</div>
      </footer>
    </div>
  );
};

export default CollectionsPage;
