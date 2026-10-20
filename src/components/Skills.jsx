import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Layers, Database, Wrench } from 'lucide-react';
import { skillsData } from '../data/content';

export const Skills = () => {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-4 h-4 text-[#E3EF4F]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#5882E8]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#5882E8]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#5882E8]" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-[#5882E8]" />;
      default:
        return <Code className="w-4 h-4 text-[#5882E8]" />;
    }
  };

  return (
    <section id="skills" aria-label="Technical Skills" className="py-16 sm:py-24 border-t border-[#5882E8]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11162b] border border-[#5882E8]/30 text-[#5882E8] text-xs font-mono uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Skills & Frameworks
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Machine learning libraries, computer vision architectures, and web stacks applied across projects.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.categories.map((category) => (
            <div
              key={category.title}
              className="bg-[#11162b] border border-[#5882E8]/25 rounded-xl p-5 flex flex-col justify-between hover:border-[#5882E8]/50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#5882E8]/20">
                  <div className="p-2 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-white dark:text-white light:text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      data-bubble="true"
                      className="bubble-interactive px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#0b0e1b] text-slate-200 border border-[#5882E8]/30 hover:border-[#E3EF4F] hover:text-[#E3EF4F] transition-colors"
                    >
                      {skill}
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
