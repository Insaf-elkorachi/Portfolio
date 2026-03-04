'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#about', label: 'Profil' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Parcours' },
    { href: '#skills', label: 'Competences' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#about" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-primary-foreground font-bold text-sm panel-glow">
              IE
            </div>
            <div className="leading-none">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/60">AI x Data</p>
              <p className="text-base font-semibold">Insaf El Korachi</p>
            </div>
          </a>

          <div className="hidden md:flex gap-7 items-center rounded-full border border-border/70 bg-card/80 px-5 py-2 soft-ring">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full hover:opacity-95 transition-opacity font-semibold text-sm panel-glow"
            >
              Me contacter
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 border-t border-border/60 pt-4 rounded-2xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-foreground/70 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-semibold text-center"
            >
              Me contacter
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
