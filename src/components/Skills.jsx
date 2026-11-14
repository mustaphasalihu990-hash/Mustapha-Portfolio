import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader
          eyebrow="Skills"
          title="Technologies I Work With."
          description="My work is grounded in modern frontend tools, while I continue building backend and AI foundations through hands-on learning."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <Reveal key={group.category}>
            <div className="h-full rounded-[1.5rem] border border-fg/10 bg-white/60 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] backdrop-blur-sm dark:bg-[#111827]/60">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-fg">{group.category}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    group.type === 'learning'
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-300'
                      : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                  }`}
                >
                  {group.type === 'learning' ? 'Learning' : 'Current'}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full border border-fg/10 bg-fg/5 px-3 py-2 text-sm font-medium text-fg"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

