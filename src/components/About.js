export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">06 — Biz haqimizda</p>
            <h2 className="section-title">Kreativ va texnik<br />mukammallik</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-inner">
              {/* Placeholder abstract gradient image, but can be replaced with the founder's photo */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #0C2818 0%, #1a4a2e 50%, #0F3120 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'var(--yellow)', opacity: '0.1', filter: 'blur(40px)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-20%', right: '-20%', width: '70%', height: '70%', background: 'var(--yellow)', opacity: '0.05', filter: 'blur(60px)', borderRadius: '50%' }} />
                
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontSize: '4rem', fontWeight: '800', fontFamily: 'var(--font-display)' }}>
                  PROXORA
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <h3 className="about-subtitle">Biz shunchaki kod yozmaymiz, biznes muammolarini hal qilamiz.</h3>
            
            <p className="about-text">
              Proxora Global jamoasi raqamli transformatsiya jarayonida biznesingizning ishonchli hamkoridir. Bizning maqsadimiz — 
              zamonaviy texnologiyalar yordamida korxonangiz sotuvlarini oshirish, jarayonlarni avtomatlashtirish va brend nufuzini ko'tarish.
            </p>
            
            <p className="about-text">
              Jamoamizda kuchli <strong>AI/ML muhandislar, Full-stack dasturchilar va UX/UI dizaynerlar</strong> jamlangan. 
              Biz har bir loyihaga individual yondashamiz va shablonlardan qochamiz. Sizning muvaffaqiyatingiz — bizning eng katta portfoliomiz.
            </p>

            <div className="about-stats">
              <div className="a-stat">
                <h4>Innovatsiya</h4>
                <p>Eng so'nggi Sun'iy Intellekt yechimlari</p>
              </div>
              <div className="a-stat">
                <h4>Tezlik</h4>
                <p>Muddatlarga qat'iy rioya qilish</p>
              </div>
              <div className="a-stat">
                <h4>Sifat</h4>
                <p>Xalqaro standartdagi kod arxitekturasi</p>
              </div>
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
        .about-image::before {
          content: '';
          position: absolute;
          inset: -15px 15px 15px -15px;
          border: 1px solid var(--yellow);
          z-index: 0;
          border-radius: 8px;
          opacity: 0.3;
        }
        .about-image-inner {
          position: relative;
          z-index: 1;
          aspect-ratio: 4/5;
          border-radius: 8px;
          overflow: hidden;
          background: var(--bg2);
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
      `}} />
    </section>
  )
}
