import { useSEO } from '../hooks/useSEO'
import Hero from '../sections/Hero'
import TrustBar from '../sections/TrustBar'
import ServicesOverview from '../sections/ServicesOverview'
import FeaturedProjects from '../sections/FeaturedProjects'
import WhyChooseUs from '../sections/WhyChooseUs'
import QuoteCTA from '../sections/QuoteCTA'

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Elektra Engineering Services',
  description:
    'ISO 9001 certified engineering contractor in Lahore offering solar PV installation, elevator modernization, mechanical & electrical engineering services.',
  url: 'https://www.elektraengineering.com',
  telephone: '+92-321-8400045',
  email: 'elektraengineering01@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Karam Elahi Plaza, Main Blvd, Block D1',
    addressLocality: 'Johar Town',
    addressRegion: 'Lahore, Punjab',
    postalCode: '54030',
    addressCountry: 'PK',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
  },
}

export default function Home() {
  useSEO({
    title: 'Engineering Services in Lahore – Solar, Lifts & Building Services',
    description:
      'Elektra Engineering Services — ISO 9001 certified contractor in Lahore, Pakistan. Expert solar PV, elevator modernization, HVAC, mechanical & electrical engineering for commercial, industrial, and residential projects.',
    canonical: '/',
    keywords:
      'engineering services Lahore, solar panel installation Lahore, elevator modernization Pakistan, lift services Lahore, mechanical electrical engineering Lahore, building services Pakistan',
    structuredData: homeStructuredData,
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <QuoteCTA />
    </>
  )
}
