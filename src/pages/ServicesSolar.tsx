import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const serviceCards = [
  {
    name: 'Residential Solar',
    image: '/images/solar-panel-hero.jpg',
    description: 'Solar PV systems designed for homes of all sizes. Reduce energy bills and earn from surplus generation.',
    features: ['MCS certified installation', 'Battery storage options', 'SEG tariff registration', '25-year panel warranty'],
  },
  {
    name: 'Commercial Solar',
    image: '/images/project-meridian.jpg',
    description: 'Rooftop, carport canopy, and ground-mount systems for businesses. Cut operating costs and meet CSR goals.',
    features: ['Free roof surveys', 'Power purchase agreements', 'Tax relief guidance', 'Monitoring systems'],
  },
  {
    name: 'Industrial Solar',
    image: '/images/project-manufacturing.jpg',
    description: 'Large-scale PV farms and hybrid systems for industrial estates and manufacturing facilities.',
    features: ['MW-scale installations', 'Hybrid battery systems', 'Energy optimization', 'Ongoing maintenance'],
  },
  {
    name: 'Solar Maintenance',
    image: '/images/blog-solar-maintenance.jpg',
    description: 'Comprehensive maintenance packages to protect your investment and maximize system performance.',
    features: ['Panel cleaning', 'Inverter servicing', 'Performance monitoring', 'Warranty claim management'],
  },
]

const processSteps = [
  { num: 1, name: 'Initial Survey', desc: 'Free on-site assessment' },
  { num: 2, name: 'System Design', desc: 'Custom engineering plan' },
  { num: 3, name: 'Quote & Approval', desc: 'Detailed proposal' },
  { num: 4, name: 'Installation', desc: 'Expert fitting team' },
  { num: 5, name: 'Commissioning', desc: 'Testing & certification' },
  { num: 6, name: 'Handover & Support', desc: 'Ongoing maintenance' },
]

export default function ServicesSolar() {
  useSEO({
    title: 'Solar Panel Installation in Lahore – Residential, Commercial & Industrial',
    description:
      'Professional solar PV installation in Lahore, Pakistan. Residential, commercial and industrial solar systems with 25-year panel warranties. Free site survey from Elektra Engineering Services.',
    canonical: '/services/solar',
    keywords:
      'solar panel installation Lahore, solar PV Pakistan, residential solar Lahore, commercial solar Pakistan, industrial solar system, solar energy Lahore, solar maintenance Pakistan',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Solar Panel Installation',
      provider: { '@type': 'LocalBusiness', name: 'Elektra Engineering Services' },
      areaServed: { '@type': 'City', name: 'Lahore' },
      description:
        'Complete solar photovoltaic system design, supply, and installation for residential, commercial and industrial properties in Lahore, Pakistan.',
      offers: {
        '@type': 'Offer',
        description: 'Free initial site survey and system design',
      },
    },
  })

  return (
    <>
      <PageHeader
        breadcrumb="Home / Services / Solar Implementation"
        title="Solar Implementation"
        subtitle="Complete solar photovoltaic systems for residential, commercial, and industrial properties — from initial survey to final commissioning."
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
              Our Solar Installation Process
            </h2>
            <p className="text-lg text-[#475569] mt-4">
              A proven six-step approach from first contact to handover.
            </p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
            {/* Connection Line */}
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

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-[#0f172a]">Ready to Go Solar?</h2>
            <p className="text-[#475569] mt-3">
              Contact our team for a free consultation and site survey. We'll design the perfect system for your needs.
            </p>
            <Link
              to="/quote"
              className="inline-block mt-6 bg-[#1e40af] hover:bg-[#172554] text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Request a Free Survey
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
