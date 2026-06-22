'use client'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

export default function Footer() {
  const ruleRef = useRef(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const el = ruleRef.current
    if (!el) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setIsIn(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <footer className="footer">
      {/* The page's final pen-stroke: a full-width hairline that draws itself */}
      <span
        ref={ruleRef}
        className={`u-line-draw footer-rule${isIn ? ' is-in' : ''}`}
        aria-hidden="true"
      />
      <Reveal className="container footer-inner" data-anim="fade">
        <a href="/" className="footer-logo" aria-label="Bosh sahifa">
          <img src="/logo.png" alt="Proxora Global" />
        </a>
        <p className="footer-copy">
          © {new Date().getFullYear()} Proxora Global. Barcha huquqlar himoyalangan.
        </p>
        <div className="footer-links">
          <a href="#services" className="u-underline">Xizmatlar</a>
          <a href="#works" className="u-underline">Ishlarimiz</a>
          <a href="#contact" className="u-underline">Bog&apos;lanish</a>
        </div>
      </Reveal>
    </footer>
  )
}
