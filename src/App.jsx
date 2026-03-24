import { useState, useEffect } from 'react'
import { Menu, X, Pencil } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEditor } from './context/EditorContext'
import Hero from './components/Hero'
import ExecutiveSummary from './components/ExecutiveSummary'
import PerformanceOverview from './components/PerformanceOverview'
import ChannelPerformance from './components/ChannelPerformance'
import PaidMediaResults from './components/PaidMediaResults'
import Achievements2026 from './components/Achievements2026'
import Improvements2026 from './components/Improvements2026'
import Projects2026 from './components/Projects2026'
import SEOStrategy from './components/SEOStrategy'
import AISearch from './components/AISearch'
import NewsletterStrategy from './components/NewsletterStrategy'
import FinalCTA from './components/FinalCTA'
import FeatureSection from './components/FeatureSection'
import AboutCompany from './components/AboutCompany'
import Footer from './components/Footer'
import './index.css'

const ComponentMap = {
  ExecutiveSummary,
  PerformanceOverview,
  ChannelPerformance,
  PaidMediaResults,
  AchievementsList: Achievements2026,
  Improvements2026,
  ProjectsGrid: Projects2026,
  SEOStrategy,
  AISearch,
  NewsletterStrategy,
  FinalCTA,
  FeatureSection,
  AboutCompany
};

function App({ hideEditButton }) {
  const { data: proposalData } = useEditor()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Introduction', href: '#intro' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'Phase 1', href: '#phase1-header' },
    { name: 'Phase 2', href: '#phase2' }
  ]

  return (
    <div className="app-container">
      {/* Sticky Navigation */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {proposalData.client.logoUrl ? (
              <img src={proposalData.client.logoUrl} alt={proposalData.client.name} style={{ height: '100px', objectFit: 'contain' }} />
            ) : (
              <>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--accent-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--accent-primary)', fontSize: '14px'
                }}>
                  {proposalData.client.logoText || 'P&G'}
                </div>
                <span style={{color: 'var(--text-primary)'}}>Tours</span>
              </>
            )}
          </a>
          
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <Link to="/quotes" className="btn-primary nav-cta">View Quotes and Approve</Link>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/quotes" 
              className="btn-primary mobile-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View Quotes and Approve
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero data={proposalData.hero} />
        {proposalData.sections.map((section, index) => {
          const Component = ComponentMap[section.type];
          if (!Component) return <div key={index} style={{color: 'red'}}>Component {section.type} not found.</div>;
          
          return (
            <div 
              key={index} 
              id={section.id}
              style={{ 
                paddingTop: section.data.paddingTop ? `${section.data.paddingTop}px` : undefined,
                paddingBottom: section.data.paddingBottom ? `${section.data.paddingBottom}px` : undefined,
                paddingLeft: section.data.paddingLeft ? `${section.data.paddingLeft}px` : undefined,
                paddingRight: section.data.paddingRight ? `${section.data.paddingRight}px` : undefined
              }}
            >
              <Component data={section.data} agencyName={proposalData.agency.name} />
            </div>
          );
        })}
      </main>
      <Footer />

      {/* Floating Edit Button */}
      {!hideEditButton && (
        <Link
          to="/editor"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: 'var(--accent-secondary)',
            color: '#fff',
            borderRadius: '50px',
            fontFamily: 'var(--font-main)',
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(196,154,69,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(196,154,69,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(196,154,69,0.4)'; }}
        >
          <Pencil size={16} /> Edit Proposal
        </Link>
      )}
    </div>
  )
}

export default App
