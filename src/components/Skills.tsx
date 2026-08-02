import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Server, Cpu, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const iconsMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-4 h-4 text-[#D1FF26]" />,
    Layout: <Layout className="w-4 h-4 text-[#D1FF26]" />,
    Server: <Server className="w-4 h-4 text-[#D1FF26]" />,
    Cpu: <Cpu className="w-4 h-4 text-[#D1FF26]" />
  };

  return (
    <section id="skills" className="py-24 bg-[#0D0D0D] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1FF26]/40 bg-[#141414] text-[#D1FF26] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#D1FF26]" />
              <span>Technical Proficiency</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
              SKILLS & TECH STACK
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              The languages, frameworks, databases, and AI/ML tools used across academic, internship, and project work.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategoryIndex(idx);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedCategoryIndex === idx
                    ? 'bg-[#D1FF26] text-black font-bold shadow-md shadow-[#D1FF26]/20'
                    : 'bg-[#141414] border border-[#222222] text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {iconsMap[cat.icon]}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES[selectedCategoryIndex].skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-6 rounded-2xl border transition-all shadow-lg flex flex-col justify-between ${
                skill.highlight
                  ? 'bg-[#121212] border-[#D1FF26]/50 hover:border-[#D1FF26]'
                  : 'bg-[#121212] border-[#222222] hover:border-[#D1FF26]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">{skill.name}</span>
                    {skill.highlight && (
                      <span className="px-2 py-0.5 rounded bg-[#141414] border border-[#D1FF26]/50 text-[10px] font-mono font-bold text-[#D1FF26] uppercase">
                        Primary Stack
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Technology Matrix Summary */}
        <div className="mt-16 p-8 rounded-2xl border border-[#222222] bg-[#121212]">
          <h3 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-4 flex items-center gap-2 font-bold">
            <Sparkles className="w-4 h-4 text-[#D1FF26]" />
            <span>Portfolio Implementation Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Python', 'Java', 'SQL', 'FastAPI', 'Flask', 'REST APIs', 'React.js', 
              'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS v4', 
              'SQLite', 'PostgreSQL', 'SQLAlchemy', 'ChromaDB', 'Scikit-Learn', 
              'TensorFlow', 'LangChain', 'Hugging Face', 'OpenCV', 'SHAP', 'Git', 
              'GitHub', 'Docker', 'Vite', 'Render', 'VS Code', 'Motion', 'Web Audio API'
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-[#0D0D0D] border border-[#222222] text-xs font-mono text-zinc-300 hover:text-[#D1FF26] hover:border-[#D1FF26]/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
