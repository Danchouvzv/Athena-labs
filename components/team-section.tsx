import { Reveal } from '@/components/ui/reveal'

const FOUNDERS = [
  { name: 'Anuar Zhambakin', initials: 'AZ' },
  { name: 'Daniyal Talgatov', initials: 'DT' },
  { name: 'Arnur Togambayev', initials: 'AT' },
  { name: 'Alemger Baipeisov', initials: 'AB' },
]

export function TeamSection() {
  return (
    <section id="team" className="border-t border-white/10 bg-black">
      <div className="container py-24">
        <p className="font-mono text-xs tracking-widest text-neutral-500">
          TEAM
        </p>
        <Reveal blur y={18}>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
            The founders of Athena Labs
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.1} y={22} className="group">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] font-mono text-sm tracking-wider text-neutral-400 transition-all duration-300 group-hover:border-white/30 group-hover:text-neutral-50 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]">
                {founder.initials}
              </div>
              <h3 className="mt-5 text-base text-neutral-50">{founder.name}</h3>
              <p className="mt-1 text-sm text-neutral-500">Co-founder</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
