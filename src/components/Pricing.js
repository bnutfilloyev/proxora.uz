import Reveal from './Reveal'

export default function Pricing() {
  const plans = [
    {
      name: "Landing Page",
      glyph: "01",
      price: "Kelishuv asosida",
      desc: "Biznesni internetda tanitish va xaridorlarni jalb qilish uchun bitta sahifali zamonaviy sayt.",
      features: [
        "Unikal UI/UX dizayn",
        "SEO optimizatsiya",
        "Mobil moslashuvchanlik",
        "Yuqori tezlik (90+ Google Score)",
        "Kontakt formalar va animatsiyalar"
      ],
      popular: false
    },
    {
      name: "E-Commerce & Korporativ",
      glyph: "02",
      price: "Kelishuv asosida",
      desc: "Kompaniya imidji yoki online savdo uchun ko'p sahifali murakkab platforma.",
      features: [
        "Foydalanuvchilar shaxsiy kabineti",
        "To'lov tizimlari integratsiyasi",
        "Admin panel (CMS)",
        "Murakkab ma'lumotlar bazasi",
        "1 oylik bepul texnik qo'llab-quvvatlash"
      ],
      popular: true
    },
    {
      name: "AI & Telegram Botlar",
      glyph: "03",
      price: "Kelishuv asosida",
      desc: "Sun'iy intellekt va botlar orqali biznes jarayonlarini avtomatlashtirish.",
      features: [
        "AI modellarini o'rgatish va ulash",
        "Telegram mini-applar",
        "Avtomatik mijozlar xizmati",
        "API integratsiyalar",
        "Analitika va hisobot tizimlari"
      ],
      popular: false
    }
  ]

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head text-center" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '0 auto 4rem auto', maxWidth: '600px' }}>
          <Reveal as="div" data-anim="fade">
            <p className="section-label u-overline">03 — Narxlar</p>
            <span className="u-line-draw pricing-label-line" aria-hidden="true" />
            <h2 className="section-title glow-text">Sizga mos<br />keluvchi yechim</h2>
          </Reveal>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <Reveal
              key={i}
              data-anim="up-sm"
              delay={i * 100}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              <span aria-hidden="true" className="p-ghost">{plan.glyph}</span>
              {plan.popular && <div className="popular-badge">Eng ko'p tanlangan</div>}

              <div className="p-head">
                <h3 className="p-name">{plan.name}</h3>
                <p className="p-desc">{plan.desc}</p>
              </div>

              <div className="p-price-wrap">
                <div className="p-price">{plan.price}</div>
              </div>

              <ul className="p-features">
                {plan.features.map((f, idx) => (
                  <li key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline className="p-check" points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="p-btn">
                Bepul konsultatsiya olish
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .pricing-label-line {
          display: block;
          height: 1px;
          width: 56px;
          margin: 0.9rem auto 1.25rem auto;
          background: var(--yellow);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        /* 2-up on tablets, 3-up only on real desktops — avoids the cramped
           3-column squeeze at the 768px mobile-switch boundary */
        @media (min-width: 700px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 980px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .pricing-card {
          background: var(--bg);
          padding: 2.75rem 2rem 2.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition:
            opacity var(--t-slow) var(--ease-out),
            transform var(--t-mid) var(--ease-soft),
            background var(--t-mid) var(--ease-soft);
        }
        .pricing-card:hover {
          transform: translateY(-6px);
          background: var(--bg2);
          box-shadow: var(--shadow-lift);
          z-index: 2;
        }
        /* popular sits one step higher in the spatial hierarchy */
        .pricing-card.popular {
          background: var(--bg2);
          transform: translateY(-8px);
        }
        .pricing-card.popular:hover {
          transform: translateY(-14px);
        }
        @media (max-width: 767px) {
          .pricing-card.popular,
          .pricing-card.popular:hover { transform: translateY(0); }
          .pricing-card:hover { transform: translateY(-4px); }
        }
        /* solid yellow top hairline — the only "popular" decoration */
        .pricing-card.popular::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--yellow);
          z-index: 3;
        }
        /* ghost plan glyph — numeral motif consistency */
        .p-ghost {
          position: absolute;
          top: -1.5rem;
          right: -0.5rem;
          font-family: var(--font-display), sans-serif;
          font-size: 7rem;
          font-weight: 800;
          line-height: 1;
          color: var(--hair);
          pointer-events: none;
          transition: color var(--t-mid) var(--ease-soft);
        }
        .pricing-card:hover .p-ghost,
        .pricing-card.popular .p-ghost {
          color: var(--yellow-a16);
        }
        .popular-badge {
          position: absolute;
          top: 0.9rem;
          right: 0.9rem;
          background: var(--yellow);
          color: var(--bg);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 2px;
          z-index: 4;
          animation: badge-drop 0.5s var(--ease-spring) both;
        }
        @keyframes badge-drop {
          from { opacity: 0; transform: translateY(-8px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .p-head { position: relative; z-index: 1; }
        .p-name {
          font-family: var(--font-display), sans-serif;
          font-size: 22px;
          color: var(--white);
          margin-bottom: 0.5rem;
        }
        .p-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
        }
        .p-price-wrap {
          margin: 2rem 0;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 1;
        }
        .p-price {
          font-family: var(--font-display), sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--yellow);
          letter-spacing: -0.01em;
        }
        .p-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .p-features li {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          opacity: 0;
          transform: translateY(6px);
          transition:
            opacity var(--t-mid) var(--ease-out),
            transform var(--t-mid) var(--ease-out);
        }
        .pricing-card.visible .p-features li {
          opacity: 1;
          transform: none;
        }
        .p-features svg {
          width: 18px;
          height: 18px;
          color: var(--yellow);
          flex-shrink: 0;
          margin-top: 2px;
        }
        /* checkmark draws itself in */
        .p-check {
          stroke-dasharray: 24;
          stroke-dashoffset: 24;
          transition: stroke-dashoffset var(--t-slow) var(--ease-out);
        }
        .pricing-card.visible .p-check {
          stroke-dashoffset: 0;
          transition-delay: 0.2s;
        }
        .p-btn {
          display: block;
          text-align: center;
          padding: 1rem;
          border-radius: 3px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition:
            background var(--t-fast) var(--ease-soft),
            border-color var(--t-fast) var(--ease-soft),
            transform var(--t-fast) var(--ease-soft);
          border: 1px solid var(--border);
          color: var(--white);
          position: relative;
          z-index: 1;
        }
        .pricing-card.popular .p-btn {
          background: var(--yellow);
          color: var(--bg);
          border-color: var(--yellow);
        }
        .pricing-card.popular .p-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-cta);
        }
        .pricing-card:not(.popular) .p-btn:hover {
          background: var(--hair);
          border-color: var(--hair-strong);
        }
        @media (prefers-reduced-motion: reduce) {
          .pricing-card,
          .pricing-card:hover,
          .pricing-card.popular,
          .pricing-card.popular:hover { transform: none; }
          .pricing-card.popular { transform: none; }
          .p-features li { opacity: 1; transform: none; transition: none; }
          .p-check { stroke-dashoffset: 0; transition: none; }
          .popular-badge { animation: none; }
        }
      `}} />
    </section>
  )
}
