import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { CodingActivity } from './components/CodingActivity';
import { ExperienceSection } from './components/Experience';
import { SkillsSection } from './components/Skills';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ToastContainer, ToastMessage } from './components/Toast';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const triggerTerminal = () => {
    if (window.scrollY < 600) {
      const heroTerm = document.getElementById('hero-terminal');
      if (heroTerm) {
        heroTerm.scrollIntoView({ behavior: 'smooth' });
      }
      window.dispatchEvent(new CustomEvent('focus-hero-terminal'));
    } else {
      setTerminalOpen(true);
    }
  };

  // Keyboard shortcut Ctrl+K / Cmd+K to open/focus terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k';
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      if (isK && isCtrlOrCmd) {
        const active = document.activeElement;
        const isInput = active && (
          active.tagName === 'INPUT' ||
          active.tagName === 'TEXTAREA' ||
          active.tagName === 'SELECT' ||
          (active as HTMLElement).isContentEditable
        );

        if (!isInput) {
          e.preventDefault();
          setTerminalOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Intersection observer for active nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'activity', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Math.random().toString();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-zinc-100 font-sans antialiased selection:bg-[#D1FF26] selection:text-black">
      
      {/* Top Navbar */}
      <Header
        activeSection={activeSection}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onShowToast={addToast}
        />

        <Projects onShowToast={addToast} />

        <CodingActivity />

        <ExperienceSection />

        <SkillsSection />

        <ContactSection onShowToast={addToast} />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={triggerTerminal} />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onShowToast={addToast}
      />


      {/* Toast Alerts Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

    </div>
  );
}
