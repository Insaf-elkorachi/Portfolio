'use client';

import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 text-center mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-wide">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Interested in collaborating or just want to chat? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:insaf2003elkorachi@gmail.com"
            className="group rounded-lg border border-border bg-card p-6 hover:border-accent/50 transition-all hover:shadow-lg flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Email</p>
              <p className="text-sm text-foreground/60">insaf2003elkorachi@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/insaf-el-korachi-400aaa2a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border bg-card p-6 hover:border-accent/50 transition-all hover:shadow-lg flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">LinkedIn</p>
              <p className="text-sm text-foreground/60">linkedin.com/in/insafelkorachi</p>
            </div>
          </a>

          <a
            href="https://github.com/Insaf-elkorachi"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border bg-card p-6 hover:border-accent/50 transition-all hover:shadow-lg flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">GitHub</p>
              <p className="text-sm text-foreground/60">github.com/Insaf-elkorachi</p>
            </div>
          </a>

          <a
            href="#"
            className="group rounded-lg border border-border bg-card p-6 hover:border-accent/50 transition-all hover:shadow-lg flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Discord</p>
              <p className="text-sm text-foreground/60">insafel#1234</p>
            </div>
          </a>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">Disponible pour un stage PFE</h3>
          <p className="text-foreground/70 mb-6">
            Je recherche un stage PFE en ingénierie de l'intelligence artificielle, avec un intérêt fort pour les LLMs, le RAG, le NLP et les projets data.
          </p>
          <a
            href="mailto:insaf2003elkorachi@gmail.com"
            className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
