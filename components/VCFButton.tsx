
import React from 'react';
import { JANE_WEST_CONTACT } from '../constants';

const VCFButton: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const downloadVCF = () => {
    const blob = new Blob([JANE_WEST_CONTACT.vcf], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Jane_West.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadVCF}
      className={`px-8 py-4 rounded-full text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-700 shadow-xl active:scale-95 ${
        isDarkMode 
          ? 'bg-[#C5A381] text-[#0D0204] hover:bg-white' 
          : 'bg-[#1A050A] text-white hover:bg-[#C5A381] hover:text-[#1A050A]'
      }`}
    >
      Save Contact
    </button>
  );
};

export default VCFButton;
