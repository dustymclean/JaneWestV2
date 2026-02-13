
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VCFButton from './VCFButton';

const FORM_ACTION = 'https://formspree.io/f/xgolayjv';

const pathways = [
  { 
    id: 'wholesale', 
    title: 'WHOLESALE & RETAIL', 
    desc: 'For stores, buyers, and global business partnerships.',
    options: ['Stock my store / new location', 'Bulk order for seasonal launch', 'Exclusive product line / collaboration', 'Pop-up / experiential retail']
  },
  { 
    id: 'press', 
    title: 'PRESS & MEDIA', 
    desc: 'For interviews, articles, podcasts, and features.',
    options: ['Feature in lifestyle / luxury outlet', 'Podcast / webinar guest', 'Brand spotlight / case study', 'Influencer / media partnership']
  },
  { 
    id: 'advocacy', 
    title: 'ADVOCACY & SPEAKING', 
    desc: 'For events, panels, and global initiatives.',
    options: ['Keynote / panel opportunity', 'Educational workshop / seminar', 'Campaign for social impact', 'Community / industry initiative']
  },
  { 
    id: 'collab', 
    title: 'CREATIVE COLLABORATIONS', 
    desc: 'For artists, designers, and industrial creative work.',
    options: ['Co-designed product or line', 'Visual / experiential campaign', 'Limited edition artwork or merchandise', 'Cross-brand partnership']
  },
  { 
    id: 'general', 
    title: 'GENERAL INQUIRY', 
    desc: 'For anything else or general explorations.',
    options: ['Feedback or idea sharing', 'Potential business opportunity', 'Request for consultation / meeting', 'Explore unlisted opportunities']
  },
];

