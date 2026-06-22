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
    <div className="marquee-wrap marquee-bold" aria-hidden="true">
      <div className="marquee-track marquee-track-bold">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span
              className="marquee-dot"
              aria-hidden="true"
              style={{ animationDelay: `${(i % items.length) * 0.25}s` }}
            />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        /* Bold oversized kinetic strip — the contrast to the quiet TechStack ticker.
           Runs in the opposite direction, a different speed, slows (not stops) on hover. */
        .marquee-bold {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
        }
        .marquee-track-bold {
          animation: marqueeReverse 26s linear infinite;
        }
        .marquee-track-bold .marquee-item {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(18px, 2.5vw, 28px);
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--white);
        }
        .marquee-track-bold .marquee-dot {
          background: var(--yellow);
          animation: marqueeDotPulse 2.4s ease-in-out infinite;
        }
        /* hover: slow to 0.3× — luxurious, not abrupt */
        .marquee-bold:hover .marquee-track-bold {
          animation-duration: 86s;
          animation-play-state: running;
        }

        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marqueeDotPulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.6); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track-bold,
          .marquee-track-bold .marquee-dot {
            animation: none !important;
          }
          .marquee-bold:hover .marquee-track-bold { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
