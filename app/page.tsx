'use client'

import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
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

interface Experience {
  type: 'education' | 'work'
  title: string
  organization: string
  period: string
  details: string
}

const navItems = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'A propos' },
  { href: '#competences', label: 'Competences' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

const categories: SkillCategory[] = [
  {
    title: 'IA / Machine Learning',
    icon: BrainCircuit,
    skills: ['Machine Learning', 'Model Evaluation', 'Feature Engineering', 'Scikit-learn', 'Data Mining'],
  },
  {
    title: 'Programmation',
    icon: Code2,
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'],
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Data Cleaning', 'Visualization', 'Power BI'],
  },
  {
    title: 'Outils & Workflow',
    icon: Wrench,
    skills: ['Git', 'Linux', 'Apache Airflow', 'Jupyter', 'API Integration'],
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

const timeline: Experience[] = [
  {
    type: 'education',
    title: 'Master IASD - 1re annee',
    organization: 'FST Tanger',
    period: 'Sept 2024 - Present',
    details:
      'Approfondissement en IA, machine learning, systemes intelligents et developpement de solutions data completes.',
  },
  {
    type: 'work',
    title: 'Stagiaire Data Analyst',
    organization: 'Tanger Med Utilities',
    period: 'Avr 2025 - Juin 2025',
    details:
      'Creation de dashboards et automatisation de flux analytiques pour piloter la performance operationnelle.',
  },
  {
    type: 'education',
    title: 'Licence Analytique de donnees',
    organization: 'FST Tanger',
    period: 'Sept 2021 - Juin 2024',
    details: 'Base solide en statistiques, bases de donnees, programmation et resolution de problemes data.',
  },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'Email', href: 'mailto:insaf2004korachi@gmail.com', icon: Mail },
]

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

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#accueil" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-chart-3 text-background rose-glow">
              <Cpu className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">Insaf El Korachi</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 rounded-full border border-border/75 bg-card/75 px-6 py-2.5 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-background rose-glow lg:inline-flex"
          >
            Me Contacter
          </a>

          <button
            onClick={() => setMobileMenu((prev) => !prev)}
            className="inline-flex rounded-xl border border-border/75 bg-card/75 p-2.5 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenu && (
          <div className="mx-4 mb-4 rounded-2xl border border-border/75 bg-card/88 p-4 lg:hidden">
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
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section id="accueil" className="grid items-center gap-12 pb-24 pt-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-4 w-4" />
              Master 1 IASD | AI Engineering Track
            </span>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">Insaf El Korachi</h1>
              <p className="max-w-2xl text-xl font-semibold headline-gradient sm:text-2xl">
                Etudiante IA & Data Science | Future AI Engineer
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-foreground/74 sm:text-lg">
                Je transforme des donnees complexes en solutions intelligentes, utiles et elegantes, avec une approche rigoureuse et
                orientee resultat.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-background rose-glow"
              >
                Voir mes projets
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/75 bg-card/75 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="rounded-full border border-border/75 bg-card/75 px-3 py-1.5 text-foreground/70">Machine Learning</span>
              <span className="rounded-full border border-border/75 bg-card/75 px-3 py-1.5 text-foreground/70">Data Projects</span>
              <span className="rounded-full border border-border/75 bg-card/75 px-3 py-1.5 text-foreground/70">Problem Solving</span>
            </div>
          </div>

          <div className="reveal">
            <div className="relative mx-auto max-w-md rounded-[2rem] silk-card p-5 rose-glow">
              <div className="ring-pulse absolute -right-4 -top-4 rounded-2xl border border-primary/50 bg-background/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Open to Internships
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-primary/30 bg-background">
                <img
                  src={profileImage}
                  alt="Portrait d Insaf El Korachi"
                  className="h-[450px] w-full object-cover object-center"
                  onError={() => setProfileImage('/placeholder-user.jpg')}
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-border/70 bg-secondary/65 p-3 text-center">
                  <p className="text-xl font-bold text-primary">3+</p>
                  <p className="text-[11px] text-foreground/65">Projets IA</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-secondary/65 p-3 text-center">
                  <p className="text-xl font-bold text-primary">M1</p>
                  <p className="text-[11px] text-foreground/65">IASD</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-secondary/65 p-3 text-center">
                  <p className="text-xl font-bold text-primary">2026</p>
                  <p className="text-[11px] text-foreground/65">Track IA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="apropos" className="pb-24">
          <div className="reveal rounded-[2rem] silk-card p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">A propos</p>
                <h2 className="mb-5 text-3xl font-bold sm:text-4xl">Une approche feminine, technique et orientee impact.</h2>
                <p className="text-base leading-relaxed text-foreground/76">
                  Etudiante en premiere annee de Master Intelligence Artificielle & Data Science, je construis des projets qui
                  combinent precision analytique, vision produit et qualite d execution. Mon objectif est de contribuer a des systemes IA
                  fiables, clairs et utiles pour la prise de decision.
                </p>
              </div>

              <div className="space-y-3">
                <article className="rounded-2xl soft-border bg-background/72 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">AI Engineering</p>
                  <p className="mt-1 text-sm text-foreground/70">Du prototype modele vers des workflows robustes et exploitables.</p>
                </article>
                <article className="rounded-2xl soft-border bg-background/72 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">Machine Learning applique</p>
                  <p className="mt-1 text-sm text-foreground/70">Validation, interpretation et mesure de performance orientee metier.</p>
                </article>
                <article className="rounded-2xl soft-border bg-background/72 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">Data Storytelling</p>
                  <p className="mt-1 text-sm text-foreground/70">Transformer les insights en decisions claires et actionnables.</p>
                </article>
              </div>
            </div>
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

        <section id="projets" className="pb-24">
          <div className="mb-10 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Projets</p>
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

        <section id="parcours" className="pb-24">
          <div className="mb-10 reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Parcours</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Timeline academique & pro</h2>
          </div>

          <div className="relative space-y-7">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            {timeline.map((item) => {
              const Icon = item.type === 'work' ? BriefcaseBusiness : GraduationCap
              return (
                <article key={item.title} className="reveal relative pl-14">
                  <span className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full border border-primary/45 bg-card text-primary">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="rounded-[1.45rem] border border-border/70 bg-card/90 p-6 transition-all duration-300 hover:border-primary/55 hover-rose-glow">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="rounded-full border border-border/75 bg-background/80 px-3 py-1 text-xs font-semibold text-foreground/70">
                        {item.period}
                      </span>
                    </div>
                    <p className="mb-3 text-sm font-medium text-primary">{item.organization}</p>
                    <p className="text-sm leading-relaxed text-foreground/74">{item.details}</p>
                  </div>
                </article>
              )
            })}
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
