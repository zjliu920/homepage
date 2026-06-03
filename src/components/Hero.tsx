type IconName = 'email' | 'scholar' | 'github' | 'cv' | 'orcid';

type AcademicLink = {
  label: string;
  href: string;
  icon: IconName;
};

const email = 'zjliu920@outlook.com';

const academicLinks: AcademicLink[] = [
  { label: 'Email', href: `mailto:${email}`, icon: 'email' },
  { label: 'Google Scholar', href: 'https://scholar.google.com', icon: 'scholar' },
  { label: 'GitHub', href: 'https://github.com/zjliu920', icon: 'github' },
  { label: 'CV', href: './cv.pdf', icon: 'cv' },
  { label: 'ORCID', href: 'https://orcid.org', icon: 'orcid' },
];

function Icon({ name }: { name: IconName }) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.01c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    );
  }

  if (name === 'scholar') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m3 8.5 9-4 9 4-9 4-9-4Z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 11v4.5c0 1.2 2.2 2.3 5 2.3s5-1.1 5-2.3V11"
        />
      </svg>
    );
  }

  if (name === 'cv') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 3h7l4 4v14H7V3Z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 3v5h4M10 12h5M10 16h5"
        />
      </svg>
    );
  }

  if (name === 'orcid') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          fill="currentColor"
          d="M8.4 9.7h1.7v6.4H8.4V9.7Zm.8-2.8a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1Zm3.1.2h2.4c2.4 0 3.8 1.8 3.8 4.5s-1.4 4.5-3.8 4.5h-2.4v-9Zm1.7 1.5v6h.6c1.4 0 2.1-1.1 2.1-3s-.7-3-2.1-3H14Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16v12H4z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 7 8 6 8-6"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-kicker">Master's Student · Computer Science</p>
          <h1 id="hero-title">Zhenjie Liu 刘振杰</h1>
          <div className="intro">
            <p>
              I am a Master's student in Computer Science at Hefei University of Technology, advised
              by Prof. Xindong Wu. Prior to that, I studied Automation at Hangzhou Dianzi University.
            </p>
            <p>
              My research interests lie in multimodal learning and graph neural networks, with a
              particular focus on learning effective representations from complex, heterogeneous, and
              structured data.
            </p>
          </div>
        </div>

        <div className="hero-profile">
          <div className="profile-frame" aria-label="Portrait of Zhenjie Liu">
            <span className="profile-fallback" aria-hidden="true">
              ZL
            </span>
            <img
              className="profile-image"
              src="./profile.jpg"
              alt="Portrait of Zhenjie Liu"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="hero-contact" aria-label="Contact and academic links">
            <div className="link-list">
              {academicLinks.map((link) => (
                <a href={link.href} key={link.label} aria-label={link.label} title={link.label}>
                  <Icon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
