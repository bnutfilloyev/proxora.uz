'use client'
import { useState, useEffect } from 'react'

const SECTIONS = ['services', 'works', 'process', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Global scroll provider: scrolled-state + --sp (0→1) + --mx/--my for glow-cursor.
  // One scroll listener + one pointer listener, both passive & rAF-throttled.
  useEffect(() => {
    const root = document.documentElement
    let sticking = false

    const onScroll = () => {
      if (sticking) return
      sticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 60)
        const max = root.scrollHeight - window.innerHeight
        root.style.setProperty('--sp', max > 0 ? String(Math.min(y / max, 1)) : '0')
        sticking = false
      })
    }

    let pointing = false
    const onPointer = (e) => {
      if (pointing) return
      pointing = true
      requestAnimationFrame(() => {
        root.style.setProperty('--mx', `${e.clientX}px`)
        root.style.setProperty('--my', `${e.clientY}px`)
        pointing = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [])

  // Scroll-spy: one IntersectionObserver across the section anchors → aria-current.
  useEffect(() => {
    const els = SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const linkProps = (id) =>
    active === id ? { 'aria-current': 'true' } : {}

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="/" className="navbar-logo" onClick={close}>
            <img src="/logo.png" alt="Proxora Global" />
          </a>
          <ul className="navbar-links">
            <li><a href="#services" className="u-underline" {...linkProps('services')}>Xizmatlar</a></li>
            <li><a href="#works" className="u-underline" {...linkProps('works')}>Ishlarimiz</a></li>
            <li><a href="#process" className="u-underline" {...linkProps('process')}>Jarayon</a></li>
            <li><a href="#contact" className="u-underline" {...linkProps('contact')}>Aloqa</a></li>
          </ul>
          <a href="#contact" className="navbar-cta nav-cta-desktop">Bepul konsultatsiya <span aria-hidden="true">→</span></a>
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Menuni yopish' : 'Menuni ochish'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </div>
        <span className="scroll-progress" aria-hidden="true" />
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav className="mobile-nav">
          <a href="#services" onClick={close}>Xizmatlar</a>
          <a href="#works" onClick={close}>Ishlarimiz</a>
          <a href="#process" onClick={close}>Jarayon</a>
          <a href="#contact" onClick={close}>Aloqa</a>
        </nav>
        <a href="#contact" className="btn-primary mobile-menu-cta" onClick={close}>
          Bepul konsultatsiya <span aria-hidden="true">→</span>
        </a>
        <p className="mobile-menu-contact">
          +998 88 300 10 01 · proxoraglobal@gmail.com
        </p>
      </div>

      <style>{`
        /* CTA arrow nudge — transform only */
        .navbar-cta span,
        .nav-cta-desktop span {
          display: inline-block;
          transition: transform var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1));
        }
        .navbar-cta:hover span { transform: translateX(2px); }

        /* nav links nudge + persistent yellow dot on active section */
        .navbar-links a {
          position: relative;
          transition: color var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1)),
                      transform var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1));
        }
        .navbar-links a:hover { transform: translateX(2px); }
        .navbar-links a[aria-current="true"] { color: var(--white); }
        .navbar-links a[aria-current="true"]::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--yellow);
          transform: translateY(-50%) scale(1);
          transition: transform var(--t-mid, 0.4s) var(--ease-spring, cubic-bezier(0.34, 1.56, 0.64, 1));
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-cta span,
          .nav-cta-desktop span,
          .navbar-links a,
          .navbar-links a[aria-current="true"]::before {
            transition: none !important;
          }
        }
      `}</style>
    </>
  )
}
