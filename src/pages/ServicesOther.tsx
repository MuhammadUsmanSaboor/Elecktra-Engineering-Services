import { Link } from 'react-router-dom'
import { CheckCircle, Settings, Zap, Building2, ClipboardList } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const services = [
  {
    name: 'Mechanical Engineering',
    icon: Settings,
    image: '/images/hvac-systems.jpg',
    description: 'HVAC systems, plumbing, pipework, and industrial machinery installation with full design and build capability.',
    features: ['HVAC design & installation', 'Plumbing & pipework', 'Industrial machinery', 'Ventilation systems'],
  },
  {
    name: 'Electrical Engineering',
    icon: Zap,
    image: '/images/electrical-installation.jpg',
    description: 'Power distribution, lighting design, fire alarm systems, and EV charging infrastructure installation.',
    features: ['Power distribution', 'Lighting design', 'Fire alarm systems', 'EV charging points'],
  },
  {
    name: 'Building Services',
    icon: Building2,
    image: '/images/project-office-tower.jpg',
    description: 'Energy audits, compliance inspections, and building management system integration for optimized performance.',
    features: ['Energy audits', 'BMS integration', 'Compliance inspections', 'Energy optimization'],
  },
  {
    name: 'Project Management',
    icon: ClipboardList,
    image: '/images/engineering-team.jpg',
    description: 'Turnkey project delivery from initial consultation through design, installation, commissioning, and handover.',
    features: ['Design & build', 'Contractor coordination', 'Regulatory approvals', 'Full handover'],
  },
]

export default function ServicesOther() {
  useSEO({
    title: 'Mechanical, Electrical & Building Engineering Services – Lahore',
    description:
      'Comprehensive mechanical engineering (HVAC, plumbing), electrical engineering (power, lighting, fire alarms), building services, and turnkey project management in Lahore, Pakistan.',
    canonical: '/services/other',
    keywords:
      'mechanical engineering Lahore, electrical engineering Pakistan, HVAC Lahore, building services Pakistan, project management engineering Lahore, fire alarm systems Pakistan, EV charging Lahore',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Mechanical, Electrical & Building Engineering',
      provider: { '@type': 'LocalBusiness', name: 'Elektra Engineering Services' },
      areaServed: { '@type': 'City', name: 'Lahore' },
      description:
        'HVAC, electrical systems, building management, and full project management services for commercial and industrial clients in Lahore, Pakistan.',
    },
  })

  return (
    <>
      <PageHeader
        breadcrumb="Home / Services / Other Engineering Services"
        title="Other Engineering Services"
        subtitle="Beyond solar and lifts — our comprehensive mechanical, electrical, building services and project management capabilities."
      />

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.name} delay={index * 0.1}>
                <div className="bg-white border border-[#cbd5e1] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-shadow h-full flex flex-col">
                  <div className="h-[200px] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[#1e40af]" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-[#0f172a]">{service.name}</h3>
                    <p className="text-[#475569] mt-3 leading-relaxed">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
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

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-[#0f172a]">Need a Custom Engineering Solution?</h2>
            <p className="text-[#475569] mt-3">
              Our multidisciplinary engineering team can tackle complex projects that span multiple disciplines. Get in touch to discuss your requirements.
            </p>
            <Link
              to="/quote"
              className="inline-block mt-6 bg-[#1e40af] hover:bg-[#172554] text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Discuss Your Project
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
