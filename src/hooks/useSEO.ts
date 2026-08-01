import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  keywords?: string
  noIndex?: boolean
  structuredData?: object | object[]
}

const SITE_NAME = 'Elektra Engineering Services'
const BASE_URL = 'https://www.elektraengineering.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-image.jpg`

export function useSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  keywords,
  noIndex = false,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Title
    const fullTitle = `${title} | ${SITE_NAME}`
    document.title = fullTitle

    // Helper to set/create meta tags
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector)
      if (!el) {
        el = document.createElement('meta')
        const parts = selector.match(/\[(\w+)="([^"]+)"\]/)
        if (parts) el.setAttribute(parts[1], parts[2])
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    // Helper to set/create link tags
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // Primary meta
    setMeta('meta[name="description"]', 'content', description)
    if (keywords) setMeta('meta[name="keywords"]', 'content', keywords)
    setMeta('meta[name="robots"]', 'content', noIndex ? 'noindex, nofollow' : 'index, follow')

    // Canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}${window.location.pathname}`
    setLink('canonical', canonicalUrl)

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[property="og:type"]', 'content', ogType)
    setMeta('meta[property="og:image"]', 'content', ogImage)

    // Twitter Card
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:url"]', 'content', canonicalUrl)
    setMeta('meta[name="twitter:image"]', 'content', ogImage)

    // Structured data (JSON-LD) — scoped per page
    const existingScript = document.getElementById('page-structured-data')
    if (existingScript) existingScript.remove()

    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'page-structured-data'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(
        Array.isArray(structuredData) ? structuredData : [structuredData]
      )
      document.head.appendChild(script)
    }

    // Cleanup: reset title on unmount
    return () => {
      document.title = SITE_NAME
    }
  }, [title, description, canonical, ogImage, ogType, keywords, noIndex, structuredData])
}

export default useSEO
