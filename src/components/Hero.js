'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-r]')
    items?.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100 + i * 130)
    })
  }, [])

  const fadeIn = {
    opacity: 0,
    transform: 'translateY(32px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  return (
    <section className="hero">
      <img src="/logo-icon.png" alt="" className="hero-orb" aria-hidden="true" />

      <div className="container" ref={ref}>
        <div className="hero-content">
          <p className="hero-eyebrow" data-r style={fadeIn}>
            Creative Development Agency · Toshkent, O'zbekiston
          </p>

          <h1 className="hero-headline" data-r style={fadeIn}>
            Raqamli<br />
            <span className="hl">mahsulotlar</span><br />
            yaratamiz
          </h1>

          <p className="hero-sub" data-r style={fadeIn}>
            Biznes g'oyalaringizni haqiqiy, ishlaydigan raqamli yechimlarga
            aylantiramiz — tez, sifatli va uzoq muddatli.
          </p>

          <div className="hero-actions" data-r style={fadeIn}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#contact" className="btn-primary">Bepul konsultatsiya →</a>
                <a href="#works" className="btn-ghost">Ishlarimizni ko'ring ↓</a>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
                ✨ Birinchi konsultatsiya va loyiha auditi mutlaqo bepul
              </p>
            </div>
          </div>
        </div>

        <div className="hero-stats" data-r style={fadeIn}>
          <div className="hero-stat">
            <div className="stat-num">20+</div>
            <div className="stat-label">Loyiha bajarildi</div>
          </div>
          <div className="hero-stat">
            <div className="stat-num">15+</div>
            <div className="stat-label">Mamnun mijozlar</div>
          </div>
          <div className="hero-stat">
            <div className="stat-num">3+</div>
            <div className="stat-label">Yil tajriba</div>
          </div>
        </div>
      </div>
    </section>
  )
}
