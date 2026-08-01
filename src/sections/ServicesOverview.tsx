import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Layers, Settings, Zap, Building2, ClipboardList } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { gsap } from 'gsap'

const services = [
  {
    name: 'Solar Implementation',
    icon: Sun,
    description: 'Complete solar PV systems from design to commissioning for residential, commercial, and industrial properties.',
    subs: ['Panel Installation', 'Battery Storage', 'Grid Connection', 'Maintenance'],
    path: '/services/solar',
  },
  {
    name: 'Lift & Elevator Systems',
    icon: Layers,
    description: 'Installation, modernization, and maintenance of all lift types with full LOLER compliance and 24/7 breakdown cover.',
    subs: ['New Installation', 'Modernization', 'Maintenance Contracts', 'Emergency Repairs'],
    path: '/services/lifts',
  },
  {
    name: 'Mechanical Engineering',
    icon: Settings,
    description: 'HVAC, plumbing, pipework, and industrial machinery installation with full design and build capability.',
    subs: ['HVAC Systems', 'Plumbing & Pipework', 'Industrial Machinery', 'Ventilation'],
    path: '/services/other',
  },
  {
    name: 'Electrical Engineering',
    icon: Zap,
    description: 'Power distribution, lighting design, fire alarm systems, and Security Cameras installation.',
    subs: ['Power Distribution', 'Lighting Systems', 'Fire Alarms', 'Security Cameras'],
    path: '/services/other',
  },
  {
    name: 'Project Management',
    icon: ClipboardList,
    description: 'Turnkey project delivery from initial consultation through design, installation, commissioning, and handover.',
    subs: ['Design & Build', 'Contractor Coordination', 'Regulatory Approvals', 'Handover'],
    path: '/services/other',
  },
]

// Falling Leaf Effect
class FallingLeaf {
  element: HTMLDivElement
  timeline: gsap.core.Timeline

  constructor(
    container: HTMLElement,
    color = 'rgba(30, 64, 175, 0.15)',
    minSize = 10,
    sizeRange = 10
  ) {
    const size = minSize + Math.random() * sizeRange
    const startLeft = Math.random() * 100
    const delay = Math.random() * 5
    const duration = 8 + Math.random() * 10
    const swayAmount = 50 + Math.random() * 100
    const rotationX = Math.random() * 360
    const rotationY = Math.random() * 360
    const rotationZ = Math.random() * 360

    const element = document.createElement('div')
    element.className = 'services-leaf'
    element.style.backgroundColor = color
    element.style.width = `${size}px`
    element.style.height = `${size}px`
    element.style.left = `${startLeft}%`

    container.appendChild(element)

    const getSway = (progress: number) => {
      const term1 = swayAmount * Math.sin(progress * Math.PI * 2)
      const term2 = swayAmount * 0.3 * Math.sin(progress * Math.PI * 2 * 2.3)
      return term1 + term2
    }

    const tl = gsap.timeline({ repeat: -1 })

    tl.fromTo(
      element,
      { top: '-5%', y: 0, rotationX: 0, rotationY: 0, rotationZ: 0 },
      {
        duration,
        delay,
        ease: 'none',
        modifiers: {
          x: () => {
            const progress = tl.progress()
            return getSway(progress) + 'px'
          },
        },
      }
    )

    tl.to(
      element,
      {
        top: '105%',
        rotationX,
        rotationY,
        rotationZ,
        duration,
        delay,
        ease: 'none',
        yoyo: false,
      },
      0
    )

    this.element = element
    this.timeline = tl
  }

  destroy() {
    this.timeline.kill()
    this.element.remove()
  }
}

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leafContainerRef = useRef<HTMLDivElement>(null)
  const leavesRef = useRef<FallingLeaf[]>([])

  useEffect(() => {
    if (!leafContainerRef.current) return

    // Create leaves
    for (let i = 0; i < 30; i++) {
      leavesRef.current.push(new FallingLeaf(leafContainerRef.current))
    }

    return () => {
      leavesRef.current.forEach((leaf) => leaf.destroy())
      leavesRef.current = []
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* Leaf container */}
      <div
        ref={leafContainerRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ position: 'absolute' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-[#0ea5e9] text-xs font-medium uppercase tracking-[0.12em]">
            WHAT WE DO
          </span>
          <h2
            className="font-semibold text-[#0f172a] mt-3"
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1.15,
              letterSpacing: '-1.2px',
            }}
          >
            Comprehensive Engineering Services
          </h2>
          <p className="text-lg text-[#475569] mt-4 max-w-[560px] mx-auto">
            From concept to completion — every service your project needs under one roof.
          </p>
        </ScrollReveal>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 0.1}>
              <div className="bg-white border border-[#cbd5e1] rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-[#3b82f6] transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[rgba(30,64,175,0.08)] flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-[#1e40af]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0f172a] mt-5">{service.name}</h3>
                <p className="text-[#475569] mt-3 leading-relaxed flex-grow">{service.description}</p>

                <Link
                  to={service.path}
                  className="text-[#1e40af] text-xs font-medium uppercase tracking-[0.08em] mt-4 hover:underline inline-flex items-center"
                >
                  Learn More <span className="ml-1">&rarr;</span>
                </Link>

                {/* Sub-services */}
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#cbd5e1]">
                  {service.subs.map((sub) => (
                    <span
                      key={sub}
                      className="bg-[#e2e8f0] text-[#475569] text-xs px-3 py-1 rounded-full"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
