import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, Sun, Layers, Settings, Zap, Building2, ClipboardList } from 'lucide-react'

const serviceLinks = [
  { name: 'Solar Implementation', path: '/services/solar', icon: Sun, desc: 'Solar PV systems for all property types' },
  { name: 'Lift & Elevator Systems', path: '/services/lifts', icon: Layers, desc: 'Installation, modernization & maintenance' },
  { name: 'Mechanical Engineering', path: '/services/other', icon: Settings, desc: 'HVAC, plumbing & industrial machinery' },
  { name: 'Electrical Engineering', path: '/services/other', icon: Zap, desc: 'Power distribution & EV charging' },
  { name: 'Building Services', path: '/services/other', icon: Building2, desc: 'Energy audits & BMS integration' },
  { name: 'Project Management', path: '/services/other', icon: ClipboardList, desc: 'Turnkey project delivery' },
]

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '', hasDropdown: true },
  { name: 'Projects', path: '/projects' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!mobileOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [mobileOpen])

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 h-20 xl:h-24 transition-all duration-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.10)]"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3 group">
            <img
              src="/images/ES LOGO.png"
              alt="Elektra Engineering Services Logo"
              className="h-10 sm:h-12 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex min-w-0 flex-col">
              <span className="font-extrabold text-xl sm:text-2xl xl:text-3xl tracking-[0.05em] leading-none text-[#172554]">
                ELEKTRA
              </span>
              <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.2em] mt-1 text-[#2563eb]">
                ENGINEERING SERVICES
              </span>
              <span className="hidden lg:block text-[8px] font-medium italic tracking-[0.12em] mt-0.5 text-[#64748b]">
                Ultimate Smart Engineering Solution
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDesktopServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDesktopServicesOpen(false)}
              >
                {link.hasDropdown ? (
                  <button
                    type="button"
                    aria-expanded={desktopServicesOpen}
                    aria-haspopup="true"
                    onClick={() => setDesktopServicesOpen((open) => !open)}
                    className="flex items-center gap-1 font-semibold text-base tracking-[0.05em] transition-colors text-[#0f172a] hover:text-[#1e40af]"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${desktopServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                    className={`font-semibold text-base tracking-[0.05em] transition-colors pb-1 text-[#0f172a] hover:text-[#1e40af] ${location.pathname === link.path ? 'border-b-2 border-[#1e40af]' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && desktopServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[360px] max-w-[calc(100vw-2rem)]">
                    <div className="bg-white rounded-lg shadow-lg border border-[#e2e8f0] p-4">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setDesktopServicesOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-md hover:bg-[#e2e8f0] transition-colors group"
                        >
                          <service.icon className="w-5 h-5 text-[#1e40af] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm text-[#0f172a] group-hover:text-[#1e40af]">
                              {service.name}
                            </div>
                            <div className="text-xs text-[#475569] mt-0.5">{service.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-5">
            <a
              href="tel:08001234567"
              className="flex items-center gap-2 font-semibold text-base transition-colors text-[#475569] hover:text-[#1e40af]"
            >
              <Phone className="w-5 h-5" />
              +92 321 8400045
            </a>
            <Link
              to="/quote"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-base tracking-[0.1em] px-5 2xl:px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="xl:hidden p-2 rounded-md text-[#0f172a] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e40af]"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-[#0f172a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0f172a]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 z-40 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl xl:hidden sm:px-6"
        >
          <div className="mx-auto flex max-w-[1400px] flex-col">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-slate-100">
                {link.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className="flex w-full items-center justify-between py-3 text-left text-lg font-semibold text-[#172554] hover:text-[#1e40af]"
                    >
                      Services
                      <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div id="mobile-services" className="mb-3 grid gap-1 sm:grid-cols-2">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileServicesOpen(false)
                            }}
                            className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-[#172554] hover:bg-slate-50"
                          >
                            <service.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1e40af]" />
                            <span className="min-w-0">
                              <span className="block font-medium">{service.name}</span>
                              <span className="mt-0.5 block text-sm text-slate-500">{service.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-semibold text-[#172554] hover:text-[#1e40af]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="tel:08001234567"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 py-4 font-semibold text-[#475569] hover:text-[#1e40af]"
            >
              <Phone className="h-5 w-5" />
              +92 321 8400045
            </a>
            <Link
              to="/quote"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0ea5e9] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0284c7]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
