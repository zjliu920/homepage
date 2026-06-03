export default function Footer() {
  const email = 'zjliu920@outlook.com';
  const lastUpdated = new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return (
    <footer className="site-footer">
      <p>&copy; 2026 Zhenjie Liu. Last updated {lastUpdated}.</p>
      <p className="footer-contact">
        Contact: <span>{email}</span>
      </p>
    </footer>
  );
}
