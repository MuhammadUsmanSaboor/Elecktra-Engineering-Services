import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import CustomerServiceChat from './components/CustomerServiceChat'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesSolar from './pages/ServicesSolar'
import ServicesLifts from './pages/ServicesLifts'
import ServicesOther from './pages/ServicesOther'
import Projects from './pages/Projects'
import QuoteRequest from './pages/QuoteRequest'
import Insights from './pages/Insights'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Team from './pages/Team'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/solar" element={<ServicesSolar />} />
        <Route path="/services/lifts" element={<ServicesLifts />} />
        <Route path="/services/other" element={<ServicesOther />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/quote" element={<QuoteRequest />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
      <CustomerServiceChat />
    </div>
  )
}

export default App
