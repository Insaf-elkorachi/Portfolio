'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

interface SkillLevel {
  label: string
  level: number
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
  { href: '#activites', label: 'Activites' },
  { href: '#projets', label: 'Projets IA' },
  { href: '#competences', label: 'Competences' },
  { href: '#contact', label: 'Contact' },
]

const categories: SkillCategory[] = [
  {
    title: 'IA / Deep Learning',
    icon: BrainCircuit,
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'Fine-Tuning', 'Transformers', 'MLOps'],
  },
  {
    title: 'Frameworks & Librairies',
    icon: Cpu,
    skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Programmation & Backend',
    icon: Code2,
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C/C++', 'Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Data Engineering & Outils',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Snowflake', 'dbt', 'Apache Airflow', 'Power BI', 'Docker', 'Git', 'Linux'],
  },
]

const levels: SkillLevel[] = [
  { label: 'Analyse et visualisation des donnees', level: 90 },
  { label: 'Conception de pipelines ML', level: 84 },
  { label: 'Developpement Python pour la data', level: 86 },
  { label: 'Creation d applications data web', level: 78 },
]

const projects: Project[] = [
  {
    title: 'Pipeline Machine Learning complet',
    description:
      'Developpement d un pipeline ML complet : collecte, nettoyage, pretraitement, entrainement, evaluation et reporting.',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com/insafelkorachi',
    demo: '#',
  },
  {
    title: 'Detection du cancer sur images medicales',
    description:
      'Modeles de deep learning (CNN & Vision Transformer) pour detection d anomalies, tuning et analyse de performance.',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'CNN', 'Vision Transformer'],
    github: 'https://github.com/insafelkorachi',
    demo: '#',
  },
  {
    title: 'Web scraping & analyse de donnees',
    description:
      'Automatisation du scraping pour sites dynamiques, extraction structuree, preparation et export des donnees.',
    tags: ['Python', 'JavaScript', 'PostgreSQL', 'React'],
    github: 'https://github.com/insafelkorachi',
    demo: '#',
  },
  {
    title: 'Prediction de risque routier',
    description:
      'Modelisation de la severite des accidents avec une approche orientee impact et support a la decision.',
    tags: ['Python', 'Scikit-learn', 'Geo Data', 'EDA'],
    github: 'https://github.com/insafelkorachi',
    demo: '#',
  },
  {
    title: 'Intelligence incidents travail',
    description:
      'Conception d un flux analytique pour detecter tendances, causes racines et axes de prevention.',
    tags: ['Power BI', 'ETL', 'Pandas', 'Statistiques'],
    github: 'https://github.com/insafelkorachi',
    demo: '#',
  },
  {
    title: 'Plateforme web orientee data',
    description:
      'Architecture d une application web avec modules exploitables pour personnalisation et recommandations.',
    tags: ['Next.js', 'TypeScript', 'MySQL', 'API'],
    github: 'https://github.com/insafelkorachi',
    demo: '#',
  },
]

