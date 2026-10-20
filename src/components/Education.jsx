import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationData } from '../data/content';

export const Education = () => {
  return (
    <section id="education" aria-label="Education and Certifications" className="py-16 sm:py-24 border-t border-[#5882E8]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11162b] border border-[#5882E8]/30 text-[#5882E8] text-xs font-mono uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Undergraduate Computer Science foundation at SRM University AP and validated industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Degree */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-base font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#5882E8]" />
              <span>Undergraduate Degree</span>
            </h3>

            {educationData.degrees.map((edu) => (
              <div
                key={edu.degree}
                data-bubble="true"
                className="bg-[#11162b] border border-[#5882E8]/25 hover:border-[#5882E8] rounded-xl p-6 bubble-interactive transition-colors"
              >
                <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-[#0F42C0]/25 text-[#5882E8] border border-[#5882E8]/30 mb-3">
                  {edu.status}
                </div>

                <h4 className="text-xl font-serif font-bold text-white leading-snug">
                  {edu.degree}
                </h4>

                <div className="text-sm font-serif italic text-[#5882E8] mt-1">
                  {edu.institution}
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#5882E8]" />
                    {edu.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#5882E8]" />
                    {edu.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 pt-4 border-t border-[#5882E8]/20">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E3EF4F] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-base font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#5882E8]" />
              <span>Industry Certifications</span>
            </h3>

            <div className="space-y-3">
              {educationData.certifications.map((cert) => (
                <div
                  key={cert.title}
                  data-bubble="true"
                  className="bg-[#11162b] border border-[#5882E8]/25 hover:border-[#5882E8] rounded-xl p-5 bubble-interactive flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30 text-[#5882E8] shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-[#5882E8]">{cert.issuer}</span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                      </div>

                      <h4 className="text-base font-serif font-bold text-white">
                        {cert.title}
                      </h4>

                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  <div className="sm:self-center shrink-0">
                    <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-semibold bg-[#E3EF4F]/10 text-[#E3EF4F] border border-[#E3EF4F]/30">
                      {cert.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
