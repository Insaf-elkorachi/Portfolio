'use client'

import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react'

interface SocialLink {
  href: string
  label: string
  icon: LucideIcon
}

const footerSocials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/insafelkorachi', icon: Github },
  { label: 'Email', href: 'mailto:insaf2004korachi@gmail.com', icon: Mail },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70 bg-background/80 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] silk-card p-7 sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_14px,transparent_14px,transparent_28px)]"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/12 opacity-70" />

          <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr_auto] lg:items-center">
            <div className="space-y-2">
              <a href="#profil" className="inline-flex items-baseline gap-2">
                <span className="text-sm font-semibold text-foreground">Insaf El Korachi</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Portfolio</span>
              </a>
              <p className="text-sm leading-relaxed text-foreground/74">
                Data Scientist • AI Engineer junior — disponible pour un stage PFA 2026.
              </p>
              <p className="text-xs text-foreground/60">© {currentYear} Insaf El Korachi. Tous droits réservés.</p>
            </div>

            <div className="flex lg:justify-center">
              <p className="inline-flex items-center rounded-full border border-border/75 bg-background/70 px-4 py-2 text-xs font-semibold text-foreground/70">
                Ouverte aux opportunités IA / Data / BI.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/cv-insaf.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-semibold text-background shadow-[0_18px_46px_rgba(0,0,0,0.14)] transition-transform hover:-translate-y-0.5"
              >
                CV
                <Download className="h-4 w-4" />
              </a>

              {footerSocials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/75 bg-background/70 text-foreground/70 transition-colors hover:border-primary/60 hover:text-primary"
                  aria-label={item.label}
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}

              <a
                href="#profil"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/75 bg-background/70 text-foreground/70 transition-colors hover:border-primary/60 hover:text-primary"
                aria-label="Retour en haut"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
