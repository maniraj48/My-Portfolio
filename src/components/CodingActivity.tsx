import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Activity,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  ChevronRight,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

interface DeveloperProfile {
  id: 'github' | 'linkedin' | 'leetcode';
  title: string;
  url: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
  stats?: string[];
}

export const CodingActivity: React.FC = () => {
  const [profileStats, setProfileStats] = useState<Record<string, string[]>>({});
  const [selectedProfile, setSelectedProfile] = useState<DeveloperProfile | null>(null);

  useEffect(() => {
    const loadGithubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/maniraj48');
        if (!response.ok) return;
        const github = await response.json();
        setProfileStats({
          github: [`${github.public_repos} public repositories`, `${github.followers} followers`]
        });
      } catch {
        // A fallback is shown when the public GitHub API is unavailable.
      }
    };

    loadGithubStats();
  }, []);

  const profiles: DeveloperProfile[] = [
    {
      id: 'github',
      title: 'GitHub Profile',
      url: PERSONAL_INFO.github,
      value: 'github.com/maniraj48',
      description: 'Browse the source code behind my FastAPI, Flask, React, and machine-learning projects.',
      icon: <Github className="w-6 h-6 text-[#D1FF26]" />,
      actionText: 'Open GitHub Profile',
      stats: ['Live GitHub profile', 'Public work']
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      url: PERSONAL_INFO.linkedin,
      value: 'linkedin.com/in/maniraj-kyatham',
      description: 'View my education, internship experience, certifications, and professional updates.',
      icon: <Linkedin className="w-6 h-6 text-[#D1FF26]" />,
      actionText: 'Open LinkedIn Profile'
    },
    {
      id: 'leetcode',
      title: 'LeetCode Profile',
      url: PERSONAL_INFO.leetcode,
      value: 'leetcode.com/u/maniraj48',
      description: 'See my ongoing practice in data structures, algorithms, and SQL problem solving.',
      icon: <Code2 className="w-6 h-6 text-[#D1FF26]" />,
      actionText: 'Open LeetCode Profile',
      stats: ['Rank #1,796,168', '0 followers']
    }
  ];

  const openProfile = (profile: DeveloperProfile) => {
    sounds.playModalOpen();
    setSelectedProfile(profile);
  };

  return (
    <section id="activity" className="relative overflow-hidden border-t border-[#1F1F1F] bg-[#0B0B0B] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D1FF26]/40 bg-[#141414] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D1FF26]">
            <Activity className="h-3.5 w-3.5" />
            <span>Developer Presence</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-5xl">DEVELOPER PROFILES</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400 sm:text-base">Select a profile to view its public activity snapshot and visit the platform.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {profiles.map((profile) => (
            <motion.button
              key={profile.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => openProfile(profile)}
              className="group flex min-h-[250px] flex-col justify-between rounded-2xl border border-[#222222] bg-[#121212] p-6 text-left shadow-xl transition-colors hover:border-[#D1FF26]/60 hover:bg-[#161616] sm:p-8"
            >
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-3">{profile.icon}</div>
                  <div className="min-w-0">
                    <h3 className="font-['Syne',sans-serif] text-lg font-bold text-white group-hover:text-[#D1FF26]">{profile.title}</h3>
                    <span className="block truncate text-xs font-mono text-zinc-400">{profile.value}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">{profile.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-[#222222] pt-4 text-xs font-mono font-bold uppercase tracking-wider text-white">
                <span>View profile details</span>
                <ChevronRight className="h-4 w-4 text-[#D1FF26] transition-transform group-hover:translate-x-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProfile(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-[#222222] bg-[#121212] p-6 shadow-2xl sm:p-8"
            >
              <button onClick={() => setSelectedProfile(null)} aria-label="Close profile details" className="absolute right-4 top-4 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-[#1A1A1A] hover:text-white">
                <X className="h-5 w-5" />
              </button>
              <div className="mb-6 flex items-center gap-4 pr-10">
                <div className="rounded-xl border border-[#D1FF26]/30 bg-[#1A1A1A] p-3">{selectedProfile.icon}</div>
                <div className="min-w-0">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D1FF26]">Public profile</div>
                  <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">{selectedProfile.title}</h3>
                  <div className="truncate text-xs font-mono text-zinc-400">{selectedProfile.value}</div>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-zinc-300">{selectedProfile.description}</p>
              {selectedProfile.stats && (
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {(profileStats[selectedProfile.id] || selectedProfile.stats).map((stat) => (
                    <div key={stat} className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] px-3 py-3 text-center text-xs font-mono font-bold text-[#D1FF26]">{stat}</div>
                  ))}
                </div>
              )}
              <a href={selectedProfile.url} target="_blank" rel="noreferrer" onClick={() => sounds.playClick()} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D1FF26] px-5 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#bce61e]">
                <span>{selectedProfile.actionText}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};