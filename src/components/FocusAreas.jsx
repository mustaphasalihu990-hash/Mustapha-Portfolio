import { focusAreas } from '../data/profile'
import { HeartPulse, BrainCircuit, Globe, GraduationCap, Microscope } from 'lucide-react'

const icons = [HeartPulse, BrainCircuit, Globe, GraduationCap, Microscope]

export default function FocusAreas() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">Focus</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Where Technology Meets Purpose.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {focusAreas.map((area, index) => {
          const Icon = icons[index] || BrainCircuit
          return (
            <article
              key={area.title}
              className="rounded-[1.5rem] border border-fg/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:bg-[#111827]/60"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-fg">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
