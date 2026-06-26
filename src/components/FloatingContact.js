'use client'
import { useState, useEffect } from 'react'

export default function FloatingContact() {
  const [show, setShow] = useState(false)
  const [labelOut, setLabelOut] = useState(false)
  const [reachedContact, setReachedContact] = useState(false)

  // Spring entrance after a short beat (replaces hard 3s mount).
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  // Tooltip label slides in, then settles/auto-hides (button persists).
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(() => setLabelOut(true), 4200)
    return () => clearTimeout(timer)
  }, [show])

  // Suppress the attention wiggle once the user has reached the Contact section.
  useEffect(() => {
    const target = document.getElementById('contact')
    if (!target) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReachedContact(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  if (!show) return null

  return (
    <div
      className={`floating-contact${show ? ' is-in' : ''}${reachedContact ? ' is-arrived' : ''}`}
    >
      <span
        className={`floating-contact-label${labelOut ? ' is-hidden' : ''}`}
        aria-hidden="true"
      >
        Bepul savol bering →
      </span>
      <a
        href="https://t.me/bnutfilloyev"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact-btn"
        aria-label="Telegram orqali bog'lanish"
      >
        {/* Soft sonar: two offset rings instead of one harsh pulse */}
        <span className="floating-contact-pulse" aria-hidden="true" />
        <span className="floating-contact-pulse floating-contact-pulse--2" aria-hidden="true" />
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.35c.132-.132-.017-.25-.235-.11l-5.993 3.766-2.556-.795c-.556-.176-.566-.554.116-.823l9.98-3.84c.46-.176.862.106.725.58z"/>
        </svg>
      </a>

      <style dangerouslySetInnerHTML={{__html: `
        .floating-contact {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          /* below the mobile-menu overlay (z-index 90) so it doesn't float over it */
          z-index: 80;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          transform: scale(0.6);
          transition: opacity var(--t-mid, 0.4s) var(--ease-spring, cubic-bezier(0.34, 1.56, 0.64, 1)),
                      transform var(--t-mid, 0.4s) var(--ease-spring, cubic-bezier(0.34, 1.56, 0.64, 1));
        }
        .floating-contact.is-in {
          opacity: 1;
          transform: scale(1);
        }

        .floating-contact-label {
          background: var(--bg2);
          color: var(--white);
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.5rem 0.85rem;
          border-radius: 4px;
          border: 1px solid var(--border);
          white-space: nowrap;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
          opacity: 0;
          transform: translateX(12px);
          transition: opacity var(--t-mid, 0.4s) var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1)),
                      transform var(--t-mid, 0.4s) var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1));
          transition-delay: 0.45s;
          pointer-events: none;
        }
        .floating-contact.is-in .floating-contact-label {
          opacity: 1;
          transform: translateX(0);
        }
        .floating-contact .floating-contact-label.is-hidden {
          opacity: 0;
          transform: translateX(12px);
          transition-delay: 0s;
        }

        .floating-contact-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--yellow);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: var(--shadow-cta, 0 10px 28px rgba(249, 195, 0, 0.28));
          color: var(--bg);
          text-decoration: none;
          position: relative;
          transition: transform var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1)),
                      box-shadow var(--t-fast, 0.2s) var(--ease-soft, cubic-bezier(0.4, 0, 0.2, 1));
        }
        .floating-contact-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 14px 34px rgba(249, 195, 0, 0.42);
        }
        .floating-contact-btn:active {
          transform: scale(1.04);
        }

        .floating-contact-btn svg {
          position: relative;
          z-index: 1;
        }

        /* Soft sonar rings — periodic, out of phase, transform/opacity only. */
        .floating-contact-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-color: var(--yellow-a30, rgba(249, 195, 0, 0.30));
          z-index: 0;
          pointer-events: none;
          animation: fc-sonar 3.2s var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1)) infinite;
        }
        .floating-contact-pulse--2 {
          animation-delay: 1.6s;
        }
        @keyframes fc-sonar {
          0%   { transform: scale(1);    opacity: 0.55; }
          60%  { transform: scale(1.45); opacity: 0; }
          100% { transform: scale(1.45); opacity: 0; }
        }

        /* One-time gentle attention wiggle until the user reaches Contact. */
        .floating-contact.is-in:not(.is-arrived) .floating-contact-btn {
          animation: fc-wiggle 0.7s var(--ease-spring, cubic-bezier(0.34, 1.56, 0.64, 1)) 2.4s 1;
        }
        @keyframes fc-wiggle {
          0%, 100% { transform: rotate(0deg); }
          25%      { transform: rotate(3deg); }
          75%      { transform: rotate(-3deg); }
        }

        @media (max-width: 768px) {
          .floating-contact {
            bottom: 1.5rem;
            right: 1.5rem;
          }
          .floating-contact-btn {
            width: 50px;
            height: 50px;
          }
          .floating-contact-btn svg {
            width: 25px;
            height: 25px;
          }
          .floating-contact-label {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-contact,
          .floating-contact.is-in {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .floating-contact-label {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .floating-contact-label.is-hidden {
            opacity: 0;
          }
          .floating-contact-pulse {
            animation: none !important;
          }
          .floating-contact.is-in:not(.is-arrived) .floating-contact-btn {
            animation: none !important;
          }
        }
      `}} />
    </div>
  )
}
