import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/70 bg-background/85">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="space-y-4 mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.24em]">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Echangeons sur vos projets data
            </h2>
            <p className="text-foreground/75 text-lg max-w-2xl">
              Je suis ouverte aux opportunites de stage, de collaboration academique et de projets autour de l&apos;IA et de
              la data science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <a
              href="mailto:insaf2004korachi@gmail.com"
              className="group relative overflow-hidden flex items-center gap-4 p-6 rounded-[1.4rem] border border-border/70 bg-card/92 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 transition-all"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/8 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={22} />
              </div>
              <div className="relative">
                <p className="text-sm text-foreground/60">Email</p>
                <p className="text-lg font-semibold text-foreground">insaf2004korachi@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+212704204268"
              className="group relative overflow-hidden flex items-center gap-4 p-6 rounded-[1.4rem] border border-border/70 bg-card/92 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 transition-all"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/8 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone size={22} />
              </div>
              <div className="relative">
                <p className="text-sm text-foreground/60">Telephone</p>
                <p className="text-lg font-semibold text-foreground">+212 704 204 268</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border/70 hover:border-primary/60 hover:text-primary transition-all font-medium"
            >
              <Github size={19} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border/70 hover:border-primary/60 hover:text-primary transition-all font-medium"
            >
              <Linkedin size={19} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-border via-primary/25 to-accent/30 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-foreground/60 text-sm text-center md:text-left">
            <p>{currentYear} Insaf El Korachi. Tous droits reserves.</p>
            <p className="mt-1">Portfolio realise avec Next.js, React et Tailwind CSS.</p>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 p-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-95 transition-opacity panel-glow"
            aria-label="Retour en haut"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
