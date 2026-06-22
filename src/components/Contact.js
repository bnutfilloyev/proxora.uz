'use client'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

export default function Contact() {
  const headlineRef = useRef(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const el = headlineRef.current
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
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cta-section" id="contact">
      {/* Decorative: the page's biggest single light source + architectural grid */}
      <div className="orb orb--drift cta-orb" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <div className="glow-cursor" aria-hidden="true" />

      <div className="container">
        {/* The page's final pen-stroke rule above the closing section */}
        <span
          className={`u-line-draw cta-final-rule${isIn ? ' is-in' : ''}`}
          aria-hidden="true"
        />

        <div className="cta-inner">
          <h2
            ref={headlineRef}
            className={`cta-headline glow-text${isIn ? ' is-in' : ''}`}
          >
            <span className="line-mask">
              <span className="line-inner">Birgalikda</span>
            </span>
            <span className="line-mask">
              <em className="line-inner hl-wipe">yarataylik</em>
            </span>
          </h2>
          <div className="cta-right">
            <Reveal as="p" className="cta-sub" data-anim="fade">
              G&apos;oyangiz bormi yoki loyihani qayerdan boshlashni bilmayapsizmi?
              Yozing — bepul konsultatsiya o&apos;tkazamiz va 24 soat ichida aniq taklif beramiz.
              Hech qanday majburiyatsiz.
            </Reveal>

            <Reveal
              as="a"
              data-anim="right"
              delay={80}
              href="https://t.me/bnutfilloyev"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link yellow u-bar-left"
            >
              <span>Telegram orqali yozing</span>
              <span className="cta-link-arrow">→</span>
            </Reveal>

            <Reveal
              as="a"
              data-anim="right"
              delay={160}
              href="mailto:proxoraglobal@gmail.com"
              className="cta-link u-bar-left"
            >
              <span>proxoraglobal@gmail.com</span>
              <span className="cta-link-arrow">↗</span>
            </Reveal>

            <Reveal
              as="a"
              data-anim="right"
              delay={240}
              href="tel:+998883001001"
              className="cta-link u-bar-left"
            >
              <span>+998 88 300 10 01</span>
              <span className="cta-link-arrow">↗</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
