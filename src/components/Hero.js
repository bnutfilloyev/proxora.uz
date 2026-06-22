'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from './Reveal'

const EASE_OUT = (t) => 1 - Math.pow(1 - t, 3)

function CountUp({ end, suffix = '', duration = 1400, active }) {
  const [value, setValue] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    if (!active || done.current) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setValue(end)
      done.current = true
      return
    }

    done.current = true
    let raf = 0
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setValue(Math.round(EASE_OUT(p) * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, end, duration])

  return (
    <span className="count-up" style={{ fontVariantNumeric: 'tabular-nums' }}>
      {value}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const [statsRef, statsIn] = useInView({ threshold: 0.4 })

  // Signature entrance: masked per-line headline rise + clip-path wipe.
  // LCP-safe — text is opaque from frame 1; only transform/clip-path animate.
  useEffect(() => {
    const root = ref.current
    if (!root) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = root.querySelectorAll('.line-mask')
    const wipe = root.querySelector('.hl-wipe')
    const rest = root.querySelectorAll('[data-r]')

    if (reduce) {
      lines.forEach((el) => el.classList.add('is-in'))
      if (wipe) wipe.classList.add('is-in')
      rest.forEach((el) => el.classList.add('is-in'))
      return
    }

    const timers = []
    // headline lines stagger in (90ms)
    lines.forEach((el, i) => {
      timers.push(setTimeout(() => el.classList.add('is-in'), 120 + i * 90))
    })
    // the yellow word wipes a beat after its line lands
    if (wipe) timers.push(setTimeout(() => wipe.classList.add('is-in'), 520))
    // supporting elements settle after the headline
    rest.forEach((el, i) => {
      timers.push(setTimeout(() => el.classList.add('is-in'), 480 + i * 90))
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="hero">
      {/* decorative-object layers (globals owner provides these classes) */}
      <div className="grid-bg" aria-hidden="true" />
      <div className="glow-cursor" aria-hidden="true" />
      <img src="/logo-icon.png" alt="" className="hero-orb orb" aria-hidden="true" />

      <div className="container" ref={ref}>
        <div className="hero-content">
          <p className="hero-eyebrow hero-rise" data-r>
            Kreativ raqamli agentlik · Toshkent, O'zbekiston
          </p>

          <h1 className="hero-headline">
            <span className="line-mask"><span className="line-inner">Raqamli</span></span>
            <span className="line-mask">
              <span className="line-inner">
                <span className="hl hl-wipe glow-text">mahsulotlar</span>
              </span>
            </span>
            <span className="line-mask"><span className="line-inner">yaratamiz</span></span>
          </h1>

          <p className="hero-sub hero-rise" data-r>
            Web saytlar, Telegram botlar va AI yechimlari — g'oyangizni 2 hafta
            ichida ishlaydigan mahsulotga aylantiramiz.
          </p>

          <div className="hero-actions hero-actions-col hero-rise" data-r>
            <div className="hero-actions-row">
              <a href="#contact" className="btn-primary">
                Bepul konsultatsiya <span aria-hidden="true">→</span>
              </a>
              <a href="#works" className="btn-ghost">
                Ishlarimizni ko'ring <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-actions-note">
              <span className="hero-actions-note-dot" aria-hidden="true" />
              Birinchi konsultatsiya va loyiha auditi mutlaqo bepul
            </p>
          </div>
        </div>

        <div className="hero-stats hero-rise" data-r ref={statsRef}>
          <div className="hero-stat">
            <div className="stat-num"><CountUp end={20} suffix="+" active={statsIn} /></div>
            <div className="stat-label">Loyiha bajarildi</div>
          </div>
          <div className="hero-stat">
            <div className="stat-num"><CountUp end={15} suffix="+" active={statsIn} /></div>
            <div className="stat-label">Mamnun mijozlar</div>
          </div>
          <div className="hero-stat">
            <div className="stat-num"><CountUp end={3} suffix="+" active={statsIn} /></div>
            <div className="stat-label">Yil tajriba</div>
          </div>
        </div>
      </div>

      <span className="scroll-cue" aria-hidden="true" />

      <style>{`
        .hero-actions-col {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          align-items: flex-start;
        }
        .hero-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .hero-actions-note {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 0;
        }
        .hero-actions-note-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--yellow);
          flex-shrink: 0;
        }

        /* ── Signature masked-line headline ── */
        .hero-headline .line-mask {
          display: block;
          overflow: hidden;
        }
        .hero-headline .line-inner {
          display: block;
          transform: translateY(100%);
          transition: transform var(--t-xslow, 1.1s) var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1));
          will-change: transform;
        }
        .hero-headline .line-mask.is-in .line-inner {
          transform: none;
        }

        /* the yellow word paints in left→right (LCP-safe: opacity stays 1) */
        .hero-headline .hl-wipe {
          display: inline-block;
          clip-path: inset(0 100% 0 0);
          transition: clip-path var(--t-xslow, 1.1s) var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1));
        }
        .hero-headline .hl-wipe.is-in {
          clip-path: inset(0 0 0 0);
        }

        /* supporting elements rise/settle (opacity + transform only) */
        .hero-rise {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity var(--t-slow, 0.7s) var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1)),
                      transform var(--t-slow, 0.7s) var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1));
          will-change: opacity, transform;
        }
        .hero-rise.is-in {
          opacity: 1;
          transform: none;
          will-change: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-headline .line-inner,
          .hero-headline .hl-wipe,
          .hero-rise {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
            clip-path: inset(0 0 0 0) !important;
          }
        }
      `}</style>
    </section>
  )
}
