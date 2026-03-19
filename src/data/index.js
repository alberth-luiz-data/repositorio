export const profile = {
  name: 'Alberth Luiz',
  fullName: 'Alberth Luiz Cândido Guerra da Silva',
  role: 'Engenheiro de Dados',
  location: 'Paulista, Pernambuco — Brasil',
  locationNote: 'Disponível para trabalho remoto e presencial em Recife/PE',
  email: 'aluizprofi@gmail.com',
  phone: '(81) 98670-2243',
  linkedin: 'https://linkedin.com/in/alberth-luiz-736527229',
  github: 'https://github.com/alberth-luiz-data',
}

export const certifications = [
  {
    id: 1,
    name: 'Data Engineer Associate',
    issuer: 'DataCamp',
    year: '2025',
    // Official DataCamp DE Associate badge from their CDN
    badgeUrl: '/datacamp.png',
    verifyUrl: 'https://www.datacamp.com/certificate/DEA0013667081969',
    accentColor: '#05c3dd',
  },
  {
    id: 2,
    name: 'Microsoft Certified: Azure Data Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    // Official Microsoft Learn DP-900 badge SVG
    badgeUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    verifyUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/',
    accentColor: '#0078d4',
  },
  {
    id: 3,
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    badgeUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    verifyUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
    accentColor: '#7719aa',
  },
]

export const experiences = [
  {
    id: 1,
    title: 'Engenheiro de Dados',
    company: 'Deloitte',
    abbreviation: 'DEL',
    period: 'Mar 2025 – Presente',
    location: 'Recife, PE',
    color: '#c084fc',
    bgColor: 'rgba(134,25,143,0.12)',
    borderColor: 'rgba(168,85,247,0.3)',
    dotColor: '#8b5cf6',
    shadowColor: 'rgba(124,58,237,0.5)',
    bullets: [
      'Desenvolvimento de pipelines ETL escaláveis com Python e SQL para grandes clientes.',
      'Implementação de modelos de Machine Learning voltados para insights estratégicos.',
      'Criação de dashboards executivos e storytelling de dados para tomada de decisão.',
    ],
  },
  {
    id: 2,
    title: 'Aprendiz em Elétrica',
    company: 'Stellantis',
    companyNote: 'Foco em Automação',
    abbreviation: 'STL',
    period: 'Out 2023 – Mar 2025',
    location: 'Goiana, PE',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.1)',
    borderColor: 'rgba(245,158,11,0.3)',
    dotColor: '#f59e0b',
    shadowColor: 'rgba(245,158,11,0.5)',
    bullets: [
      'Desenvolvimento de lógica de programação industrial utilizando Ladder.',
      'Manutenção de sistemas críticos de automação e aplicação de melhoria contínua.',
    ],
  },
  {
    id: 3,
    title: 'Estagiário em Engenharia de Dados',
    company: 'Compass UOL',
    abbreviation: 'CPL',
    period: 'Jun 2023 – Nov 2023',
    location: 'Remoto',
    color: '#06b6d4',
    bgColor: 'rgba(6,182,212,0.1)',
    borderColor: 'rgba(6,182,212,0.3)',
    dotColor: '#06b6d4',
    shadowColor: 'rgba(6,182,212,0.5)',
    bullets: [
      'Processamento de Big Data utilizando PySpark e ecossistema Hadoop.',
      'Automatização de fluxos de carga de dados com Python em ambiente distribuído.',
    ],
  },
]

export const education = [
  {
    id: 1,
    degree: 'Pós-Graduação em Data Science',
    institution: 'Descomplica',
    period: 'Jun 2025 – Jun 2026',
    icon: '🎓',
    status: 'Em andamento',
  },
  {
    id: 2,
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Uninassau',
    period: 'Mar 2023 – Jun 2025',
    icon: '💻',
    status: 'Concluído',
  },
]

export const projects = [
  {
    id: 1,
    client: 'Petrobras',
    clientAbbr: 'PBR',
    via: 'Deloitte',
    name: 'Data Process',
    description:
      'Desenvolvimento de pipelines de ingestão e transformação de dados com foco em rastreabilidade, qualidade e governança de dados em ambiente cloud.',
    tags: ['Python', 'SQL', 'Azure', 'ETL'],
    logoColor: '#38bdf8',
    logoBg: 'rgba(0,56,168,0.15)',
    logoBorder: 'rgba(56,189,248,0.3)',
  },
  {
    id: 2,
    client: 'White Martins',
    clientAbbr: 'WM',
    via: 'Deloitte',
    name: 'Back-end Development',
    description:
      'Migração de grandes procedures SQL legadas para código Python limpo e performático, automatizando jobs críticos e reduzindo complexidade operacional com CI/CD no Azure DevOps.',
    tags: ['JavaScript', 'SQL', 'Python', 'Azure', 'DevOps'],
    logoColor: '#4ade80',
    logoBg: 'rgba(22,163,74,0.12)',
    logoBorder: 'rgba(74,222,128,0.3)',
  },
  {
    id: 3,
    client: 'SABESP',
    clientAbbr: 'SBP',
    via: 'Deloitte',
    name: 'Data Engineering',
    description:
      'Construção de pipelines de mineração de processos com arquitetura Medallion no Databricks, garantindo rastreabilidade e qualidade dos dados em larga escala.',
    tags: ['Databricks', 'PySpark', 'Medallion', 'Azure', 'Python'],
    logoColor: '#06b6d4',
    logoBg: 'rgba(6,182,212,0.12)',
    logoBorder: 'rgba(6,182,212,0.3)',
  },
  {
    id: 4,
    client: 'Suzano',
    clientAbbr: 'SUZ',
    via: 'Deloitte',
    name: 'Data Bridge',
    description:
      'Integração e migração de dados entre sistemas legados e plataformas modernas utilizando Informatica e BigQuery, com foco em compatibilidade com SAP S/4HANA.',
    tags: ['Informatica', 'SQL', 'BigQuery', 'S4'],
    logoColor: '#f59e0b',
    logoBg: 'rgba(245,158,11,0.12)',
    logoBorder: 'rgba(245,158,11,0.3)',
  },
]

export const participacoes = [
  {
    id: 1,
    type: 'curso',
    name: 'Formação Data Engineer',
    org: 'DataCamp',
    desc: 'Trilha completa de Engenharia de Dados, culminando na certificação Data Engineer Associate.',
  },
  {
    id: 2,
    type: 'curso',
    name: 'Microsoft Azure Fundamentals',
    org: 'Microsoft Learn',
    desc: 'Preparação para DP-900 e AI-900, com foco em serviços de dados e IA na nuvem.',
  },
]

export const skills = [
  { id: 1, icon: '🐍', category: 'Linguagens',          items: ['Python', 'SQL', 'JavaScript'] },
  { id: 2, icon: '⚙️', category: 'Engenharia de Dados', items: ['PySpark', 'ETL / ELT', 'Azure Data Factory', 'Databricks', 'Delta Lake', 'Hadoop'] },
  { id: 3, icon: '☁️', category: 'Cloud & DevOps',       items: ['Microsoft Azure', 'AWS', 'Git', 'GitHub'] },
  { id: 4, icon: '🗄️', category: 'Bancos de Dados',      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SSMS', 'Modelagem Dimensional'] },
  { id: 5, icon: '📊', category: 'Analytics & BI',       items: ['Power BI', 'Storytelling de Dados', 'Machine Learning'] },
  { id: 6, icon: '🏭', category: 'Automação Industrial', items: ['Programação Ladder', 'Manutenção de Sistemas Críticos'] },
]
