import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <Reveal as="div" data-anim="fade">
            <p className="section-label u-overline">06 — Biz haqimizda</p>
            <h2 className="section-title">Kreativ va texnik<br />mukammallik</h2>
          </Reveal>
        </div>

        <div className="about-grid">
          <Reveal className="about-image" data-anim="fade">
            <span className="about-frame u-line-draw" aria-hidden="true" />
            <div className="about-image-inner" data-anim="blur">
              {/* Brendlangan kompozitsiya: logotip belgisi va isbotlovchi raqamlar */}
              <div className="about-canvas">
                <div className="orb about-orb-a orb--drift" aria-hidden="true" />
                <div className="orb about-orb-b orb--drift2" aria-hidden="true" />

                {/* Faint katta numeral motivi */}
                <div aria-hidden="true" className="about-watermark">06</div>

                {/* Logotip lockup */}
                <div className="about-mark">
                  <span className="about-mark-dot" aria-hidden="true" />
                  <span className="about-mark-text">PROXORA</span>
                </div>

                {/* Stat callout kartasi */}
                <div className="about-stat-card">
                  <div className="about-stat-row">
                    <strong>20+</strong>
                    <span>yakunlangan loyiha</span>
                  </div>
                  <div className="about-stat-row">
                    <strong>3+</strong>
                    <span>yillik tajriba</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="about-content">
            <Reveal as="h3" className="about-subtitle" data-anim="up-sm">
              Biz shunchaki kod yozmaymiz, biznes muammolarini hal qilamiz.
            </Reveal>

            <Reveal as="p" className="about-text" data-anim="fade" delay={80}>
              Proxora Global jamoasi raqamli transformatsiya jarayonida biznesingizning ishonchli hamkoridir. Bizning maqsadimiz —
              zamonaviy texnologiyalar yordamida korxonangiz sotuvlarini oshirish, jarayonlarni avtomatlashtirish va brend nufuzini ko'tarish.
            </Reveal>

            <Reveal as="p" className="about-text" data-anim="fade" delay={160}>
              Jamoamizda kuchli <strong>AI/ML muhandislar, Full-stack dasturchilar va UX/UI dizaynerlar</strong> jamlangan.
              Biz har bir loyihaga individual yondashamiz va shablonlardan qochamiz. Sizning muvaffaqiyatingiz — bizning eng katta portfoliomiz.
            </Reveal>

            <div className="about-stats">
              {[
                { h: '20+ loyiha', p: "Web, AI va Telegram yo'nalishlarida yakunlangan" },
                { h: 'Tezlik', p: "Muddatlarga qat'iy rioya qilish" },
                { h: 'Sifat', p: 'Xalqaro standartdagi kod arxitekturasi' }
              ].map((s, i) => (
                <Reveal key={i} className="a-stat" data-anim="up-sm" delay={i * 80}>
                  <span className="a-stat-line u-line-draw" aria-hidden="true" />
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 4fr 5fr;
            gap: 5rem;
          }
        }
        .about-image {
          position: relative;
        }
        /* offset yellow frame — draws itself in */
        .about-frame {
          content: '';
          position: absolute;
          inset: -15px 15px 15px -15px;
          border: 1px solid var(--yellow);
          z-index: 0;
          border-radius: 8px;
          opacity: 0.3;
          transform: scaleX(0);
          transform-origin: left;
        }
        .about-image.visible .about-frame { transform: scaleX(1); }
        .about-image-inner {
          position: relative;
          z-index: 1;
          aspect-ratio: 4/5;
          border-radius: 8px;
          overflow: hidden;
          background: var(--bg2);
          /* blur-focus reveal */
          opacity: 0;
          transform: scale(1.02);
          filter: blur(8px);
          transition:
            opacity var(--t-slow) var(--ease-out),
            transform var(--t-slow) var(--ease-out),
            filter var(--t-slow) var(--ease-out);
        }
        .about-image.visible .about-image-inner {
          opacity: 1;
          transform: none;
          filter: none;
        }
        .about-canvas {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0C2818 0%, #1a4a2e 50%, #0F3120 100%);
          position: relative;
          overflow: hidden;
        }
        .about-orb-a {
          top: -10%;
          left: -10%;
          width: 50%;
          height: 50%;
        }
        .about-orb-b {
          bottom: -20%;
          right: -20%;
          width: 70%;
          height: 70%;
          opacity: 0.6;
        }
        .about-watermark {
          position: absolute;
          bottom: -2.5rem;
          right: -0.5rem;
          font-family: var(--font-display), sans-serif;
          font-size: 16rem;
          font-weight: 800;
          line-height: 1;
          color: var(--hair);
          pointer-events: none;
        }
        .about-mark {
          position: absolute;
          top: 2rem;
          left: 2rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .about-mark-dot {
          position: relative;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--yellow);
        }
        /* breathing glow via opacity-pulsing overlay (no animated box-shadow) */
        .about-mark-dot::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--glow-strong) 0%, transparent 70%);
          animation: about-breathe 3.2s var(--ease-soft) infinite;
        }
        @keyframes about-breathe {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50%      { opacity: 1;   transform: scale(1.25); }
        }
        .about-mark-text {
          font-family: var(--font-display), sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--white);
        }
        .about-stat-card {
          position: absolute;
          left: 2rem;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          gap: 1.5rem;
          padding: 1.25rem 1.5rem;
          background: rgba(12,40,24,0.6);
          backdrop-filter: blur(8px);
          border: 1px solid var(--yellow-a30);
          border-left: 3px solid var(--yellow);
          border-radius: 8px;
        }
        .about-stat-row {
          display: flex;
          flex-direction: column;
        }
        .about-stat-row strong {
          font-family: var(--font-display), sans-serif;
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--yellow);
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .about-stat-row span {
          font-size: 12px;
          color: rgba(255,255,255,0.65);
          line-height: 1.3;
        }
        .about-subtitle {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 2rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .about-text {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .about-text strong {
          color: var(--white);
          font-weight: 600;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }
        @media (min-width: 640px) {
          .about-stats {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .a-stat { position: relative; padding-top: 1rem; }
        .a-stat-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: var(--yellow);
          transform: scaleX(0);
          transform-origin: left;
        }
        .a-stat.visible .a-stat-line { transform: scaleX(1); }
        .a-stat h4 {
          font-family: var(--font-display), sans-serif;
          color: var(--yellow);
          font-size: 18px;
          margin-bottom: 0.5rem;
        }
        .a-stat p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
        }
        @media (prefers-reduced-motion: reduce) {
          .about-image-inner { opacity: 1; transform: none; filter: none; transition: none; }
          .about-frame { transform: scaleX(1); }
          .a-stat-line { transform: scaleX(1); }
          .about-mark-dot::after { animation: none; }
          .orb { animation: none !important; }
        }
      `}} />
    </section>
  )
}
