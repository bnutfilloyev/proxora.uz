'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="/" className="navbar-logo" onClick={close}>
            <img src="/logo.png" alt="Proxora Global" />
          </a>
          <ul className="navbar-links">
            <li><a href="#services">Xizmatlar</a></li>
            <li><a href="#works">Ishlarimiz</a></li>
            <li><a href="#process">Jarayon</a></li>
            <li><a href="#contact">Aloqa</a></li>
          </ul>
          <a href="#contact" className="navbar-cta nav-cta-desktop">Bepul konsultatsiya →</a>
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Menuni yopish' : 'Menuni ochish'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-nav">
          <a href="#services" onClick={close}>Xizmatlar</a>
          <a href="#works" onClick={close}>Ishlarimiz</a>
          <a href="#process" onClick={close}>Jarayon</a>
          <a href="#contact" onClick={close}>Aloqa</a>
        </nav>
        <a href="#contact" className="btn-primary mobile-menu-cta" onClick={close}>
          Bepul konsultatsiya →
        </a>
        <p className="mobile-menu-contact">
          +998 88 300 10 01 · proxoraglobal@gmail.com
        </p>
      </div>
    </>
  )
}
