import Reveal from './Reveal'

export default function TechStack() {
  const techs = [
    'React', 'Next.js', 'Node.js', 'Python', 'FastAPI',
    'PostgreSQL', 'Tailwind CSS', 'AWS', 'Vercel', 'TensorFlow', 'PyTorch'
  ]

  // Double the array for a seamless -50% marquee loop
  const displayTechs = [...techs, ...techs]

  return (
    <section className="tech-stack-section" aria-label="Texnologiyalar">
      <div className="container tech-stack-inner">
        <p className="tech-stack-label u-overline">Texnologiyalar:</p>

        <div className="tech-marquee-viewport">
          <div className="tech-marquee-track" aria-hidden="true">
            {displayTechs.map((tech, i) => (
              <Reveal
                as="span"
                key={i}
                variant="up-sm"
                delay={(i % techs.length) * 40}
                className="tech-item"
              >
                {tech}
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tech-stack-section {
          border-top: 1px solid var(--hair, rgba(255, 255, 255, 0.08));
          padding: 2rem 0;
          background: var(--bg2);
          overflow: hidden;
        }
        .tech-stack-inner {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .tech-stack-label {
          flex-shrink: 0;
          margin: 0;
        }
        /* single mask-image edge fade — replaces the two .tech-fade divs */
        .tech-marquee-viewport {
          display: flex;
          overflow: hidden;
          width: 100%;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 40px, #000 calc(100% - 40px), transparent);
          mask-image: linear-gradient(to right, transparent, #000 40px, #000 calc(100% - 40px), transparent);
        }
        .tech-marquee-track {
          display: flex;
          animation: techMarquee 40s linear infinite;
          width: max-content;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }
        .tech-item {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          margin: 0 0.5rem;
          border: 1px solid var(--hair-strong, rgba(255, 255, 255, 0.1));
          border-radius: 40px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.02);
          transition: color var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1)),
                      border-color var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1)),
                      background var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1)),
                      opacity var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1)),
                      transform var(--t-slow, 0.7s) var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1));
        }
        /* focus-pull: hovered pill stays lit, neighbours dim */
        @media (hover: hover) and (pointer: fine) {
          .tech-marquee-track:hover .tech-item { opacity: 0.4; }
          .tech-marquee-track .tech-item:hover {
            opacity: 1;
            color: #fff;
            border-color: var(--yellow);
            background: var(--yellow-a08, rgba(249, 195, 0, 0.05));
          }
        }
        @keyframes techMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .tech-stack-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
