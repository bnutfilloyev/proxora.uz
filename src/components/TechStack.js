export default function TechStack() {
  const techs = [
    'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 
    'PostgreSQL', 'Tailwind CSS', 'AWS', 'Vercel', 'TensorFlow', 'PyTorch'
  ]

  // Double the array for seamless marquee
  const displayTechs = [...techs, ...techs, ...techs]

  return (
    <section className="tech-stack-section" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '2rem 0', background: 'var(--bg2)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--yellow)', flexShrink: 0 }}>
          Texnologiyalar:
        </p>
        
        <div style={{ display: 'flex', overflow: 'hidden', width: '100%', position: 'relative' }}>
          <div 
            style={{ 
              position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px', 
              background: 'linear-gradient(to right, var(--bg2), transparent)', zIndex: 2 
            }} 
          />
          <div 
            style={{ 
              position: 'absolute', right: 0, top: 0, bottom: 0, width: '40px', 
              background: 'linear-gradient(to left, var(--bg2), transparent)', zIndex: 2 
            }} 
          />
          
          <div className="tech-marquee-track">
            {displayTechs.map((tech, i) => (
              <span key={i} className="tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .tech-marquee-track {
          display: flex;
          animation: techMarquee 30s linear infinite;
          width: max-content;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }
        .tech-item {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          margin: 0 0.5rem;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 40px;
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          white-space: nowrap;
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.02);
        }
        .tech-item:hover {
          color: #fff;
          border-color: var(--yellow);
          background: rgba(249, 195, 0, 0.05);
        }
        @keyframes techMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33%)); }
        }
        @media (max-width: 768px) {
          .tech-stack-section .container {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}} />
    </section>
  )
}
