
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InfoOverlay: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactEmail = "notary@northmsnotary.com";
  const accentColor = isDarkMode ? "#C5A381" : "#B76E79";
  const qrColor = isDarkMode ? "fee2e2" : "1a050a";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(`mailto:${contactEmail}`)}&color=${qrColor}&bgcolor=ffffff00&qzone=1`;

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-[100] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center cursor-pointer shadow-2xl transition-all border border-white/60 group overflow-hidden"
        style={{
          background: isDarkMode ? '#C5A381' : '#B76E79',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
        }}
        title="Collaborate with the Architect"
      >
        <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="serif italic text-2xl sm:text-3xl font-black text-white mb-0.5 drop-shadow-lg">i</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden border transition-all duration-1000 ${
                isDarkMode ? 'bg-[#0D0204] border-white/10' : 'bg-[#FDF2F2] border-[#D9BBAE]/30'
              }`}
              style={{ maxHeight: '90vh' }}
            >
              <div className="overflow-y-auto p-10 md:p-16 h-full max-h-[90vh] custom-scrollbar">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 opacity-40 hover:opacity-100 transition-colors duration-500"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative z-10 flex flex-col items-center text-center space-y-10 sm:space-y-12">
                  <div className="space-y-4 sm:space-y-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.8em]" style={{ color: accentColor }}>Digital Architecture</span>
                    <h3 className={`serif italic text-3xl sm:text-5xl font-black leading-[1.1] tracking-tighter ${isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'}`}>
                      Elevate your <br /> Digital Identity.
                    </h3>
                  </div>

                  <div className="w-16 h-px opacity-20" style={{ backgroundColor: accentColor }}></div>

                  <p className={`text-base sm:text-xl font-bold leading-relaxed tracking-tight max-w-sm opacity-70 ${isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'}`}>
                    Captivated by this experience? Whether you require a high-prestige glass card or a bespoke digital gallery, we architect premium landscapes for modern visionaries.
                  </p>

                  <div className="space-y-8 sm:space-y-10 flex flex-col items-center w-full pt-4">
                    <div className={`p-5 sm:p-6 bg-white rounded-[40px] sm:rounded-[48px] border shadow-2xl transform transition-transform hover:scale-105 duration-1000 ${isDarkMode ? 'border-white/10' : 'border-[#D9BBAE]/20'}`}>
                      <img 
                        src={qrCodeUrl} 
                        alt="Contact QR" 
                        className={`w-32 h-32 sm:w-40 sm:h-40 object-contain transition-all duration-1000 ${isDarkMode ? '' : 'mix-blend-multiply opacity-90'}`}
                      />
                    </div>
                    
                    <div className="space-y-4 w-full">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Direct Inquiry Channel</p>
                      <button 
                        onClick={handleCopy}
                        className={`text-base sm:text-2xl font-black transition-all duration-500 underline underline-offset-8 decoration-transparent hover:decoration-current relative group w-full break-all ${isDarkMode ? 'text-[#FEE2E2] hover:text-[#C5A381]' : 'text-[#1A050A] hover:text-[#C5A381]'}`}
                      >
                        {contactEmail}
                        <AnimatePresence>
                          {copied && (
                            <motion.span 
                              initial={{ opacity: 0, y: 10 }} 
                              animate={{ opacity: 1, y: 0 }} 
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1 rounded shadow-xl"
                            >
                              Copied
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 w-full">
                    <button 
                      onClick={() => setIsOpen(false)}
                      className={`w-full py-5 sm:py-6 rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl transition-all duration-700 hover:-translate-y-1 active:scale-95 ${
                        isDarkMode ? 'bg-[#C5A381] text-[#0D0204]' : 'bg-[#1A050A] text-[#FDF2F2] hover:bg-[#C5A381]'
                      }`}
                    >
                      Return to the Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${accentColor}; border-radius: 10px; opacity: 0.3; }
      `}</style>
    </>
  );
};

export default InfoOverlay;
