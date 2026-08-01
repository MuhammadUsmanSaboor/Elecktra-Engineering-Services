import { Linkedin, Mail, Award, Users, Target, Heart } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const leadership = [
  {
    name: 'CH. Muhammad Fazal (Late)',
    title: 'Founder',
    initials: 'CMF',
    gradient: 'from-[#1e40af] to-[#0ea5e9]',
    bio: 'With over 20 years of engineering expertise, Muhammad Usman founded Elektra Engineering Services with a clear vision: to deliver world-class engineering solutions that stand the test of time. His leadership has guided the company through hundreds of successful projects across Pakistan.',
    remark:
      '"Engineering is not just about building structures it is about building trust. Every project we undertake carries our name and our promise to deliver nothing short of excellence."',
    specialties: ['Strategic Leadership', 'Project Delivery', 'Client Relations', 'Business Development'],
  },
  {
    name: 'Abdul Saboor',
    title: 'CEO & Managing Director',
    initials: 'AS',
    gradient: 'from-[#0ea5e9] to-[#06b6d4]',
    bio: 'Abdul Saboor brings 15+ years of hands-on engineering and operations management experience. He oversees day-to-day operations and ensures that every project is executed with precision, safety, and efficiency from initial design to final commissioning.',
    remark:
      '"Our teams succeed because we combine technical rigour with genuine care for our clients. When we hand over a project, we hand over peace of mind."',
    specialties: ['Operations Management', 'Technical Oversight', 'Quality Assurance', 'Team Leadership'],
  },
]

const team = [
  {
    name: 'Sikandar Hayat',
    title: 'Chief Technical Officer',
    initials: 'SH',
    gradient: 'from-[#f59e0b] to-[#ef4444]',
    bio: 'Lead engineer for all solar PV projects, with certified expertise in system design, grid integration, and energy optimisation for residential, commercial, and industrial clients.',
  },
  {
    name: 'Tariq Mehmood',
    title: 'Senior Lift & Elevator Engineer',
    initials: 'TM',
    gradient: 'from-[#8b5cf6] to-[#ec4899]',
    bio: 'LOLER-certified specialist with deep knowledge of modern elevator systems, safety regulations, and preventive maintenance programmes for all building types.',
  },
  {
    name: 'Sana Malik',
    title: 'Electrical Systems Engineer',
    initials: 'SM',
    gradient: 'from-[#10b981] to-[#0ea5e9]',
    bio: 'Expert in power distribution, fire alarm design, security camera systems, and EV charging infrastructure — delivering safe and code-compliant electrical installations.',
  },
  {
    name: 'Kamran Ali',
    title: 'Mechanical & HVAC Engineer',
    initials: 'KA',
    gradient: 'from-[#f97316] to-[#f59e0b]',
    bio: 'Specialist in HVAC design, industrial plumbing, and mechanical systems commissioning, with a strong track record in commercial and healthcare environments.',
  },
  {
    name: 'Muhammad Usman',
    title: 'General Manager',
    initials: 'MU',
    gradient: 'from-[#6366f1] to-[#8b5cf6]',
    bio: 'Oversees multi-discipline projects from inception to handover, ensuring on-time, on-budget delivery while maintaining transparent communication with all stakeholders.',
  },
  {
    name: 'Zubair Khan',
    title: 'Site Safety & Compliance Officer',
    initials: 'ZK',
    gradient: 'from-[#0f172a] to-[#1e40af]',
    bio: 'Responsible for health, safety, and regulatory compliance across all active sites, ensuring every project meets national and international safety standards.',
  },
]

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest engineering standards on every project, no exceptions.' },
  { icon: Users, title: 'Collaboration', desc: 'Our multidisciplinary team works as one — sharing expertise to deliver the best outcomes.' },
  { icon: Target, title: 'Integrity', desc: 'Honest advice, transparent pricing, and commitments we always keep.' },
  { icon: Heart, title: 'Care', desc: 'We genuinely care about our clients, our people, and the communities we serve.' },
]

