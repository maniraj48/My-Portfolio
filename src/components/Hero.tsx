import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Clock,
  Terminal as TerminalIcon
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal } from './Terminal';
import { sounds } from '../utils/soundEffects';

interface HeroProps {
  onOpenTerminal: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onShowToast }) => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    sounds.playSuccess();
    onShowToast('Initiating resume download...', 'success');
    const a = document.createElement('a');
    a.href = PERSONAL_INFO.resumeUrl;
    a.download = 'Maniraj_Kyatham_Resume.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#0D0D0D]">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D1FF26]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#D1FF26]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pills Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1FF26]/40 bg-[#141414] text-[#D1FF26] text-xs font-mono font-bold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1FF26] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1FF26]"></span>
                </span>
                <span>{PERSONAL_INFO.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#222222] bg-[#141414] text-zinc-300 text-xs font-mono">
                <MapPin className="w-3 h-3 text-[#D1FF26]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {localTime && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#222222] bg-[#141414] text-zinc-300 text-xs font-mono">
                  <Clock className="w-3 h-3 text-[#D1FF26]" />
                  <span>{localTime}</span>
                </div>
              )}
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 font-['Syne',sans-serif]"
            >
              BUILDING <span className="text-[#D1FF26] underline decoration-[#D1FF26]/40 underline-offset-8">BACKEND SYSTEMS</span>, DATA-DRIVEN PRODUCTS & APPLIED AI.
            </motion.h1>

            {/* Sub-headline / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Hi, I'm <strong className="text-white font-bold">{PERSONAL_INFO.name}</strong> — a Final-Year B.Tech IT student (CGPA: {PERSONAL_INFO.cgpa}) & Software Developer specializing in Python, FastAPI, Flask, SQL, and REST API development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10"
            >
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D1FF26] hover:bg-[#bce61e] text-black font-extrabold text-xs font-mono uppercase tracking-wider transition-all shadow-lg shadow-[#D1FF26]/20 group cursor-pointer"
              >
                <Download className="w-4 h-4 text-black group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  sounds.playClick();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#D1FF26]/60 hover:bg-[#1a1a1a] text-zinc-100 font-mono text-xs uppercase tracking-wider transition-all shadow-md group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#D1FF26] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  sounds.playModalOpen();
                  onOpenTerminal();
                }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#141414] border border-[#222222] hover:border-zinc-700 hover:bg-[#1a1a1a] text-zinc-300 font-mono text-xs uppercase tracking-wider transition-all shadow-sm group"
              >
                <TerminalIcon className="w-4 h-4 text-[#D1FF26]" />
                <span>Interactive CLI</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  sounds.playClick();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#141414]/80 border border-[#222222] hover:border-zinc-700 text-zinc-300 text-xs font-mono uppercase tracking-wider transition-all"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Contact</span>
              </a>
            </motion.div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#222222] w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D1FF26] font-mono">{PERSONAL_INFO.cgpa}</div>
                <div className="text-xs text-zinc-400 mt-0.5 font-mono uppercase tracking-wider">B.Tech CGPA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D1FF26] font-mono">{PERSONAL_INFO.certificationsCount}</div>
                <div className="text-xs text-zinc-400 mt-0.5 font-mono uppercase tracking-wider">Certifications</div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded CLI Terminal */}
          <div className="lg:col-span-5 w-full lg:pt-[136px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl shadow-2xl overflow-hidden w-full bg-[#121212]"
            >
              <Terminal mode="inline" onShowToast={onShowToast} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
