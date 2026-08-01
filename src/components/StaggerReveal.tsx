import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export default function StaggerReveal({ children, className = '', stagger = 0.1 }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const items = ref.current.children
    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  }, [stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
