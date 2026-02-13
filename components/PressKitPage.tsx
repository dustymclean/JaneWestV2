
import React from 'react';
import { motion } from 'framer-motion';

const PressKitPage: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const accentColor = isDarkMode ? "#C5A381" : "#B76E79";
  const textColor = isDarkMode ? "#FEE2E2" : "#1A050A";

  const sections = [
    {
      id: "01",
      title: "BRAND MISSION & VALUE PROPOSITION",
      content: "Jane West is the preeminent global architect of the cannabis lifestyle. By merging mid-century modern aesthetics with sophisticated functional design, Jane West has successfully transitioned cannabis from the counter-culture into the mainstream luxury market. The brand exists to empower the modern consumer—specifically women—through high-end accessories, wellness products, and community-building.",
      subItems: [
        { label: "Design Excellence", value: "Merging form and function with a mid-century modern lens." },
        { label: "Normalization", value: "Stripping away the 'stoner' stigma to reveal a sophisticated lifestyle." },
        { label: "Empowerment", value: "Building the infrastructure for women to lead in the legal cannabis space." }
      ]
    },
    {
      id: "02",
      title: "THE BIOGRAPHY: JANE WEST",
      content: "Jane West is one of the most recognizable faces in the global cannabis industry. Her journey began in 2014 when her 'corporate-to-cannabis' story went viral after she was fired from her job as a corporate event planner for hosting a cannabis-infused dinner party. Rather than retreating, she leaned into the spotlight, identifying a massive void in the market: products designed for women.",
      extra: "As the founder of Women Grow, she built the industry’s largest professional networking organization, connecting thousands of entrepreneurs and shaping the leadership landscape of the legal market. Her eponymous brand is a multi-category lifestyle company with global distribution.",
      milestones: [
        { year: "2014", event: "Launched Edible Events; Founded Women Grow." },
        { year: "2016", event: "Raised $1M+ via equity crowdfunding." },
        { year: "2020-25", event: "Secured global licensing with High Tide Inc. and Prism Water Pipes." }
      ]
    },
    {
      id: "03",
      title: "PRODUCT VERTICALS & FACT SHEET",
      verticals: [
        { name: "A. The Glass Collection", desc: "Signature partnership with GRAV. Iconic cobalt blue borosilicate glass. Display-worthy silhouettes." },
        { name: "B. The Travel Collection", desc: "Aircraft-grade aluminum. Discreet, smell-proof, and water-resistant. 40,000+ units sold." },
        { name: "C. The Wellness Line", desc: "Routine-based CBD wellness. Custom terpene blends for Day, Night, and Recovery." }
      ]
    },
    {
      id: "04",
      title: "MARKET IMPACT & STATS",
      stats: [
        { label: "Global Reach", value: "5+ Countries, 500+ Retailers" },
        { label: "Social Equity", value: "80% Women/POC Owned" },
        { label: "Investors", value: "3,000+ from 42 Countries" },
        { label: "Media Reach", value: "500M+ Earned Impressions" }
      ]
    },
    {
      id: "05",
      title: "BRAND IDENTITY GUIDELINES",
      content: "To ensure a high-prestige value, all visual assets adhere to strict modernist standards.",
      guidelines: [
        { label: "Primary Color", value: "Jane West Blue (Hex: #0047AB / Cobalt Blue)" },
        { label: "Secondary Palette", value: "Brushed Gold, Slate Grey, Crisp White" },
        { label: "Typography", value: "Montserrat / Futura (Modern Sans-Serif)" },
        { label: "Imagery", value: "High-contrast, marble backgrounds, hero product shots" }
      ]
    },
    {
      id: "06",
      title: "PRESS ARCHIVE & 'AS SEEN IN'",
      quotes: [
        { source: "The New York Times", quote: "The Martha Stewart of Cannabis." },
        { source: "Forbes", quote: "Jane West is Building a Cannabis Empire." },
        { source: "InStyle", quote: "Named to the 'Badass 50' list." }
      ]
    },
    {
      id: "07",
      title: "INTERVIEW TOPICS",
      topics: [
        "The Luxury Cannabis Market: How design drives consumer adoption.",
        "Equity Crowdfunding: Building a brand with evangelists rather than just VCs.",
        "Resilience: Navigating a public firing and raid to build a global empire.",
        "Women in Leadership: The power of professional networking."
      ]
    }
  ];

  return (
    <div className={`pt-44 pb-32 px-6 sm:px-12 transition-colors duration-1000 ${isDarkMode ? 'bg-[#0D0204]' : 'bg-[#FDF2F2]'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-40"
        >
          <div className="flex items-center justify-center space-x-6 mb-12">
            <div className="w-16 h-px" style={{ backgroundColor: accentColor }}></div>
            <span className="text-[11px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>Media Relations</span>
            <div className="w-16 h-px" style={{ backgroundColor: accentColor }}></div>
          </div>
          <h1 className="text-5xl md:text-[10rem] font-black serif italic leading-[0.8] mb-14 tracking-tighter">
            Press <br /> <span style={{ color: accentColor }}>Kit 2026.</span>
          </h1>
          <p className="text-sm md:text-xl font-black uppercase tracking-[0.4em] opacity-40 max-w-2xl mx-auto">
            Industry Architect | Lifestyle Visionary | Founder of Women Grow
          </p>
        </motion.header>

        <div className="space-y-40">
          {sections.map((sec, i) => (
            <motion.section 
              key={sec.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 md:gap-32 items-start`}
            >
              <div className="md:w-1/3">
                <span className="text-[12px] font-black uppercase tracking-[0.8em]" style={{ color: accentColor }}>Section {sec.id}</span>
                <h2 className="text-3xl md:text-5xl font-black serif italic mt-6 leading-tight tracking-tighter">{sec.title}</h2>
              </div>
              
              <div className="md:w-2/3 space-y-12">
                {sec.content && <p className="text-xl md:text-3xl font-bold opacity-80 leading-relaxed italic">{sec.content}</p>}
                {sec.extra && <p className="text-lg opacity-50 font-medium leading-relaxed">{sec.extra}</p>}

                {sec.subItems && (
                  <div className="grid grid-cols-1 gap-8 pt-8">
                    {sec.subItems.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: accentColor }}>{item.label}</span>
                        <p className="text-lg font-black uppercase tracking-widest">{item.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {sec.milestones && (
                  <div className="space-y-6 pt-8 border-t border-black/5">
                    {sec.milestones.map((m, idx) => (
                      <div key={idx} className="flex space-x-8">
                        <span className="text-2xl font-black serif italic" style={{ color: accentColor }}>{m.year}</span>
                        <p className="text-lg font-bold opacity-60">{m.event}</p>
                      </div>
                    ))}
                  </div>
                )}

                {sec.verticals && (
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                     {sec.verticals.map((v, idx) => (
                       <div key={idx} className="p-8 rounded-[30px] border border-black/5 space-y-4">
                         <h4 className="text-lg font-black uppercase tracking-widest">{v.name}</h4>
                         <p className="text-sm opacity-50 font-medium leading-relaxed">{v.desc}</p>
                       </div>
                     ))}
                   </div>
                )}

                {sec.stats && (
                  <div className="grid grid-cols-2 gap-12">
                    {sec.stats.map((s, idx) => (
                      <div key={idx}>
                        <div className="text-4xl font-black serif italic tracking-tighter" style={{ color: accentColor }}>{s.value}</div>
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mt-2">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {sec.guidelines && (
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     {sec.guidelines.map((g, idx) => (
                       <div key={idx} className="space-y-1">
                         <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{g.label}</div>
                         <div className="text-sm font-black uppercase tracking-widest">{g.value}</div>
                       </div>
                     ))}
                   </div>
                )}

                {sec.quotes && (
                   <div className="space-y-12">
                     {sec.quotes.map((q, idx) => (
                       <div key={idx} className="border-l-4 pl-10 py-2" style={{ borderColor: accentColor }}>
                         <p className="text-2xl font-black serif italic mb-4">"{q.quote}"</p>
                         <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">— {q.source}</p>
                       </div>
                     ))}
                   </div>
                )}

                {sec.topics && (
                   <ul className="space-y-8">
                     {sec.topics.map((t, idx) => (
                       <li key={idx} className="flex items-start space-x-6">
                         <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: accentColor }}></div>
                         <p className="text-lg font-black uppercase tracking-widest">{t}</p>
                       </li>
                     ))}
                   </ul>
                )}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-60 p-20 rounded-[60px] text-center space-y-16 border backdrop-blur-3xl shadow-2xl relative overflow-hidden"
          style={{ borderColor: `${accentColor}20` }}
        >
          <div className="relative z-10 space-y-10">
            <h3 className="text-[11px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>CONTACT & MEDIA ASSETS</h3>
            <div className="space-y-6">
              <p className="text-3xl md:text-5xl font-black serif italic">Initiate Synchronization.</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
                <a href="mailto:jane@janewest.com" className="text-lg font-black uppercase tracking-widest hover:text-[#C5A381] transition-colors">jane@janewest.com</a>
                <a href="https://janewest.com" target="_blank" rel="noreferrer" className="text-lg font-black uppercase tracking-widest hover:text-[#C5A381] transition-colors">janewest.com</a>
                <a href="https://www.linkedin.com/in/betterwithjane" target="_blank" rel="noreferrer" className="text-lg font-black uppercase tracking-widest hover:text-[#C5A381] transition-colors">LinkedIn</a>
              </div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 max-w-xl mx-auto leading-relaxed">
              Note: For high-resolution logo files, headshots, and B-roll, please request access to the Secure Media Drive via email.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PressKitPage;
