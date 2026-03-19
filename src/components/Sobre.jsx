import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { profile, certifications } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Sobre() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <SectionHeader
        tag="// 01 — sobre"
        title="Alberth Luiz"
        subtitle="Engenheiro de Dados · Deloitte · Recife, PE"
      />

      {/* ── BADGE SHOWCASE (vitrine Pokémon) ── */}
      <motion.div variants={item} style={bs.section}>
        <div style={bs.sectionLabel}>
          <span style={bs.labelIcon}>🏅</span>
          Insígnias & Certificações
        </div>
        <div style={bs.showcase}>
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              style={{ ...bs.badgeCard, '--accent': cert.accentColor }}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 300, damping: 22 }}
              whileHover={{ y: -8, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* glow behind badge */}
              <div style={{ ...bs.badgeGlow, background: `radial-gradient(circle, ${cert.accentColor}30 0%, transparent 70%)` }} />

              <div style={bs.badgeImgWrap}>
                <img
                  src={cert.badgeUrl}
                  alt={cert.name}
                  style={bs.badgeImg}
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
                {/* fallback */}
                <div style={{ ...bs.badgeFallback, display: 'none', background: `${cert.accentColor}22`, color: cert.accentColor }}>
                  🎓
                </div>
              </div>

              <div style={bs.badgeName}>{cert.name}</div>
              <div style={bs.badgeIssuer}>{cert.issuer}</div>
              <div style={{ ...bs.badgeYear, color: cert.accentColor }}>{cert.year}</div>

              <div style={{ ...bs.verifyBtn, borderColor: `${cert.accentColor}55`, color: cert.accentColor }}>
                Verificar ↗
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* ── BIO ── */}
      <motion.div variants={item} style={bs.bio}>
        <div style={bs.bioAccent} />
        <p style={bs.bioText}>
          Sou <span style={bs.hi}>Engenheiro de Dados na Deloitte</span>, com experiência em construção
          de pipelines ETL escaláveis, processamento de Big Data e soluções em nuvem. Atuo na interseção entre
          engenharia de software e ciência de dados, entregando valor estratégico para grandes clientes.
          Tenho passagem por <span style={bs.hi}>Stellantis</span> e <span style={bs.hi}>Compass UOL</span>,
          onde desenvolvi habilidades técnicas sólidas em ambientes industriais e de consultoria.
        </p>
      </motion.div>

      {/* ── IDIOMAS ── */}
      <motion.div variants={item} style={bs.langRow}>
        {[
          { flag: '🇧🇷', name: 'Português', level: 'Nativo' },
          { flag: '🇺🇸', name: 'Inglês',    level: 'Conversação & Escuta' },
        ].map((l) => (
          <motion.div key={l.name} style={bs.langCard} whileHover={{ scale: 1.03, borderColor: 'var(--border-bright)' }}>
            <span style={{ fontSize: 22 }}>{l.flag}</span>
            <div>
              <div style={bs.langName}>{l.name}</div>
              <div style={bs.langLevel}>{l.level}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

const bs = {
  /* badge showcase */
  section: { marginBottom: 32 },
  sectionLabel: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16,
    color: 'var(--text-white)', marginBottom: 18,
  },
  labelIcon: { fontSize: 18 },
  showcase: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
    gap: 16,
  },
  badgeCard: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 18,
    padding: '22px 18px 18px',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: 8, textDecoration: 'none', cursor: 'pointer',
    position: 'relative', overflow: 'hidden',
    transition: 'border-color 0.25s, box-shadow 0.25s',
    boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
  },
  badgeGlow: {
    position: 'absolute', inset: 0,
    opacity: 0.6, pointerEvents: 'none',
  },
  badgeImgWrap: {
    width: 90, height: 90,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', zIndex: 1,
  },
  badgeImg: {
    width: '100%', height: '100%',
    objectFit: 'contain', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))',
  },
  badgeFallback: {
    width: '100%', height: '100%',
    borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
    fontSize: 32, border: '1px solid currentColor',
  },
  badgeName: {
    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12,
    color: 'var(--text-white)', textAlign: 'center', lineHeight: 1.3,
    position: 'relative', zIndex: 1,
  },
  badgeIssuer: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
    color: 'var(--text-muted)', position: 'relative', zIndex: 1,
  },
  badgeYear: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
    fontWeight: 500, position: 'relative', zIndex: 1,
  },
  verifyBtn: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
    textTransform: 'uppercase', letterSpacing: '0.1em',
    padding: '3px 10px', borderRadius: 20,
    border: '1px solid', marginTop: 4,
    position: 'relative', zIndex: 1,
    transition: 'background 0.2s',
  },
  /* bio */
  bio: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16, padding: '24px 26px',
    marginBottom: 20, position: 'relative', overflow: 'hidden',
  },
  bioAccent: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
    background: 'linear-gradient(90deg, #6d28d9, #7c3aed, #06b6d4)',
  },
  bioText: { color: 'var(--text-primary)', lineHeight: 1.85, fontSize: 14.5 },
  hi: { color: 'var(--purple-glow)', fontWeight: 600 },
  /* idiomas */
  langRow: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  langCard: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 10, padding: '11px 16px',
    display: 'flex', alignItems: 'center', gap: 10,
    cursor: 'default', transition: 'all 0.2s',
  },
  langName: { fontSize: 13, fontWeight: 600, color: 'var(--text-white)' },
  langLevel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-muted)' },
}
