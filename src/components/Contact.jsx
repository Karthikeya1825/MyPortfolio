import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/content';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    const mailSubject = encodeURIComponent(
      subject ? `${subject} — via Portfolio (${name})` : `Inquiry from ${name}`
    );
    const mailBody = encodeURIComponent(
      `Hi Karthikeya,\n\n${message}\n\n---\nFrom: ${name} (${email})`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" aria-label="Contact" className="py-16 sm:py-24 border-t border-[#5882E8]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11162b] border border-[#5882E8]/30 text-[#5882E8] text-xs font-mono uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Correspondence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Open to Master's opportunities in CS / ML / Data Science, research collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#11162b] border border-[#5882E8]/25 rounded-xl p-6">
              <h3 className="font-serif font-bold text-lg text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-5">
                For admissions discussions or project inquiries, please reach out via email or GitHub.
              </p>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                data-bubble="true"
                className="bubble-interactive w-full mb-3 p-3.5 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30 hover:border-[#E3EF4F] flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#0F42C0]/20 text-[#5882E8] group-hover:text-[#E3EF4F]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E3EF4F] group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                data-bubble="true"
                className="bubble-interactive w-full p-3.5 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30 hover:border-[#E3EF4F] flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#0F42C0]/20 text-[#5882E8] group-hover:text-[#E3EF4F]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub</div>
                    <div className="text-sm font-semibold text-white">
                      Karthikeya1825
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E3EF4F] group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            <div className="p-4 rounded-xl border border-[#5882E8]/20 bg-[#11162b] text-xs font-mono text-slate-400">
              Location: <span className="text-white font-medium">Guntur, India</span>
            </div>
          </div>

          {/* Prefilled Mailto Form */}
          <div className="lg:col-span-7 bg-[#11162b] border border-[#5882E8]/25 rounded-xl p-6 sm:p-7">
            <h3 className="font-serif font-bold text-lg text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Fill in your message below. Submitting will launch your email client pre-populated with your text.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Jane Smith"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E3EF4F] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. jsmith@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E3EF4F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Master's Program Inquiry / Research Discussion"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E3EF4F] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message details..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0e1b] border border-[#5882E8]/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E3EF4F] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                data-bubble="true"
                className="bubble-interactive w-full py-3 rounded-lg bg-[#E3EF4F] hover:bg-[#d6e336] text-[#0b0e1b] font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-[#0b0e1b]" />
                    <span>Launching Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#0b0e1b]" />
                    <span>Open in Email Client</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
