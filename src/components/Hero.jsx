// import { ArrowRight, Mail } from 'lucide-react'
// import Reveal from './Reveal'
// import { profile } from '../data/profile'

// export default function Hero() {
//   return (
//     <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-32">
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent)]" />

//       <Reveal>
//         <p className="inline-flex items-center gap-2 rounded-full border border-fg/15 px-3 py-1 text-sm text-muted">
//           <span className="h-2 w-2 rounded-full bg-accent" />
//           Open to frontend developer opportunities
//         </p>
//       </Reveal>

//       <Reveal delay={0.1}>
//         <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
//           I'm {profile.name}, a {profile.title}.
//         </h1>
//       </Reveal>

//       <Reveal delay={0.2}>
//         <p className="mt-6 max-w-2xl text-lg text-muted">
//           I build clean, fast websites that work well on any screen, using React and Tailwind.
//           I'm now learning backend development to become a full-stack developer.
//         </p>
//       </Reveal>

//       <Reveal delay={0.3}>
//         <div className="mt-10 flex flex-wrap gap-4">
//           <a
//             href="#projects"
//             className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-bg transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
//           >
//             See my projects <ArrowRight size={18} />
//           </a>
//           <a
//             href={`mailto:${profile.email}`}
//             className="inline-flex items-center gap-2 rounded-full border border-fg/20 px-6 py-3 font-medium transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
//           >
//             Email me <Mail size={18} />
//           </a>
//         </div>
//       </Reveal>
//     </section>
//   )
// }


import { ArrowRight, GitBranch, Mail, MessageSquareMore } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent)]" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-fg/15 bg-white/50 px-3 py-1.5 text-sm text-muted shadow-sm backdrop-blur-sm dark:bg-[#111827]/50">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for collaboration
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-fg sm:text-5xl lg:text-6xl">
              BUILDING TECHNOLOGY. CREATING SOLUTIONS. SHAPING THE FUTURE.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-accent/80">
              {profile.title}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-bg transition hover:translate-y-[-1px] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore My Work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-fg/15 bg-white/50 px-6 py-3 font-medium text-fg transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-[#111827]/60"
              >
                Let's Connect <MessageSquareMore size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-fg/10 bg-white/60 text-fg transition hover:border-accent hover:text-accent dark:bg-[#111827]/60"
              >
                <GitBranch size={18} />
              </a>
              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-fg/10 bg-white/60 text-fg transition hover:border-accent hover:text-accent dark:bg-[#111827]/60"
              >
                <span className="text-base font-bold">X</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-fg/10 bg-white/60 text-fg transition hover:border-accent hover:text-accent dark:bg-[#111827]/60"
              >
                <Mail size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-2 rounded-[2rem] bg-accent/20 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-fg/15 bg-white/70 p-3 shadow-[0_35px_90px_rgba(15,23,42,0.15)] dark:bg-[#0f172a]/70">
              <img
                src="/WhatsApp%20Image%202026-10-10%20at%2019.06.04.jpeg"
                alt={`Portrait of ${profile.name}`}
                width="800"
                height="800"
                fetchPriority="high"
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
              <div className="mt-4 flex items-center justify-between rounded-[1.25rem] border border-fg/10 bg-bg/80 px-4 py-3 backdrop-blur-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Name</p>
                  <p className="mt-1 text-lg font-semibold text-fg">{profile.name}</p>
                </div>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Available
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}