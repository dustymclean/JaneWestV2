
import React from 'react';
import { JANE_WEST_CONTACT } from '../constants';

const VCFButton: React.FC<{ light?: boolean }> = ({ light = false }) => {
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
      className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border ${
        light 
          ? 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100' 
          : 'bg-rose-600 text-white border-rose-600 hover:bg-rose-700'
      }`}
    >
      Download VCF
    </button>
  );
};

export default VCFButton;
