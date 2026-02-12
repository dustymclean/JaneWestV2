
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import IDPage from './components/IDPage';
import CollectionsPage from './components/CollectionsPage';
import ContactPage from './components/ContactPage';
import { JANE_WEST_CONTACT } from './constants';
import GlassCard from './components/GlassCard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'id':
        return <IDPage />;
      case 'collections':
        return <CollectionsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-50/50 via-white to-white px-6 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-rose-200/10 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-rose-300/10 blur-[150px] rounded-full"></div>

            <div className="max-w-5xl w-full text-center space-y-10 py-20 relative z-10 flex flex-col items-center">
               <div className="space-y-4">
                 <h1 className="text-6xl md:text-9xl font-bold text-rose-950 tracking-tighter serif italic leading-[1.1]">
                   Life is better <br className="hidden md:block" /> with <span className="text-rose-500">Jane.</span>
                 </h1>
                 <p className="text-xs md:text-sm text-rose-800/40 uppercase tracking-[0.6em] font-black">
                   {JANE_WEST_CONTACT.tagline}
                 </p>
               </div>
               
               <div className="w-full max-w-[500px] cursor-pointer" onClick={() => setCurrentPage('id')}>
                 <GlassCard />
               </div>
               
               <div className="flex flex-col items-center space-y-6">
                  <button 
                    onClick={() => setCurrentPage('collections')}
                    className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-950 bg-white border border-rose-100 px-10 py-5 rounded-full hover:shadow-xl transition-all"
                  >
                    View Collections
                  </button>
               </div>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <footer className="bg-rose-950 text-rose-50 py-24 px-8 border-t border-rose-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="space-y-10 text-center md:text-left">
            <h2 className="serif italic text-5xl font-black tracking-tighter">Jane West</h2>
            <p className="text-sm text-rose-100/30 leading-relaxed max-w-xs mx-auto md:mx-0 font-semibold uppercase tracking-wider">
              Founder of Women Grow. Architect of the modern cannabis lifestyle. Combining Art Deco elegance with functional design.
            </p>
          </div>
          <div className="space-y-8 text-center md:text-left">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-rose-400">Navigation</h3>
            <ul className="space-y-5">
              <li><button onClick={() => setCurrentPage('home')} className="text-sm hover:text-rose-300 transition-colors font-bold uppercase tracking-widest">Home</button></li>
              <li><button onClick={() => setCurrentPage('collections')} className="text-sm hover:text-rose-300 transition-colors font-bold uppercase tracking-widest">Collections</button></li>
              <li><a href="https://janewest.com" target="_blank" rel="noreferrer" className="text-sm hover:text-rose-300 transition-colors font-bold uppercase tracking-widest">Official Store</a></li>
            </ul>
          </div>
          <div className="space-y-8 text-center md:text-left">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-rose-400">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-6">
               <a href={`mailto:${JANE_WEST_CONTACT.email}`} className="w-14 h-14 rounded-full border border-rose-800/60 flex items-center justify-center hover:bg-rose-900 transition-all group">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </a>
               <a href="#" className="w-14 h-14 rounded-full border border-rose-800/60 flex items-center justify-center hover:bg-rose-900 transition-all group font-black text-xs">IG</a>
               <a href="#" className="w-14 h-14 rounded-full border border-rose-800/60 flex items-center justify-center hover:bg-rose-900 transition-all group font-black text-xs">IN</a>
            </div>
            <div className="mt-16 text-[10px] text-rose-200/20 uppercase tracking-[0.4em] font-black">
              &copy; {new Date().getFullYear()} JANE WEST GLOBAL. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
