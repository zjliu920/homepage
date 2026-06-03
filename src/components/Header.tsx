type HeaderProps = {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
};

export default function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="site-name" href="#top" aria-label="Zhenjie Liu homepage">
          Zhenjie Liu
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="theme-toggle-icon" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  );
}
