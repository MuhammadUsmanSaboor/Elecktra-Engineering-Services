import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const projects = [
  {
    name: 'Meridian Business Park',
    category: 'Commercial Solar',
    location: 'Manchester',
    image: '/images/project-meridian.jpg',
  },
  {
    name: 'Royal Victoria Hospital',
    category: 'Lift Modernization',
    location: 'Liverpool',
    image: '/images/project-hospital.jpg',
  },
  {
    name: 'Greenfield Distribution Centre',
    category: 'Industrial Electrical',
    location: 'Leeds',
    image: '/images/project-distribution.jpg',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
          <div>
            <span className="text-[#0ea5e9] text-xs font-medium uppercase tracking-[0.10em]">
              OUR WORK
            </span>
            <h2
              className="font-semibold text-[#0f172a] mt-3"
              style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                lineHeight: 1.15,
                letterSpacing: '-1.2px',
              }}
            >
              Featured Projects
            </h2>
            <p className="text-lg text-[#475569] mt-4 max-w-[520px]">
              See how we've helped clients across sectors achieve their engineering goals.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-[#1e40af] text-xs font-medium uppercase tracking-[0.08em] hover:underline whitespace-nowrap"
          >
            View All Projects &rarr;
          </Link>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.1}>
              <Link to="/projects" className="group block relative rounded-xl overflow-hidden aspect-[4/3]">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.2) 50%, transparent 100%)',
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-[#0ea5e9] text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold mt-3">{project.name}</h3>
                  <div className="flex items-center gap-1 mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-white text-xs font-medium uppercase tracking-wider">
                    View Case Study &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
