import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Languages, Target, Compass } from 'lucide-react';
import { personalInfo, quickFacts } from '../data/content';

export const About = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-[#5882E8]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-[#5882E8]" />;
      case 'Languages':
        return <Languages className="w-4 h-4 text-[#5882E8]" />;
      default:
        return <Target className="w-4 h-4 text-[#E3EF4F]" />;
    }
  };

  return (
    <section id="about" aria-label="About" className="py-16 sm:py-24 border-t border-[#5882E8]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11162b] border border-[#5882E8]/30 text-[#5882E8] text-xs font-mono uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Overview & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            About Karthikeya
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 bg-[#11162b] border border-[#5882E8]/25 rounded-xl p-6 sm:p-8">
            <h3 className="font-serif font-semibold text-xl text-white dark:text-white light:text-slate-900 mb-4">
              Applied Machine Learning & Perception
            </h3>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg mb-4 font-normal">
              {personalInfo.aboutStory}
            </p>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed text-sm sm:text-base">
              My technical methodology centers around empirical validation, robust ML pipelines, and clear architectural modularity. From zero-shot foundation models to real-time action recognition edge pipelines, every implementation prioritizes real-world reliability.
            </p>

            <div className="mt-6 pt-5 border-t border-[#5882E8]/20 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-[#0F42C0]/25 text-[#5882E8] border border-[#5882E8]/40 text-xs font-mono font-medium">
                Computer Vision
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0F42C0]/25 text-[#5882E8] border border-[#5882E8]/40 text-xs font-mono font-medium">
                Deep Learning
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0F42C0]/25 text-[#5882E8] border border-[#5882E8]/40 text-xs font-mono font-medium">
                MERN Stack
              </span>
            </div>
          </div>

          {/* Quick Facts Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                data-bubble="true"
                className="bg-[#11162b] border border-[#5882E8]/20 hover:border-[#5882E8]/50 rounded-xl p-4 flex items-start gap-3.5 bubble-interactive transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30 shrink-0 mt-0.5">
                  {getIcon(fact.icon)}
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-0.5">
                    {fact.value}
                  </div>
                  {fact.subtext && (
                    <div className="text-xs text-[#5882E8] mt-0.5 font-mono">
                      {fact.subtext}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
