
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FORM_ACTION = 'https://formspree.io/f/xgolayjv';

const pathways = [
  { 
    id: 'wholesale', 
    title: 'WHOLESALE & RETAIL', 
    desc: 'For stores, buyers, and business partnerships.',
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
    desc: 'For events, panels, and initiatives.',
    options: ['Keynote / panel opportunity', 'Educational workshop / seminar', 'Campaign for social impact', 'Community / industry initiative']
  },
  { 
    id: 'collab', 
    title: 'CREATIVE COLLABORATIONS', 
    desc: 'For artists, designers, and creative work.',
    options: ['Co-designed product or line', 'Visual / experiential campaign', 'Limited edition artwork or merchandise', 'Cross-brand partnership']
  },
  { 
    id: 'general', 
    title: 'GENERAL INQUIRY', 
    desc: 'For anything else or general questions.',
    options: ['Feedback or idea sharing', 'Potential business opportunity', 'Request for consultation / meeting', 'Explore unlisted opportunities']
  },
];

function Field({ label, children, optional = false }: any) {
  return (
    <div className="space-y-2 w-full">
      <label className="text-[10px] font-black uppercase tracking-widest text-rose-400">
        {label} {optional && <span className="opacity-40">(Optional)</span>}
      </label>
      {children}
    </div>
  );
}

function Input(props: any) {
  return (
    <input
      {...props}
      className="w-full bg-rose-50/20 border-b border-rose-200 py-3 px-1 outline-none focus:border-rose-500 transition-colors font-semibold text-rose-950 placeholder:text-rose-900/20"
    />
  );
}

function Select({ label, name, options, otherName, required = true }: any) {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-3">
      <Field label={label}>
        <div className="relative">
          <select
            required={required}
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border-b border-rose-200 bg-transparent py-3 px-1 outline-none focus:border-rose-500 font-semibold text-rose-950 appearance-none cursor-pointer pr-8"
          >
            <option value="" disabled className="text-rose-900/30">Select an option</option>
            {options.map((opt: string) => (
              <option key={opt} value={opt} className="text-rose-950 bg-white">{opt}</option>
            ))}
            <option value="Other" className="text-rose-950 bg-white">Other – suggest your idea</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-rose-300">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </Field>
      {value === 'Other' && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <Field label={`Specify ${label}`}>
            <Input name={otherName} placeholder="Please elaborate..." required />
          </Field>
        </motion.div>
      )}
    </div>
  );
}

const ContactPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activePathway = pathways.find(p => p.id === activeId);

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

  return (
    <div className="min-h-screen bg-[#fffafb] text-rose-950 pt-32 pb-20 px-6 sm:px-12" role="main">
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        <header className="text-center space-y-8">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-rose-500 mb-4 block">Connect with Us</span>
            <h1 className="text-5xl md:text-8xl font-bold serif italic leading-tight text-rose-950">
              Let's build <br className="hidden sm:block" /> together.
            </h1>
          </div>
          <p className="text-rose-900/60 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed">
            Select the domain that best matches your objective so we can route your vision to the right department.
          </p>
          <div className="w-20 h-px bg-rose-200 mx-auto"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {pathways.map((p) => (
            <motion.button
              key={p.id}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(251, 113, 133, 0.1)' }}
              onClick={() => setActiveId(p.id)}
              className="text-left bg-white border border-rose-100 rounded-[32px] p-10 transition-all duration-500 space-y-4 group relative overflow-hidden"
              aria-label={p.title}
              role="listitem"
            >
              <div className="text-[10px] font-black tracking-[0.3em] text-rose-500 uppercase">{p.title}</div>
              <div className="text-base text-rose-950/60 font-medium leading-relaxed">{p.desc}</div>
              <div className="pt-4 flex items-center text-[9px] font-black uppercase tracking-widest text-rose-300 group-hover:text-rose-500 transition-colors">
                Initiate Path →
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-rose-950/20 backdrop-blur-md flex items-start sm:items-center justify-center p-4 sm:p-10 z-[100] overflow-y-auto"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl relative flex flex-col max-h-[90vh] my-auto"
            >
              <button 
                onClick={close}
                className="absolute top-8 right-8 text-rose-300 hover:text-rose-950 transition-colors z-20"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar">
                {status === 'SUCCESS' ? (
                  <div className="text-center space-y-8 py-20">
                    <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="space-y-4">
                      <h2 className="serif italic text-4xl text-rose-950">Vision Received</h2>
                      <p className="text-rose-900/60 font-medium">Thank you for reaching out. Our team will review your inquiry and respond shortly.</p>
                    </div>
                    <button 
                      onClick={close}
                      className="px-8 py-4 bg-rose-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-rose-900 transition-all"
                    >
                      Return to Gallery
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <header className="mb-12">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-400 block mb-2">{activePathway?.title}</span>
                      <h2 className="text-3xl md:text-5xl font-bold serif italic text-rose-950">Submit Inquiry</h2>
                    </header>

                    {/* Section 1: Identity */}
                    <section className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Field label="Full Name"><Input name="name" required placeholder="Jane West" /></Field>
                        <Field label="Email Address"><Input name="email" type="email" required placeholder="jane@brand.com" /></Field>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Field label="Phone Number" optional><Input name="phone" type="tel" placeholder="+1 (555) 000-0000" /></Field>
                        <Field label="City, State, Country"><Input name="location" required placeholder="Denver, CO, USA" /></Field>
                      </div>

                      <Field label="Company / Organization" optional={activeId === 'general'}>
                        <Input name="organization" required={activeId !== 'general'} placeholder="Entity Name" />
                      </Field>
                    </section>

                    {/* Section 2: Strategy & Logistics */}
                    <section className="space-y-8 border-t border-rose-50 pt-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {activePathway && (
                          <Select 
                            label="Type of Request" 
                            name="request_type" 
                            options={activePathway.options} 
                            otherName="request_type_other"
                          />
                        )}

                        <Select 
                          label="Timeline / Urgency" 
                          name="timeline" 
                          options={['ASAP', 'Within a Week', 'Within a Month', 'Flexible']} 
                          otherName="timeline_other"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Select 
                          label="Preferred Communication" 
                          name="contact_channel" 
                          options={['Email', 'Phone', 'Zoom/Video Call']} 
                          otherName="contact_channel_other"
                        />
                        <Field label="Attachments" optional>
                           <div className="relative border-b border-rose-200 py-3 group">
                              <input 
                                type="file" 
                                name="attachment" 
                                ref={fileInputRef}
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                              />
                              <div className="flex items-center space-x-2 text-rose-900/30 group-hover:text-rose-500 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.51a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                                <span className="text-[11px] font-bold">Upload Press Kit / Proposal</span>
                              </div>
                           </div>
                        </Field>
                      </div>
                    </section>

                    {/* Section 3: Detailed Vision */}
                    <section className="space-y-8 border-t border-rose-50 pt-10">
                      <Field label="Additional Notes / Details">
                        <textarea 
                          name="message" 
                          required
                          rows={5}
                          className="w-full bg-rose-50/20 border-b border-rose-200 py-3 px-1 outline-none focus:border-rose-500 transition-colors font-semibold text-rose-950 resize-none placeholder:text-rose-900/10"
                          placeholder="Please elaborate on your proposal or inquiry..."
                        ></textarea>
                      </Field>

                      {status === 'ERROR' && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold tracking-wide">{errorMessage}</motion.p>
                      )}

                      <div className="pt-8">
                        <button 
                          type="submit"
                          disabled={status === 'SENDING'}
                          className="w-full bg-rose-950 text-white py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-rose-900 transition-all shadow-xl shadow-rose-900/20 disabled:opacity-50 flex items-center justify-center space-x-4"
                        >
                          {status === 'SENDING' ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Transmitting Vision...</span>
                            </>
                          ) : (
                            <span>Submit Inquiry</span>
                          )}
                        </button>
                      </div>
                    </section>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Jane West Contact & Partnership Hub",
        "description": "Collaborate with Jane West on Wholesale, Press, Advocacy, or Creative Projects.",
        "url": "https://janewest.com/contact",
        "publisher": {
          "@type": "Organization",
          "name": "Jane West",
          "logo": "https://janewest.com/logo.png"
        }
      })}
      </script>
    </div>
  );
};

export default ContactPage;
