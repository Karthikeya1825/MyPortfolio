import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Send } from 'lucide-react';
import { navLinks, personalInfo } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar — Solid Palette Color (#5882E8) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#5882E8] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          scrolled
            ? 'bg-[#0b0e1b]/95 dark:bg-[#0b0e1b]/95 light:bg-white/95 border-b border-[#5882E8]/20 backdrop-blur-md shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo with Sanji Avatar */}
          <a
            href="#"
            data-bubble="true"
            className="flex items-center gap-3 bubble-interactive focus:outline-none group"
            aria-label="Karthikeya Kondaveeti Home"
          >
            <img
              src={personalInfo.logoUrl}
              alt="Karthikeya Kondaveeti Logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-[#5882E8] group-hover:border-[#E3EF4F] transition-colors"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-[#5882E8] tracking-wide uppercase">
                ML & Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  data-bubble="true"
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm transition-colors bubble-interactive font-medium ${
                    isActive
                      ? 'text-[#E3EF4F] font-semibold bg-[#11162b] border border-[#5882E8]/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Resume button: Opens resume directly */}
            <button
              type="button"
              onClick={onOpenResume}
              data-bubble="true"
              aria-label="Open Resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#E3EF4F] hover:bg-[#d6e336] text-[#0b0e1b] transition-colors bubble-interactive shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#0b0e1b]" />
              <span>Resume</span>
            </button>

            <ThemeToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-bubble="true"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg border border-[#5882E8]/20 bg-[#11162b] text-slate-300 hover:text-white bubble-interactive"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E3EF4F]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-[#5882E8]/20 bg-[#0b0e1b] px-4 pt-3 pb-6 shadow-xl"
            >
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      data-bubble="true"
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors bubble-interactive ${
                        isActive
                          ? 'bg-[#11162b] text-[#E3EF4F] font-semibold border border-[#5882E8]/40'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-[#5882E8]/20 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    data-bubble="true"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider bg-[#E3EF4F] text-[#0b0e1b] bubble-interactive"
                  >
                    <FileText className="w-4 h-4 text-[#0b0e1b]" />
                    <span>View Resume</span>
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    data-bubble="true"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#0F42C0] hover:bg-[#1F06AC] text-white bubble-interactive"
                  >
                    <Send className="w-4 h-4" />
                    <span>Contact Me</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
