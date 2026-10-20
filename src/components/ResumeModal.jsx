import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/content';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0b0e1b]/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#11162b] text-slate-100 rounded-2xl border border-[#5882E8]/30 shadow-2xl z-10 flex flex-col h-[90vh] max-h-[900px] overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          {/* Header Bar */}
          <div className="px-5 py-4 border-b border-[#5882E8]/20 flex items-center justify-between bg-[#0b0e1b]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#0F42C0]/20 text-[#5882E8]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 id="resume-modal-title" className="font-serif font-bold text-lg text-white">
                  Curriculum Vitae — {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  SRM University AP • Computer Science & Engineering
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-bubble="true"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0F42C0] hover:bg-[#1F06AC] text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open in Tab</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Karthikeya_Kondaveeti_Resume.pdf"
                data-bubble="true"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#E3EF4F] hover:bg-[#d4e040] text-[#0b0e1b] font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                data-bubble="true"
                aria-label="Close resume viewer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="flex-1 w-full bg-[#0b0e1b] relative">
            <iframe
              src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
              title="Karthikeya Kondaveeti Resume"
              className="w-full h-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
