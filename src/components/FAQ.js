'use client'
import { useState } from 'react'

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
          <div>
            <p className="section-label">05 — Savol-Javob</p>
            <h2 className="section-title">Ko'p so'raladigan<br />savollar</h2>
          </div>
        </div>
        
        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <span>{faq.q}</span>
                <span style={{ 
                  color: '#D0FF14', 
                  fontSize: '1.5rem', 
                  fontWeight: '300',
                  transform: openIndex === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.3s ease'
                }}>+</span>
              </button>
              
              <div 
                style={{
                  height: openIndex === i ? 'auto' : '0',
                  opacity: openIndex === i ? '1' : '0',
                  padding: openIndex === i ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: '1.6',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
