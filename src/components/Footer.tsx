import React from 'react';
import { Terminal, ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1A1A1A]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-center text-[#D1FF26] font-bold">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base block font-['Syne',sans-serif]">{PERSONAL_INFO.name}</span>
              <span className="text-[11px] text-zinc-500 font-mono">Portfolio & Showcase</span>
            </div>
          </div>

          {/* Quick Terminal Trigger */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500">Curious about my coding journey?</span>
            <button
              onClick={() => {
                sounds.playModalOpen();
                onOpenTerminal();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222222] hover:border-zinc-700 text-zinc-300 text-xs font-mono transition-all cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-[#D1FF26]" />
              <span>Launch Terminal</span>
            </button>
          </div>

          {/* Quick Status */}
          <div className="flex items-center gap-6 mt-4 md:mt-0 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Status: Active & Open to Work</span>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#D1FF26]/50 hover:text-white transition-colors text-xs uppercase font-bold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D1FF26]" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} Maniraj Kyatham. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4 font-bold">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-[#D1FF26] transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#D1FF26] transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
