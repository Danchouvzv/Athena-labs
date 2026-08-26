'use client'

import { ArrowRight } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const FORMATS = ['LeRobot', 'RLDS', 'Unitree G1 EDU', 'UMI', 'GELLO / leader-arms']

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black/[0.96]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.55) 0.5px, transparent 0.5px)',
          backgroundSize: '22px 22px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)',
        }}
      />

      {/* Ambient glow behind the robot */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[820px] w-[820px] -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(150,150,160,0.16) 0%, rgba(90,90,100,0.06) 40%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 grid min-h-screen grid-rows-[1fr_auto] pt-24">
        <div className="grid items-center gap-8 py-12 md:grid-cols-[1fr_1.15fr] md:gap-4 md:py-0">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2.5 pr-4 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 [animation-duration:2s]" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] tracking-wider text-neutral-400">
                COLLECTING NOW — 6 DATA TYPES
              </span>
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-medium leading-[1.1] tracking-tight md:text-[3.25rem]">
              <span className="text-neutral-500">
                Humanoid robots learn from people first —{' '}
              </span>
              <span className="bg-gradient-to-br from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                we collect the human demonstration data that trains VLA models.
              </span>
            </h1>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#cta"
                className="group flex items-center gap-2 rounded-full bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-200 hover:bg-white hover:shadow-[0_0_32px_rgba(255,255,255,0.28)]"
              >
                Get the data card
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#what-we-collect"
                className="group flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-neutral-300 transition-colors duration-200 hover:border-white/30 hover:bg-white/5 hover:text-neutral-50"
              >
                See the data types
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right content — 3D robot */}
          <div className="relative h-[380px] w-full md:h-[580px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Formats strip */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <p className="font-mono text-xs tracking-widest text-neutral-500">
              FORMATS
            </p>
            {FORMATS.map((format) => (
              <span
                key={format}
                className="text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-200"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
