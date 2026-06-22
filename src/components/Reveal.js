'use client'
import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Shared in-view hook. One IntersectionObserver per element, one-shot.
 * Returns [ref, inView]. Under reduced-motion it resolves to true immediately.
 */
export function useInView({ rootMargin = '0px 0px -10% 0px', threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return [ref, inView]
}

/**
 * Scroll-reveal wrapper. Backward-compatible API (children/className/delay/as/...rest)
 * plus a `variant` prop that emits the shared `data-anim` contract attribute and
 * optional rootMargin/threshold overrides.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  variant,
  rootMargin,
  threshold,
  ...rest
}) {
  const [ref, visible] = useInView({
    rootMargin: rootMargin ?? '0px 0px -10% 0px',
    threshold: threshold ?? 0.15,
  })

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      data-anim={variant || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
