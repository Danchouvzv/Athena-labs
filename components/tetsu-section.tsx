import {
  ArrowUpRight,
  Check,
  ListChecks,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

/** Tetsu lives on its own domain, unlike Argus and Kratos. */
export const TETSU_URL = 'https://trytetsu.com'

/** The red of the 鉄 stamp on trytetsu.com — the only colour in the block. */
const STAMP = '#d9483b'

const ADVANTAGES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Sparkles,
    title: 'From text to a device',
    body: 'The description of the task becomes a 3D enclosure, a wiring diagram, firmware and an assembly guide.',
  },
  {
    icon: ShieldCheck,
    title: 'Checked, not guessed',
    body: 'Deflection, torque, current draw, part collisions and the circuit itself are computed by checks — not made up by the model.',
  },
  {
    icon: ListChecks,
    title: 'You stay in control',
    body: 'Tetsu shows its plan and every step. You approve it, or ask for a change.',
  },
]

/** What one sentence turns into. Illustrative, so it carries no numbers that
 *  could be read as a benchmark. */
const OUTPUTS = [
  { label: '3D enclosure', note: 'built from real, buyable parts' },
  { label: 'Wiring diagram', note: 'electrical check passed' },
  { label: 'Firmware', note: 'ready to flash' },
  { label: 'Assembly guide', note: 'step by step' },
]

const CHECKS = ['Deflection', 'Torque', 'Current', 'Collisions']

export function TetsuSection() {
  return (
    <section id="tetsu" className="relative border-t border-white/10 bg-black">
      <div className="container py-24">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs tracking-widest text-neutral-500">
            FLAGSHIP PRODUCT
          </p>
          <span className="h-px w-8 bg-white/15" />
          <p className="font-mono text-xs tracking-widest text-neutral-600">
            ATHENA LABS × TETSU
          </p>
        </div>

        <Reveal
          y={20}
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/20"
        >
          {/* Pixel starfield — a nod to Tetsu's own site, kept faint */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '97px 89px, 53px 61px',
              backgroundPosition: '11px 17px, 37px 5px',
              maskImage:
                'radial-gradient(ellipse 70% 80% at 80% 20%, black 0%, transparent 75%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 80% at 80% 20%, black 0%, transparent 75%)',
            }}
          />

          <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            {/* Pitch */}
            <div>
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 rotate-[-6deg] items-center justify-center rounded-[3px] border-2 text-2xl font-bold leading-none text-white shadow-[0_6px_24px_-6px_rgba(217,72,59,0.6)]"
                  style={{ backgroundColor: STAMP, borderColor: '#f08a7f' }}
                >
                  鉄
                </span>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 md:text-4xl">
                    Tetsu
                  </h2>
                  <p className="mt-0.5 font-mono text-[11px] tracking-widest text-neutral-500">
                    THE AI HARDWARE ENGINEER
                  </p>
                </div>
              </div>

              <p className="mt-8 text-3xl font-medium leading-tight tracking-tight text-neutral-50 md:text-[2.5rem]">
                Describe it. Build it.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-400">
                Describe a device in plain words and get back a 3D enclosure
                made of real parts, a verified wiring diagram, firmware and an
                assembly guide.
              </p>

              <ol className="mt-9 space-y-6 border-t border-white/10 pt-8">
                {ADVANTAGES.map((a, i) => (
                  <li key={a.title} className="flex gap-4">
                    <span className="mt-0.5 font-mono text-xs text-neutral-600">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <a.icon className="h-4 w-4 shrink-0 text-neutral-500" />
                        <h3 className="text-sm font-medium text-neutral-100">
                          {a.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-neutral-500">
                        {a.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href={TETSU_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 rounded-full bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_32px_rgba(255,255,255,0.28)]"
                >
                  Start building with Tetsu
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={TETSU_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[11px] tracking-wide text-neutral-500 transition-colors hover:text-neutral-200"
                >
                  trytetsu.com
                </a>
              </div>
            </div>

            {/* Example session — what one sentence turns into */}
            <Reveal y={16} delay={0.12} className="self-center">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-neutral-600">
                    EXAMPLE SESSION
                  </span>
                </div>

                <div className="space-y-6 p-5 md:p-6">
                  {/* Prompt */}
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-neutral-600">
                      YOU
                    </p>
                    <p className="mt-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-relaxed text-neutral-200">
                      A solar-powered weather station that logs temperature and
                      humidity to an SD card.
                    </p>
                  </div>

                  {/* Plan awaiting approval */}
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-white/15 px-4 py-3">
                    <p className="text-xs text-neutral-400">
                      <span className="font-mono tracking-widest text-neutral-500">
                        PLAN
                      </span>{' '}
                      · ready for your review
                    </p>
                    <span className="rounded-full bg-neutral-50 px-3 py-1 text-[11px] font-medium text-neutral-900">
                      Approve
                    </span>
                  </div>

                  {/* Outputs */}
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-neutral-600">
                      TETSU
                    </p>
                    <ul className="mt-2 divide-y divide-white/[0.07] rounded-xl border border-white/10">
                      {OUTPUTS.map((o) => (
                        <li
                          key={o.label}
                          className="flex items-center justify-between gap-3 px-4 py-2.5"
                        >
                          <span className="flex items-center gap-2.5 text-sm text-neutral-200">
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            {o.label}
                          </span>
                          <span className="text-right text-xs text-neutral-500">
                            {o.note}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Checks */}
                  <div className="flex flex-wrap gap-2">
                    {CHECKS.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 font-mono text-[10px] tracking-wide text-emerald-300/90"
                      >
                        <Check className="h-3 w-3" />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
