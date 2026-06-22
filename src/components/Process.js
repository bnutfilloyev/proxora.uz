'use client'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    name: 'Tahlil',
    desc: "Loyiha maqsadi, auditoriya va texnik talablarni to'liq o'rganamiz. Aniq texnik topshiriq tuzamiz.",
  },
  {
    num: '02',
    name: 'Dizayn',
    desc: "Wireframe va prototipdan tayyor vizual dizaynga qadar — barcha ekranlar uchun.",
  },
  {
    num: '03',
    name: 'Ishlab chiqish',
    desc: "Zamonaviy texnologiyalar bilan tez, xavfsiz va kengaytiriladigan kod yozamiz.",
  },
  {
    num: '04',
    name: 'Topshirish',
    desc: "Test, optimallashtirish, deploy va ishga tushirishdan keyin qo'llab-quvvatlash.",
  },
]

export default function Process() {
  const connectorRef = useRef(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const el = connectorRef.current
    if (!el) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setDrawn(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">05 — Jarayon</p>
            <h2 className="section-title">Qanday<br />ishlaymiz</h2>
          </div>
        </div>
        <div className="process-grid">
          <div
            ref={connectorRef}
            className={`process-connector u-line-draw${drawn ? ' is-in' : ''}`}
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              className="process-step u-bar-left"
              data-anim="left"
              delay={i * 80}
            >
              <div className="process-big-num">{s.num}</div>
              <div className="process-name">{s.name}</div>
              <p className="process-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
