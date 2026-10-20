import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, ChevronDown } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/content';

export const Hero = ({ onOpenResume }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 sm:py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Logo / Avatar Display */}
          <div className="mb-6 relative group">
            <img
              src={personalInfo.logoUrl}
              alt="Karthikeya Kondaveeti"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-[#0F42C0] shadow-md shadow-[#0F42C0]/20"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#E3EF4F] border-2 border-[#0b0e1b]" />
          </div>

          {/* Academic Objective Badge — Solid Palette Colors */}
          <div
            data-bubble="true"
            className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11162b] border border-[#5882E8]/40 text-xs sm:text-sm font-mono text-[#E3EF4F] bubble-interactive"
          >
            <span className="w-2 h-2 rounded-full bg-[#E3EF4F]" />
            <span>{personalInfo.status}</span>
          </div>

          {/* Name & Editorial Headline (Claude Typography: Newsreader) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.12]">
            {personalInfo.name}
          </h1>

          <p className="mt-4 text-lg sm:text-2xl font-serif italic text-[#5882E8] font-normal max-w-2xl">
            Applied Machine Learning, Computer Vision & Full-Stack Systems
          </p>

          {/* Summary from Resume */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-normal">
            {personalInfo.summary}
          </p>

          {/* Action Buttons — Solid Palette Colors, Zero Gradients */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* View Projects */}
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              data-bubble="true"
              className="bubble-interactive px-5 py-3 rounded-lg bg-[#0F42C0] hover:bg-[#1F06AC] text-white font-medium text-sm sm:text-base transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Resume Button: Opens real resume */}
            <button
              type="button"
              onClick={onOpenResume}
              data-bubble="true"
              className="bubble-interactive px-5 py-3 rounded-lg bg-[#E3EF4F] hover:bg-[#d6e336] text-[#0b0e1b] font-semibold text-sm sm:text-base transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4 text-[#0b0e1b]" />
              <span>Resume</span>
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              data-bubble="true"
              className="bubble-interactive px-5 py-3 rounded-lg bg-[#11162b] hover:bg-[#192140] text-slate-200 border border-[#5882E8]/40 font-medium text-sm sm:text-base transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#5882E8]" />
              <span>Contact</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-bubble="true"
              aria-label="GitHub Profile"
              className="bubble-interactive p-2.5 rounded-lg border border-[#5882E8]/30 bg-[#11162b] text-slate-300 hover:text-[#E3EF4F] hover:border-[#E3EF4F] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              data-bubble="true"
              aria-label="Send Email"
              className="bubble-interactive p-2.5 rounded-lg border border-[#5882E8]/30 bg-[#11162b] text-slate-300 hover:text-[#E3EF4F] hover:border-[#E3EF4F] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll Down */}
          <div className="mt-12">
            <button
              type="button"
              onClick={() => scrollTo('about')}
              data-bubble="true"
              aria-label="Scroll to About"
              className="bubble-interactive flex flex-col items-center gap-1 text-slate-400 hover:text-[#5882E8] transition-colors text-xs font-mono uppercase tracking-widest cursor-pointer"
            >
              <span>Explore Work</span>
              <ChevronDown className="w-4 h-4 text-[#5882E8]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
