'use client'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const filters = ['Barchasi', 'Web', 'Bot', 'AI / ML']

const works = [
  // Web
  {
    name: 'HRLA Conference',
    tag: 'Korporativ Sayt',
    desc: "O'zbekistonning birinchi HR konferensiyasi rasmiy sayti",
    bg: 'linear-gradient(140deg, #0d3d22 0%, #1a5c35 100%)',
    url: 'https://hrla-website.vercel.app',
    cat: 'Web',
  },
  {
    name: 'Patinka.uz',
    tag: 'E-commerce',
    desc: "Premium poyafzal onlayn do'koni — eksklyuziv modellar",
    bg: 'linear-gradient(140deg, #1a1208 0%, #2d1e0a 100%)',
    url: '#',
    cat: 'Web',
  },
  {
    name: 'Prosales.uz',
    tag: 'SaaS Platform',
    desc: "Savdo jamoalari uchun mijozlar va bitimlarni boshqarish CRM tizimi",
    bg: 'linear-gradient(140deg, #0d2a2a 0%, #0f3838 100%)',
    url: 'https://prosales.uz',
    cat: 'Web',
  },
  {
    name: 'Omborchi.uz',
    tag: 'SaaS Platform',
    desc: 'Biznes uchun ombor va savdo boshqaruv tizimi',
    bg: 'linear-gradient(140deg, #0d1a3d 0%, #112252 100%)',
    url: '#',
    cat: 'Web',
  },
  {
    name: 'BTA Awards',
    tag: 'Event Platform',
    desc: 'Business Travel Awards mukofot marosimi platformasi',
    bg: 'linear-gradient(140deg, #2a0d1a 0%, #3d1025 100%)',
    url: '#',
    cat: 'Web',
  },
  {
    name: 'ABA Angel',
    tag: 'Branding & Web',
    desc: "Kompaniya uchun to'liq brend identifikatsiya va web dizayn",
    bg: 'linear-gradient(140deg, #1a0d2a 0%, #271040 100%)',
    url: '#',
    cat: 'Web',
  },
  {
    name: 'bnutfilloyev.uz',
    tag: 'Portfolio',
    desc: 'AI/ML muhandis shaxsiy portfolio va brend sayti',
    bg: 'linear-gradient(140deg, #080808 0%, #12100a 100%)',
    url: 'https://bnutfilloyev.uz',
    cat: 'Web',
  },
  // Bot
  {
    name: 'MedBrand Bot',
    tag: 'Telegram Mini App',
    desc: "Bemor va shifokor uchun navbat olish Telegram mini ilovasi",
    bg: 'linear-gradient(140deg, #0d2a3d 0%, #0f3852 100%)',
    url: '#',
    cat: 'Bot',
  },
  {
    name: 'Uro Bot',
    tag: 'Telegram Bot',
    desc: "Dr. Akbarshoh urolog va androlog uchun professional bot — obuna tizimi bilan",
    bg: 'linear-gradient(140deg, #0d3a35 0%, #104840 100%)',
    url: '#',
    cat: 'Bot',
  },
  {
    name: 'AI Analyzer Bot',
    tag: 'Telegram Bot · AI',
    desc: "Tibbiy tahlil natijalarini o'zbek tilida AI yordamida izohlash",
    bg: 'linear-gradient(140deg, #0d1a2a 0%, #0f2238 100%)',
    url: '#',
    cat: 'Bot',
  },
  // AI / ML
  {
    name: "Ko'krak Bezi AI",
    tag: 'Medical AI',
    desc: "YOLO11L modeli yordamida mammografiyadan BI-RADS saraton skriningi",
    bg: 'linear-gradient(140deg, #1a0d1a 0%, #280e28 100%)',
    url: '#',
    cat: 'AI / ML',
  },
  {
    name: 'Face Matching',
    tag: 'Computer Vision',
    desc: 'ArcFace + ONNX Runtime asosida lokal yuz identifikatsiya tizimi',
    bg: 'linear-gradient(140deg, #1a1a0d 0%, #252508 100%)',
    url: '#',
    cat: 'AI / ML',
  },
  {
    name: 'Pneumonia Detector',
    tag: 'Medical AI',
    desc: "Rentgen tasviridan pnevmoniyani aniqlash — FastAPI + React",
    bg: 'linear-gradient(140deg, #0a1a2a 0%, #0c2235 100%)',
    url: '#',
    cat: 'AI / ML',
  },
  {
    name: 'Online Interviewer',
    tag: 'AI Platform',
    desc: "O'zbek va ingliz tilida AI yordamida real-time ovozli suhbat simulyatori",
    bg: 'linear-gradient(140deg, #0d1a10 0%, #0f2416 100%)',
    url: '#',
    cat: 'AI / ML',
  },
]

export default function Works() {
  const [active, setActive] = useState('Barchasi')
  const filtersRef = useRef(null)
  const btnRefs = useRef({})
  const [pill, setPill] = useState({ x: 0, w: 0, ready: false })

  const filtered = active === 'Barchasi' ? works : works.filter(w => w.cat === active)

  useEffect(() => {
    const wrap = filtersRef.current
    const btn = btnRefs.current[active]
    if (!wrap || !btn) return
    const update = () => {
      setPill({
        x: btn.offsetLeft,
        w: btn.offsetWidth,
        ready: true,
      })
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [active])

  return (
    <section className="section" id="works">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">02 — Ishlarimiz</p>
            <h2 className="section-title">Tanlangan<br />loyihalar</h2>
          </div>
          <div className="works-filters" ref={filtersRef}>
            <span
              className="works-filter-pill"
              aria-hidden="true"
              style={{
                transform: `translateX(${pill.x}px)`,
                width: `${pill.w}px`,
                opacity: pill.ready ? 1 : 0,
              }}
            />
            {filters.map(f => (
              <button
                key={f}
                type="button"
                ref={(el) => { btnRefs.current[f] = el }}
                aria-pressed={active === f}
                className={`works-filter-btn${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <p className="works-result-count" aria-live="polite">
          {filtered.length} ta loyiha
        </p>
        <div className="works-grid" key={active}>
          {filtered.map((w, i) => {
            const isLive = w.url !== '#'
            const delay = Math.min(i * 60, 480)
            const inner = (
              <>
                <div className="work-card-bg" style={{ background: w.bg }} aria-hidden="true" />
                <div className="work-overlay">
                  <p className="work-tag">{w.tag}</p>
                  <h3 className="work-name u-underline">{w.name}</h3>
                  <p className="work-desc-text">{w.desc}</p>
                </div>
                {isLive ? (
                  <div className="work-arrow" aria-hidden="true">↗</div>
                ) : (
                  <span className="work-soon-tag">Tez orada</span>
                )}
              </>
            )

            return isLive ? (
              <Reveal
                key={w.name}
                as="a"
                className="work-card"
                data-anim="scale"
                delay={delay}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${w.name} — ${w.tag} (yangi oynada ochiladi)`}
              >
                {inner}
              </Reveal>
            ) : (
              <Reveal
                key={w.name}
                className="work-card soon"
                data-anim="scale"
                delay={delay}
                aria-label={`${w.name} — ${w.tag} (tez orada)`}
              >
                {inner}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
