
import React, { useState } from 'react';
import GlassCard from './GlassCard';
import VCFButton from './VCFButton';

interface IDPageProps {
  isDarkMode?: boolean;
}

const IDPage: React.FC<IDPageProps> = ({ isDarkMode = false }) => {
  const accentColor = isDarkMode ? "#C5A381" : "#B76E79";

  return (
    <div className="pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[80vh] transition-colors duration-1000">
      <div className="text-center mb-16 space-y-4">
        <span className={`text-[10px] font-black uppercase tracking-[0.5em] transition-colors duration-1000`} style={{ color: accentColor }}>The Artifact</span>
        <h2 className={`text-5xl font-bold serif italic transition-colors duration-1000 ${isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'}`}>Digital Identity</h2>
      </div>
      <GlassCard isDarkMode={isDarkMode} />
      <div className="mt-12">
         <VCFButton isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default IDPage;
