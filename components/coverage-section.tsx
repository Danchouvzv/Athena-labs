import { SphereGraphic } from '@/components/sphere-graphic'

const TIERS = [
  { tier: 'Tier I', label: 'Bimanual teleop and humanoid capture in the lab' },
  {
    tier: 'Tier II',
    label: 'UMI handheld capture in apartments, cafés and stores',
  },
  {
    tier: 'Tier III',
    label: 'Egocentric video of everyday household and work tasks',
  },
]

export function CoverageSection() {
  return (
    <section
      id="coverage"
      className="relative overflow-hidden border-t border-white/10 bg-black"
    >
      {/* Sphere lives inside this section only, clipped by overflow-hidden */}
      <SphereGraphic className="right-[-260px] top-1/2 h-[560px] w-[560px] -translate-y-1/2 md:right-[-160px] md:h-[860px] md:w-[860px]" />

      <div className="container relative z-10 py-28 md:py-36">
        <p className="font-mono text-xs tracking-widest text-neutral-500">
          COVERAGE
        </p>
        <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight text-neutral-50 md:text-4xl">
          From lab rigs
          <br />
          to the real world
        </h2>

        <div className="mt-12 max-w-xl divide-y divide-white/10 border-y border-white/10">
          {TIERS.map((tier) => (
            <div
              key={tier.tier}
              className="grid grid-cols-[5rem_1fr] items-center gap-4 py-5"
            >
              <span className="text-sm text-neutral-500">{tier.tier}</span>
              <span className="text-sm text-neutral-300">{tier.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
