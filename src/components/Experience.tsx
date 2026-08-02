import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award, GraduationCap, BadgeCheck } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS, CERTIFICATIONS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0D0D0D] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1FF26]/40 bg-[#141414] text-[#D1FF26] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#D1FF26]" />
            <span>Career & Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
            EXPERIENCE & ACADEMICS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Hands-on software development internships, full-stack projects, academic background, and certified technical training.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-[#222222] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 mb-20">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#0D0D0D] border-2 border-[#D1FF26] group-hover:bg-[#D1FF26] group-hover:scale-125 transition-all shadow-md shadow-[#D1FF26]/20" />

              <div className="p-6 sm:p-8 rounded-2xl border border-[#222222] bg-[#121212] hover:bg-[#161616] hover:border-[#D1FF26]/50 transition-all shadow-xl">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#D1FF26] transition-colors font-['Syne',sans-serif]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-bold text-[#D1FF26] font-mono mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#222222] text-xs font-mono text-zinc-300">
                      <Calendar className="w-3 h-3 text-[#D1FF26]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#141414] border border-[#D1FF26]/30 text-[11px] font-mono font-bold text-[#D1FF26] uppercase">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Role Overview */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-bold">
                    Key Contributions & Impact
                  </h4>
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D1FF26] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 font-bold">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#0D0D0D] border border-[#222222] text-[11px] font-mono text-zinc-300 hover:text-[#D1FF26]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-[#222222]">
          
          {/* Education Card Container */}
          <div className="p-8 rounded-2xl border border-[#222222] bg-[#121212]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1FF26]/40 bg-[#141414] text-[#D1FF26] text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <GraduationCap className="w-4 h-4 text-[#D1FF26]" />
              <span>Education Background</span>
            </div>

            <div className="space-y-6">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="p-5 rounded-xl bg-[#0D0D0D] border border-[#222222] hover:border-[#D1FF26]/40 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-white font-['Syne',sans-serif]">{edu.institution}</h4>
                    <span className="text-xs font-mono font-bold text-[#D1FF26]">{edu.period}</span>
                  </div>
                  <div className="text-xs text-zinc-300 font-mono mb-2">{edu.degree}</div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-2 border-t border-[#1a1a1a]">
                    <span>{edu.location}</span>
                    <span className="px-2 py-0.5 rounded bg-[#141414] border border-[#D1FF26]/30 text-[#D1FF26] font-bold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card Container */}
          <div className="p-8 rounded-2xl border border-[#222222] bg-[#121212]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1FF26]/40 bg-[#141414] text-[#D1FF26] text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <BadgeCheck className="w-4 h-4 text-[#D1FF26]" />
              <span>Professional Certifications</span>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-4 rounded-xl bg-[#0D0D0D] border border-[#222222] hover:border-[#D1FF26]/40 transition-colors flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#D1FF26] shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">{cert.title}</div>
                      <div className="text-[11px] text-zinc-400 font-mono">{cert.issuer}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#D1FF26] px-2.5 py-1 bg-[#141414] rounded-lg border border-[#222222]">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
