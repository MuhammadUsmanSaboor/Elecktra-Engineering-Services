import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Facebook } from 'lucide-react'

const serviceLinks = [
  { name: 'Solar Implementation', path: '/services/solar' },
  { name: 'Lift & Elevator Systems', path: '/services/lifts' },
  { name: 'Mechanical Engineering', path: '/services/other' },
  { name: 'Electrical Engineering', path: '/services/other' },
  { name: 'Building Services', path: '/services/other' },
  { name: 'Project Management', path: '/services/other' },
]

const companyLinks = [
  { name: 'About Us', path: '/contact' },
  { name: 'Our Team', path: '/contact' },
  { name: 'Projects', path: '/projects' },
  { name: 'Insights', path: '/insights' },
  { name: 'Careers', path: '/contact' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#172554] text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/ES LOGO.png"
                alt="Elektra Engineering Services Logo"
                className="h-12 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-[0.05em] leading-none text-white">ELEKTRA</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] mt-1 text-[#0ea5e9]">ENGINEERING SERVICES</span>
                <span className={`text-[8px] font-medium italic tracking-[0.12em] mt-0.5 transition-colors text-white/50`}>
                  Ultimate Smart Engineering Solution
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/50 mt-2">Engineering Excellence Since 1999</p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +92 321 8400045
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 flex-shrink-0" />
                elektraengineering01@gmail.com
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>
                  Karam Elahi Plaza, Main Blvd, Block D1, Phase 1 Johar Town, Lahore, Pakistan (F76P+GJ3)
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="w-4 h-4 flex-shrink-0" />
                24/7 call-out available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/40">
            &copy; 2025 ELEKTRA ENGINEERING SERVICES. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[13px] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
