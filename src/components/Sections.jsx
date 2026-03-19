import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { education, projects, skills, participacoes, profile } from '../data'

/* ─── ACADÊMICO ─── */
export function Academico() {
  return (
    <div>
      <SectionHeader tag="// 03 — acadêmico" title="Formação" subtitle="Base acadêmica que sustenta a prática técnica." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            style={eduStyles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -3, borderColor: 'var(--border-bright)', boxShadow: '0 10px 32px rgba(109,40,217,0.12)' }}
          >
            <div style={eduStyles.leftBar} />
            <div style={eduStyles.icon}>{edu.icon}</div>
            <div>
              <div style={eduStyles.degree}>{edu.degree}</div>
              <div style={eduStyles.institution}>{edu.institution}</div>
              <div style={eduStyles.period}>{edu.period}</div>
            </div>
            <div style={{
              ...eduStyles.statusBadge,
              background: edu.status === 'Concluído' ? 'rgba(34,197,94,0.1)' : 'rgba(109,40,217,0.12)',
              color: edu.status === 'Concluído' ? '#4ade80' : 'var(--purple-glow)',
              border: `1px solid ${edu.status === 'Concluído' ? 'rgba(34,197,94,0.25)' : 'var(--border-bright)'}`,
            }}>
              {edu.status}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const eduStyles = {
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: '22px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.25s',
    cursor: 'default',
    flexWrap: 'wrap',
  },
  leftBar: {
    position: 'absolute',
    left: 0, top: 0, bottom: 0,
    width: 3,
    background: 'linear-gradient(180deg, var(--purple-core), var(--purple-bright))',
    borderRadius: '0 2px 2px 0',
  },
  icon: {
    width: 48, height: 48,
    borderRadius: 12,
    background: 'var(--purple-subtle)',
    border: '1px solid var(--border-bright)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 22, flexShrink: 0,
  },
  degree: { fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text-white)', marginBottom: 4 },
  institution: { fontSize: 14, color: 'var(--purple-glow)', fontWeight: 500, marginBottom: 6 },
  period: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' },
  statusBadge: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 10,
    padding: '4px 10px',
    borderRadius: 20,
    marginLeft: 'auto',
    flexShrink: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
}

/* ─── PROJETOS ─── */
export function Projetos() {
  return (
    <div>
      <SectionHeader tag="// 04 — projetos" title="Projetos & Clientes" subtitle="Atuações relevantes em projetos reais de engenharia de dados." />
      <div style={projStyles.grid}>
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            style={projStyles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, borderColor: 'var(--border-bright)', boxShadow: '0 16px 48px rgba(109,40,217,0.18)' }}
          >
            <motion.div
              style={projStyles.topLine}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div style={projStyles.header}>
              <div style={{ ...projStyles.logo, background: p.logoBg, borderColor: p.logoBorder, color: p.logoColor }}>
                {p.clientAbbr}
              </div>
              <div>
                <div style={projStyles.clientLabel}>Cliente</div>
                <div style={projStyles.clientName}>{p.client}</div>
              </div>
            </div>
            <div style={projStyles.via}>⚡ via {p.via}</div>
            <div style={projStyles.name}>{p.name}</div>
            <div style={projStyles.desc}>{p.description}</div>
            <div style={projStyles.tags}>
              {p.tags.map(t => (
                <motion.span key={t} style={projStyles.tag} whileHover={{ borderColor: 'var(--purple-bright)', color: 'var(--purple-glow)' }}>
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Placeholder card */}
        <motion.div
          style={{ ...projStyles.card, borderStyle: 'dashed', opacity: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.3 }}
        >
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>+</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>Adicione seu próximo projeto</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={projStyles.hint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        💡 <strong style={{ color: 'var(--purple-glow)' }}>Dica:</strong> Adicione novos projetos em{' '}
        <code style={{ color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>src/data/index.js</code>
      </motion.div>
    </div>
  )
}

const projStyles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 20,
    marginBottom: 24,
  },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: 24,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'default',
    transition: 'all 0.25s',
  },
  topLine: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, var(--purple-bright), transparent)',
    transformOrigin: 'left',
  },
  header: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 },
  logo: {
    width: 46, height: 46,
    borderRadius: 11,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 11,
    border: '1px solid', flexShrink: 0, letterSpacing: '-0.5px',
  },
  clientLabel: { fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 },
  clientName: { fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text-white)' },
  via: { fontSize: 12, color: 'var(--purple-glow)', fontWeight: 500, marginBottom: 10 },
  name: { fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 10 },
  desc: { fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 10,
    padding: '3px 9px',
    borderRadius: 20,
    border: '1px solid var(--border-bright)',
    color: 'var(--text-muted)',
    background: 'var(--purple-subtle)',
    cursor: 'default',
    transition: 'all 0.2s',
  },
  hint: {
    padding: '16px 20px',
    background: 'var(--bg-card)',
    border: '1px dashed var(--border-bright)',
    borderRadius: 12,
    color: 'var(--text-muted)',
    fontSize: 13,
  },
}

/* ─── PARTICIPAÇÕES ─── */
const typeMap = {
  curso:    { label: 'Curso',     bg: 'rgba(6,182,212,0.1)',   color: '#06b6d4',   border: 'rgba(6,182,212,0.2)' },
  evento:   { label: 'Evento',    bg: 'rgba(245,158,11,0.1)',  color: '#f59e0b',   border: 'rgba(245,158,11,0.2)' },
  mentoria: { label: 'Mentoria',  bg: 'rgba(109,40,217,0.12)', color: 'var(--purple-glow)', border: 'var(--border-bright)' },
}

