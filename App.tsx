
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import IDPage from './components/IDPage';
import CollectionsPage from './components/CollectionsPage';
import ContactPage from './components/ContactPage';
import PressKitPage from './components/PressKitPage';
import { JANE_WEST_CONTACT } from './constants';
import GlassCard from './components/GlassCard';
import VCFButton from './components/VCFButton';
import InfoOverlay from './components/InfoOverlay';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleEmailCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(JANE_WEST_CONTACT.email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'id':
        return <IDPage isDarkMode={isDarkMode} />;
      case 'collections':
        return <CollectionsPage isDarkMode={isDarkMode} />;
      case 'contact':
        return <ContactPage isDarkMode={isDarkMode} setPage={setCurrentPage} />;
      case 'press':
        return <PressKitPage isDarkMode={isDarkMode} />;
      default:
        return (
          <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
             {/* Radial Atmospheric Blobs */}
             <div className={`absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] blur-[150px] rounded-full opacity-20 transition-all duration-1000 ${isDarkMode ? 'bg-[#C5A381]' : 'bg-[#B76E79]'}`}></div>
             <div className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] blur-[150px] rounded-full opacity-20 transition-all duration-1000 ${isDarkMode ? 'bg-[#B76E79]' : 'bg-[#C5A381]'}`}></div>

             {/* Increased pt-44 to add space above the title as requested */}
             <div className="max-w-5xl w-full text-center space-y-12 pt-44 pb-20 relative z-10 flex flex-col items-center">
               <div className="space-y-6">
                 <h1 className={`text-6xl md:text-[10rem] font-bold tracking-tighter serif italic leading-[0.9] transition-colors duration-700 ${isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'}`}>
                   Life is better <br className="hidden md:block" /> with <span style={{ color: isDarkMode ? '#C5A381' : '#B76E79' }}>Jane.</span>
                 </h1>
                 <p className={`text-xs md:text-sm uppercase tracking-[0.8em] font-black opacity-40 transition-colors duration-1000 ${isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'}`}>
                   {JANE_WEST_CONTACT.tagline}
                 </p>
               </div>
               
               <div className="flex flex-col items-center space-y-10 w-full max-w-[500px]">
                 <div className="w-full cursor-pointer" onClick={() => setCurrentPage('id')}>
                   <GlassCard isDarkMode={isDarkMode} />
                 </div>
                 <div className="flex flex-col items-center space-y-6">
                    <VCFButton isDarkMode={isDarkMode} />
                    <button 
                      onClick={() => setCurrentPage('collections')}
                      className={`text-[10px] font-black uppercase tracking-[0.4em] px-12 py-6 rounded-full border transition-all duration-300 ${
                        isDarkMode 
                        ? 'border-[#B76E79]/40 text-[#FEE2E2] hover:bg-[#C5A381] hover:text-[#0D0204]' 
                        : 'border-[#D9BBAE]/40 text-[#1A050A] hover:bg-[#C5A381] hover:text-[#1A050A] shadow-xl'
                      }`}
                    >
                      View Catalog
                    </button>
                 </div>
               </div>
             </div>
          </section>
        );
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-1000 ${
      isDarkMode ? 'bg-[#0D0204] text-[#FEE2E2]' : 'bg-[#FDF2F2] text-[#1A050A]'
    }`}>
      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .serif { font-family: 'Playfair Display', serif; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&display=swap');
        
        ::selection {
          background: ${isDarkMode ? '#C5A381' : '#B76E79'};
          color: ${isDarkMode ? '#0D0204' : '#FDF2F2'};
        }
      `}</style>

      <Navbar currentPage={currentPage} setPage={setCurrentPage} isDarkMode={isDarkMode} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <footer className={`py-32 px-10 border-t transition-all duration-1000 ${
        isDarkMode ? 'bg-black border-white/5 text-[#FEE2E2]' : 'bg-[#1A050A] border-black/5 text-white'
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="space-y-12 text-center md:text-left">
            <h2 className="serif italic text-6xl font-black tracking-tighter">Jane West</h2>
            <p className="text-sm opacity-40 leading-loose max-w-xs mx-auto md:mx-0 font-bold uppercase tracking-widest">
              Founder of Women Grow. Architect of the modern cannabis lifestyle. Combining Art Deco elegance with functional design.
            </p>
          </div>
          <div className="space-y-10 text-center md:text-left">
            <h3 className="text-[11px] font-black uppercase tracking-[0.5em]" style={{ color: isDarkMode ? '#C5A381' : '#B76E79' }}>Navigation</h3>
            <ul className="space-y-6">
              <li><button onClick={() => setCurrentPage('home')} className="text-sm hover:opacity-100 transition-opacity opacity-60 font-black uppercase tracking-[0.3em]">Home</button></li>
              <li><button onClick={() => setCurrentPage('collections')} className="text-sm hover:opacity-100 transition-opacity opacity-60 font-black uppercase tracking-[0.3em]">Collections</button></li>
              <li><a href="https://janewest.com" target="_blank" rel="noreferrer" className="text-sm hover:opacity-100 transition-opacity opacity-60 font-black uppercase tracking-[0.3em]">Official Store</a></li>
              <li><button onClick={() => setCurrentPage('press')} className="text-sm hover:opacity-100 transition-opacity opacity-60 font-black uppercase tracking-[0.3em]">Press Kit</button></li>
            </ul>
          </div>
          <div className="space-y-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-8">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`group flex items-center space-x-8 px-10 py-5 rounded-full border transition-all duration-1000 shadow-xl ${
                  isDarkMode ? 'border-[#B76E79]/40 bg-white/5 text-[#C5A381]' : 'border-[#D9BBAE]/40 bg-white text-[#B76E79]'
                }`}
              >
                <span className="text-[11px] font-black uppercase tracking-widest">
                  {isDarkMode ? 'Lunar Interface' : 'Solar Interface'}
                </span>
                <div className={`w-4 h-4 rounded-full transition-all duration-1000 ${
                  isDarkMode ? 'bg-[#C5A381] shadow-[0_0_15px_rgba(197,163,129,0.8)]' : 'bg-[#B76E79] shadow-[0_0_15px_rgba(183,110,121,0.5)]'
                }`}></div>
              </button>
            </div>
            <div className="flex justify-center md:justify-start space-x-8 mt-6 relative">
               <button 
                 onClick={handleEmailCopy} 
                 className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all group relative ${isDarkMode ? 'border-white/10 hover:bg-white/5' : 'border-white/20 hover:bg-white/10'}`}
                 title="Copy Jane's Email"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 {emailCopied && (
                   <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[9px] font-black uppercase rounded shadow-lg whitespace-nowrap">Copied</span>
                 )}
               </button>
               <a 
                 href="https://www.instagram.com/betterwithjane/?hl=en" 
                 target="_blank" 
                 rel="noreferrer" 
                 className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all group ${isDarkMode ? 'border-white/10 hover:bg-white/5' : 'border-white/20 hover:bg-white/10'}`}
               >
                 <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </a>
            </div>
            <div className="mt-12 text-[9px] font-black uppercase tracking-[0.4em] opacity-20">
              &copy; {new Date().getFullYear()} JANE WEST GLOBAL.
            </div>
          </div>
        </div>
      </footer>

      <InfoOverlay isDarkMode={isDarkMode} />
    </div>
  );
}
