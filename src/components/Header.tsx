import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X, Code2, Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface HeaderProps {
  onOpenTerminal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTerminal,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(sounds.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = sounds.toggleSound();
    setSoundOn(newState);
  };

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'activity', label: 'Activity' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-[#222222] py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[#D1FF26] p-[2px] shadow-lg shadow-[#D1FF26]/20 group-hover:shadow-[#D1FF26]/40 transition-all">
            <div className="w-full h-full bg-[#0D0D0D] rounded-[10px] flex items-center justify-center text-[#D1FF26] group-hover:bg-[#151515]">
              <Code2 className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="leading-none font-black font-['Syne',sans-serif] text-xl tracking-tight text-white group-hover:text-[#D1FF26] transition-colors">
              MANIRAJ KYATHAM
            </span>
            <span className="text-[10px] font-mono text-[#D1FF26] tracking-widest uppercase font-bold mt-1">
              Python & AI Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141414]/90 border border-[#222222] rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono uppercase tracking-wider transition-all relative ${
                activeSection === item.id
                  ? 'text-black font-bold'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#202020]'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavBg"
                  className="absolute inset-0 bg-[#D1FF26] rounded-full shadow-md shadow-[#D1FF26]/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Right Utility Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            title={soundOn ? 'Mute Sound Effects' : 'Enable Sound Effects'}
            className="p-2.5 rounded-xl border border-[#222222] bg-[#141414] text-zinc-400 hover:text-[#D1FF26] hover:border-[#D1FF26]/40 hover:bg-[#1a1a1a] transition-all text-xs flex items-center justify-center cursor-pointer"
            aria-label="Toggle Sound"
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4 text-[#D1FF26]" />
            ) : (
              <VolumeX className="w-4 h-4 text-zinc-600" />
            )}
          </button>

          {/* Terminal CLI Trigger */}
          <button
            onClick={() => {
              sounds.playModalOpen();
              onOpenTerminal();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D1FF26] hover:bg-[#bce61e] text-black font-bold text-xs font-mono transition-all shadow-md shadow-[#D1FF26]/20 cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-black" />
            <span>Terminal</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-black/80 text-[#D1FF26] rounded font-mono">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleToggleSound}
            className="p-2 rounded-lg border border-[#222222] bg-[#141414] text-zinc-400 cursor-pointer"
            aria-label="Toggle Sound"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-[#D1FF26]" /> : <VolumeX className="w-4 h-4 text-zinc-600" />}
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-xl border border-[#222222] bg-[#141414] text-zinc-200 hover:text-white"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#D1FF26]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#222222] bg-[#0D0D0D]/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2.5 px-4 rounded-xl text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-black hover:bg-[#D1FF26] font-bold border border-transparent transition-all"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#222222] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    sounds.playModalOpen();
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#D1FF26] text-black font-mono text-xs font-bold"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Launch CLI Terminal</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
