
import React from 'react';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'id', label: 'THE ID' },
    { id: 'collections', label: 'COLLECTIONS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-rose-100/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div 
          className="serif italic text-3xl font-black text-rose-950 tracking-tighter cursor-pointer"
          onClick={() => setPage('home')}
        >
          Jane West
        </div>
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${
                currentPage === item.id ? 'text-rose-600' : 'text-rose-950/60 hover:text-rose-950'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
           <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
           <span className="text-[8px] font-bold uppercase tracking-widest text-rose-400">Live Experience</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
