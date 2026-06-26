'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  {
    q: "Loyiha narxi qanday belgilanadi?",
    a: "Loyiha narxi uning murakkabligi, kerak bo'ladigan funksiyalar va dizayn talablariga qarab belgilanadi. Dastlabki bepul konsultatsiyamizdan so'ng sizga aniq narx va muddatni o'z ichiga olgan tijorat taklifini taqdim etamiz."
  },
  {
    q: "Web sayt yoki bot yaratish qancha vaqt oladi?",
    a: "Oddiy korporativ saytlar o'rtacha 1-2 hafta, murakkab web platformalar yoki e-commerce loyihalar 1-2 oy vaqt oladi. Telegram botlar esa funksionalligiga qarab 3 kundan 2 haftagacha tayyor bo'ladi."
  },
  {
    q: "Loyihani topshirgandan so'ng qo'llab-quvvatlash bormi?",
    a: "Albatta. Biz har bir loyiha uchun kafolat muddati beramiz va undan keyin ham texnik xizmat ko'rsatish (support) bo'yicha hamkorlikni davom ettirishimiz mumkin."
  },
  {
    q: "Qanday texnologiyalardan foydalanasiz?",
    a: "Biz zamonaviy va xavfsiz texnologiyalarni tanlaymiz: React, Next.js, Node.js, Python (AI/ML uchun), PostgreSQL va bulutli xizmatlar (AWS, Vercel). Telegram botlar uchun Python (Aiogram) dan foydalanamiz."
  },
  {
    q: "O'zimizning dizaynimiz bo'lsa, shuni dasturlab bera olasizmi?",
    a: "Ha, agar sizda tayyor Figma dizayn bo'lsa, biz uni yuqori sifatda, pixel-perfect darajasida kodga o'girib, ishlaydigan mahsulot qilib beramiz."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <Reveal as="div" data-anim="fade">
            <p className="section-label u-overline">07 — Savol-Javob</p>
            <h2 className="section-title">Ko'p so'raladigan<br />savollar</h2>
          </Reveal>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal
                key={i}
                data-anim="up-sm"
                delay={i * 60}
                className={`faq-item ${isOpen ? 'open u-bar-left is-active' : ''}`}
              >
                <button
                  className="faq-q"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span>{faq.q}</span>
                  <span aria-hidden="true" className="faq-icon">+</span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? '1000px' : '0',
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem'
                  }}
                >
                  <span className="faq-divider" aria-hidden="true" />
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--hair);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          transition:
            opacity var(--t-slow) var(--ease-out),
            transform var(--t-slow) var(--ease-out),
            border-color var(--t-mid) var(--ease-soft),
            background var(--t-mid) var(--ease-soft);
        }
        .faq-item.open {
          border-color: var(--yellow-a30);
          background: var(--bg2);
        }
        /* shared left-accent gesture (echoes Services/Process) */
        .faq-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 0;
          background: var(--yellow);
          transition: height var(--t-mid) var(--ease-soft);
        }
        .faq-item.is-active::before { height: 100%; }
        .faq-q {
          width: 100%;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.82);
          font-size: 1.1rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: color var(--t-fast) var(--ease-soft);
        }
        .faq-item.open .faq-q { color: var(--white); }
        .faq-q:hover { color: var(--white); }
        .faq-icon {
          color: var(--yellow);
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1;
          flex-shrink: 0;
          transform: rotate(0deg);
          transition: transform var(--t-mid) var(--ease-spring);
        }
        .faq-item.open .faq-icon { transform: rotate(135deg); }
        .faq-answer {
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          overflow: hidden;
          transition:
            max-height 0.4s var(--ease-out),
            opacity var(--t-mid) var(--ease-out),
            padding var(--t-mid) var(--ease-out);
        }
        .faq-divider {
          display: block;
          height: 1px;
          width: 100%;
          margin-bottom: 1rem;
          background: var(--hair);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--t-slow) var(--ease-out);
        }
        .faq-item.open .faq-divider { transform: scaleX(1); }
        .faq-answer-text {
          margin: 0;
          transform: translateY(-4px);
          opacity: 0;
          transition:
            transform var(--t-mid) var(--ease-out),
            opacity var(--t-mid) var(--ease-out);
        }
        .faq-item.open .faq-answer-text {
          transform: none;
          opacity: 1;
          transition-delay: 0.08s;
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-answer,
          .faq-icon,
          .faq-item::before,
          .faq-divider,
          .faq-answer-text { transition: none !important; }
          .faq-answer-text { transform: none; opacity: 1; }
          .faq-divider { transform: scaleX(1); }
        }
      `}} />
    </section>
  )
}
