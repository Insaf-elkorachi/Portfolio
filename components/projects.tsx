import { ExternalLink, Github } from 'lucide-react'

interface ProjectCard {
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
  github?: string
  category: string
}

const projects: ProjectCard[] = [
  {
    title: 'Analyse des accidents de travail',
    category: 'Data Analysis',
    description:
      'Etude de donnees reelles sur les accidents de travail au Maroc: nettoyage, exploration statistique et visualisations pour identifier les tendances et causes principales.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Exploration'],
  },
  {
    title: 'Prediction des accidents routiers',
    category: 'Machine Learning',
    description:
      'Construction de modeles predictifs avec Decision Tree et Random Forest, puis interpretation des resultats via visualisation geospatiale.',
    tags: ['Scikit-learn', 'Python', 'Modelisation', 'Geo-data'],
  },
  {
    title: 'Plateforme web de magazine',
    category: 'Full-Stack',
    description:
      "Developpement d'une plateforme complete de gestion des publications et abonnements avec interface responsive et logique de personnalisation de contenu.",
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.24em]">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Projets Selectionnes
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Des travaux ou la technique rencontre le sens: analyse de donnees, modelisation et applications orientees utilisateur.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-card/90 p-8 hover:-translate-y-1 hover:border-primary/55 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/12 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5 gap-4">
                  <div className="flex-1">
                    <p className="inline-flex text-xs font-semibold text-primary/90 mb-3 uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {project.category}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <p className="text-foreground/70 text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-background/85 text-foreground text-xs sm:text-sm font-medium border border-border/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-5">
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
                    >
                      Voir le projet
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
                    >
                      Code source
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