export default function Team() {
  useSEO({
    title: 'Our Team – Certified Engineers & Engineering Specialists',
    description:
      'Meet the certified engineers, project managers and specialists at Elektra Engineering Services — the experts behind every successful solar, lift, HVAC, and electrical project in Lahore, Pakistan.',
    canonical: '/team',
    keywords:
      'engineering team Lahore, certified engineers Pakistan, Elektra Engineering team, engineering specialists Lahore, engineering company staff Pakistan',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Meet the Elektra Engineering Team',
      description: 'Certified engineers and specialists delivering solar, lift, mechanical and electrical engineering services in Lahore, Pakistan.',
      url: 'https://www.elektraengineering.com/team',
    },
  })

  return (
    <>
      <PageHeader
        breadcrumb="Home / Our Team"
        title="Meet Our Team"
        subtitle="The certified engineers, project managers, and specialists who deliver every project with precision and passion."
      />

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-[760px] mx-auto text-center">
              <span className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-[0.14em]">
                WHO WE ARE
              </span>
              <h2
                className="font-bold text-[#0f172a] mt-4"
                style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.15, letterSpacing: '-1px' }}
              >
                A Team Built on Experience,<br />Driven by Excellence
              </h2>
              <p className="text-lg text-[#475569] mt-5 leading-relaxed">
                Elektra Engineering was established in 2007 as manufacturing company by Ch.Muhammad Fazal with an aim to provide good quality product of Low Voltage Solutions. At E.E.(Elektra Engineering) our objective is to provide a superior quality of Mechanical and Electrical services in positive closely controlled, well-managed & proffesional manner.
              </p>
            </div>
          </ScrollReveal>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="group bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 hover:border-[#1e40af]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#1e40af] to-[#0ea5e9] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#0f172a] text-base">{v.title}</h3>
                  <p className="text-sm text-[#475569] mt-2 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-[0.14em]">
                LEADERSHIP
              </span>
              <h2
                className="font-bold text-[#0f172a] mt-3"
                style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.15, letterSpacing: '-1px' }}
              >
                Our Executive Leadership
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.12}>
                <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                  {/* Header Bar */}
                  <div className={`h-2 bg-gradient-to-r ${person.gradient}`} />
                  <div className="p-8">
                    <div className="flex items-start gap-5">
                      {/* Avatar */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${person.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <span className="text-white font-bold text-2xl">{person.initials}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0f172a]">{person.name}</h3>
                        <p className="text-[#0ea5e9] font-semibold text-sm mt-0.5">{person.title}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="text-[#94a3b8] hover:text-[#1e40af] transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </button>
                          <button className="text-[#94a3b8] hover:text-[#1e40af] transition-colors">
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-[#475569] text-sm leading-relaxed mt-5">{person.bio}</p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {person.specialties.map((s) => (
                        <span key={s} className="bg-[#eff6ff] text-[#1e40af] text-xs font-medium px-3 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Remark */}
                    <blockquote className={`mt-6 pl-4 border-l-2 border-gradient-to-b from-[#1e40af] to-[#0ea5e9]`}
                      style={{ borderLeftColor: '#1e40af' }}>
                      <p className="text-sm italic text-[#475569] leading-relaxed">{person.remark}</p>
                    </blockquote>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-[0.14em]">
                OUR SPECIALISTS
              </span>
              <h2
                className="font-bold text-[#0f172a] mt-3"
                style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.15, letterSpacing: '-1px' }}
              >
                The People Behind Every Project
              </h2>
              <p className="text-[#475569] mt-4 max-w-[520px] mx-auto">
                Certified engineers and professionals who bring deep expertise to every discipline we cover.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="group bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#1e40af]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                    <span className="text-white font-bold text-xl">{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base">{member.name}</h3>
                  <p className="text-[#0ea5e9] text-xs font-semibold mt-1">{member.title}</p>
                  <p className="text-[#475569] text-sm mt-3 leading-relaxed">{member.bio}</p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#e2e8f0]">
                    <button className="text-[#94a3b8] hover:text-[#1e40af] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="text-[#94a3b8] hover:text-[#1e40af] transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#172554]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="font-bold text-white"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.15, letterSpacing: '-1px' }}
            >
              Ready to Work With Our Team?
            </h2>
            <p className="text-white/70 text-lg mt-4">
              Get in touch today and let our experts deliver your next engineering project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="/contact"
                className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm tracking-wide"
              >
                Get in Touch
              </a>
              <a
                href="/quote"
                className="border border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-colors text-sm"
              >
                Request a Quote
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
