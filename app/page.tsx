'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: LucideIcon
  badge: string
  tagline: string
  skills: string[]
}

interface SkillLevel {
  label: string
  level: number
}

interface ProjectVisionStep {
  title: string
  icon: LucideIcon
  description: string
  focus: string[]
}

interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  demo: string
}

interface TimelineEntry {
  id: string
  marker: string
  title: string
  organization: string
  period: string
  highlights: string[]
  technologies?: string[]
}

interface Activity {
  title: string
  icon: LucideIcon
  description: string
  highlights: string[]
  tools: string[]
}

const navItems = [
  { href: '#profil', label: 'Profil' },
  { href: '#experience', label: 'Expérience' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#activites', label: 'Activités' },
  { href: '#projets', label: 'Projets IA' },
  { href: '#competences', label: 'Competences' },
  { href: '#contact', label: 'Contact' },
]

const categories: SkillCategory[] = [
  {
    title: 'IA / Deep Learning',
    icon: BrainCircuit,
    badge: 'ML / LLM',
    tagline: 'Concevoir, entraîner et améliorer des modèles (NLP, deep learning, fine-tuning) avec une approche orientée métriques.',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG', 'Recherche vectorielle', 'Systèmes multi-agents', 'MLOps'],
  },
  {
    title: 'Frameworks & librairies',
    icon: Cpu,
    badge: 'Python stack',
    tagline: "Du prototypage à l'expérimentation propre : notebooks → code maintenable, reproductible et prêt à industrialiser.",
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Programmation & Backend',
    icon: Code2,
    badge: 'Software',
    tagline: "APIs robustes et intégrations : transformer une idée (ou un modèle) en fonctionnalité produit exploitable.",
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'FastAPI', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Data Engineering & Outils',
    icon: Database,
    badge: 'Pipelines',
    tagline: "Des données fiables et traçables : ingestion, transformation, orchestration et restitution (BI) pour soutenir la décision.",
    skills: ['PostgreSQL', 'pgVector', 'MySQL', 'MongoDB', 'Snowflake', 'dbt', 'Apache Airflow', 'Power BI', 'Docker', 'Git', 'Linux'],
  },
]

const levels: SkillLevel[] = [
  { label: 'Analyse & visualisation des données', level: 90 },
  { label: 'Conception de pipelines ML', level: 84 },
  { label: 'Développement Python orienté data', level: 86 },
  { label: 'Création d’applications data web', level: 78 },
]

const projectVision: ProjectVisionStep[] = [
  {
    title: 'Cadrage & impact',
    icon: Sparkles,
    description: "Comprendre le besoin, clarifier l’objectif et définir des KPI pour livrer une solution utile et mesurable.",
    focus: ['KPI', 'Scope', 'Roadmap'],
  },
  {
    title: 'Data & qualité',
    icon: Database,
    description: 'Collecter, nettoyer et transformer les données avec une logique de qualité, traçabilité et collaboration.',
    focus: ['SQL', 'ETL', 'Qualité'],
  },
  {
    title: 'Modélisation',
    icon: BrainCircuit,
    description: 'Baselines, entraînement, validation et itérations (NLP, DL, LLMs) selon le contexte et les contraintes.',
    focus: ['Évaluation', 'Itérations', 'Reproductibilité'],
  },
  {
    title: 'Industrialisation',
    icon: Wrench,
    description: "Packaging, API, dashboards et documentation pour passer du prototype à l’usage réel.",
    focus: ['API REST', 'Docker', 'Power BI'],
  },
]

const projects: Project[] = [
  {
    title: 'Détection du phishing par RAG et LLM',
    description:
      'Assistant de cybersécurité RAG pour classifier les tentatives de phishing et analyser les menaces avec recherche hybride.',
    tags: ['Python', 'Qwen2.5', 'RAG', 'FAISS', 'BM25', 'Transformers'],
    github: 'https://github.com/Insaf-elkorachi',
    demo: '#',
  },
  {
    title: 'Analyse en temps réel des sentiments Amazon',
    description:
      'Pipeline streaming de bout en bout pour classifier les avis clients Amazon avec Kafka, Spark Structured Streaming et orchestration Docker/Airflow.',
    tags: ['Python', 'NLP', 'Kafka', 'Spark MLlib', 'Docker', 'Airflow'],
    github: 'https://github.com/Insaf-elkorachi',
    demo: '#',
  },
  {
    title: 'Web scraping et analyse de données',
    description:
      'Automatisation du scraping pour des sites dynamiques, extraction structurée, préparation et export des données.',
    tags: ['Python', 'JavaScript', 'PostgreSQL', 'React'],
    github: 'https://github.com/Insaf-elkorachi',
    demo: '#',
  },
  {
    title: 'Prédiction du risque routier',
    description:
      'Modélisation de la sévérité des accidents avec une approche orientée impact et support à la décision.',
    tags: ['Python', 'Scikit-learn', 'Geo Data', 'EDA'],
    github: 'https://github.com/Insaf-elkorachi',
    demo: '#',
  },
  {
    title: 'Intelligence incidents travail',
    description:
      'Conception d un flux analytique pour detecter tendances, causes racines et axes de prevention.',
    tags: ['Power BI', 'ETL', 'Pandas', 'Statistiques'],
    github: 'https://github.com/Insaf-elkorachi',
    demo: '#',
  },
  {
    title: 'Plateforme web orientee data',
    description:
      'Architecture d une application web avec modules exploitables pour personnalisation et recommandations.',
    tags: ['Next.js', 'TypeScript', 'MySQL', 'API'],
    github: 'https://github.com/Insaf-elkorachi',
    demo: '#',
  },
]

const professionalExperiences: TimelineEntry[] = [
  {
    id: 'sonasid-recrutement-ia',
    marker: 'SONASID',
    title: 'Stagiaire ingénieure IA',
    organization: 'SONASID',
    period: 'Juillet 2026 - Septembre 2026',
    technologies: ['Python', 'FastAPI', 'LLM', 'RAG', 'NLP', 'MongoDB', 'Power BI'],
    highlights: [
      'Conception d\'une plateforme intelligente de recrutement pour analyser les CV, évaluer les candidats et automatiser le matching.',
      'Développement d\'un workflow multi-agents pour l\'analyse des CV et l\'orchestration du processus de recrutement.',
      'Mise en place d\'un pipeline RAG avec MongoDB et recherche vectorielle sur les documents RH.',
    ],
  },
  {
    id: 'sonasid-aman-ia',
    marker: 'SONASID',
    title: 'Stagiaire ingénieure IA',
    organization: 'SONASID',
    period: 'Mai 2026 - Juillet 2026',
    technologies: ['Python', 'FastAPI', 'LLM', 'NLP', 'SQLite', 'QR Codes', 'API REST'],
    highlights: [
      'Développement de la plateforme AMAN pour le signalement des incidents industriels via QR code.',
      'Implémentation d\'un chatbot LLM pour collecter, classifier les incidents et générer des rapports structurés.',
      'Intégration de l\'analyse des risques, du stockage SQLite et de tableaux de bord de sécurité.',
    ],
  },
  {
    id: 'tmu-data-analyst',
    marker: 'TMU',
    title: 'Stagiaire Data Analyst',
    organization: 'Tanger Med Utilities',
    period: 'Avril 2025 - Juin 2025',
    technologies: ['dbt', 'Apache Airflow', 'Snowflake', 'PostgreSQL', 'Power BI'],
    highlights: [
      'Conception d\'un dashboard Power BI interactif pour le suivi en temps réel des performances de la flotte.',
      'Automatisation d\'un pipeline de données pour le nettoyage, la transformation et l\'intégration multi-sources.',
      'Optimisation des performances opérationnelles et réduction des coûts de maintenance.',
    ],
  },
]

const academicPath: TimelineEntry[] = [
  {
    id: 'master-ia-sd',
    marker: 'M',
    title: 'Master\nIntelligence Artificielle & Sciences de Données',
    organization: 'Faculte des Sciences et Techniques de Tanger',
    period: '2025 - 2027',
    highlights: [
      'Deuxième année de Master en Intelligence Artificielle et Science des Données.',
      'Spécialisation en Machine Learning, Deep Learning, NLP, LLMs, RAG et systèmes multi-agents.',
      'Recherche active d\'un stage PFE en ingénierie de l\'intelligence artificielle.',
    ],
  },
  {
    id: 'licence-analytique-donnees',
    marker: 'L',
    title: 'Licence\nAnalytique des Données',
    organization: 'Faculte des Sciences et Techniques de Tanger',
    period: '2021 - 2025',
    highlights: [
      'Analyse de données avec Python et SQL : collecte, nettoyage et préparation.',
      'Statistiques et exploration des données pour interpréter des résultats.',
      'Visualisation et reporting pour présenter les insights et aider la décision.',
    ],
  },
  {
    id: 'deust-mipc',
    marker: 'D',
    title: 'DEUST\nMIPC',
    organization: 'Faculte des Sciences et Techniques de Tanger',
    period: '2021 - 2024',
    highlights: [
      'Suivre un tronc commun en mathématiques, informatique, physique et chimie.',
      'Renforcer les fondamentaux en algorithmique, programmation et structures de données.',
      'Développer des bases solides en logique, calculs mathématiques et résolution de problèmes.',
    ],
  },
  {
    id: 'bac-sma',
    marker: 'LA',
    title: 'Baccalauréat\nSciences Mathématiques A (option français)',
    organization: 'Lycée Ibno Al Haytam, Aroui, Nador',
    period: '2019 - 2020',
    highlights: [
      'Socle solide en mathématiques et raisonnement analytique.',
      'Préparation à des études supérieures en informatique et ingénierie.',
    ],
  },
]

const activities: Activity[] = [
  {
    title: 'Data Engineering & BI',
    icon: Database,
    description:
      'De la collecte à la restitution : pipelines multi-sources et dashboards pour piloter la performance.',
    highlights: [
      'Dashboard Power BI interactif pour le suivi en temps réel des performances de la flotte.',
      'Pipeline de données automatisé (nettoyage, transformation, intégration multi-sources).',
      'Stack data warehouse & orchestration pour fiabiliser les flux.',
    ],
    tools: ['Power BI', 'dbt', 'Apache Airflow', 'Snowflake', 'PostgreSQL'],
  },
  {
    title: 'Machine Learning end-to-end',
    icon: BrainCircuit,
    description: 'Pipelines ML complets : préparation, entraînement, évaluation et reporting.',
    highlights: [
      'Pipeline ML complet : collecte, nettoyage, prétraitement, entraînement et évaluation.',
      'Comparaison et optimisation via validation croisée et métriques avancées.',
      'Visualisations et rapports pour la prise de décision.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  },
  {
    title: 'Deep Learning & Vision',
    icon: Cpu,
    description: 'Modèles CNN et Vision Transformer pour analyser des images médicales et détecter des anomalies.',
    highlights: [
      'Conception et entraînement de modèles de deep learning (CNN, Vision Transformer).',
      "Optimisation de la précision et de la robustesse par ajustement d'hyperparamètres.",
      'Métriques et visualisations pour analyser les performances.',
    ],
    tools: ['PyTorch', 'TensorFlow', 'CNN', 'Vision Transformer'],
  },
  {
    title: 'Web Scraping & Data Apps',
    icon: Code2,
    description: 'Automatisation du scraping (sites dynamiques) et préparation de données pour des analyses avancées.',
    highlights: [
      'Outil de scraping avec extraction structurée sur sites dynamiques.',
      'Préparation et export des données pour analyses et modélisation.',
      'Intégration base de données et front pour une exploitation rapide.',
    ],
    tools: ['Python', 'JavaScript', 'PostgreSQL', 'React'],
  },
  {
    title: 'DevOps & bonnes pratiques',
    icon: Wrench,
    description: 'Environnements reproductibles et workflows propres pour des projets déployables.',
    highlights: [
      'Versioning Git et travail collaboratif.',
      'Docker et CI/CD pour automatiser le build et le déploiement.',
      'Linux, Agile, UML et design patterns.',
    ],
    tools: ['Git', 'Docker', 'CI/CD', 'Linux', 'Agile'],
  },
]

const contactInfo = {
  email: 'insaf2003elkorachi@gmail.com',
  phone: '+212 663 604 950',
  cvHref: '/cv-insaf.pdf',
} as const

type ContactTopic = 'Stage' | 'Collaboration' | 'Opportunité' | 'Question'

const contactTopics: ContactTopic[] = ['Stage', 'Collaboration', 'Opportunité', 'Question']

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/insaf-el-korachi-400aaa2a3/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Insaf-elkorachi', icon: Github },
]

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const [titleLine1, titleLine2] = entry.title.split('\n')

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-[1.7rem] silk-card p-7 transition-all duration-300 hover-rose-glow">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_14px,transparent_14px,transparent_28px)]"
      />

        <div className="relative">
          <div className="mb-2">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold leading-snug">{titleLine1}</h3>
              {titleLine2 ? (
                <p className="mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold text-accent">
                  {titleLine2}
                </p>
              ) : null}
            </div>
          </div>
          <p className="text-sm font-semibold text-primary">{entry.organization}</p>
          <p className="mt-1 text-xs font-semibold text-foreground/60 lg:hidden">{entry.period}</p>

        {entry.technologies?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/75 bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        {entry.highlights.length ? (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/74">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary/85" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

function TimelineMarker({ label }: { label: string }) {
  const normalizedLabel = label.trim().toUpperCase()
  const isSonasid = normalizedLabel === 'SONASID'
  const isTMU = normalizedLabel === 'TMU'
  const isFSTT = normalizedLabel === 'M' || normalizedLabel === 'L' || normalizedLabel === 'D'

  return (
    <div className="rounded-full bg-gradient-to-br from-primary via-accent to-chart-3 p-[2px] shadow-[0_18px_46px_rgba(0,0,0,0.35)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card text-primary lg:h-14 lg:w-14">
        {isSonasid ? (
          <Image
            src="/SONASID.png"
            alt="SONASID"
            width={48}
            height={20}
            className="h-auto w-9 object-contain lg:w-12"
          />
        ) : isTMU ? (
          <Image
            src="/TMU.png"
            alt="Tanger Med Utilities"
            width={36}
            height={36}
            className="h-7 w-7 object-contain lg:h-9 lg:w-9"
          />
        ) : isFSTT ? (
          <Image
            src="/FSTT.png"
            alt="FSTT"
            width={36}
            height={36}
            className="h-7 w-7 object-contain lg:h-9 lg:w-9"
          />
        ) : (
          <span className="text-xs font-extrabold leading-none tracking-wide lg:text-sm">{label}</span>
        )}
      </div>
    </div>
  )
}

function AlternatingTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative space-y-12">
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent lg:left-1/2 lg:-translate-x-1/2" />

      {entries.map((entry, index) => {
        const isLeft = index % 2 === 0
        return (
          <article key={entry.id} className="reveal relative pl-14 lg:pl-0">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">
              <div
                className={[
                  isLeft ? 'lg:col-start-1 lg:justify-self-end' : 'lg:col-start-3 lg:justify-self-start',
                  'flex',
                ].join(' ')}
              >
                <TimelineCard entry={entry} />
              </div>

              <div className="absolute left-0 top-7 flex lg:relative lg:col-start-2 lg:row-start-1 lg:justify-center">
                <TimelineMarker label={entry.marker} />
                 <span
                   className={[
                    'hidden lg:block absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-foreground/60',
                    'lg:top-1/2 lg:mt-0 lg:left-auto lg:translate-x-0 lg:-translate-y-1/2 lg:text-sm',
                    isLeft ? 'lg:left-full lg:ml-4 lg:text-left' : 'lg:right-full lg:mr-4 lg:text-right',
                  ].join(' ')}
                 >
                  {entry.period}
                </span>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [profileImage, setProfileImage] = useState('/profile-insaf.jpg')
  const [contactTopic, setContactTopic] = useState<ContactTopic>('Opportunité')
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactOrganization, setContactOrganization] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [emailCopied, setEmailCopied] = useState(false)
  const [contactFeedback, setContactFeedback] = useState<string | null>(null)

  const fallbackCopyToClipboard = (text: string) => {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.top = '0'
    textarea.style.left = '0'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    const copied = document.execCommand('copy')
    document.body.removeChild(textarea)
    return copied
  }

  const handleCopyEmail = async () => {
    const email = contactInfo.email
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email)
        setEmailCopied(true)
        window.setTimeout(() => setEmailCopied(false), 1600)
        return
      }
    } catch {
      // Ignore and fallback below.
    }

    const copied = fallbackCopyToClipboard(email)
    if (copied) {
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 1600)
      return
    }

    window.location.href = `mailto:${email}`
  }

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = contactMessage.trim()
    if (!message) return

    const subject = `[Portfolio] ${contactTopic} — ${contactName || 'Contact'}`
    const bodyLines = [
      `Nom: ${contactName || '-'}`,
      `Email: ${contactEmail || '-'}`,
      `Organisation: ${contactOrganization || '-'}`,
      '',
      'Message:',
      message,
      '',
      '---',
      'Envoyé depuis le portfolio',
    ]

    const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = mailto
    setContactFeedback("Email prêt : votre client mail va s'ouvrir.")
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="float-bloom absolute -left-24 top-20 h-80 w-80 rounded-full bg-primary/30 blur-[100px]" />
        <div className="float-bloom absolute right-[-5rem] top-[18rem] h-80 w-80 rounded-full bg-accent/25 blur-[105px]" />
        <div className="float-bloom absolute bottom-[8rem] left-[45%] h-64 w-64 rounded-full bg-chart-3/18 blur-[95px]" />
      </div>

      <header className="sticky top-4 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between rounded-full border border-border/70 bg-background/75 px-6 py-3.5 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.12)] sm:px-7">
            <a href="#profil" className="text-sm font-semibold text-foreground sm:text-base">
              Insaf El Korachi
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-background shadow-[0_18px_46px_rgba(0,0,0,0.14)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
              >
                Discutons
              </a>

              <button
                onClick={() => setMobileMenu((prev) => !prev)}
                className="inline-flex rounded-xl border border-border/75 bg-background/50 p-2.5 text-foreground lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileMenu && (
            <div className="mt-3 rounded-2xl border border-border/75 bg-card/88 p-4 backdrop-blur-xl lg:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenu(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-background"
                >
                  Discutons
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section id="profil" className="pb-20 pt-20 lg:pt-24">
          <div className="mx-auto w-full max-w-[1120px] py-12">
            <div className="relative grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <div className="reveal min-w-0 space-y-6 lg:space-y-7">
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/70 border-dashed bg-background/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/70 sm:text-[11px]">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="min-w-0 whitespace-normal break-words lg:truncate">
                    À la recherche d'un stage PFE - Ingénierie IA
                  </span>
                </span>

                <div className="space-y-4">
                  <h1 className="break-words text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:break-normal lg:text-5xl font-sans">
                    Ingénieure IA junior qui transforme les idées en systèmes intelligents.
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-foreground/74 sm:text-lg">
                    Étudiante en deuxième année de Master Intelligence Artificielle & Sciences des Données, je développe des solutions IA autour des LLMs, du RAG,
                    du NLP et des systèmes multi-agents pour répondre à des problématiques concrètes.
                    
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                  <span className="rounded-full border border-border/70 bg-background/75 px-4 py-2 font-semibold text-foreground/75 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    À la recherche d'un stage PFE en ingénierie de l'intelligence artificielle
                  </span>
                  <span className="rounded-full border border-border/70 bg-background/75 px-4 py-2 font-semibold text-foreground/75 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    Master 2 IASD 2025 - 2027 (FST Tanger)
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-background shadow-[0_18px_46px_rgba(0,0,0,0.14)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(0,0,0,0.18)]"
                  >
                    Planifier un échange
                  </a>
                  <a
                    href={contactInfo.cvHref}
                    download
                    className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/55 px-7 py-3 text-sm font-semibold text-foreground/85 transition-all hover:border-primary/60 hover:bg-background/70"
                  >
                    Télécharger mon CV
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="reveal min-w-0">
                <div className="relative mx-auto w-full overflow-hidden rounded-[2.6rem] border border-border/70 bg-card/90 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:p-8 lg:mx-0 lg:ml-auto">
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-accent/6" />
                  <div className="relative flex flex-col items-center">
                    <div className="mb-7 overflow-hidden rounded-full border border-border/70 bg-background p-2 shadow-[0_12px_35px_rgba(0,0,0,0.28)]">
                      <img
                        src={profileImage}
                        alt="Portrait d Insaf El Korachi"
                        className="h-72 w-72 origin-[31%_56%] translate-x-[12%] translate-y-[3%] scale-150 rounded-full object-cover object-bottom sm:h-80 sm:w-80"
                        onError={() => setProfileImage('/placeholder-user.jpg')}
                      />
                    </div>

                    <div className="w-full space-y-4">
                      <div className="rounded-2xl border border-border/70 bg-background/80 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">Cible</p>
                        <p className="mt-1 whitespace-normal break-words text-[13px] font-semibold leading-snug tracking-tight text-foreground sm:text-sm">
                          Stage PFE - Ingénieure IA junior
                        </p>
                      </div>

                      <div className="rounded-2xl border border-border/70 bg-background/80 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">Contact rapide</p>
                        <p className="mt-1 flex min-w-0 items-center gap-2 text-sm font-semibold text-foreground/85 sm:text-base">
                          <span className="min-w-0 flex-1 truncate">{contactInfo.email}</span>
                          <span className="flex-none text-foreground/40">|</span>
                          <span className="flex-none whitespace-nowrap">{contactInfo.phone}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-14 w-full max-w-[1120px] reveal rounded-[2rem] silk-card p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Profil</p>
                <h2 className="mb-5 text-3xl font-bold sm:text-4xl">Créer des produits Data & IA utiles, fiables et mesurables.</h2>
                <p className="text-base leading-relaxed text-foreground/76">
                  Étudiante en deuxième année de Master Intelligence Artificielle & Sciences des Données, je transforme des besoins métiers en solutions IA concrètes :
                  préparation des données, LLM/RAG, NLP, modélisation, évaluation rigoureuse et intégration dans des applications.
                  <br />
                  Mon objectif : des systèmes reproductibles et faciles à maintenir, pensés pour l’impact.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-foreground/70 sm:text-sm">
                  <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">Français — B2</span>
                  <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">Anglais — B2</span>
                  <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">Arabe — C2</span>
                </div>
              </div>

              <div className="space-y-3">
                <article className="rounded-2xl soft-border bg-background/72 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">Machine Learning & Deep Learning</p>
                  <p className="mt-1 text-sm text-foreground/70">Modélisation, expérimentation, évaluation, CNN/ViT et optimisation.</p>
                </article>
                <article className="rounded-2xl soft-border bg-background/72 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">Data Engineering & BI</p>
                  <p className="mt-1 text-sm text-foreground/70">Pipelines de données (Airflow, dbt), SQL (PostgreSQL), Snowflake et dashboards Power BI.</p>
                </article>
                <article className="rounded-2xl soft-border bg-background/72 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">NLP & LLMs</p>
                  <p className="mt-1 text-sm text-foreground/70">Transformers, LLMs, prompt engineering, fine-tuning et intégration.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="pb-24">
          <div className="mb-12 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Sélection</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Expérience Professionnelle</h2>
          </div>

          <AlternatingTimeline entries={professionalExperiences} />
        </section>

        <section id="parcours" className="pb-24">
          <div className="mb-12 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Parcours</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Parcours Académique</h2>
          </div>

          <AlternatingTimeline entries={academicPath} />
        </section>

        <section id="activites" className="pb-24">
          <div className="mb-10 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Activités</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Ce que je livre au quotidien</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="reveal relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-card/75 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/55 hover-rose-glow"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_14px,transparent_14px,transparent_28px)]"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex rounded-xl bg-primary/12 p-3 text-primary">
                      <activity.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{activity.title}</h3>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/74">{activity.description}</p>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/74">
                    {activity.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary/85" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activity.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border/75 bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projets" className="pb-24">
          <div className="mb-10 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Projets IA</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Travaux Sélectionnés</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="reveal group relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-card/88 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/65 hover-lilac-glow"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-primary/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Projet {String(index + 1).padStart(2, '0')}
                    </span>
                    <BarChart3 className="h-5 w-5 text-foreground/55" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-foreground/72">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border/75 bg-background/80 px-3 py-1 text-xs text-foreground/76">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary transition-colors hover:text-accent"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a href={project.demo} className="inline-flex items-center gap-2 text-primary transition-colors hover:text-accent">
                      <ExternalLink className="h-4 w-4" />
                      Live demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="competences" className="pb-24">
          <div className="mb-10 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Compétences</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Stack technique & vision projet</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/72">
              Une stack orientée delivery : je conçois des solutions data/IA de bout en bout, du cadrage à la mise en production.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.title}
                className="reveal group relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-card/88 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/65 hover-rose-glow"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/18 blur-[60px] transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-4"
                />

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-2xl bg-primary/12 p-3 text-primary">
                      <category.icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-border/75 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/65">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/74">{category.tagline}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/75 bg-background/75 px-3 py-1 text-xs font-semibold text-foreground/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="reveal rounded-[1.7rem] silk-card p-6 sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Capacités clés</p>
                  <h3 className="mt-2 text-xl font-semibold">Niveaux indicatifs</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/75 bg-background/70 px-4 py-2 text-xs font-semibold text-foreground/70">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Orientée delivery
                </span>
              </div>

              <div className="space-y-4">
                {levels.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-sm font-semibold text-primary">{item.level}%</p>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-secondary/80">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-chart-3"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div aria-hidden className="mt-6 h-px bg-gradient-to-r from-border via-primary/25 to-accent/25" />

              <div className="mt-6 rounded-[1.3rem] border border-border/70 bg-background/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">Valeur recruteur</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/74">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary/85" />
                    <span>Approche orientée KPI : du besoin métier aux livrables (dashboard, API, reporting).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary/85" />
                    <span>Reproductibilité : Git, environnements propres, expérimentation structurée et documentation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary/85" />
                    <span>Qualité & robustesse : métriques, validation et itérations rapides pour améliorer la performance.</span>
                  </li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['Reproductibilité', 'Qualité data', 'Évaluation', 'Industrialisation', 'Documentation', 'Collaboration'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/75 bg-background/80 px-3 py-1 text-[11px] font-semibold text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#projets"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Voir des projets concrets
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="reveal relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-card/88 p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_14px,transparent_14px,transparent_28px)]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/12 opacity-70" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Vision projet</p>
                <h3 className="mt-2 text-xl font-semibold">De l’idée à la mise en production</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/74">
                  Une façon de travailler structurée, orientée métriques, et pensée pour la collaboration (data, produit, métier).
                </p>

                <ol className="mt-6 space-y-5">
                  {projectVision.map((step) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-[0_18px_46px_rgba(0,0,0,0.08)]">
                        <step.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/72">{step.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {step.focus.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border/75 bg-background/70 px-3 py-1 text-[11px] font-semibold text-foreground/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-24">
          <div className="mb-10 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Construisons quelque chose d'<span className="headline-gradient">intelligent</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/72">
                  Recruteur, équipe tech ou porteur de projet : je suis ouverte à un stage PFE et aux opportunités autour de l'IA générative, du ML et des projets data.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
            <aside className="reveal group relative overflow-hidden rounded-[1.7rem] silk-card p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_14px,transparent_14px,transparent_28px)]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-70" />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Accès rapide</p>
                    <h3 className="mt-2 text-xl font-semibold">CV, email & réseaux</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                      Pour aller vite : téléchargez mon CV, copiez mon email, ou contactez-moi via LinkedIn/GitHub.
                    </p>
                  </div>

                  <a
                    href={contactInfo.cvHref}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-border/75 bg-background/70 px-4 py-2 text-xs font-semibold text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    Télécharger CV
                    <Download className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/70 px-4 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                    >
                      <span className="inline-flex rounded-xl bg-primary/12 p-2 text-primary">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 truncate">{item.label}</span>
                      <ExternalLink className="ml-auto h-4 w-4 text-foreground/35" />
                    </a>
                  ))}

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/70 px-4 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                  >
                    <span className="inline-flex rounded-xl bg-primary/12 p-2 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block leading-tight">Email</span>
                      <span className="block truncate text-xs text-foreground/60">{contactInfo.email}</span>
                    </span>
                    <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-border/75 bg-background/80 px-3 py-1 text-[11px] font-semibold text-foreground/70">
                      {emailCopied ? 'Copié' : 'Copier'}
                      <Copy className="h-3.5 w-3.5" />
                    </span>
                  </button>

                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/70 px-4 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                  >
                    <span className="inline-flex rounded-xl bg-primary/12 p-2 text-primary">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block leading-tight">Téléphone</span>
                      <span className="block truncate text-xs text-foreground/60">{contactInfo.phone}</span>
                    </span>
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-border/70 bg-background/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">Idéal pour</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/74">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary/85" />
                      <span>Stage PFE en ingénierie IA, Data Science, NLP, LLMs ou RAG.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary/85" />
                      <span>Projets data/IA : pipelines, modèles, dashboards et intégration applicative.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary/85" />
                      <span>Discussions techniques : choix de stack, livrables et plan d'exécution.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {['Data Engineering', 'Machine Learning', 'NLP / LLMs', 'Power BI'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/75 bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <form
              onSubmit={handleContactSubmit}
              className="reveal group relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-card/88 p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_14px,transparent_14px,transparent_28px)]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/12 opacity-70" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Message</p>
                <h3 className="mt-2 text-xl font-semibold">Dites-moi ce que vous voulez construire</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/74">
                  Sélectionnez un sujet, puis décrivez le contexte. Le bouton prépare un email (pré-rempli) pour un envoi rapide.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {contactTopics.map((topic) => {
                    const isActive = contactTopic === topic
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => {
                          setContactTopic(topic)
                          setContactFeedback(null)
                        }}
                        className={[
                          'rounded-full border px-4 py-2 text-xs font-semibold transition-colors',
                          isActive
                            ? 'border-primary/60 bg-primary/12 text-primary'
                            : 'border-border/75 bg-background/70 text-foreground/70 hover:border-primary/60 hover:text-primary',
                        ].join(' ')}
                      >
                        {topic}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm">
                    <span className="text-foreground/78">Nom</span>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => {
                        setContactName(e.target.value)
                        setContactFeedback(null)
                      }}
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                    />
                  </label>
                  <label className="space-y-2 text-sm">
                    <span className="text-foreground/78">Email</span>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => {
                        setContactEmail(e.target.value)
                        setContactFeedback(null)
                      }}
                      placeholder="vous@email.com"
                      required
                      className="w-full rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                    />
                  </label>
                </div>

                <label className="mt-4 block space-y-2 text-sm">
                  <span className="text-foreground/78">Organisation (optionnel)</span>
                  <input
                    type="text"
                    value={contactOrganization}
                    onChange={(e) => {
                      setContactOrganization(e.target.value)
                      setContactFeedback(null)
                    }}
                    placeholder="Entreprise / école / équipe"
                    className="w-full rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                  />
                </label>

                <label className="mt-4 block space-y-2 text-sm">
                  <span className="text-foreground/78">Message</span>
                  <textarea
                    rows={6}
                    value={contactMessage}
                    onChange={(e) => {
                      setContactMessage(e.target.value)
                      setContactFeedback(null)
                    }}
                    placeholder="Décrivez votre besoin, le contexte, et ce que vous attendez (objectif, délai, contraintes)..."
                    required
                    className="w-full resize-none rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                  />
                </label>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-background rose-glow"
                  >
                    Préparer l'email
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                {contactFeedback ? (
                  <p className="mt-4 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-medium text-foreground/75">
                    {contactFeedback}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
