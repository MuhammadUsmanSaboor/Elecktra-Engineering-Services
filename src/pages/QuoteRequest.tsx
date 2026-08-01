import { useState, useRef } from 'react'
import { Upload, CheckCircle, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const serviceTypes = [
  'Solar',
  'Lifts',
  'Mechanical',
  'Electrical',
  'Building Services',
  'Project Management',
  'Multiple Services',
]

const budgetRanges = [
  'Under Rs. 3.5 Million',
  'Rs. 3.5 Million - Rs. 17.5 Million',
  'Rs. 17.5 Million - Rs. 35 Million',
  'Rs. 35 Million - Rs. 175 Million',
  'Over Rs. 175 Million',
  'Prefer to discuss',
  'Write custom budget',
]

const sources = [
  'Google Search',
  'Referral',
  'Social Media',
  'Trade Show',
  'Previous Client',
  'Other',
]

export default function QuoteRequest() {
  const [submitted, setSubmitted] = useState(false)

  useSEO({
    title: 'Request a Quote – Free Engineering Consultation',
    description:
      'Request a free engineering quote from Elektra Engineering Services. Get a detailed proposal within 24 hours for solar installation, lift services, HVAC, electrical or project management work in Lahore, Pakistan.',
    canonical: '/quote',
    keywords:
      'engineering quote Lahore, solar installation quote Pakistan, lift services quote Lahore, free engineering consultation Pakistan, HVAC quote Lahore, electrical engineering quote Pakistan',
    noIndex: false,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    description: '',
    startDate: '',
    budget: '',
    customBudget: '',
    source: '',
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        breadcrumb="Home / Quote Request"
        title="Request a Quote"
        subtitle="Get a detailed proposal within 24 hours. Our engineers will assess your requirements and provide a comprehensive quote."
      />

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.10)] p-8 md:p-12">
            {submitted ? (
              <ScrollReveal className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h2 className="text-2xl font-semibold text-[#0f172a] mt-6">Thank You!</h2>
                <p className="text-[#475569] mt-3 max-w-md mx-auto">
                  We've received your request and will be in touch within 24 hours with a detailed proposal.
                </p>
              </ScrollReveal>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Left - Info */}
                <div className="lg:col-span-2">
                  <ScrollReveal>
                    <h3 className="text-xl font-semibold text-[#0f172a]">How It Works</h3>
                    <div className="mt-6 space-y-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium text-[#0f172a]">Submit your requirements</h4>
                          <p className="text-sm text-[#475569] mt-1">Fill in the form with your project details</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium text-[#0f172a]">We assess & quote</h4>
                          <p className="text-sm text-[#475569] mt-1">Our engineers review and prepare a proposal</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium text-[#0f172a]">Project begins</h4>
                          <p className="text-sm text-[#475569] mt-1">Upon approval, we schedule and execute</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 inline-block bg-[rgba(30,64,175,0.08)] text-[#1e40af] text-sm font-medium px-4 py-2 rounded-full">
                      Response within 24 hours
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#cbd5e1]">
                      <p className="text-sm text-[#475569]">Prefer to talk?</p>
                      <a href="tel:08001234567" className="flex items-center gap-2 text-[#1e40af] font-medium mt-1 hover:underline">
                        <Phone className="w-4 h-4" />
                        Call +92 321 8400045
                      </a>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Right - Form */}
                <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0f172a] mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0f172a] mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Service Type</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      {serviceTypes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Project Description</label>
                    <textarea
                      name="description"
                      rows={5}
                      placeholder="Tell us about your project, requirements, and any specific challenges..."
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Upload Drawings/Specs</label>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-[#cbd5e1] rounded-lg px-4 py-6 flex flex-col items-center gap-2 hover:border-[#1e40af] hover:bg-[rgba(30,64,175,0.02)] transition-all"
                    >
                      <Upload className="w-6 h-6 text-[#94a3b8]" />
                      <span className="text-sm text-[#475569]">Click or drag to upload files (PDF, DWG, JPG)</span>
                    </button>
                    <input ref={fileInputRef} type="file" className="hidden" accept=".pdf,.dwg,.jpg,.jpeg,.png" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0f172a] mb-1">Preferred Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0f172a] mb-1">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all bg-white"
                      >
                        <option value="">Select budget...</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      {formData.budget === 'Write custom budget' && (
                        <input
                          type="text"
                          name="customBudget"
                          placeholder="e.g. Rs. 2.5 Million"
                          value={formData.customBudget}
                          onChange={handleChange}
                          className="mt-2 w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all bg-white animate-fadeIn"
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">How did you hear about us?</label>
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full border border-[#cbd5e1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[rgba(30,64,175,0.1)] transition-all bg-white"
                    >
                      <option value="">Select...</option>
                      {sources.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1e40af] hover:bg-[#172554] text-white font-semibold text-base py-4 rounded-lg transition-colors mt-4"
                  >
                    Submit Quote Request
                  </button>

                  <p className="text-xs text-[#94a3b8] text-center">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
