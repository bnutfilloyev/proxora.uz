const items = [
  'Web Saytlar',
  'Mobil Ilovalar',
  'Telegram Botlar',
  'AI / ML Yechimlari',
  'CRM Tizimlar',
  'UI/UX Dizayn',
  'E-commerce',
  'API Integratsiya',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
