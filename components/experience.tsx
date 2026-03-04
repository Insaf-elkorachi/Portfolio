import { Briefcase, GraduationCap } from 'lucide-react'

interface ExperienceItem {
  type: 'work' | 'education'
  title: string
  organization: string
  date: string
  description: string
  highlights: string[]
}

const timeline: ExperienceItem[] = [
  {
    type: 'work',
    title: 'Stagiaire Data Analyst',
    organization: 'Tanger Med Utilities',
    date: 'Avril 2025 - Juin 2025',
    description: 'Mise en place de solutions analytiques pour le suivi de la performance operationnelle.',
    highlights: [
      'Conception de tableaux de bord Power BI pour le suivi en temps reel',
      'Automatisation de flux ETL avec Apache Airflow',
      'Production de recommandations basees sur les donnees',
    ],
  },
  {
    type: 'education',
    title: 'Master IA & Data Science',
    organization: 'Faculte des Sciences et Techniques de Tanger',
    date: 'Septembre 2024 - En cours',
    description: 'Formation avancee en intelligence artificielle, apprentissage automatique et sciences des donnees.',
    highlights: [
      'Modelisation statistique et apprentissage supervise/non supervise',
      'Projets academiques axes sur prediction et classification',
      'Approfondissement des methodes de traitement et visualisation des donnees',
    ],
  },
  {
    type: 'education',
    title: 'Licence en Analytique de Donnees',
    organization: 'Faculte des Sciences et Techniques de Tanger',
    date: 'Septembre 2021 - Juin 2024',
    description: 'Base solide en analyse de donnees, statistiques, programmation et bases de donnees.',
    highlights: [
      'Manipulation de donnees avec Python et SQL',
      'Analyse exploratoire et interpretation statistique',
      'Conception et exploitation de bases relationnelles',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.24em]">Parcours</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Experience & Formation
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Une trajectoire construite autour de l&apos;analyse de donnees, des methodes IA et de projets appliques.
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="group relative pl-8 md:pl-12"
            >
              {index < timeline.length - 1 && (
                <div className="absolute left-3 md:left-5 top-12 w-0.5 h-24 bg-gradient-to-b from-primary via-accent/70 to-transparent" />
              )}

              <div className="absolute -left-6 md:-left-8 top-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center panel-glow">
                  {item.type === 'work' ? (
                    <Briefcase size={20} />
                  ) : (
                    <GraduationCap size={20} />
                  )}
                </div>
              </div>

              <div className="relative overflow-hidden bg-card/92 rounded-[1.4rem] p-6 md:p-8 border border-border/70 hover:border-primary/55 transition-colors">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/6 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-primary font-semibold mt-1">{item.organization}</p>
                    </div>
                    <span className="text-sm text-foreground/60 font-medium whitespace-nowrap ml-4">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-foreground/70 mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-foreground/70">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