const professionalExperiences: TimelineEntry[] = [
  {
    id: 'tmu-data-analyst',
    marker: 'TMU',
    title: 'Data Analyst',
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
    highlights: ['Etudes en Intelligence Artificielle, Machine Learning, Deep Learning et NLP.', 'Projets data orientes cas d usage reels.'],
  },
  {
    id: 'licence-analytique-donnees',
    marker: 'L',
    title: 'Licence\nAnalytique des Données',
    organization: 'Faculte des Sciences et Techniques de Tanger',
    period: '2024-2025',
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
    organization: 'Lycée Abdelkarim Al Khattabi, Nador',
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
      'De la collecte a la restitution : pipelines multi-sources et dashboards pour piloter la performance.',
    highlights: [
      'Dashboard Power BI interactif pour le suivi en temps reel des performances de la flotte.',
      'Pipeline de donnees automatise (nettoyage, transformation, integration multi-sources).',
      'Stack data warehouse & orchestration pour fiabiliser les flux.',
    ],
    tools: ['Power BI', 'dbt', 'Apache Airflow', 'Snowflake', 'PostgreSQL'],
  },
  {
    title: 'Machine Learning end-to-end',
    icon: BrainCircuit,
    description: 'Pipelines ML complets : preparation, entrainement, evaluation et reporting.',
    highlights: [
      'Pipeline ML complet : collecte, nettoyage, pretraitement, entrainement et evaluation.',
      'Comparaison et optimisation via validation croisee et metriques avancees.',
      'Visualisations et rapports pour la prise de decision.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  },
  {
    title: 'Deep Learning & Vision',
    icon: Cpu,
    description: 'Modeles CNN et Vision Transformer pour analyser des images medicales et detecter des anomalies.',
    highlights: [
      'Conception et entrainement de modeles de deep learning (CNN, Vision Transformer).',
      'Optimisation de la precision et robustesse par ajustement d hyperparametres.',
      'Metriques et visualisations pour analyser les performances.',
    ],
    tools: ['PyTorch', 'TensorFlow', 'CNN', 'Vision Transformer'],
  },
  {
    title: 'Web Scraping & Data Apps',
    icon: Code2,
    description: 'Automatisation du scraping (sites dynamiques) et preparation de donnees pour analyses avancees.',
    highlights: [
      'Outil de scraping avec extraction structuree sur sites dynamiques.',
      'Preparation et export des donnees pour analyses et modelisation.',
      'Integration base de donnees et front pour une exploitation rapide.',
    ],
    tools: ['Python', 'JavaScript', 'PostgreSQL', 'React'],
  },
  {
    title: 'DevOps & bonnes pratiques',
    icon: Wrench,
    description: 'Environnements reproductibles et workflows propres pour des projets deployables.',
    highlights: [
      'Versioning Git et travail collaboratif.',
      'Docker et CI/CD pour automatiser build et deploiement.',
      'Linux, Agile, UML et design patterns.',
    ],
    tools: ['Git', 'Docker', 'CI/CD', 'Linux', 'Agile'],
  },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/insafelkorachi', icon: Github },
  { label: 'Email', href: 'mailto:insaf2004korachi@gmail.com', icon: Mail },
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
  const isTMU = normalizedLabel === 'TMU'
  const isFSTT = normalizedLabel === 'M' || normalizedLabel === 'L' || normalizedLabel === 'D'

  return (
    <div className="rounded-full bg-gradient-to-br from-primary via-accent to-chart-3 p-[2px] shadow-[0_18px_46px_rgba(0,0,0,0.35)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card text-primary lg:h-14 lg:w-14">
        {isTMU ? (
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
                    'absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-foreground/60',
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
          <div className="relative left-1/2 w-[min(1120px,92vw)] -translate-x-1/2 py-12">
            <div className="relative grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="reveal space-y-6 lg:space-y-7">
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/70 border-dashed bg-background/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/70 sm:text-[11px]">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="min-w-0 truncate">
                    À La Recherche d'un stage PFA - Data Scientist  & AI ENGINEER JUNIOR
                  </span>
                </span>

                <div className="space-y-4">
                  <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl font-sans">
                    Future experte en <span className="headline-gradient">data</span> qui transforme les idées en modèles intelligents.
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-foreground/74 sm:text-lg">
                    Étudiante en Master Intelligence Artificielle & Sciences des Données, spécialisée en Machine Learning et Deep Learning, je développe des solutions 
                    intelligentes orientées data pour répondre à des problématiques concrètes. 
                    
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                  <span className="rounded-full border border-border/70 bg-background/75 px-4 py-2 font-semibold text-foreground/75 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    À la recherche d'un Stage PFA - Data Scientist & ingénieur IA 2026
                  </span>
                  <span className="rounded-full border border-border/70 bg-background/75 px-4 py-2 font-semibold text-foreground/75 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    Master IASD 2025 - 2027 (FST Tanger)
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-background shadow-[0_18px_46px_rgba(0,0,0,0.14)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(0,0,0,0.18)]"
                  >
                    Planifier un echange
                  </a>
                  <a
                    href="/cv-insaf.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/55 px-7 py-3 text-sm font-semibold text-foreground/85 transition-all hover:border-primary/60 hover:bg-background/70"
                  >
                    Recevoir mon CV
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="reveal">
                <div className="relative mx-auto w-full overflow-hidden rounded-[2.6rem] border border-border/70 bg-card/90 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:p-8 lg:mx-0 lg:ml-auto">
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-accent/6" />
                  <div className="relative flex flex-col items-center">
                    <div className="mb-7 overflow-hidden rounded-full border border-border/70 bg-background p-3 shadow-[0_12px_35px_rgba(0,0,0,0.28)]">
                      <img
                        src={profileImage}
                        alt="Portrait d Insaf El Korachi"
                        className="h-56 w-56 rounded-full object-cover object-center sm:h-60 sm:w-60"
                        onError={() => setProfileImage('/placeholder-user.jpg')}
                      />
                    </div>

                    <div className="w-full space-y-4">
                      <div className="rounded-2xl border border-border/70 bg-background/80 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">Cible</p>
                        <p className="mt-1 whitespace-normal break-words text-[13px] font-semibold leading-snug tracking-tight text-foreground sm:text-sm">
                          Stage PFA Data Scientist & AI ENGINEER JUNIOR
                        </p>
                      </div>

                      <div className="rounded-2xl border border-border/70 bg-background/80 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">Contact rapide</p>
                        <p className="mt-1 flex min-w-0 items-center gap-2 text-sm font-semibold text-foreground/85 sm:text-base">
                          <span className="min-w-0 flex-1 truncate">insaf2004korachi@gmail.com</span>
                          <span className="flex-none text-foreground/40">|</span>
                          <span className="flex-none whitespace-nowrap">+212704204268</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative left-1/2 mt-14 w-[min(1120px,92vw)] -translate-x-1/2 reveal rounded-[2rem] silk-card p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Profil</p>
                <h2 className="mb-5 text-3xl font-bold sm:text-4xl">Créer des produits Data & IA utiles, fiables et mesurables.</h2>
                <p className="text-base leading-relaxed text-foreground/76">
                  Étudiante en Master Intelligence Artificielle & Sciences des Données, je transforme des besoins métiers en solutions IA concrètes : préparation des
                  données, modélisation, évaluation rigoureuse et intégration dans des applications.
                  <br />
                  Mon objectif : des systèmes reproductibles et faciles à maintenir, pensés pour l’impact.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-foreground/70 sm:text-sm">
                  <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">Français — B2</span>
                  <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">Anglais — B1</span>
                  <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">Arabe — C1</span>
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Activites</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Ce que je fais en pratique</h2>
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
            <h2 className="text-3xl font-bold sm:text-4xl">Travaux selectionnes</h2>
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Competences</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Stack technique et vision projet</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.title}
                className="reveal rounded-[1.5rem] border border-border/70 bg-card/86 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover-rose-glow"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/15 p-3 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-foreground/74">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="reveal mt-10 rounded-[1.7rem] silk-card p-6 sm:p-8">
            <div className="space-y-4">
              {levels.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm font-semibold text-primary">{item.level}%</p>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-secondary/80">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-chart-3" style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pb-24">
          <div className="mb-10 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Construisons quelque chose d intelligent</h2>
          </div>

          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
            <aside className="reveal rounded-[1.7rem] silk-card p-7">
              <p className="text-sm leading-relaxed text-foreground/75">
                Je suis ouverte aux stages, collaborations et opportunites autour de l IA, du ML et des projets data innovants.
              </p>
              <div className="mt-6 space-y-3">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 rounded-xl border border-border/80 bg-background/70 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </aside>

            <form className="reveal rounded-[1.7rem] border border-border/70 bg-card/88 p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="text-foreground/78">Nom</span>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="text-foreground/78">Email</span>
                  <input
                    type="email"
                    placeholder="vous@email.com"
                    className="w-full rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                  />
                </label>
              </div>

              <label className="mt-4 block space-y-2 text-sm">
                <span className="text-foreground/78">Message</span>
                <textarea
                  rows={6}
                  placeholder="Parlez-moi de votre besoin ou projet..."
                  className="w-full resize-none rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-background rose-glow"
              >
                Envoyer
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-background/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>{new Date().getFullYear()} Insaf El Korachi. Tous droits reserves.</p>
          <p>Portfolio concu avec Next.js, TypeScript et une direction creative feminine.</p>
        </div>
      </footer>
    </div>
  )
}