interface ContactPageProps {
  isDarkMode: boolean;
  setPage?: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ isDarkMode, setPage }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const accentColor = isDarkMode ? "#C5A381" : "#B76E79";
  const contactEmail = "jane@janewest.com";
  const activePathway = pathways.find(p => p.id === activeId);

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const close = () => {
    setActiveId(null);
    setStatus('IDLE');
    setErrorMessage('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('SENDING');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append('Inquiry Category', activeId?.toUpperCase() || 'GENERAL');

    try {
      const response = await fetch(FORM_ACTION, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        const result = await response.json();
        if (result && Object.prototype.hasOwnProperty.call(result, 'errors')) {
          setErrorMessage(result.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Submission failed. Please try again.");
        }
        setStatus('ERROR');
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
      setStatus('ERROR');
    }
  };

  const sectionClass = "min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 relative border-b last:border-0";
  const borderClass = isDarkMode ? "border-white/5" : "border-black/5";

  return (
    <div className={`transition-colors duration-1000 ${isDarkMode ? 'text-[#FEE2E2]' : 'text-[#1A050A]'}`}>
      
      {/* 01: THE HERO (THE VISIONARY) */}
      <section className={`${sectionClass} ${borderClass} pt-60`}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <span className="text-[10px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>Section 01</span>
          <h1 className="text-6xl md:text-9xl font-black serif italic tracking-tighter leading-[0.8]">
            Let's build <br /> <span style={{ color: accentColor }}>The Future.</span>
          </h1>
          <p className="text-lg md:text-2xl font-bold opacity-40 max-w-xl mx-auto italic">
            Architecting high-prestige rituals requires a shared vision. Select a domain to initiate transmission.
          </p>
        </motion.div>
      </section>

      {/* 02: THE PATHWAYS (THE CHANNELS) */}
      <section className={`${sectionClass} ${borderClass}`}>
        <div className="max-w-7xl mx-auto w-full space-y-16">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>Section 02</span>
            <div className="h-px flex-grow" style={{ backgroundColor: accentColor, opacity: 0.2 }}></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Departmental Logistics</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((p) => (
              <motion.button 
                key={p.id}
                whileHover={{ y: -5 }}
                onClick={() => setActiveId(p.id)}
                className={`p-10 rounded-[40px] border backdrop-blur-[20px] space-y-6 group text-left transition-all duration-700 relative overflow-hidden ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-[#D9BBAE]/30'
                }`}
              >
                <div className="absolute top-0 right-0 p-8 text-[9px] font-black opacity-0 group-hover:opacity-30 transition-opacity">INITIATE PATH →</div>
                <div className="text-3xl font-black serif italic opacity-20 group-hover:opacity-100 transition-opacity duration-700" style={{ color: accentColor }}>{p.id.substring(0,2).toUpperCase()}</div>
                <h3 className="text-xl font-black uppercase tracking-widest">{p.title}</h3>
                <p className="text-sm font-medium opacity-50 leading-relaxed">{p.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 03: DIRECT CHANNEL (TRANSMISSION) */}
      <section className={`${sectionClass} ${borderClass}`}>
        <div className="max-w-4xl w-full text-center space-y-12">
          <span className="text-[10px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>Section 03</span>
          <h2 className="text-4xl md:text-6xl font-black serif italic tracking-tighter">Direct Dialogue</h2>
          
          <motion.div 
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            className={`p-12 sm:p-20 rounded-[60px] border border-dashed flex flex-col justify-center items-center text-center space-y-6 cursor-pointer relative group overflow-hidden ${
              isDarkMode ? 'border-white/20 bg-white/5' : 'border-[#B76E79]/30 bg-[#FDF2F2]'
            }`}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Verified Professional Route</span>
            <div className="text-2xl sm:text-5xl font-black break-all group-hover:text-[#C5A381] transition-colors">{contactEmail}</div>
            <div className="pt-4 text-[9px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">Click to copy channel identifier</div>
            
            <AnimatePresence>
              {copied && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bg-black text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl"
                >
                  Identifer Copied
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 04: THE ARCHIVE (VCF) */}
      <section className={`${sectionClass} ${borderClass}`}>
        <div className="text-center space-y-12 max-w-2xl">
          <span className="text-[10px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>Section 04</span>
          <h2 className="text-4xl md:text-6xl font-black serif italic tracking-tighter leading-tight">Integrate the Archive into your Identity.</h2>
          <div className="flex flex-col items-center space-y-8 pt-8">
            <VCFButton isDarkMode={isDarkMode} />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Direct Mobile VCF Synchronization</p>
          </div>
        </div>
      </section>

      {/* 05: LANDSCAPES (ECOSYSTEM) */}
      <section className={`${sectionClass} pb-40`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center space-x-6 mb-20">
            <span className="text-[10px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>Section 05</span>
            <div className="h-px flex-grow" style={{ backgroundColor: accentColor, opacity: 0.2 }}></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Digital Ecosystem</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Official Store', url: 'https://janewest.com' },
              { label: 'Instagram', url: 'https://www.instagram.com/betterwithjane/?hl=en' },
              { label: 'Women Grow', url: 'https://womengrow.org' },
              { label: 'Press Kit', action: () => setPage?.('press') }
            ].map((link, i) => (
              <button 
                key={i}
                onClick={link.action ? link.action : () => window.open(link.url, '_blank')}
                className={`p-8 rounded-[30px] border flex flex-col justify-between items-center text-center transition-all duration-500 hover:-translate-y-2 group ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:border-[#C5A381]' : 'bg-white border-black/5 hover:border-[#B76E79]'
                }`}
              >
                <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-opacity">External Landscape</span>
                <span className="text-lg font-black uppercase tracking-widest pt-4">{link.label}</span>
                <div className="w-10 h-px mt-6 opacity-20" style={{ backgroundColor: accentColor }}></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 bg-black/60 backdrop-blur-md overflow-y-auto"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden border transition-all duration-1000 ${
                isDarkMode ? 'bg-[#0D0204] border-white/10' : 'bg-[#FDF2F2] border-[#D9BBAE]/30'
              }`}
              style={{ maxHeight: '90vh' }}
            >
              <div className="overflow-y-auto p-10 md:p-16 h-full max-h-[90vh] custom-scrollbar">
                <button 
                  onClick={close}
                  className="absolute top-8 right-8 opacity-40 hover:opacity-100 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                {status === 'SUCCESS' ? (
                  <div className="text-center space-y-10 py-16">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl border" style={{ color: accentColor, borderColor: accentColor }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="space-y-4">
                      <h2 className="serif italic text-4xl">Vision Transmitted</h2>
                      <p className="opacity-60 font-medium">Your inquiry has been archived for review. Our department heads will synchronize with your request shortly.</p>
                    </div>
                    <button 
                      onClick={close}
                      className="px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
                      style={{ backgroundColor: accentColor, color: isDarkMode ? '#0D0204' : '#FDF2F2' }}
                    >
                      Return to Gallery
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <header className="mb-12">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] block mb-2" style={{ color: accentColor }}>{activePathway?.title}</span>
                      <h2 className="text-3xl md:text-5xl font-black serif italic">Submit Inquiry</h2>
                    </header>

                    {/* Section 1: Identity */}
                    <div className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Full Identity</label>
                          <input required name="name" type="text" placeholder="Jane West" className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors ${isDarkMode ? 'border-white/10' : 'border-black/10'}`} />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Digital Route (Email)</label>
                          <input required name="email" type="email" placeholder="jane@brand.com" className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors ${isDarkMode ? 'border-white/10' : 'border-black/10'}`} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Telephony (Optional)</label>
                          <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors ${isDarkMode ? 'border-white/10' : 'border-black/10'}`} />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Physical Node (Location)</label>
                          <input required name="location" type="text" placeholder="Denver, CO, USA" className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors ${isDarkMode ? 'border-white/10' : 'border-black/10'}`} />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Entity / Organization {activeId === 'general' && '(Optional)'}</label>
                        <input required={activeId !== 'general'} name="organization" type="text" placeholder="Brand / Entity Name" className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors ${isDarkMode ? 'border-white/10' : 'border-black/10'}`} />
                      </div>
                    </div>

                    {/* Section 2: Strategy */}
                    <div className="space-y-10 border-t pt-10" style={{ borderColor: `${accentColor}20` }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Request Typology</label>
                          <select required name="request_type" className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors cursor-pointer appearance-none ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                            <option value="" disabled selected>Select typology</option>
                            {activePathway?.options.map(opt => <option key={opt} value={opt} className={isDarkMode ? 'bg-[#0D0204] text-white' : 'bg-white text-black'}>{opt}</option>)}
                            <option value="Other" className={isDarkMode ? 'bg-[#0D0204] text-white' : 'bg-white text-black'}>Other Architected Idea</option>
                          </select>
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Timeline Urgency</label>
                          <select required name="timeline" className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors cursor-pointer appearance-none ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                            <option value="" disabled selected>Select urgency</option>
                            {['Immediate Synchronization', 'Within 7 Days', 'Within 30 Days', 'Flexible Lifecycle'].map(opt => <option key={opt} value={opt} className={isDarkMode ? 'bg-[#0D0204] text-white' : 'bg-white text-black'}>{opt}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Preferred Channel</label>
                          <select required name="contact_channel" className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors cursor-pointer appearance-none ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                            <option value="" disabled selected>Select channel</option>
                            {['Digital (Email)', 'Telephony (Voice)', 'Synchronous (Zoom/Video)'].map(opt => <option key={opt} value={opt} className={isDarkMode ? 'bg-[#0D0204] text-white' : 'bg-white text-black'}>{opt}</option>)}
                          </select>
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Artifacts / Attachments (Optional)</label>
                          <div className={`relative border-b py-3 group transition-colors ${isDarkMode ? 'border-white/10 hover:border-white/30' : 'border-black/10 hover:border-black/30'}`}>
                            <input type="file" name="attachment" ref={fileInputRef} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                            <div className="flex items-center space-x-3 opacity-30 group-hover:opacity-100 transition-opacity">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.51a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                              <span className="text-[10px] font-black uppercase tracking-widest">Upload Blueprint / Kit</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Vision */}
                    <div className="space-y-10 border-t pt-10" style={{ borderColor: `${accentColor}20` }}>
                      <div className="space-y-4">
                        <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Project Blueprint / Detailed Vision</label>
                        <textarea required name="message" rows={5} placeholder="Please elaborate on your proposal or inquiry..." className={`w-full bg-transparent border-b py-3 outline-none focus:border-[${accentColor}] transition-colors resize-none ${isDarkMode ? 'border-white/10' : 'border-black/10'}`} />
                      </div>

                      {status === 'ERROR' && (
                        <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">{errorMessage}</p>
                      )}

                      <button 
                        disabled={status === 'SENDING'} 
                        className={`w-full py-6 rounded-full text-[10px] font-black uppercase tracking-[0.5em] transition-all duration-700 shadow-2xl flex items-center justify-center space-x-4 ${
                          isDarkMode ? 'bg-[#C5A381] text-[#0D0204]' : 'bg-[#1A050A] text-[#FDF2F2] hover:bg-[#C5A381] hover:text-[#1A050A]'
                        }`}
                      >
                        {status === 'SENDING' ? (
                          <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            <span>Transmitting...</span>
                          </>
                        ) : 'Transmit Inquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${accentColor}; border-radius: 10px; opacity: 0.3; }
      `}</style>

    </div>
  );
};

export default ContactPage;
