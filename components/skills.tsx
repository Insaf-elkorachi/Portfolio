interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Langages & Developpement',
    skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'C/C++', 'SQL', 'HTML/CSS'],
  },
  {
    name: 'IA, ML & Analyse',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning', 'LLM', 'RAG', 'NLP'],
  },
  {
    name: 'Frameworks & APIs',
    skills: ['Next.js', 'Laravel', 'FastAPI', 'Flask', 'Django', 'Express.js'],
  },
  {
    name: 'Data & Outils',
    skills: ['Power BI', 'Apache Airflow', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'Linux'],
  },
]

const softSkills = [
  'Esprit analytique',
  'Resolution de problemes',
  'Travail en equipe',
  'Communication claire',
  'Autonomie',
  'Curiosite technique',
]

const languages = [
  { language: 'Francais', level: 'B2', width: '85%' },
  { language: 'Anglais', level: 'B2', width: '85%' },
  { language: 'Arabe', level: 'C2', width: '100%' },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.24em]">Competences</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Stack Technique & Atouts
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Une combinaison de competences techniques et humaines, essentielle pour des projets IA complets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden bg-card/92 rounded-[1.4rem] p-7 border border-border/70 hover:border-primary/55 hover:shadow-xl hover:shadow-primary/20 transition-all"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-xl font-bold text-foreground mb-5 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-background/85 text-foreground border border-border/70 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-[1.4rem] border border-border/70 bg-card/92 p-7">
            <h3 className="text-2xl font-bold mb-5 text-foreground">Qualites Professionnelles</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-border/70 bg-background/75 px-4 py-3 text-foreground/85 font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-border/70 bg-card/92 p-7">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Langues</h3>
            <div className="space-y-5">
              {languages.map((lang) => (
                <div key={lang.language}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{lang.language}</h4>
                    <span className="text-sm font-semibold text-primary">{lang.level}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-secondary/85 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: lang.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
