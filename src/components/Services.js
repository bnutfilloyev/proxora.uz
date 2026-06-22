import Reveal from './Reveal'

const services = [
  {
    num: '01',
    name: 'Web Saytlar',
    desc: "Korporativ sayt, landing page va e-commerce platformalar. Tez yuklanadigan, qidiruv tizimlariga moslangan (SEO) va chiroyli dizayn.",
  },
  {
    num: '02',
    name: 'Mobil Ilovalar',
    desc: 'iOS va Android uchun native va cross-platform ilovalar. Qulay interfeys, tez ishlash.',
  },
  {
    num: '03',
    name: 'Telegram Botlar',
    desc: "Biznesingizni avtomatlashtiruvchi aqlli botlar — buyurtma qabul qilish, CRM, xabarnomalar va boshqalar.",
  },
  {
    num: '04',
    name: 'AI / ML Yechimlari',
    desc: "Sun'iy intellekt asosidagi tahlil, tasvirni tanish, matn qayta ishlash va bashorat tizimlari.",
  },
  {
    num: '05',
    name: 'CRM Tizimlar',
    desc: "Mijozlar boshqaruvi, savdo bosqichlari (funnel), hisobot va avtomatlashtirishni birlashtiradigan maxsus platformalar.",
  },
  {
    num: '06',
    name: 'UI/UX Dizayn',
    desc: "Foydalanuvchi tajribasini markazga qo'ygan zamonaviy interfeys. Wireframe, prototip va tayyor dizayn.",
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">01 — Xizmatlar</p>
            <h2 className="section-title">Nima<br />qilamiz</h2>
          </div>
        </div>
        <div className="services-grid glow-cursor">
          {services.map((s, i) => {
            const row = Math.floor(i / 3)
            const col = i % 3
            return (
              <Reveal
                key={s.num}
                className="service-card u-bar-left"
                data-anim="scale"
                delay={(row + col) * 60}
              >
                <div className="service-num">{s.num}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
                <div className="ghost-num" aria-hidden="true">{s.num}</div>
                <div className="service-arrow" aria-hidden="true">↗</div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
