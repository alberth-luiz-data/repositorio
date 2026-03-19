import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Sobre from './components/Sobre'
import Experiencia from './components/Experiencia'
import { Academico, Projetos, Participacoes, Skills, Contato } from './components/Sections'

const sections = {
  sobre:         <Sobre />,
  experiencia:   <Experiencia />,
  academico:     <Academico />,
  projetos:      <Projetos />,
  participacoes: <Participacoes />,
  skills:        <Skills />,
  contato:       <Contato />,
}

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

export default function App() {
  const [active, setActive] = useState('sobre')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Inject mobile sidebar display fix
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @media (max-width: 768px) {
        .desktop-sidebar { display: none !important; }
        .mobile-sidebar   { display: flex !important; flex-direction: column; }
      }
      @media (min-width: 769px) {
        .mobile-sidebar { display: none !important; }
        .hamburger-btn  { display: none !important; }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <div style={styles.layout}>
      {/* Background glows */}
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      {/* Sidebar — desktop gets class for CSS targeting */}
      <div className="desktop-sidebar" style={{ position: 'fixed', top: 0, left: 0, zIndex: 100, width: 'var(--sidebar-w)' }}>
        <Sidebar active={active} setActive={setActive} mobileOpen={false} setMobileOpen={() => {}} />
      </div>

      <div className="mobile-sidebar">
        <Sidebar active={active} setActive={setActive} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      </div>

      {/* Hamburger */}
      <motion.button
        className="hamburger-btn"
        style={styles.hamburger}
        onClick={() => setMobileOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu size={18} color="var(--text-secondary)" />
      </motion.button>

      {/* Main */}
      <main style={{ ...styles.main, marginLeft: isMobile ? 0 : 'var(--sidebar-w)' }}>
        <div style={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {sections[active]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 1,
  },
  glow1: {
    position: 'fixed',
    width: 600, height: 600,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(109,40,217,0.07) 0%, transparent 70%)',
    top: -150, right: 50,
    filter: 'blur(60px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  glow2: {
    position: 'fixed',
    width: 400, height: 400,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)',
    bottom: 100, right: 300,
    filter: 'blur(60px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  main: {
    flex: 1,
    minHeight: '100vh',
    position: 'relative',
    zIndex: 1,
    transition: 'margin-left 0.3s ease',
  },
  content: {
    padding: 'clamp(24px, 4vw, 52px)',
    maxWidth: 860,
  },
  hamburger: {
    position: 'fixed',
    top: 16, left: 16,
    zIndex: 250,
    width: 40, height: 40,
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  },
}
