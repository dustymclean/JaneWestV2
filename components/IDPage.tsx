
import React, { useState } from 'react';
import GlassCard from './GlassCard';

const IDPage: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setRotation({ x: y * 20, y: -x * 20 });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center bg-[#fffafb] overflow-hidden">
      <div className="max-w-4xl w-full text-center space-y-4 mb-12">
        <h2 className="text-sm font-black uppercase tracking-[0.5em] text-rose-400">The Artifact</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-rose-950 serif italic">Digital Identity</h1>
        <p className="text-rose-800/40 uppercase tracking-widest text-[10px] font-bold">Interact with the future of Jane West networking</p>
      </div>

      <div 
        className="relative w-full max-w-[600px] h-[400px] flex items-center justify-center perspective-2000"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div 
          className="w-full transition-transform duration-200 ease-out"
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          <GlassCard />
        </div>
        
        {/* Floating background blobs */}
        <div className="absolute -z-10 w-[150%] h-[150%] bg-gradient-to-tr from-rose-200/20 via-white to-rose-100/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full text-center">
        <div className="p-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-rose-950 mb-2">Phantom Effect</h3>
          <p className="text-xs text-rose-800/50 leading-relaxed font-medium">Transparent from reverse, information-rich from front. A dual-plane borosilicate marvel.</p>
        </div>
        <div className="p-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-rose-950 mb-2">Metallic Etch</h3>
          <p className="text-xs text-rose-800/50 leading-relaxed font-medium">Rose gold laser etching at 1200 DPI ensures crisp readability and luxury aesthetic.</p>
        </div>
        <div className="p-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-rose-950 mb-2">VCF Integrated</h3>
          <p className="text-xs text-rose-800/50 leading-relaxed font-medium">Universal contact card deployment optimized for both iOS and Android ecosystems.</p>
        </div>
      </div>
    </section>
  );
};

export default IDPage;
