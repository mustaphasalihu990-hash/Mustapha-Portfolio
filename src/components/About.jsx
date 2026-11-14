import { Mail, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">About me</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Beyond the Code.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>
                I am a passionate technology enthusiast with a growing interest in software engineering,
                web development, artificial intelligence, and medical research.
              </p>
              <p>
                My journey into technology began with curiosity about how websites are built and how
                software can be used to solve real-world problems. With my background in the medical
                field, I am particularly interested in exploring the intersection of healthcare and
                technology.
              </p>
              <p>
                My goal is to use software development and artificial intelligence to contribute to better
                healthcare solutions, improve patient support, and make healthcare more accessible. I am
                especially interested in developing solutions that can help patients manage their health
                more effectively, such as medication reminder systems for chronic conditions like diabetes,
                as well as responsible AI-assisted healthcare tools.
              </p>
              <p>
                Beyond healthcare, I believe artificial intelligence has enormous potential in education.
                I want to encourage students to use AI as a learning assistant: a tool that helps them
                understand difficult concepts, explore ideas, and develop critical thinking rather than
                merely accepting everything it generates.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-fg/10 bg-white/50 px-3 py-2 dark:bg-[#0f172a]/50">
                <MapPin size={16} className="text-accent" /> {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-fg/10 bg-white/50 px-3 py-2 text-fg transition hover:border-accent hover:text-accent dark:bg-[#0f172a]/50"
              >
                <Mail size={16} className="text-accent" /> {profile.email}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-accent/10 blur-2xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-[2rem] border border-fg/10 bg-white/70 p-3 shadow-[0_25px_80px_rgba(15,23,42,0.12)] dark:bg-[#0f172a]/70">
              <img
                src="/WhatsApp%20Image%202026-10-10%20at%2019.06.04.jpeg"
                alt={`Portrait of ${profile.name}`}
                className="h-[500px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}