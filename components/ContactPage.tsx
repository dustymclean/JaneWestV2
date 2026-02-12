
import React from 'react';
import { JANE_WEST_CONTACT } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <section className="min-h-screen pt-40 pb-20 px-6 bg-[#fffafb]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-xs font-black uppercase tracking-[0.5em] text-rose-500">Contact</h1>
            <h2 className="text-5xl md:text-8xl font-bold serif italic text-rose-950">Let's build <br /> together.</h2>
          </div>
          <p className="text-lg text-rose-900/60 max-w-md leading-relaxed font-medium">
            Interested in collaborations, custom design architectural services, or wholesale entry? Reach out to the Jane West team.
          </p>
          
          <div className="space-y-4 pt-10">
             <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-2">Direct Inquiry</span>
                <a href={`mailto:${JANE_WEST_CONTACT.email}`} className="text-2xl font-bold text-rose-950 hover:text-rose-600 transition-colors">
                  {JANE_WEST_CONTACT.email}
                </a>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-2">Official Portal</span>
                <a href={JANE_WEST_CONTACT.website} target="_blank" rel="noreferrer" className="text-2xl font-bold text-rose-950 hover:text-rose-600 transition-colors">
                  janewest.com
                </a>
             </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-rose-200/20 border border-rose-50">
           <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
             <div className="space-y-2">
               <label className="text-[10px] font-black uppercase tracking-widest text-rose-950">Full Name</label>
               <input type="text" className="w-full bg-rose-50/30 border-b border-rose-200 py-4 outline-none focus:border-rose-500 transition-colors font-semibold" placeholder="Jane Doe" />
             </div>
             <div className="space-y-2">
               <label className="text-[10px] font-black uppercase tracking-widest text-rose-950">Email Address</label>
               <input type="email" className="w-full bg-rose-50/30 border-b border-rose-200 py-4 outline-none focus:border-rose-500 transition-colors font-semibold" placeholder="hello@company.com" />
             </div>
             <div className="space-y-2">
               <label className="text-[10px] font-black uppercase tracking-widest text-rose-950">Message</label>
               <textarea rows={4} className="w-full bg-rose-50/30 border-b border-rose-200 py-4 outline-none focus:border-rose-500 transition-colors font-semibold resize-none" placeholder="Your inquiry..."></textarea>
             </div>
             <button className="w-full bg-rose-950 text-white py-6 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-rose-900 transition-all shadow-xl shadow-rose-900/20">
               Send Inquiry
             </button>
           </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
