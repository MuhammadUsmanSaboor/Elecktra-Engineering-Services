import { useState } from 'react'
import { MapPin, Calendar } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const categories = ['All', 'Commercial', 'Industrial', 'Healthcare', 'Residential', 'Public Sector']

const projects = [
  {
    id: 1,
    name: 'Meridian Business Park',
    category: 'Commercial',
    location: 'Manchester',
    year: '2024',
    description: '250kW rooftop solar installation with battery storage for 12-unit business park.',
    image: '/images/project-meridian.jpg',
  },
  {
    id: 2,
    name: 'Royal Victoria Hospital',
    category: 'Healthcare',
    location: 'Liverpool',
    year: '2024',
    description: 'Modernization of 8 passenger lifts including new control systems and cab refurbishment.',
    image: '/images/project-hospital.jpg',
  },
  {
    id: 4,
    name: 'The Croft Care Home',
    category: 'Healthcare',
    location: 'Chester',
    year: '2023',
    description: 'Installation of 2 new passenger lifts with full DDA compliance and through-car configuration.',
    image: '/images/project-care-home.jpg',
  },
  {
    id: 5,
    name: 'Apex Office Tower',
    category: 'Commercial',
    location: 'Birmingham',
    year: '2023',
    description: '150kW solar carport canopy and building management system integration for 15-storey tower.',
    image: '/images/project-office-tower.jpg',
  },
  {
    id: 6,
    name: 'Riverside Apartments',
    category: 'Residential',
    location: 'Bristol',
    year: '2024',
    description: 'Mechanical and electrical fit-out for 48-unit luxury apartment development.',
    image: '/images/project-apartments.jpg',
  },
  {
    id: 7,
    name: 'Northfield Manufacturing',
    category: 'Industrial',
    location: 'Sheffield',
    year: '2022',
    description: 'HVAC and ventilation system design and installation for precision manufacturing facility.',
    image: '/images/project-manufacturing.jpg',
  },
  {
    id: 8,
    name: 'City Library Extension',
    category: 'Public Sector',
    location: 'Nottingham',
    year: '2023',
    description: 'Electrical design and build including lighting, fire alarms, and access control for new extension.',
    image: '/images/project-library.jpg',
  },
  {
    id: 9,
    name: 'Oakwood Primary School',
    category: 'Public Sector',
    location: 'Cardiff',
    year: '2024',
    description: 'Solar panel installation and LED lighting upgrade across 3 school buildings.',
    image: '/images/project-school.jpg',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  useSEO({
    title: 'Project Portfolio – Completed Engineering Projects',
    description:
      'Browse completed projects by Elektra Engineering Services — solar installations, elevator modernizations, HVAC, mechanical & electrical works across commercial, industrial, healthcare and residential sectors in Lahore.',
    canonical: '/projects',
    keywords:
      'engineering projects Lahore, solar installation projects Pakistan, elevator modernization projects, commercial engineering Lahore, industrial projects Pakistan, healthcare engineering Lahore',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Elektra Engineering Project Portfolio',
      description: 'Completed engineering projects spanning solar, lifts, HVAC, and electrical works across commercial, industrial and residential sectors.',
      url: 'https://www.elektraengineering.com/projects',
    },
  })

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <PageHeader
        breadcrumb="Home / Projects"
        title="Project Portfolio"
        subtitle="Explore our completed work across commercial, industrial, healthcare, residential, and public sector projects throughout the UK."
      />

      {/* Filter Bar */}
      <section className="bg-white py-6 border-b border-[#cbd5e1] sticky top-[72px] z-30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === cat
                  ? 'bg-[#1e40af] text-white'
                  : 'border border-[#cbd5e1] text-[#475569] hover:border-[#1e40af] hover:text-[#1e40af]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.08}>
                <div className="bg-white border border-[#cbd5e1] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="h-[240px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block self-start bg-[#e2e8f0] text-[#1e40af] text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#0f172a] mt-3">{project.name}</h3>
                    <div className="flex items-center gap-4 mt-2 text-[13px] text-[#94a3b8]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-[#475569] mt-3 line-clamp-2">{project.description}</p>
                    <button className="text-[#1e40af] text-sm font-medium mt-4 hover:underline text-left">
                      View Case Study &rarr;
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#475569]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
