
import React from 'react';
import { COLLECTIONS, SEO_CLUSTERS } from '../constants';

const Collections: React.FC = () => {
  return (
    <section id="collections" className="py-20 px-6 sm:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-950 mb-4 tracking-tight uppercase">Collections</h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
          <p className="mt-6 text-rose-800/60 max-w-2xl mx-auto italic font-medium">
            Architecting high-end experiences through form, function, and luxury borosilicate.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col) => (
            <div 
              key={col.id} 
              className="group relative bg-white border border-rose-100 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative background element */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${col.colorTheme} opacity-20 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform`}></div>

              <div className="relative z-10">
                <h3 className="text-xs tracking-[0.3em] font-bold text-rose-400 mb-2 uppercase">{col.title}</h3>
                <h4 className="text-2xl font-bold text-rose-950 mb-4 serif italic">{col.subtitle}</h4>
                <p className="text-sm text-rose-800/70 leading-relaxed mb-8">
                  {col.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-rose-300">Curation</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {col.featuredItems.map((item, idx) => (
                      <li key={idx} className="text-[11px] font-semibold text-rose-900/60 bg-rose-50 px-3 py-1.5 rounded-full truncate">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex items-center justify-between pt-6 border-t border-rose-50">
                   <button className="text-[10px] font-bold uppercase tracking-widest text-rose-500 hover:text-rose-700 transition-colors">
                      Request Entry
                   </button>
                   {col.status && (
                     <span className="text-[9px] font-black uppercase bg-rose-950 text-white px-3 py-1 rounded tracking-tighter">
                       {col.status}
                     </span>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Clusters Section */}
        <div className="mt-32 pt-16 border-t border-rose-100">
           <div className="max-w-4xl mx-auto space-y-12">
             <div className="text-center space-y-2">
                <h3 className="text-lg font-bold text-rose-900 serif italic">Design Ethos & Insights</h3>
                <p className="text-xs text-rose-300 uppercase tracking-widest">Industry Deep Dive</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
               {SEO_CLUSTERS.map((text, idx) => (
                 <p key={idx} className="text-xs text-rose-800/50 leading-loose text-justify font-medium">
                   {text}
                 </p>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
