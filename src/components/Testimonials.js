'use client'
import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const testimonials = [
  {
    id: 1,
    name: 'Sardor Qodirov',
    role: 'HRLA loyiha menejeri',
    text: "Proxora jamoasi HRLA konferensiyasi uchun ajoyib sayt yaratib berishdi. Ularning tezkorligi va sifatli ishlashi bizni hayratda qoldirdi. Ayniqsa, dizayndagi e'tibor juda yuqori darajada.",
    project: 'HRLA Conference'
  },
  {
    id: 2,
    name: 'Akbarshoh Tojiboyev',
    role: 'Urolog-androlog, Shifo Med klinikasi',
    text: "Telegram botimiz orqali bemorlarni qabul qilish va obuna xizmatlari mukammal ishlamoqda. Avval qo'lda bajarilgan qabul jarayonining 80% endi avtomatlashdi — kuniga bir necha soat tejayapmiz.",
    project: 'Uro Bot'
  },
  {
    id: 3,
    name: 'Dr. Alisher Rustamov',
    role: 'Bosh shifokor, Med Innovatsiya markazi',
    text: "AI Analyzer va Pnevmoniya aniqlash modellari faoliyatimizni ancha tezlashtirdi. Rentgen tasvirlarini tahlil qilishdagi aniqlik va lokal Face Matching tizimi shifoxonamiz raqamli infratuzilmasini yangi bosqichga olib chiqdi.",
    project: 'Pneumonia Detector & AI'
  }
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || prefersReduced) return
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [paused, active])

  return (
    <section className="section t-section" id="testimonials">
      <div className="orb t-orb orb--drift" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <Reveal as="div" data-anim="fade">
            <p className="section-label u-overline">04 — Mijozlarimiz</p>
            <h2 className="section-title">Ular<br />nima deydi</h2>
          </Reveal>
        </div>

        <div
          className="testimonials-wrapper glow-cursor"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <span aria-hidden="true" className="t-quote-mark glow-text">&ldquo;</span>

          <div aria-live="polite" className="t-stage">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`t-slide ${active === i ? 'is-active' : ''}`}
                aria-hidden={active === i ? undefined : 'true'}
              >
                <p className="t-text">{t.text}</p>
                <div className="t-author">
                  <h3 className="t-name">{t.name}</h3>
                  <p className="t-role">
                    {t.role} — <span className="t-project">{t.project}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-dots" role="tablist" aria-label="Sharhlar">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => { setActive(i); setPaused(true) }}
                aria-label={`Sharh ${i + 1}`}
                aria-pressed={active === i}
                className={`t-dot ${active === i ? 'is-active' : ''}`}
              >
                <span className="t-dot-pill" aria-hidden="true">
                  <span
                    className="t-dot-progress"
                    style={{ animationPlayState: active === i && !paused ? 'running' : 'paused' }}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .t-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(to bottom, transparent, var(--yellow-a08));
        }
        .t-orb {
          width: 540px;
          height: 540px;
          top: 12%;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.7;
        }
        .testimonials-wrapper {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          z-index: 1;
        }
        .t-quote-mark {
          display: block;
          font-family: var(--font-display), serif;
          font-size: clamp(3.5rem, 14vw, 7rem);
          line-height: 0.6;
          color: var(--yellow-a16);
          margin-bottom: 0.5rem;
          pointer-events: none;
          user-select: none;
        }
        .t-stage {
          position: relative;
          min-height: 220px;
        }
        @media (min-width: 768px) { .t-stage { min-height: 190px; } }
        .t-slide {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
          transition:
            opacity var(--t-mid) var(--ease-out),
            transform var(--t-mid) var(--ease-out);
        }
        .t-slide.is-active {
          opacity: 1;
          transform: none;
          pointer-events: auto;
          position: relative;
        }
        .t-text {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #fff;
          font-style: italic;
          margin: 0 0 2rem 0;
        }
        .t-author {
          opacity: 0;
          transform: translateY(6px);
          transition:
            opacity var(--t-mid) var(--ease-out),
            transform var(--t-mid) var(--ease-out);
        }
        .t-slide.is-active .t-author {
          opacity: 1;
          transform: none;
          transition-delay: 0.12s;
        }
        .t-name {
          color: var(--yellow);
          font-size: 1.1rem;
          margin: 0 0 0.25rem 0;
        }
        .t-role {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          margin: 0;
        }
        .t-project { color: #fff; }
        .testimonials-dots {
          display: flex;
          gap: 0.25rem;
          justify-content: center;
          margin-top: 2.5rem;
        }
        /* Button is a 44px tap target; the visible pill lives inside it */
        .t-dot {
          width: 44px;
          height: 44px;
          padding: 0;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .t-dot-pill {
          position: relative;
          display: block;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.2);
          overflow: hidden;
          transition: width var(--t-mid) var(--ease-spring);
        }
        .t-dot.is-active .t-dot-pill {
          width: 2rem;
        }
        .t-dot-progress {
          position: absolute;
          inset: 0;
          background: var(--yellow);
          transform: scaleX(0);
          transform-origin: left;
          opacity: 0;
        }
        .t-dot.is-active .t-dot-progress {
          opacity: 1;
          animation: t-progress 6s linear forwards;
        }
        @keyframes t-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .t-orb { animation: none !important; }
          .t-slide,
          .t-author { transition: none !important; }
          .t-dot-progress { animation: none !important; opacity: 0; }
          .t-dot-pill { transition: none !important; }
        }
      `}} />
    </section>
  )
}
