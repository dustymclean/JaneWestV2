
import React, { useState } from 'react';
import { COLLECTIONS_EXTENDED } from '../constants';

const CollectionsPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#0a0a0a] text-rose-50' : 'bg-white text-rose-950'}`}>
      <section className="pt-32 pb-20 px-6 sm:px-12" aria-labelledby="collections-main-title">
        <div className="max-w-7xl mx-auto">
          {/* Header & Toggle */}
          <header className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-8 md:space-y-0">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.5em] text-rose-500 mb-6 block">Curated Collections</span>
              <h1 id="collections-main-title" className={`text-4xl md:text-7xl font-bold serif italic leading-tight ${isDarkMode ? 'text-white' : 'text-rose-950'}`}>
                A decade of architecting <br /> the future.
              </h1>
              <p className={`mt-8 text-sm uppercase tracking-[0.2em] font-medium leading-relaxed ${isDarkMode ? 'text-rose-200/40' : 'text-rose-900/40'}`}>
                A DECADE OF ARCHITECTING THE FUTURE OF HIGH-END GLASSWARE AND WELLNESS.
              </p>
            </div>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                isDarkMode ? 'border-rose-800 text-rose-400 hover:bg-rose-900/20' : 'border-rose-100 text-rose-900 hover:bg-rose-50'
              }`}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </header>

          {/* Collections Grid (SEO Rich) */}
          <div className="space-y-32">
            {COLLECTIONS_EXTENDED.map((col, idx) => (
              <article 
                key={col.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                aria-labelledby={`title-${col.id}`}
              >
                <div className={`order-2 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-500 mb-4 block">
                    {col.category}
                  </span>
                  <h2 id={`title-${col.id}`} className="text-3xl md:text-5xl font-bold serif italic mb-6">{col.title}</h2>
                  <p className={`text-base md:text-lg mb-8 leading-relaxed font-medium ${isDarkMode ? 'text-rose-100/60' : 'text-rose-900/60'}`}>
                    {col.subtitle}
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-rose-100/40' : 'text-rose-900/40'}`}>
                      {col.description}
                    </p>
                    <div className="flex flex-wrap gap-2" role="list">
                      {col.featuredItems.map((item) => (
                        <span key={item} role="listitem" className={`text-[9px] font-black px-4 py-2 rounded-full tracking-widest border ${
                          isDarkMode ? 'border-rose-800 bg-rose-900/20 text-rose-300' : 'border-rose-100 bg-rose-50 text-rose-800'
                        }`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 pt-8 border-t border-rose-100/10">
                    <button className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 hover:text-rose-400 transition-colors">
                      View Details
                    </button>
                    {col.status === 'SELECTED' && (
                      <span className="text-[9px] font-black uppercase tracking-tighter bg-rose-600 text-white px-3 py-1 rounded">
                        Selected Line
                      </span>
                    )}
                  </div>
                </div>

                {/* SEO Cluster Box - Semantic Aside */}
                <aside className={`order-1 p-12 rounded-[40px] transition-colors duration-500 ${
                  isDarkMode ? 'bg-rose-950/20 border border-rose-900/30' : 'bg-rose-50 border border-rose-100'
                } ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-6">
                    <div className="w-12 h-1 bg-rose-500/30"></div>
                    <p className={`text-xs md:text-sm font-bold uppercase tracking-[0.1em] leading-loose italic ${
                      isDarkMode ? 'text-rose-200/30' : 'text-rose-900/40'
                    }`}>
                      {col.seoCluster}
                    </p>
                  </div>
                </aside>
              </article>
            ))}
          </div>

          {/* Bottom Banner */}
          <footer className="mt-40 text-center space-y-6 py-20 border-y border-rose-500/10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-rose-500">Fine Borosilicate & Lifestyle</h4>
            <p className="text-3xl md:text-5xl font-bold serif italic text-rose-950/20">Full Experience</p>
            <p className="text-xs font-bold uppercase tracking-widest text-rose-400">ARCHITECTING THE FUTURE SINCE 2014</p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
