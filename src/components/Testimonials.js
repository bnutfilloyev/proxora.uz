'use client'
import { useState, useEffect } from 'react'

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
    role: 'Urolog, Androlog',
    text: "Telegram botimiz orqali bemorlarni qabul qilish va ularga obuna xizmatlarini ko'rsatish tizimi mukammal ishlamoqda. Avval qog'oz va telefonda qilinadigan ishlar endi to'liq avtomatlashdi.",
    project: 'Uro Bot'
  },
  {
    id: 3,
    name: 'Dr. Alisher Rustamov',
    role: 'Tibbiyot markazi bosh shifokori',
    text: "AI Analyzer va Pnevmoniya aniqlash modellari faoliyatimizni ancha tezlashtirdi. Rentgen tasvirlarini tahlil qilishdagi aniqlik va lokal Face Matching tizimi shifoxonamiz raqamli infratuzilmasini yangi bosqichga olib chiqdi.",
    project: 'Pneumonia Detector & AI'
  }
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section" id="testimonials" style={{ background: 'linear-gradient(to bottom, transparent, rgba(208, 255, 20, 0.03))' }}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">04 — Mijozlarimiz</p>
            <h2 className="section-title">Ular<br />nima deydi</h2>
          </div>
        </div>
        
        <div className="testimonials-wrapper" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', color: 'rgba(208, 255, 20, 0.2)', marginBottom: '-2rem', fontFamily: 'serif' }}>"</div>
          
          <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#fff', fontStyle: 'italic' }}>
              {testimonials[active].text}
            </p>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ color: '#D0FF14', fontSize: '1.1rem', margin: '0 0 0.25rem 0' }}>{testimonials[active].name}</h4>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', margin: '0' }}>
              {testimonials[active].role} — <span style={{ color: '#fff' }}>{testimonials[active].project}</span>
            </p>
          </div>

          <div className="testimonials-dots" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '3rem' }}>
            {testimonials.map((t, i) => (
              <button 
                key={t.id}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i+1}`}
                style={{
                  width: active === i ? '2rem' : '0.5rem',
                  height: '0.5rem',
                  borderRadius: '1rem',
                  background: active === i ? '#D0FF14' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
