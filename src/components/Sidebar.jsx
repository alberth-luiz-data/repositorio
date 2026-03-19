import { motion, AnimatePresence } from 'framer-motion'
import { User, Briefcase, GraduationCap, LayoutGrid, Users, Code2, Mail, X } from 'lucide-react'

const navItems = [
  { id: 'sobre',         label: 'Sobre',         Icon: User },
  { id: 'experiencia',   label: 'Experiência',   Icon: Briefcase },
  { id: 'academico',     label: 'Acadêmico',     Icon: GraduationCap },
  { id: 'projetos',      label: 'Projetos',      Icon: LayoutGrid },
  { id: 'participacoes', label: 'Participações', Icon: Users },
  { id: 'skills',        label: 'Hard Skills',   Icon: Code2 },
  { id: 'contato',       label: 'Contato',       Icon: Mail },
]

export default function Sidebar({ active, setActive, mobileOpen, setMobileOpen }) {
  const handleNav = (id) => {
    setActive(id)
    setMobileOpen(false)
  }

  const Content = () => (
    <div style={s.inner}>
      {/* Header */}
      <div style={s.header}>
        <motion.div style={s.avatarWrap} whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 400 }}>
          <img src="/avatar.jpg" alt="Alberth Luiz" style={s.avatarImg} />
          <div style={s.avatarRing} />
        </motion.div>
        <div style={s.name}>Alberth Luiz</div>
        <div style={s.role}>Data Engineer</div>
        <div style={s.status}>
          <motion.span style={s.dot} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          Disponível para projetos
        </div>
      </div>

      {/* Nav */}
      <nav style={s.nav}>
        <div style={s.navLabel}>Menu</div>
        {navItems.map(({ id, label, Icon }, i) => {
          const isActive = active === id
          return (
            <motion.button
              key={id}
              onClick={() => handleNav(id)}
              style={{ ...s.navItem, ...(isActive ? s.navActive : {}) }}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 + 0.1 }}
              whileHover={!isActive ? { x: 3, backgroundColor: 'rgba(109,40,217,0.07)' } : {}}
            >
              {isActive && (
                <motion.div layoutId="activeBar" style={s.activeBar}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }} />
              )}
              <Icon size={15} style={{ opacity: isActive ? 1 : 0.5, flexShrink: 0 }} />
              <span>{label}</span>
            </motion.button>
          )
        })}
      </nav>

      {/* Footer */}
      <div style={s.footer}>
        <div style={s.navLabel}>Redes</div>
        <div style={s.socialRow}>
          {[
            { href: 'https://linkedin.com/in/alberth-luiz-736527229', title: 'LinkedIn', children: <LinkedInSVG /> },
            { href: 'https://github.com/alberth-luiz-data',           title: 'GitHub',   children: <GitHubSVG /> },
            { href: 'mailto:aluizprofi@gmail.com',                    title: 'Email',    children: <MailSVG /> },
          ].map(({ href, title, children }) => (
            <motion.a key={title} href={href} target="_blank" rel="noreferrer" title={title}
              style={s.socialLink}
              whileHover={{ scale: 1.1, borderColor: '#7c3aed', color: '#a78bfa', backgroundColor: 'rgba(109,40,217,0.12)' }}
              whileTap={{ scale: 0.95 }}>
              {children}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="desktop-sidebar" style={s.desktop}><Content /></aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div style={s.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <motion.aside className="mobile-sidebar" style={s.mobile}
        initial={{ x: '-100%' }} animate={{ x: mobileOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
        <button style={s.closeBtn} onClick={() => setMobileOpen(false)}><X size={16} /></button>
        <Content />
      </motion.aside>
    </>
  )
}

const s = {
  desktop: {
    width: 'var(--sidebar-w)', minHeight: '100vh',
    background: 'var(--sidebar-bg)',
    borderRight: '1px solid var(--border)',
    position: 'fixed', top: 0, left: 0, zIndex: 100,
    boxShadow: '4px 0 40px rgba(109,40,217,0.06)',
  },
  mobile: {
    width: 264, height: '100vh',
    background: 'var(--sidebar-bg)',
    borderRight: '1px solid var(--border)',
    position: 'fixed', top: 0, left: 0, zIndex: 300,
    overflowY: 'auto', display: 'none',
  },
  overlay: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,0.7)',
    backdropFilter: 'blur(4px)', zIndex: 200,
  },
  inner: { display: 'flex', flexDirection: 'column', height: '100%' },
  header: { padding: '28px 22px 22px', borderBottom: '1px solid var(--border)' },
  avatarWrap: {
    width: 68, height: 68, borderRadius: '50%',
    marginBottom: 14, position: 'relative', cursor: 'default',
  },
  avatarImg: {
    width: '100%', height: '100%',
    borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 60%',
    position: 'relative', zIndex: 1,
    border: '2px solid transparent',
  },
  avatarRing: {
    position: 'absolute', inset: -2, borderRadius: '50%',
    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    zIndex: 0,
  },
  name: { fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text-white)', marginBottom: 3 },
  role: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--purple-glow)', textTransform: 'uppercase', letterSpacing: '0.08em' },
  status: { display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 11, color: 'var(--text-muted)' },
  dot: { display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', flexShrink: 0 },
  nav: { padding: '14px 0', flex: 1, overflowY: 'auto' },
  navLabel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', padding: '0 22px 8px' },
  navItem: {
    display: 'flex', alignItems: 'center', gap: 11,
    padding: '10px 22px', width: '100%',
    background: 'none', border: 'none', borderLeft: '2px solid transparent',
    cursor: 'pointer', color: 'var(--text-muted)',
    fontSize: 13.5, fontFamily: 'Outfit, sans-serif', textAlign: 'left',
    position: 'relative', transition: 'color 0.15s',
  },
  navActive: {
    color: 'var(--purple-glow)',
    background: 'rgba(109,40,217,0.1)',
    borderLeftColor: 'var(--purple-bright)',
    fontWeight: 500,
  },
  activeBar: {
    position: 'absolute', left: 0, top: 0, bottom: 0,
    width: 2, background: 'var(--purple-bright)',
    borderRadius: '0 2px 2px 0',
  },
  footer: { padding: '18px 22px', borderTop: '1px solid var(--border)' },
  socialRow: { display: 'flex', gap: 8, marginTop: 8 },
  socialLink: {
    width: 32, height: 32, borderRadius: 8,
    border: '1px solid var(--border-bright)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--text-muted)', textDecoration: 'none',
    background: 'none', cursor: 'pointer', transition: 'all 0.2s',
  },
  closeBtn: {
    position: 'absolute', top: 14, right: 14,
    background: 'var(--bg-card)', border: '1px solid var(--border)',
    borderRadius: 8, width: 32, height: 32,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: 'var(--text-muted)', zIndex: 10,
  },
}

const LinkedInSVG = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const GitHubSVG  = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const MailSVG    = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
