import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  MapPin,
  MessageSquare,
  ExternalLink,
  Send,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

interface ContactSectionProps {
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = formData.subject.trim() || 'Portfolio enquiry';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessageOpen(false);
    onShowToast('Your email draft is ready to send.', 'success');
  };

  const copyEmail = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast('Email address copied to clipboard!', 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const contactChannels = [
    {
      id: 'email',
      title: 'Email Direct',
      value: PERSONAL_INFO.email,
      description: 'Send an email directly for roles or engineering inquiries.',
      icon: <Mail className="w-6 h-6 text-[#D1FF26]" />,
      actionText: 'Email Me',
      actionUrl: `mailto:${PERSONAL_INFO.email}`,
      secondaryAction: (
        <button
          onClick={copyEmail}
          className="px-3.5 py-1.5 rounded-lg bg-[#1A1A1A] hover:bg-[#222222] border border-[#2A2A2A] text-zinc-300 hover:text-white transition-all text-[11px] font-mono font-bold flex items-center gap-1 cursor-pointer"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3 h-3 text-[#D1FF26]" />
              <span className="text-[#D1FF26]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-zinc-500" />
              <span>Copy Address</span>
            </>
          )}
        </button>
      )
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Contact',
      value: PERSONAL_INFO.phone,
      description: 'Direct message for quick engineering or freelance discussions.',
      icon: <MessageSquare className="w-6 h-6 text-[#D1FF26]" />,
      actionText: 'Message on WhatsApp',
      actionUrl: 'https://wa.me/919949447302',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Network',
      value: 'linkedin.com/in/maniraj-kyatham',
      description: 'Connect professionally, view updates, and verify credentials.',
      icon: <Linkedin className="w-6 h-6 text-[#D1FF26]" />,
      actionText: 'Connect on LinkedIn',
      actionUrl: PERSONAL_INFO.linkedin,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      id: 'github',
      title: 'GitHub Repositories',
      value: 'github.com/maniraj48',
      description: 'Explore verified project codebases, issues, and contributions.',
      icon: <Github className="w-6 h-6 text-[#D1FF26]" />,
      actionText: 'View GitHub Profile',
      actionUrl: PERSONAL_INFO.github,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative border-t border-[#222222]">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1FF26]/40 bg-[#141414] text-[#D1FF26] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#D1FF26]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif] mb-4">
            LET'S COLLABORATE
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Whether you have an exciting full-time opportunity, a software project, or want to discuss backend systems architecture — reach out through any channel below.
          </p>
          <button
            onClick={() => {
              sounds.playModalOpen();
              setMessageOpen(true);
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#D1FF26] px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black shadow-md shadow-[#D1FF26]/20 transition-colors hover:bg-[#bce61e]"
          >
            <Send className="w-4 h-4" />
            Send a message
          </button>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactChannels.map((channel) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[#222222] bg-[#121212] flex flex-col justify-between hover:border-[#D1FF26]/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A]">
                      {channel.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-['Syne',sans-serif]">
                        {channel.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">
                        {channel.value}
                      </span>
                    </div>
                  </div>
                  {channel.secondaryAction}
                </div>
                <p className="text-xs text-zinc-400 font-mono leading-relaxed mb-6">
                  {channel.description}
                </p>
              </div>

              <a
                href={channel.actionUrl}
                target={channel.target}
                rel={channel.rel}
                onClick={() => sounds.playClick()}
                className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#D1FF26]/50 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all group"
              >
                <span>{channel.actionText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D1FF26] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer Map Location Info */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-500 pt-6 border-t border-[#1C1C1C]">
          <MapPin className="w-4 h-4 text-[#D1FF26]" />
          <span>Currently based in Hyderabad, Telangana (Open to Remote Roles)</span>
        </div>

      <AnimatePresence>
        {messageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setMessageOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-[#222222] bg-[#121212] p-6 shadow-2xl sm:p-8"
            >
              <button
                onClick={() => setMessageOpen(false)}
                className="absolute right-4 top-4 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-[#1A1A1A] hover:text-white"
                aria-label="Close message form"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="mb-6 pr-10">
                <div className="mb-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D1FF26]">Direct email</div>
                <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">Start a conversation</h3>
                <p className="mt-2 text-sm text-zinc-400">Complete the form and your email app will open with a message addressed to Maniraj.</p>
              </div>
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" className="w-full rounded-xl border border-[#222222] bg-[#0D0D0D] px-3.5 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#D1FF26] focus:outline-none" />
                  <input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="Your email" className="w-full rounded-xl border border-[#222222] bg-[#0D0D0D] px-3.5 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#D1FF26] focus:outline-none" />
                </div>
                <input value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} placeholder="Subject (optional)" className="w-full rounded-xl border border-[#222222] bg-[#0D0D0D] px-3.5 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#D1FF26] focus:outline-none" />
                <textarea required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="How can I help?" className="w-full resize-none rounded-xl border border-[#222222] bg-[#0D0D0D] px-3.5 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#D1FF26] focus:outline-none" />
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D1FF26] px-5 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#bce61e]">
                  <Send className="h-4 w-4" />
                  Open email draft
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};
