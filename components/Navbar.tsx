
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
  isDarkMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, isDarkMode = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'id', label: 'THE ID' },
    { id: 'collections', label: 'COLLECTIONS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNav = (id: string) => {
    setPage(id);
    setIsMenuOpen(false);
  };

  const accentColor = isDarkMode ? "#C5A381" : "#B76E79";

  return (
    <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-1000 border-b backdrop-blur-[30px] ${
      isDarkMode ? 'bg-[#0D0204]/80 border-white/5' : 'bg-white/80 border-[#D9BBAE]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 md:py-8 flex justify-between items-center">
        <div 
          className={`serif italic text-2xl sm:text-3xl font-black tracking-tighter cursor-pointer transition-colors duration-1000 ${
            isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'
          }`}
          onClick={() => handleNav('home')}
        >
          Jane West
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-[10px] font-black uppercase tracking-[0.5em] transition-all duration-300 relative group ${
                currentPage === item.id 
                  ? (isDarkMode ? 'text-[#C5A381]' : 'text-[#B76E79]') 
                  : (isDarkMode ? 'text-[#FEE2E2]/40 hover:text-[#FEE2E2]' : 'text-[#1A050A]/40 hover:text-[#1A050A]')
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-px" 
                  style={{ backgroundColor: accentColor }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-3 relative z-[200] outline-none touch-manipulation"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <motion.div 
              animate={isMenuOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className={`h-0.5 transition-colors duration-500 ${isDarkMode ? 'bg-[#FEE2E2]' : 'bg-[#1A050A]'}`} 
              style={{ originX: 1 }}
            />
            <motion.div 
              animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1, width: "70%" }}
              className={`h-0.5 transition-colors duration-500 ${isDarkMode ? 'bg-[#FEE2E2]' : 'bg-[#1A050A]'}`} 
            />
            <motion.div 
              animate={isMenuOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className={`h-0.5 transition-colors duration-500 ${isDarkMode ? 'bg-[#FEE2E2]' : 'bg-[#1A050A]'}`} 
              style={{ originX: 1 }}
            />
          </div>
        </button>

        {/* Status Indicator (Desktop Only) */}
        <div className="hidden sm:flex items-center space-x-6">
           <div className={`w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_15px_rgba(183,110,121,0.5)] transition-colors duration-1000 ${isDarkMode ? 'bg-[#C5A381]' : 'bg-[#B76E79]'}`}></div>
           <span className={`text-[9px] font-black uppercase tracking-[0.4em] opacity-30 transition-colors duration-1000 ${isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'}`}>Live Experience</span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[160] md:hidden"
          >
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm flex flex-col items-center justify-center space-y-12 border-l shadow-2xl ${
                isDarkMode 
                  ? 'bg-[#0D0204] text-[#FEE2E2] border-white/5' 
                  : 'bg-[#FDF2F2] text-[#1A050A] border-[#D9BBAE]/20'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none"></div>
              
              <div className="flex flex-col items-center space-y-10 w-full px-12">
                {navItems.map((item, i) => (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className="w-full text-center group"
                  >
                    <div className={`text-3xl font-black uppercase tracking-[0.2em] serif italic transition-all duration-300 ${
                      currentPage === item.id 
                        ? (isDarkMode ? 'text-[#C5A381]' : 'text-[#B76E79]') 
                        : 'opacity-40 group-hover:opacity-100'
                    }`}>
                      {item.label}
                    </div>
                    {currentPage === item.id && (
                      <motion.div 
                        layoutId="mobile-nav-dot"
                        className="w-1.5 h-1.5 rounded-full mx-auto mt-2"
                        style={{ backgroundColor: accentColor }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-12 flex flex-col items-center space-y-6"
              >
                <div className={`w-px h-24 ${isDarkMode ? 'bg-[#C5A381]/20' : 'bg-[#B76E79]/20'}`}></div>
                <div className="text-center space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 block">Jane West Global</span>
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-20 block">EST. 2014</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
