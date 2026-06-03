import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research';
import News from './components/News';
import Publications from './components/Publications';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

const getSystemTheme = (): Theme => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
};

const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return getSystemTheme();
};

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setTheme(mediaQuery.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeToggle = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  return (
    <>
      <Header theme={theme} onThemeToggle={handleThemeToggle} />
      <main className="site-main">
        <Hero />
        <Research />
        <News />
        <Publications />
      </main>
      <Footer />
    </>
  );
}