export function Participacoes() {
  return (
    <div>
      <SectionHeader tag="// 05 — participações" title="Participações" subtitle="Cursos, eventos e comunidades que fazem parte da jornada." />
      <div style={partStyles.grid}>
        {participacoes.map((p, i) => {
          const t = typeMap[p.type] || typeMap.curso
          return (
            <motion.div
              key={p.id}
              style={partStyles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4, borderColor: 'var(--border-bright)', boxShadow: '0 12px 36px rgba(109,40,217,0.12)' }}
            >
              <span style={{ ...partStyles.badge, background: t.bg, color: t.color, border: `1px solid ${t.border}` }}>
                {t.label}
              </span>
              <div style={partStyles.name}>{p.name}</div>
              <div style={partStyles.org}>{p.org}</div>
              <div style={partStyles.desc}>{p.desc}</div>
            </motion.div>
          )
        })}

        <motion.div
          style={{ ...partStyles.card, borderStyle: 'dashed', opacity: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
        >
          <div style={{ textAlign: 'center', padding: '30px 16px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>
            + Adicione hackathons, bootcamps, conferências
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const partStyles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: 22,
    cursor: 'default',
    transition: 'all 0.25s',
  },
  badge: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '3px 9px',
    borderRadius: 20,
    marginBottom: 12,
    display: 'inline-block',
  },
  name: { fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text-white)', marginBottom: 5, lineHeight: 1.3 },
  org: { fontSize: 13, color: 'var(--purple-glow)', fontWeight: 500, marginBottom: 10 },
  desc: { fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65 },
}

/* ─── HARD SKILLS ─── */
export function Skills() {
  return (
    <div>
      <SectionHeader tag="// 06 — hard skills" title="Stack Técnica" subtitle="Tecnologias e ferramentas do dia a dia." />
      <div style={skillStyles.grid}>
        {skills.map((cat, i) => (
          <motion.div
            key={cat.id}
            style={skillStyles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ borderColor: 'var(--border-bright)', boxShadow: '0 6px 24px rgba(109,40,217,0.1)' }}
          >
            <div style={skillStyles.catHeader}>
              <div style={skillStyles.catIcon}>{cat.icon}</div>
              <div style={skillStyles.catName}>{cat.category}</div>
            </div>
            <div style={skillStyles.pills}>
              {cat.items.map((item) => (
                <motion.span
                  key={item}
                  style={skillStyles.pill}
                  whileHover={{ borderColor: 'var(--purple-bright)', color: 'var(--purple-glow)', background: 'rgba(109,40,217,0.1)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const skillStyles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 18 },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: 22,
    cursor: 'default',
    transition: 'all 0.25s',
  },
  catHeader: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 },
  catIcon: {
    width: 36, height: 36,
    borderRadius: 9,
    background: 'var(--purple-subtle)',
    border: '1px solid var(--border-bright)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 16,
  },
  catName: { fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text-white)' },
  pills: { display: 'flex', flexWrap: 'wrap', gap: 7 },
  pill: {
    fontSize: 12,
    padding: '5px 12px',
    borderRadius: 8,
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    background: 'var(--bg-deep)',
    cursor: 'default',
    transition: 'all 0.2s',
  },
}

/* ─── CONTATO ─── */
const contactItems = [
  { icon: '📧', label: 'Email', value: 'aluizprofi@gmail.com', href: `mailto:${profile?.email}` },
  { icon: '📱', label: 'WhatsApp / Telefone', value: '(81) 98670-2243', href: 'tel:+5581986702243' },
  { icon: '💼', label: 'LinkedIn', value: 'alberth-luiz-736527229', href: 'https://linkedin.com/in/alberth-luiz-736527229' },
  { icon: '🐙', label: 'GitHub', value: 'alberth-luiz-data', href: 'https://github.com/alberth-luiz-data' },
]

export function Contato() {
  return (
    <div>
      <SectionHeader tag="// 07 — contato" title="Vamos Conversar" subtitle="Aberto a projetos, oportunidades e trocas técnicas." />
      <div style={contactStyles.grid}>
        {contactItems.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            style={contactStyles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, borderColor: 'var(--purple-bright)', boxShadow: '0 12px 40px rgba(109,40,217,0.18)' }}
          >
            <motion.div
              style={contactStyles.icon}
              whileHover={{ background: 'rgba(109,40,217,0.22)', boxShadow: '0 0 20px rgba(109,40,217,0.35)' }}
            >
              {c.icon}
            </motion.div>
            <div>
              <div style={contactStyles.label}>{c.label}</div>
              <div style={contactStyles.value}>{c.value}</div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        style={contactStyles.locationCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <div style={contactStyles.locationAccent} />
        <div style={contactStyles.locationTitle}>📍 Localização</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Paulista, Pernambuco — Brasil</div>
        <div style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 4, fontFamily: 'JetBrains Mono, monospace' }}>
          Disponível para trabalho remoto e presencial em Recife/PE
        </div>
      </motion.div>
    </div>
  )
}

const contactStyles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 14, marginBottom: 20 },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 14,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s',
  },
  icon: {
    width: 44, height: 44,
    borderRadius: 11,
    background: 'var(--purple-subtle)',
    border: '1px solid var(--border-bright)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 19, flexShrink: 0,
    transition: 'all 0.25s',
  },
  label: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 },
  value: { fontSize: 13.5, color: 'var(--text-white)', fontWeight: 500 },
  locationCard: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 14,
    padding: '22px 24px',
    position: 'relative',
    overflow: 'hidden',
  },
  locationAccent: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, var(--purple-bright), transparent)',
  },
  locationTitle: { fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text-white)', marginBottom: 6 },
}
