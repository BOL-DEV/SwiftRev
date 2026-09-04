import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '', variant = 'button' }) {
  const { theme, toggleTheme } = useTheme();

  if (variant === 'sidebar') {
    return (
      <div className={`flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 ${className}`}>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Theme</span>
        <button
          onClick={toggleTheme}
          type="button"
          aria-label="Toggle theme"
          className="p-1.5 rounded-lg bg-white dark:bg-slate-700 shadow-sm text-slate-700 dark:text-slate-200 hover:text-pine transition-all flex items-center gap-1.5 text-xs font-medium"
        >
          {theme === 'dark' ? (
            <>
              <Moon className="w-3.5 h-3.5 text-teal-400" />
              <span>Dark</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light</span>
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-full border border-border/80 bg-card hover:bg-muted/80 text-foreground transition-all duration-200 shadow-sm flex items-center justify-center ${className}`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700" />
      )}
    </button>
  );
}
