import { GitBranch, Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FocusAreas from './components/FocusAreas'
import ProjectShowcase from './components/ProjectShowcase'
import Journey from './components/Journey'
import CurrentlyExploring from './components/CurrentlyExploring'
import { navItems, profile } from './data/profile'

export default function App() {
  const [theme, setTheme] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg text-fg antialiased">
      <header className="sticky top-0 z-50 border-b border-fg/10 bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.12em] text-fg sm:text-lg sm:tracking-[0.16em]">
            {profile.name.toUpperCase()}
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-fg">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fg/10 text-fg transition hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <GitBranch size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
            >
              Let's Talk
            </a>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} setTheme={setTheme} compact />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-fg/10 text-fg"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-fg/10 bg-bg md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm font-medium text-muted">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-2 transition hover:bg-fg/5 hover:text-fg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 font-medium text-bg"
                onClick={() => setMenuOpen(false)}
              >
                Let's Talk
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <FocusAreas />
        <ProjectShowcase />
        <Journey />
        <CurrentlyExploring />

        <section id="contact" className="mx-auto max-w-5xl px-6 pb-24 pt-12">
          <div className="rounded-[2rem] border border-fg/10 bg-gradient-to-br from-accent/5 via-transparent to-transparent p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Have an Idea? Let's Build Something.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              I'm always interested in connecting with developers, technology enthusiasts, researchers,
              collaborators, and people building meaningful solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-medium text-bg transition hover:opacity-90"
              >
                Get in Touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-fg/15 px-6 py-3 font-medium text-fg transition hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-fg/15 px-6 py-3 font-medium text-fg transition hover:border-accent hover:text-accent"
              >
                X (Twitter)
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-fg/15 px-6 py-3 font-medium text-fg transition hover:border-accent hover:text-accent"
              >
                <MessageCircle size={18} />
                WhatsApp · {profile.phone}
              </a>
            </div>
            {profile.availableForCollaboration ? (
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Available for collaboration
              </p>
            ) : null}
          </div>
        </section>
      </main>

      <footer className="border-t border-fg/10 bg-bg/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg font-semibold tracking-[0.16em] text-fg">MUSTAPHA SALIHU</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              Software Engineer | Web Developer | AI Developer.
            </p>
            <p className="mt-2 max-w-md text-sm leading-7 text-muted">
              Building technology, creating solutions, and shaping the future through thoughtful digital innovation.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fg">Quick links</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted md:items-end">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-fg">
                  {item.label}
                </a>
              ))}
              <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-fg">
                GitHub
              </a>
              <a href={profile.x} target="_blank" rel="noreferrer" className="transition hover:text-fg">
                X (Twitter)
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="transition hover:text-fg">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-fg/10 py-5 text-center text-sm text-muted">
          © 2026 Mustapha Salihu. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

