import ScrollReveal from '../components/ScrollReveal'

const certifications = [
  { name: 'ISO 9001', abbr: 'ISO' },
  { name: 'NICEIC', abbr: 'NIC' },
  { name: 'SAFEcontractor', abbr: 'SAFE' },
  { name: 'CHAS', abbr: 'CHAS' },
  { name: 'Constructionline', abbr: 'CL' },
]

export default function TrustBar() {
  return (
    <section className="bg-white py-10 border-b border-[#cbd5e1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-center w-20 h-12 grayscale opacity-50 hover:opacity-80 transition-opacity cursor-default"
                title={cert.name}
              >
                <span className="text-lg font-bold text-[#475569] tracking-wider">{cert.abbr}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#94a3b8] uppercase tracking-[0.08em] mt-4">
            Fully Accredited & Insured
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
