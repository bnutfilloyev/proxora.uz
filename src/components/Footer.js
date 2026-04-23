export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="/" className="footer-logo">
          <img src="/logo.png" alt="Proxora Global" />
        </a>
        <p className="footer-copy">
          © {new Date().getFullYear()} Proxora Global. Barcha huquqlar himoyalangan.
        </p>
        <div className="footer-links">
          <a href="#services">Xizmatlar</a>
          <a href="#works">Ishlarimiz</a>
          <a href="#contact">Aloqa</a>
        </div>
      </div>
    </footer>
  )
}
