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
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.10)]"
        style={{ height: 96 }}
      >
        <div className="max-w-[1400px] mx-auto px-10 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/ES LOGO.png"
              alt="Elektra Engineering Services Logo"
              className="h-12 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-3xl tracking-[0.05em] leading-none text-[#172554]">
                ELEKTRA
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] mt-1 text-[#2563eb]">
                ENGINEERING SERVICES
              </span>
              <span className="text-[8px] font-medium italic tracking-[0.12em] mt-0.5 text-[#64748b]">
                Ultimate Smart Engineering Solution
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 font-semibold text-base tracking-[0.05em] transition-colors text-[#0f172a] hover:text-[#1e40af]"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-semibold text-base tracking-[0.05em] transition-colors pb-1 text-[#0f172a] hover:text-[#1e40af] ${location.pathname === link.path ? 'border-b-2 border-[#1e40af]' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && dropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[360px]">
                    <div className="bg-white rounded-lg shadow-lg border border-[#e2e8f0] p-4">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
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
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:08001234567"
              className="flex items-center gap-2 font-semibold text-base transition-colors text-[#475569] hover:text-[#1e40af]"
            >
              <Phone className="w-5 h-5" />
              +92 321 8400045
            </a>
            <Link
              to="/quote"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-base tracking-[0.1em] px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
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
        <div className="fixed inset-0 z-40 bg-[#172554] flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link, i) => (
            <div key={link.name} className="text-center">
              {link.hasDropdown ? (
                <div className="space-y-4">
                  <span className="text-white/60 text-sm uppercase tracking-wider">Services</span>
                  <div className="flex flex-col gap-3">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-white text-lg font-medium hover:text-[#0ea5e9] transition-colors"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="text-white text-2xl font-semibold hover:text-[#0ea5e9] transition-colors"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/quote"
            className="mt-4 bg-[#0ea5e9] text-white font-semibold px-8 py-4 rounded-full text-lg"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  )
}
