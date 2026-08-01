import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const serviceCards = [
  {
    name: 'New Installation',
    image: '/images/lift-modernization.jpg',
    description: 'Passenger lifts, freight elevators, platform lifts, and stairlifts for new builds and retrofits.',
    features: ['Full design service', 'LOLER compliant', 'Range of manufacturers', '12-month warranty'],
  },
  {
    name: 'Modernization',
    image: '/images/blog-choosing-lift.jpg',
    description: 'Upgrade control systems, refurbish cabs, and bring older lifts up to current safety standards.',
    features: ['Controller upgrades', 'Cab refurbishment', 'Door system updates', 'Safety compliance'],
  },
  {
    name: 'Maintenance Contracts',
    image: '/images/blog-loler.jpg',
    description: 'Comprehensive maintenance packages including 24/7 breakdown cover and statutory inspections.',
    features: ['24/7 call-out service', 'Statutory inspections', 'LOLER testing', 'Priority scheduling'],
  },
  {
    name: 'Repairs & Breakdown',
    image: '/images/project-hospital.jpg',
    description: 'Emergency response and repairs for all lift types. Rapid diagnosis and quality parts replacement.',
    features: ['Emergency call-out', 'Rapid diagnosis', 'Genuine parts', 'Safety testing'],
  },
]

const processSteps = [
  { num: 1, name: 'Site Survey', desc: 'Assessment & recommendations' },
  { num: 2, name: 'Specification', desc: 'Tailored lift solution' },
  { num: 3, name: 'Quotation', desc: 'Transparent pricing' },
  { num: 4, name: 'Installation', desc: 'Expert fitting team' },
  { num: 5, name: 'Testing', desc: 'LOLER & safety checks' },
  { num: 6, name: 'Ongoing Care', desc: 'Maintenance contracts' },
]

export default function ServicesLifts() {
  useSEO({
    title: 'Lift & Elevator Services Lahore – Installation, Modernization & Maintenance',
    description:
      'Expert lift and elevator services in Lahore, Pakistan. New installations, modernization, LOLER-compliant maintenance contracts and 24/7 emergency breakdown cover. Call Elektra Engineering Services.',
    canonical: '/services/lifts',
    keywords:
      'lift installation Lahore, elevator modernization Pakistan, elevator maintenance Lahore, lift repair Pakistan, passenger lift Lahore, LOLER inspection Pakistan, lift company Lahore',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Lift & Elevator Services',
      provider: { '@type': 'LocalBusiness', name: 'Elektra Engineering Services' },
      areaServed: { '@type': 'City', name: 'Lahore' },
      description:
        'Complete lift and elevator services including new installations, modernization, maintenance contracts and 24/7 emergency repairs in Lahore, Pakistan.',
    },
  })

  return (
    <>
      <PageHeader
        breadcrumb="Home / Services / Lift & Elevator Systems"
        title="Lift & Elevator Systems"
        subtitle="Complete lift and elevator services — from new installations and modernizations to 24/7 maintenance and emergency repairs, all LOLER compliant."
      />

      {/* Service Detail Cards */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((card, index) => (
              <ScrollReveal key={card.name} delay={index * 0.1}>
                <div className="bg-white border border-[#cbd5e1] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-shadow h-full flex flex-col">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-[#0f172a]">{card.name}</h3>
                    <p className="text-[#475569] mt-3 leading-relaxed">{card.description}</p>
                    <ul className="mt-4 space-y-2">
                      {card.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#475569]">
                          <CheckCircle className="w-4 h-4 text-[#1e40af] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/quote"
                      className="text-[#1e40af] text-xs font-medium uppercase tracking-[0.08em] mt-6 hover:underline inline-flex items-center"
                    >
                      Enquire Now <span className="ml-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#e2e8f0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="font-semibold text-[#0f172a]"
              style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                lineHeight: 1.15,
                letterSpacing: '-1.2px',
              }}
            >
              Our Lift Service Process
            </h2>
            <p className="text-lg text-[#475569] mt-4">
              From survey to ongoing care — a comprehensive approach to vertical transportation.
            </p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-[#cbd5e1]" />
            <div className="hidden md:block absolute top-6 left-0 h-0.5 bg-[#1e40af]" style={{ width: '100%' }} />

            {processSteps.map((step, index) => (
              <ScrollReveal key={step.name} delay={index * 0.1} className="flex flex-col items-center text-center relative z-10 flex-1">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-semibold text-lg ${
                  index < 3
                    ? 'bg-[#1e40af] border-[#1e40af] text-white'
                    : 'bg-white border-[#1e40af] text-[#1e40af]'
                }`}>
                  {step.num}
                </div>
                <h4 className="text-sm font-medium text-[#0f172a] mt-4">{step.name}</h4>
                <p className="text-xs text-[#475569] mt-1 max-w-[140px]">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-[#0f172a]">Lift Emergency? We're Here 24/7</h2>
            <p className="text-[#475569] mt-3">
              Our emergency call-out service operates 24 hours a day, 7 days a week, 365 days a year. Response time under 2 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="tel:08009998888"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
              >
                Emergency: 0800 999 8888
              </a>
              <Link
                to="/quote"
                className="bg-[#1e40af] hover:bg-[#172554] text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
