import Image from 'next/image'
import { Reveal } from '@/components/ui/reveal'

const FOUNDERS = [
  { name: 'Anuar Zhambakin', photo: '/team/anuar.jpg' },
  { name: 'Daniyal Talgatov', photo: '/team/daniyal.jpg' },
  { name: 'Arnur Togambayev', photo: '/team/arnur.jpg' },
  { name: 'Alemger Baipeisov', photo: '/team/alemger.jpg' },
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
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-white/25">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
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
