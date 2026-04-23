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
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">03 — Jarayon</p>
            <h2 className="section-title">Qanday<br />ishlaymiz</h2>
          </div>
        </div>
        <div className="process-grid">
          {steps.map(s => (
            <div key={s.num} className="process-step">
              <div className="process-big-num">{s.num}</div>
              <div className="process-name">{s.name}</div>
              <p className="process-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
