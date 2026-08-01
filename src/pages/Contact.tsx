import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const subjects = [
  'General Enquiry',
  'Solar Services',
  'Lift Services',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Project Management',
  'Emergency',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  useSEO({
    title: 'Contact Us – Get in Touch with Our Engineering Team',
    description:
      'Contact Elektra Engineering Services in Lahore, Pakistan. Call +92 321 8400045, email elektraengineering01@gmail.com, or visit us at Karam Elahi Plaza, Johar Town. 24/7 emergency line available.',
    canonical: '/contact',
    keywords:
      'contact Elektra Engineering Lahore, engineering company contact Pakistan, solar services Lahore contact, lift services contact Lahore, emergency engineering Lahore',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Elektra Engineering Services',
      description: 'Get in touch with Elektra Engineering Services for solar, lift, mechanical and electrical engineering enquiries.',
      url: 'https://www.elektraengineering.com/contact',
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        breadcrumb="Home / Contact"
        title="Contact Us"
        subtitle="Get in touch — we're here to help with your next project."
      />

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Form (60%) */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white border border-[#cbd5e1] rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                      <h3 className="text-xl font-semibold text-[#0f172a] mt-4">Message Sent!</h3>
                      <p className="text-[#475569] mt-2">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-1">Name *</label>
                          <input
                            type="text"
                            required
                            className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-1">Phone</label>
                          <input
                            type="tel"
                            className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-1">Subject</label>
                          <select className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all bg-white">
                            {subjects.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0f172a] mb-1">Message *</label>
                        <textarea
                          rows={5}
                          required
                          placeholder="How can we help you?"
                          className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#1e40af] hover:bg-[#172554] text-white font-semibold text-sm py-4 rounded-lg transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Contact Info (40%) */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0f172a]">Contact Information</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#1e40af] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#0f172a]">+92 321 8400045</p>
                          <p className="text-sm text-[#475569]">24/7 General Enquiries</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#dc2626] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#0f172a]">+92 331 4889979</p>
                          <p className="text-sm text-[#475569]">Emergency Line</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#1e40af] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#0f172a]">elektraengineering01@gmail.com</p>
                          <p className="text-sm text-[#475569]">General Enquiries</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#1e40af] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#0f172a]">Karam Elahi Plaza, Main Blvd</p>
                          <p className="text-sm text-[#475569]">Block D1, Phase 1 Johar Town, Lahore, 54030, Pakistan</p>
                          <p className="text-xs text-[#94a3b8] mt-0.5">Plus Code: F76P+GJ3</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#1e40af] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#0f172a]">Mon-Fri 8:00-17:30</p>
                          <p className="text-sm text-[#475569]">Office Hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Google Map */}
                  <div className="bg-[#e2e8f0] rounded-xl aspect-[4/3] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                    <iframe
                      src="https://maps.google.com/maps?q=F76P%2BGJ3%2C%20Karam%20Elahi%20Plaza%2C%20Main%20Blvd%2C%20Block%20D1%20Phase%201%20Johar%20Town%2C%20Lahore%2C%2054030%2C%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      title="Google Maps Location"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
