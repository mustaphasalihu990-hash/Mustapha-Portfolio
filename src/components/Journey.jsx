import { journeySteps } from '../data/profile'

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">Journey</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Learning. Building. Growing.
        </h2>
      </div>

      <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-fg/15 md:before:left-1/2">
        {journeySteps.map((step, index) => (
          <div key={step.title} className="relative grid md:grid-cols-2 md:gap-8">
            <div className={index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:col-start-2 md:pl-8'}>
              <div className="mb-3 flex items-center gap-3 md:block">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-bg md:float-right md:ml-2">
                  {index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {step.period}
                </span>
              </div>
              <div className="rounded-2xl border border-fg/10 bg-white/60 p-6 shadow-sm dark:bg-[#0f172a]/60">
                <h3 className="text-xl font-semibold text-fg">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
