'use client'
import { useState, useEffect } from 'react'

export default function FloatingContact() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000) // Show after 3 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div 
      className="floating-contact"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '1rem'
      }}
    >
      <a 
        href="https://t.me/bnutfilloyev" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#0088cc', // Telegram blue
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 10px 25px rgba(0, 136, 204, 0.4)',
          color: 'white',
          textDecoration: 'none',
          position: 'relative',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Telegram orqali bog'lanish"
      >
        <span 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 136, 204, 0.4)',
            animation: 'pulse 2s infinite',
            zIndex: -1
          }}
        />
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.35c.132-.132-.017-.25-.235-.11l-5.993 3.766-2.556-.795c-.556-.176-.566-.554.116-.823l9.98-3.84c.46-.176.862.106.725.58z"/>
        </svg>
      </a>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @media (max-width: 768px) {
          .floating-contact {
            bottom: 1.5rem !important;
            right: 1.5rem !important;
          }
          .floating-contact a {
            width: 50px !important;
            height: 50px !important;
          }
          .floating-contact svg {
            width: 25px;
            height: 25px;
          }
        }
      `}} />
    </div>
  )
}
