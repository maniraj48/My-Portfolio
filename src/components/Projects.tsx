import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  Star,
  Search,
  Sparkles,
  Layers,
  X,
  Code,
  CheckCircle,
  Cpu,
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { sounds } from '../utils/soundEffects';

interface ProjectsProps {
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onShowToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI / ML'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (project: Project) => {
    sounds.playModalOpen();
    setSelectedProjectModal(project);
  };

  const handleCloseModal = () => {
    sounds.playClick();
    setSelectedProjectModal(null);
  };

  return (
    <section id="projects" className="py-24 bg-[#0D0D0D] border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1FF26]/40 bg-[#141414] text-[#D1FF26] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D1FF26]" />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
              FEATURED PROJECTS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              End-to-end academic and self-directed applications across backend development, machine learning, and document intelligence.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or title..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141414] border border-[#222222] text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#D1FF26] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Categories Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#222222]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D1FF26] text-black font-bold shadow-md shadow-[#D1FF26]/20'
                  : 'bg-[#141414] border border-[#222222] text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-zinc-500 hidden sm:inline-block">
            Showing {filteredProjects.length} projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl border border-[#222222] bg-[#121212] hover:bg-[#161616] hover:border-[#D1FF26]/50 transition-all overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image / Thumbnail Container */}
                <div className="relative h-48 w-full overflow-hidden bg-[#0D0D0D]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0D0D0D]/90 backdrop-blur-md border border-[#222222] text-[10px] font-mono font-bold text-[#D1FF26] uppercase">
                    {project.category}
                  </div>

                  {/* Stars / Metric Badge */}
                  {project.stars && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0D0D0D]/90 backdrop-blur-md border border-[#222222] text-[10px] font-mono text-[#D1FF26]">
                      <Star className="w-3 h-3 fill-[#D1FF26] text-[#D1FF26]" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D1FF26] transition-colors font-['Syne',sans-serif]">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-[#D1FF26] font-semibold mb-3 line-clamp-1">
                    {project.tagline}
                  </p>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#0D0D0D] border border-[#222222] text-[10px] font-mono text-zinc-400 group-hover:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#222222] mt-auto pt-4">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#D1FF26] hover:underline"
                >
                  <span>Architecture Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    title="View GitHub Repository"
                    className="p-2 rounded-lg bg-[#0D0D0D] border border-[#222222] text-zinc-400 hover:text-white hover:border-[#D1FF26]/50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sounds.playClick()}
                      title="Open Live Preview"
                      className="p-2 rounded-lg bg-[#0D0D0D] border border-[#222222] text-zinc-400 hover:text-[#D1FF26] hover:border-[#D1FF26]/50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
            <Search className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-300 font-medium text-sm">No projects matched your criteria.</p>
            <p className="text-zinc-500 text-xs mt-1">Try resetting the category filter or search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0D0D0D] border border-[#222222] rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-200 my-8"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#141414] border border-[#222222] text-zinc-400 hover:text-white hover:border-[#D1FF26]/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full border border-[#D1FF26]/40 bg-[#141414] text-[#D1FF26] text-xs font-mono font-bold uppercase inline-block mb-2">
                  {selectedProjectModal.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Syne',sans-serif]">
                  {selectedProjectModal.title}
                </h2>
                <p className="text-sm font-mono text-[#D1FF26] mt-1 font-semibold">
                  {selectedProjectModal.tagline}
                </p>
              </div>

              {/* Metrics Banner */}
              <div className="p-4 rounded-xl bg-[#141414] border border-[#D1FF26]/30 mb-6 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D1FF26] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-[#D1FF26] uppercase tracking-wider font-bold">
                    Key Performance Impact
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-200 mt-0.5 font-medium">
                    {selectedProjectModal.metrics}
                  </div>
                </div>
              </div>

              {/* Long Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 font-bold">
                  Project Overview
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {selectedProjectModal.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3 font-bold">
                  Core Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProjectModal.keyFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-zinc-300 bg-[#141414] p-2.5 rounded-lg border border-[#222222]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D1FF26] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Notes */}
              {selectedProjectModal.architectureNotes && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3 font-bold">
                    Architectural Decisions
                  </h4>
                  <div className="space-y-2">
                    {selectedProjectModal.architectureNotes.map((note, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#141414] border border-[#222222] text-xs font-mono text-zinc-300 flex items-start gap-2.5"
                      >
                        <Cpu className="w-4 h-4 text-[#D1FF26] shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippet if present */}
              {selectedProjectModal.codeSnippet && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 font-bold">
                    Sample Code Extract
                  </h4>
                  <div className="p-4 rounded-xl bg-[#080808] border border-[#222222] text-xs font-mono overflow-x-auto text-[#D1FF26]">
                    <pre>
                      <code>{selectedProjectModal.codeSnippet.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-6 border-t border-[#222222] flex items-center justify-end gap-3">
                <a
                  href={selectedProjectModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-zinc-200 border border-[#222222] text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repo</span>
                </a>
                {selectedProjectModal.liveUrl && (
                  <a
                    href={selectedProjectModal.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D1FF26] hover:bg-[#bce61e] text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#D1FF26]/20"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
