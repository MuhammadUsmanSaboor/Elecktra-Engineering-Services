import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // Solar
  {
    question: 'How long does a typical solar installation take?',
    answer: 'Residential installations typically take 1-3 days, while commercial systems can take 1-4 weeks depending on size and complexity. We work efficiently to minimize disruption to your property or business operations.',
    category: 'Solar',
  },
  {
    question: 'Do you offer solar panel cleaning services?',
    answer: 'Yes, we offer scheduled cleaning and maintenance packages to ensure optimal system performance. Regular cleaning can improve efficiency by up to 25%, especially in dusty or high-pollen environments.',
    category: 'Solar',
  },
  {
    question: 'What warranties do you provide?',
    answer: 'We provide a 25-year manufacturer warranty on panels, 10-year warranty on inverters, and a 5-year workmanship warranty. We also offer extended maintenance contracts for ongoing peace of mind.',
    category: 'Solar',
  },
  // Lifts
  {
    question: 'How often should lifts be serviced?',
    answer: 'LOLER regulations require thorough examinations every 6 months. We recommend monthly service visits for high-traffic installations. Our maintenance contracts cover all statutory requirements.',
    category: 'Lifts',
  },
  {
    question: 'Can you modernize old lifts?',
    answer: 'Yes, we specialize in lift modernization — upgrading controls, doors, cabs, and safety systems while retaining the existing shaft and structure. This can extend the life of your lift by 15-20 years at a fraction of replacement cost.',
    category: 'Lifts',
  },
  {
    question: 'What is your emergency response time?',
    answer: 'Our emergency call-out service aims to respond within 2 hours, 24/7, 365 days a year. We have engineers strategically located across the UK to ensure rapid response times.',
    category: 'Lifts',
  },
  // General
  {
    question: 'Are you fully insured?',
    answer: 'Yes, we carry Rs. 3.5 Billion public liability insurance and Rs. 1.75 Billion professional indemnity insurance. Certificates of insurance are available upon request.',
    category: 'General',
  },
  {
    question: 'Do you handle planning permission?',
    answer: 'We can assist with and manage the planning permission process as part of our turnkey project management service. Our team has extensive experience navigating local authority requirements.',
    category: 'General',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We operate across the UK with engineers based in Manchester, Liverpool, Birmingham, and London. This ensures we can provide rapid response times regardless of your location.',
    category: 'General',
  },
]

const categories = ['All', 'Solar', 'Lifts', 'General']

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-[#cbd5e1]">
      {items.map((item, index) => (
        <div key={index} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between text-left group"
          >
            <span className={`text-lg font-medium transition-colors pr-4 ${
              openIndex === index ? 'text-[#1e40af]' : 'text-[#0f172a] group-hover:text-[#1e40af]'
            }`}>
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180 text-[#1e40af]' : 'text-[#94a3b8]'
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-[#475569] leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All')

  useSEO({
    title: 'Frequently Asked Questions – Solar, Lifts & Engineering Services',
    description:
      'Answers to common questions about Elektra Engineering Services — solar installation timelines, lift maintenance regulations, insurance, warranties, and service coverage in Lahore, Pakistan.',
    canonical: '/faq',
    keywords:
      'engineering FAQ Lahore, solar panel FAQ Pakistan, lift maintenance FAQ, elevator inspection questions, engineering services questions Lahore',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  })

  const filteredItems = activeCategory === 'All'
    ? faqData
    : faqData.filter((item) => item.category === activeCategory)

  return (
    <>
      <PageHeader
        breadcrumb="Home / FAQ"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, processes, and policies."
      />

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Category Filter */}
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1e40af] text-white'
                    : 'border border-[#cbd5e1] text-[#475569] hover:border-[#1e40af] hover:text-[#1e40af]'
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* FAQ Accordion */}
          <ScrollReveal>
            <div className="bg-white border border-[#cbd5e1] rounded-xl p-6 md:p-8">
              <FAQAccordion items={filteredItems} />
            </div>
          </ScrollReveal>

          {/* Still have questions CTA */}
          <ScrollReveal className="text-center mt-12">
            <h3 className="text-xl font-semibold text-[#0f172a]">Still have questions?</h3>
            <p className="text-[#475569] mt-2">
              Our team is happy to help. Get in touch and we'll get back to you within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-[#1e40af] hover:bg-[#172554] text-white font-semibold text-sm px-8 py-3 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
