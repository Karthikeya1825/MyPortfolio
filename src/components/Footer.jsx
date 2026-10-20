import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/content';

export const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#5882E8]/20 bg-[#070913] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Author */}
          <div className="flex items-center gap-3">
            <img
              src={personalInfo.logoUrl}
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover border border-[#5882E8]"
            />
            <div>
              <div className="text-sm font-serif font-bold text-white">
                {personalInfo.name}
              </div>
              <div className="text-xs font-mono text-slate-400">
                © 2026 Karthikeya Kondaveeti. All rights reserved.
              </div>
            </div>
          </div>

          {/* Actions & Links */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              data-bubble="true"
              aria-label="View Resume"
              className="bubble-interactive inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-[#11162b] border border-[#5882E8]/30 hover:border-[#E3EF4F] text-[#E3EF4F] transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-bubble="true"
              aria-label="GitHub Profile"
              className="bubble-interactive p-2 rounded-md border border-[#5882E8]/30 bg-[#11162b] text-slate-300 hover:text-[#E3EF4F] hover:border-[#E3EF4F] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              data-bubble="true"
              aria-label="Email Karthikeya"
              className="bubble-interactive p-2 rounded-md border border-[#5882E8]/30 bg-[#11162b] text-slate-300 hover:text-[#E3EF4F] hover:border-[#E3EF4F] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              data-bubble="true"
              aria-label="Back to top"
              className="bubble-interactive inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#5882E8]/30 bg-[#11162b] text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
