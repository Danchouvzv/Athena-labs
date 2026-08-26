'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Globe from '@/components/ui/globe'
import { Reveal, EASE } from '@/components/ui/reveal'

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
  const reduce = useReducedMotion()

  return (
    <section
      id="coverage"
      className="relative overflow-hidden border-t border-white/10 bg-black"
    >
      {/* Globe lives inside this section only, clipped by overflow-hidden */}
      <motion.div
        className="pointer-events-none absolute right-[-140px] top-1/2 hidden -translate-y-1/2 md:block lg:right-[20px]"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
        whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        {/* Gentle drift, so the planet never feels pinned to the page */}
        <motion.div
          animate={reduce ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Globe size={560} />
        </motion.div>
      </motion.div>

      <div className="container relative z-10 py-28 md:py-40">
        <p className="font-mono text-xs tracking-widest text-neutral-500">
          COVERAGE
        </p>
        <Reveal blur y={18}>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight text-neutral-50 md:text-4xl">
            From lab rigs
            <br />
            to the real world
          </h2>
        </Reveal>

        <div className="mt-12 max-w-xl divide-y divide-white/10 border-y border-white/10">
          {TIERS.map((tier, i) => (
            <Reveal
              key={tier.tier}
              delay={i * 0.1}
              y={0}
              x={reduce ? 0 : -18}
              className="group grid grid-cols-[5rem_1fr] items-center gap-4 py-5"
            >
              <span className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                {tier.tier}
              </span>
              <span className="text-sm text-neutral-300 transition-colors duration-300 group-hover:text-neutral-50">
                {tier.label}
              </span>
            </Reveal>
          ))}
        </div>

        {/* On mobile the globe flows below the content instead of overlapping it */}
        <div className="mt-16 flex justify-center md:hidden">
          <Globe size={280} />
        </div>
      </div>
    </section>
  )
}
