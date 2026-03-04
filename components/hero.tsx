import { ArrowRight, Github, Mail, Linkedin, Sparkles } from 'lucide-react'

export function Hero() {
  const stats = [
    { value: 'Master 1', label: 'Intelligence Artificielle & Sciences des Donnees' },
    { value: 'Licence', label: 'Analytique de Donnees' },
    { value: '3+', label: 'Projets data et IA realises' },
  ]

  const focus = [
    'Machine Learning applique',
    'Analyse statistique et visualisation',
    'Developpement web pour produits data',
  ]

  const identity = ['Data Storytelling', 'IA appliquee', 'Vision produit']

  return (
    <section id="about" className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-14">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="space-y-7 animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/12 text-primary font-semibold text-sm tracking-wide border border-primary/20">
                <Sparkles size={14} />
                Etudiante en premiere annee Master IA & Data Science
              </span>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-[1.02] text-foreground">
                  Insaf El Korachi
                </h1>
                <h2 className="text-2xl sm:text-3xl text-balance leading-snug text-gradient">
                  Intelligence artificielle, donnees et creativite.
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-foreground/75 max-w-3xl leading-relaxed">
                Titulaire d&apos;une Licence en Analytique de Donnees, je poursuis un Master en Intelligence Artificielle et
                Sciences des Donnees. J&apos;aime creer des solutions data utiles, visuelles et orientees impact.
              </p>

              <div className="flex flex-wrap gap-2">
                {identity.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm font-medium rounded-full border border-border/70 bg-card/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-95 transition-opacity panel-glow"
                >
                  Voir mes projets
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/70 text-foreground font-semibold hover:border-primary/50 transition-colors"
                >
                  Me contacter
                </a>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="mailto:insaf2004korachi@gmail.com"
                  className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="glass rounded-[2rem] border border-border/70 p-7 panel-glow animate-fade-up delay-100">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60 mb-5">Focus actuel</p>
              <ul className="space-y-4">
                {focus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="h-px bg-border my-6" />

              <p className="text-sm text-foreground/70 leading-relaxed">
                Objectif: contribuer a des projets concrets en IA et data science, avec une approche rigoureuse et un design clair.
              </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-border via-primary/25 to-accent/30" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((item, idx) => (
              <div
                key={item.label}
                className={`p-6 rounded-2xl border border-border/70 transition-colors animate-fade-up ${
                  idx === 1 ? 'delay-200' : idx === 2 ? 'delay-300' : ''
                } ${idx === 1 ? 'bg-gradient-to-br from-primary/15 to-accent/12' : 'bg-card/85'} hover:border-primary/45`}
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{item.value}</p>
                <p className="text-sm text-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
