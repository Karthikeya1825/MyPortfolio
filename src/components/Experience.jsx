import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/content';

export const Experience = () => {
  return (
    <section id="experience" aria-label="Work Experience" className="py-16 sm:py-24 border-t border-[#5882E8]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11162b] border border-[#5882E8]/30 text-[#5882E8] text-xs font-mono uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Software engineering internship building end-to-end full-stack architectures.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8">
          {/* Vertical connecting line - Solid Palette color (#5882E8) */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-[#5882E8]/40" />

          {experienceData.map((exp) => (
            <div key={exp.title + exp.company} className="relative mb-10 last:mb-0">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-6 w-3.5 h-3.5 rounded-full bg-[#E3EF4F] border-2 border-[#0b0e1b]" />

              {/* Main Timeline Card */}
              <div
                data-bubble="true"
                className="bg-[#11162b] border border-[#5882E8]/25 hover:border-[#5882E8] rounded-xl p-6 sm:p-7 bubble-interactive transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                      {exp.title}
                    </h3>
                    <div className="text-sm font-serif italic text-[#5882E8] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-[#0b0e1b] border border-[#5882E8]/30 text-slate-300">
                      <Calendar className="w-3 h-3 text-[#5882E8]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-[#0F42C0]/25 border border-[#5882E8]/30 text-[#5882E8]">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 mb-5">
                  {exp.bulletPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-[#E3EF4F] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-3 border-t border-[#5882E8]/20 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-[#0b0e1b] text-slate-300 border border-[#5882E8]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
