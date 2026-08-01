import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 250, suffix: '+', label: 'Successful installations', prefix: '' },
  { value: 35, suffix: '+', label: 'In the industry', prefix: '' },
  { value: 45, suffix: '', label: 'Certified specialists', prefix: '' },
  { value: 2, suffix: 'hrs', label: 'Emergency call-out', prefix: '<' },
]

export default function WhyChooseUs() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!statsRef.current) return

    const statElements = statsRef.current.querySelectorAll('.stat-number')
    const ctx = gsap.context(() => {
      statElements.forEach((el, i) => {
        const target = parseInt(el.getAttribute('data-target') || '0')
        const prefix = el.getAttribute('data-prefix') || ''
        const suffix = el.getAttribute('data-suffix') || ''
        const obj = { value: 0 }

        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.floor(obj.value)}${suffix}`
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 bg-[#172554]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <ScrollReveal>
            <span className="text-[#0ea5e9] text-xs font-medium uppercase tracking-[0.12em]">
              WHY ELEKTRA ENGINEERING SERVICES?
            </span>
            <h2
              className="font-semibold text-white mt-3"
              style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                lineHeight: 1.15,
                letterSpacing: '-1.2px',
              }}
            >
              The Engineering Partner You Can Trust
            </h2>
            <p className="text-lg leading-relaxed mt-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
              With over 15 years of combined experience, our team of certified engineers delivers projects on time, on budget, and to the highest safety standards. We don't just install equipment — we engineer long-term solutions.
            </p>
            <p className="mt-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              From initial consultation and design through installation, commissioning, and ongoing maintenance, we provide a single point of accountability for your entire project.
            </p>
            <Link
              to="/team"
              className="inline-block mt-8 border border-white/40 text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Meet Our Team &rarr;
            </Link>
          </ScrollReveal>

          {/* Right Column - Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="bg-white/[0.06] border border-white/10 rounded-lg p-8">
                  <div
                    className="text-white font-bold text-5xl"
                    data-target={stat.value}
                    data-prefix={stat.prefix}
                    data-suffix={stat.suffix}
                  >
                    <span className="stat-number" data-target={stat.value} data-prefix={stat.prefix} data-suffix={stat.suffix}>
                      {stat.prefix}0{stat.suffix}
                    </span>
                  </div>
                  <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
