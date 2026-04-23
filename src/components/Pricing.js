export default function Pricing() {
  const plans = [
    {
      name: "Landing Page",
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
          <div>
            <p className="section-label">07 — Narxlar</p>
            <h2 className="section-title">Sizga mos<br />keluvchi yechim</h2>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
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
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="p-btn">
                Loyihani boshlash
              </a>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        }
        .pricing-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.15);
        }
        .pricing-card.popular {
          background: linear-gradient(180deg, rgba(249,195,0,0.05) 0%, rgba(255,255,255,0.02) 100%);
          border-color: rgba(249,195,0,0.3);
        }
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--yellow);
          color: var(--bg);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 20px;
        }
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
        }
        .p-price {
          font-family: var(--font-display), sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--yellow);
        }
        .p-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
          flex: 1;
        }
        .p-features li {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .p-features svg {
          width: 18px;
          height: 18px;
          color: var(--yellow);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .p-btn {
          display: block;
          text-align: center;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s;
          border: 1px solid var(--border);
          color: var(--white);
        }
        .pricing-card.popular .p-btn {
          background: var(--yellow);
          color: var(--bg);
          border-color: var(--yellow);
        }
        .pricing-card:not(.popular) .p-btn:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.2);
        }
      `}} />
    </section>
  )
}
