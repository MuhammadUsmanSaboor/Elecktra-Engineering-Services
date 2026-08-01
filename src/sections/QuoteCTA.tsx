import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function QuoteCTA() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <ScrollReveal>
          <h2
            className="font-semibold text-[#0f172a]"
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1.15,
              letterSpacing: '-1.2px',
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-[#475569] mt-4 max-w-[600px] mx-auto">
            Get a detailed quote within 24 hours. Our engineers will assess your requirements and provide a comprehensive proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/quote"
              className="bg-[#1e40af] hover:bg-[#172554] text-white font-semibold text-sm tracking-[0.1em] px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+923314889979"
              className="bg-transparent border border-[#cbd5e1] text-[#0f172a] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#e2e8f0] transition-colors"
            >
              Call 0331 488979
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
