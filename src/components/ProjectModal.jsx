import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0b0e1b]/85 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#11162b] text-slate-100 rounded-2xl border border-[#5882E8]/40 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            data-bubble="true"
            aria-label="Close project modal"
            className="absolute top-5 right-5 p-2 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/20 text-slate-400 hover:text-white transition-colors bubble-interactive cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#0F42C0]/20 text-[#5882E8] border border-[#5882E8]/30">
                {project.category}
              </span>
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded border ${
                  project.status === 'In progress'
                    ? 'bg-[#E3EF4F]/10 text-[#E3EF4F] border-[#E3EF4F]/40'
                    : 'bg-[#5882E8]/10 text-[#5882E8] border-[#5882E8]/40'
                }`}
              >
                {project.status}
              </span>
            </div>

            <h3 id="modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {project.title}
            </h3>

            <p className="mt-1 text-sm font-serif italic text-[#5882E8]">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[#5882E8]/20">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded text-xs font-mono bg-[#0b0e1b] text-slate-300 border border-[#5882E8]/25"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Implementation Details & Architecture
            </h4>

            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <div className="p-0.5 rounded text-[#E3EF4F] shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-5 border-t border-[#5882E8]/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-bubble="true"
                className="bubble-interactive inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F42C0] hover:bg-[#1F06AC] text-white font-medium text-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-bubble="true"
                  className="bubble-interactive inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#11162b] border border-[#5882E8]/40 hover:border-[#5882E8] text-white font-medium text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#5882E8]" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              data-bubble="true"
              className="bubble-interactive text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 transition-colors cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
