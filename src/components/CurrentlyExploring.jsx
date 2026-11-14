import { exploringItems } from '../data/profile'

export default function CurrentlyExploring() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-8 pb-24">
      <div className="rounded-[2rem] border border-fg/10 bg-gradient-to-br from-accent/5 via-transparent to-transparent p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">Current focus</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Always Learning. Always Building.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {exploringItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-fg"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
