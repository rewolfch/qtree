import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
  vertical?: boolean;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, className = '', vertical = false }) => {
  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);

  const baseClasses = "flex items-center justify-center transition-all duration-300 font-medium group";
  const layoutClasses = vertical ? "flex-col space-y-4" : "flex-row space-x-3";
  
  // Different styles for vertical (floating) vs horizontal (inline)
  const buttonClasses = vertical 
    ? "w-12 h-12 rounded-full shadow-lg hover:scale-110 hover:shadow-xl bg-white text-slate-600 border border-slate-100" 
    : "px-4 py-2 rounded-lg text-sm";

  return (
    <div className={`flex ${layoutClasses} ${className}`}>
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${buttonClasses} ${!vertical ? 'bg-[#0077b5] text-white hover:bg-[#006097]' : 'hover:text-[#0077b5] hover:border-[#0077b5]/30'}`}
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <Linkedin className={vertical ? "h-5 w-5" : "h-4 w-4 mr-2"} /> 
        {!vertical && "LinkedIn"}
      </a>
      <a 
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${buttonClasses} ${!vertical ? 'bg-black text-white hover:bg-slate-800' : 'hover:text-black hover:border-black/30'}`}
        aria-label="Share on Twitter"
        title="Share on Twitter"
      >
        <Twitter className={vertical ? "h-5 w-5" : "h-4 w-4 mr-2"} /> 
        {!vertical && "X / Twitter"}
      </a>
      <a 
        href={`mailto:?subject=${shareText}&body=Check out this article: ${shareUrl}`}
        className={`${baseClasses} ${buttonClasses} ${!vertical ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'hover:text-brand-600 hover:border-brand-200'}`}
        aria-label="Share via Email"
        title="Share via Email"
      >
        <Mail className={vertical ? "h-5 w-5" : "h-4 w-4 mr-2"} /> 
        {!vertical && "Email"}
      </a>
    </div>
  );
};

export default ShareButtons;
