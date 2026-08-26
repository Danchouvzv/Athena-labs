'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, EASE } from '@/components/ui/reveal'

const STATS = [
  {
    value: '30+',
    label: 'Scenes, from lab rigs to apartments, cafés and stores',
  },
  { value: '200+', label: 'Objects, with lighting and camera-view variation' },
  {
    value: '30–60 Hz',
    label: 'Timestamp-synchronized streams, 15–60 s episodes',
  },
]

const BARS = [
  { name: 'UMI', streams: '2 streams', height: 130 },
  { name: 'Bimanual teleop', streams: '5 streams', height: 230 },
  { name: 'Humanoid · multi-view', streams: '7+ streams', height: 320 },
]

const TAGS = [
  'Language instructions per task',
  'Scene metadata: objects, lighting, camera views',
  'Per-episode QA labeling',
  'Consent releases',
]

export function ScalingSection() {
  const reduce = useReducedMotion()

  return (
    <section className="border-t border-white/10 bg-black">
      <div className="container py-24">
        <Reveal blur y={18}>
          <h2 className="text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
            Scaling the capture
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-16 md:grid-cols-2 md:gap-8">
          <div className="space-y-14">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.value}
                delay={i * 0.12}
                x={reduce ? 0 : -20}
                y={0}
                className="border-l border-white/15 pl-6"
              >
                <p className="text-4xl font-light tracking-tight text-neutral-50 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-sm text-sm text-neutral-400">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="flex items-end justify-center gap-12 md:gap-16">
            {BARS.map((bar, i) => (
              <div key={bar.name} className="flex flex-col items-center">
                <motion.span
                  className="mb-3 whitespace-nowrap font-mono text-[10px] text-neutral-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.14 }}
                >
                  {bar.name}
                </motion.span>

                {/* The bar grows out of its own baseline */}
                <motion.div
                  className="w-14 origin-bottom bg-gradient-to-t from-neutral-800 to-neutral-100"
                  initial={reduce ? { opacity: 0 } : { height: 0 }}
                  whileInView={
                    reduce ? { opacity: 1, height: bar.height } : { height: bar.height }
                  }
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduce ? 0.3 : 1,
                    delay: reduce ? 0 : i * 0.14,
                    ease: EASE,
                  }}
                  style={{ height: bar.height }}
                />

                <motion.span
                  className="mt-3 font-mono text-[10px] text-neutral-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.14 }}
                >
                  {bar.streams}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-8 text-sm text-neutral-400">
          {TAGS.map((tag, i) => (
            <Reveal key={tag} delay={i * 0.06} y={12}>
              <span className="transition-colors duration-200 hover:text-neutral-100">
                {tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
