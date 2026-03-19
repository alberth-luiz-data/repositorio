import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: 40, paddingTop: 32 }}
    >
      <div style={styles.tag}>{tag}</div>
      <h1 style={styles.title}>{title}</h1>
      {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
      <motion.div
        style={styles.divider}
        initial={{ width: 0 }}
        animate={{ width: 40 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        
      />
    </motion.div>
  )
}

const styles = {
  tag: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 10,
    color: 'var(--purple-bright)',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(28px, 4vw, 38px)',
    lineHeight: 1.1,
    background: 'linear-gradient(135deg, #eef0ff 0%, #a78bfa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: 8,
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: 14,
    marginBottom: 16,
    maxWidth: 500,
  },
  divider: {
    height: 3,
    background: 'linear-gradient(90deg, var(--purple-core), var(--purple-bright))',
    borderRadius: 2,
    marginTop: 16,
  },
}
