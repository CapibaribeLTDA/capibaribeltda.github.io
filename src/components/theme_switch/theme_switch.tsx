import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './theme-switch.scss';

type ThemeSwitchProps = {
  onChange: () => void;
  theme: 'dark' | 'light';
}

export default function ThemeSwitch({onChange, theme}: ThemeSwitchProps) {
  const isDark = theme === 'dark';

  return (
    <div className="switch-container">
      {/* Toggle Switch */}
      <button
        onClick={onChange}
        className={`toggle-switch ${isDark ? 'dark' : 'light'}`}
        aria-label="Toggle dark mode"
      >
        {/* Moon Icon */}
        <Moon className={`icon moon ${isDark ? 'visible' : 'hidden'}`} />

        {/* Sun Icon */}
        <Sun className={`icon sun ${isDark ? 'hidden' : 'visible'}`} />
        {/* Sliding Circle */}
        <span className={`slider ${isDark ? 'dark' : 'light'}`} />
      </button>
    </div>
  );
}