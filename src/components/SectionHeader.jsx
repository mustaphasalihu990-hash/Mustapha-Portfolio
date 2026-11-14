export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{description}</p> : null}
    </div>
  )
}
