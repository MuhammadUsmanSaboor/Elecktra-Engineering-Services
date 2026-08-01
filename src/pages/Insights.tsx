import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const articles = [
  {
    id: 1,
    title: 'Solar Panel Maintenance Checklist 2026',
    category: 'Solar',
    date: 'Jan 2026',
    excerpt: 'A comprehensive guide to keeping your solar panels operating at peak efficiency year-round. Includes seasonal tasks and warning signs to watch for.',
    image: '/images/blog-solar-maintenance.jpg',
  },
  {
    id: 2,
    title: 'Understanding LOLER Requirements for Lift Owners',
    category: 'Lifts',
    date: 'Dec 2025',
    excerpt: 'Everything building owners need to know about LOLER compliance, inspection frequencies, and documentation requirements in 2026.',
    image: '/images/blog-loler.jpg',
  },
  {
    id: 3,
    title: '5 Signs Your Building Needs an Electrical Upgrade',
    category: 'Electrical',
    date: 'Nov 2025',
    excerpt: 'From flickering lights to frequent breaker trips, learn the key indicators that your electrical system may need professional attention.',
    image: '/images/blog-electrical-upgrade.jpg',
  },
  {
    id: 4,
    title: 'The Business Case for Commercial Solar in 2026',
    category: 'Solar',
    date: 'Oct 2025',
    excerpt: 'With energy costs rising and tax incentives available, discover why 2026 is the ideal year to invest in commercial solar installations.',
    image: '/images/blog-commercial-solar.jpg',
  },
  {
    id: 5,
    title: 'HVAC Efficiency: Tips for Industrial Facilities',
    category: 'Mechanical',
    date: 'Sep 2025',
    excerpt: 'Optimize your industrial HVAC systems for maximum efficiency and minimum operating costs with these proven strategies.',
    image: '/images/blog-hvac-efficiency.jpg',
  },
  {
    id: 6,
    title: 'Choosing the Right Lift for Your Building',
    category: 'Lifts',
    date: 'Aug 2025',
    excerpt: 'Passenger, freight, platform, or stairlift — our guide helps you select the optimal vertical transportation solution for your property.',
    image: '/images/blog-choosing-lift.jpg',
  },
]

export default function Insights() {
  useSEO({
    title: 'Engineering Insights & Guides – Solar, Lifts, Electrical',
    description:
      'Technical guides and expert engineering advice from Elektra Engineering Services. Read about solar maintenance, lift compliance, electrical upgrades, HVAC efficiency and more.',
    canonical: '/insights',
    keywords:
      'engineering insights Lahore, solar panel guide Pakistan, LOLER compliance, electrical upgrade guide, HVAC efficiency tips, lift maintenance guide, engineering blog Pakistan',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Elektra Engineering Insights',
      description: 'Technical guides and expert advice on solar energy, lifts, electrical engineering and building services.',
      publisher: { '@type': 'Organization', name: 'Elektra Engineering Services' },
    },
  })

  return (
    <>
      <PageHeader
        breadcrumb="Home / Insights"
        title="Insights"
        subtitle="Technical guides, industry updates, and expert advice from our engineering team."
      />

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.1}>
                <article className="bg-white border border-[#cbd5e1] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#e2e8f0] text-[#1e40af] text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-[13px] text-[#94a3b8]">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#0f172a] mt-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#475569] mt-2 line-clamp-3 flex-grow">{article.excerpt}</p>
                    <button className="text-[#1e40af] text-sm font-medium mt-4 hover:underline text-left">
                      Read More &rarr;
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
