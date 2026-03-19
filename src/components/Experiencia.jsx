import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { experiences } from '../data'

export default function Experiencia() {
  return (
    <div>
      <SectionHeader
        tag="// 02 — experiência"
        title="Trajetória Profissional"
        subtitle="Experiências que moldaram minha visão técnica e estratégica."
      />
      <div style={styles.timeline}>
        <div style={styles.line} />
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            style={styles.item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            {/* Dot */}
            <motion.div
              style={{
                ...styles.dot,
                background: exp.dotColor,
                borderColor: exp.dotColor,
                boxShadow: `0 0 14px ${exp.shadowColor}`,
              }}
              whileHover={{ scale: 1.4 }}
            />

            {/* Card */}
            <motion.div
              style={styles.card}
              whileHover={{ x: 5, borderColor: 'var(--border-bright)', boxShadow: '0 6px 28px rgba(109,40,217,0.1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div style={styles.cardTop} />

              <div style={styles.header}>
                <div style={styles.companyRow}>
                  <div style={{
                    ...styles.logo,
                    background: exp.bgColor,
                    borderColor: exp.borderColor,
                    color: exp.color,
                  }}>
                    {exp.abbreviation}
                  </div>
                  <div>
                    <div style={styles.title}>{exp.title}</div>
                    <div style={styles.company}>
                      {exp.company}
                      {exp.companyNote && (
                        <span style={styles.companyNote}> · {exp.companyNote}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div style={styles.period}>{exp.period}</div>
              </div>

              <div style={styles.location}>📍 {exp.location}</div>

              <ul style={styles.bullets}>
                {exp.bullets.map((b, bi) => (
                  <motion.li
                    key={bi}
                    style={styles.bullet}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.15 + bi * 0.08 + 0.3 }}
                  >
                    <span style={styles.bulletArrow}>▸</span>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  timeline: {
    position: 'relative',
    paddingLeft: 32,
  },
  line: {
    position: 'absolute',
    left: 0, top: 8,
    bottom: 8,
    width: 1,
    background: 'linear-gradient(180deg, var(--purple-core), var(--purple-bright) 50%, transparent)',
  },
  item: {
    position: 'relative',
    marginBottom: 32,
  },
  dot: {
    position: 'absolute',
    left: -38, top: 16,
    width: 13, height: 13,
    borderRadius: '50%',
    border: '2px solid',
    cursor: 'default',
  },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: '22px 24px',
    transition: 'all 0.25s',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'default',
  },
  cardTop: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 6,
    gap: 16,
    flexWrap: 'wrap',
  },
  companyRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 42, height: 42,
    borderRadius: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    fontSize: 11,
    border: '1px solid',
    flexShrink: 0,
    letterSpacing: '-0.5px',
  },
  title: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: 15,
    color: 'var(--text-white)',
  },
  company: {
    fontSize: 13,
    color: 'var(--purple-glow)',
    fontWeight: 500,
    marginTop: 2,
  },
  companyNote: {
    color: 'var(--text-muted)',
    fontWeight: 400,
    fontSize: 11,
  },
  period: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 10,
    color: 'var(--text-muted)',
    background: 'var(--purple-subtle)',
    padding: '4px 10px',
    borderRadius: 20,
    border: '1px solid var(--border-bright)',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  location: {
    fontSize: 12,
    color: 'var(--text-muted)',
    marginBottom: 14,
    marginTop: 2,
  },
  bullets: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 },
  bullet: {
    fontSize: 13.5,
    color: 'var(--text-secondary)',
    paddingLeft: 16,
    position: 'relative',
    lineHeight: 1.65,
  },
  bulletArrow: {
    position: 'absolute',
    left: 0,
    color: 'var(--purple-bright)',
    fontSize: 10,
    top: 3,
  },
}
