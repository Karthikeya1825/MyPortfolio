import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        const dark = storedTheme === 'dark';
        setIsDark(dark);
        if (dark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    } catch (e) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-bubble="true"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="bubble-interactive p-2 rounded-lg border border-[#5882E8]/30 bg-[#11162b] text-slate-300 hover:text-[#E3EF4F] hover:border-[#E3EF4F] transition-colors cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 30, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Moon className="w-4 h-4 text-[#5882E8]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -30, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Sun className="w-4 h-4 text-[#E3EF4F]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
