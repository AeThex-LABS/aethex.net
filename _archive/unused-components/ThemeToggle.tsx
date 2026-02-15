import React, { useEffect, useState } from 'react';

type Theme = 'day' | 'dim' | 'night';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('day');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme || 'day';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'day') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex items-center gap-2 p-1 rounded-lg" style={{
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border-primary)'
    }}>
      <button
        onClick={() => handleThemeChange('day')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          theme === 'day' ? 'bg-blue-500 text-white' : ''
        }`}
        style={{
          color: theme === 'day' ? 'white' : 'var(--text-secondary)'
        }}
        title="Day Mode"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        onClick={() => handleThemeChange('dim')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          theme === 'dim' ? 'bg-blue-500 text-white' : ''
        }`}
        style={{
          color: theme === 'dim' ? 'white' : 'var(--text-secondary)'
        }}
        title="Dim Mode"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0z" opacity="0.5" />
        </svg>
      </button>
      <button
        onClick={() => handleThemeChange('night')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          theme === 'night' ? 'bg-blue-500 text-white' : ''
        }`}
        style={{
          color: theme === 'night' ? 'white' : 'var(--text-secondary)'
        }}
        title="Night Mode"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </div>
  );
};

export default ThemeToggle;