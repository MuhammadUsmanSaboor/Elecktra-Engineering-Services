import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Clock, Award } from 'lucide-react'
import { gsap } from 'gsap'

const cylinderImages = [
  '/images/solar-panel-hero.jpg',
  '/images/lift-modernization.jpg',
  '/images/electrical-installation.jpg',
  '/images/hvac-systems.jpg',
  '/images/commercial-buildings.jpg',
  '/images/engineering-team.jpg',
]

const numStrips = 6
const angleStep = 360 / numStrips
const radius = 28.01

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cylinderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cylinderRef.current || !heroRef.current) return

    let idleTween: gsap.core.Tween | null = null

    // Helper to start the continuous auto-rotation
    const startIdleRotation = (startAngle = 0) => {
      if (idleTween) idleTween.kill()

      idleTween = gsap.to(cylinderRef.current, {
        rotateY: startAngle + 360,
        duration: 45, // slow, elegant auto-rotation
        repeat: -1,
        ease: 'none',
        overwrite: 'auto'
      })
    }

    // Set initial 3D transforms
    gsap.set(cylinderRef.current, {
      rotateX: -12, // resting tilt downwards
      rotateZ: 4,   // resting tilt askew
      xPercent: 10, // resting shift right
      scale: 1.05
    })

    startIdleRotation(0)

    const handleMouseEnter = () => {
      // Hover effect: tilt slightly more, scale up and float upwards slightly
      gsap.to(cylinderRef.current, {
        rotateX: -22,
        rotateZ: 8,
        scale: 1.15,
        y: -15,
        duration: 1.0,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const handleMouseLeave = () => {
      // Reset back to resting state
      gsap.to(cylinderRef.current, {
        rotateX: -12,
        rotateZ: 4,
        scale: 1.05,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const hero = heroRef.current
    hero.addEventListener('mouseenter', handleMouseEnter)
    hero.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (idleTween) idleTween.kill()
      hero.removeEventListener('mouseenter', handleMouseEnter)
      hero.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative mt-20 xl:mt-24 w-full overflow-hidden"
      style={{ height: '100vh', background: '#172554' }}
    >
      {/* Left Panel - Text Content */}
      <div
        className="absolute inset-0 z-10 flex items-center"
        style={{
          background: 'linear-gradient(to right, rgba(23,37,84,0.95) 0%, rgba(23,37,84,0.85) 70%, rgba(23,37,84,0.3) 100%)',
        }}
      >
        <div className="pl-[7%] max-w-[650px]">
          <span className="text-[#0ea5e9] text-xs font-medium uppercase tracking-[0.12em]">
            CERTIFIED ENGINEERING CONTRACTORS
          </span>
          <h1
            className="text-white font-bold mt-4"
            style={{
              fontSize: 'clamp(36px, 2.5vw, 62px)',
              lineHeight: 1.05,
              letterSpacing: '-2.16px',
            }}
          >
            End-to-End Engineering Solutions
          </h1>
          <h2
            className="mt-4 font-semibold"
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
              color: 'rgba(255,255,255,0.8)',
              letterSpacing: '-0.5px',
            }}
          >
            Solar, Lifts & Building Services
          </h2>
          <p className="text-lg leading-relaxed mt-6 max-w-[440px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            From solar panel installation and elevator modernization to complete mechanical and electrical engineering — we deliver turnkey solutions for commercial, industrial, and residential projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/quote"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-sm tracking-[0.1em] px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-semibold text-sm tracking-[0.1em] px-8 py-4 rounded-full transition-all hover:border-white"
            >
              Emergency Call-Out
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-14">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#0ea5e9]" />
              <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.7)' }}>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0ea5e9]" />
              <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.7)' }}>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0ea5e9]" />
              <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.7)' }}>25+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Cylinder */}
      <div
        id="cylinder-wrapper"
        className="absolute right-0 top-0 hidden lg:block"
        style={{
          width: '45vw',
          height: '100vh',
          overflow: 'hidden',
          perspective: '1000px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        <div
          ref={cylinderRef}
          id="cylinder"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            left: '50%',
            top: '50%',
            marginLeft: '-14.685vw',
            marginTop: '-50vh',
          }}
        >
          {cylinderImages.map((img, i) => {
            const angle = i * angleStep
            return (
              <div
                key={i}
                className="cylinder__strip"
                style={{
                  backgroundImage: `url(${img})`,
                  width: '29.37vw',
                  transform: `rotateY(${angle}deg) translateZ(${radius}vw)`,
                }}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
