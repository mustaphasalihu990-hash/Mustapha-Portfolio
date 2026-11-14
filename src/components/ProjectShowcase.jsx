import { ArrowUpRight, GitBranch } from 'lucide-react'
import { projects } from '../data/project'

const placeholders = [
  {
    title: 'Project Name',
    summary: 'Add your project summary here.',
    description: 'Describe the problem you solved, the goal of the project, and the impact it aims to create.',
    tech: ['React', 'Tailwind'],
    live: '#',
    code: '#',
    image: '',
    isPlaceholder: true,
  },
  {
    title: 'Project Name',
    summary: 'Add your second project summary here.',
    description: 'Explain the challenge, your approach, and key features you want to showcase.',
    tech: ['Vite', 'TypeScript'],
    live: '#',
    code: '#',
    image: '',
    isPlaceholder: true,
  },
]

const data = projects.length ? projects : placeholders

export default function ProjectShowcase() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Things I'm Building
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((project, index) => (
          <article
            key={project.title + index}
            className="group overflow-hidden rounded-[1.75rem] border border-fg/10 bg-white/60 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 dark:bg-[#111827]/70"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-fg/10 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
              {project.image ? (
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              ) : (
                <div className="flex h-full items-center justify-center p-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted/80">
                  {project.isPlaceholder ? 'Project preview' : 'Screenshot placeholder'}
                </div>
              )}
            </div>

            <div className="space-y-5 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-fg">{project.title}</h3>
                <span className="rounded-full border border-fg/10 bg-fg/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {project.category || 'Project'}
                </span>
              </div>

              <p className="text-sm text-muted">{project.summary || project.description}</p>

              <div className="flex flex-wrap gap-2">
                {(project.tech || []).map((tech) => (
                  <span key={tech} className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                    {tech}
                  </span>
                ))}
              </div>

              {project.description && !project.isPlaceholder ? (
                <p className="text-sm leading-6 text-muted">{project.description}</p>
              ) : null}

              <div className="flex items-center justify-between pt-2">
                <a
                  href={project.code || '#'}
                  target={project.code && project.code !== '#' ? '_blank' : undefined}
                  rel={project.code && project.code !== '#' ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-medium text-fg transition hover:text-accent"
                >
                  <GitBranch size={16} /> GitHub
                </a>
                <a
                  href={project.live || '#'}
                  target={project.live && project.live !== '#' ? '_blank' : undefined}
                  rel={project.live && project.live !== '#' ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:opacity-80"
                >
                  Live demo <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
