'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { EASE } from '@/components/ui/reveal'

/** Fades the canvas out before the bottom of the section, so the robot ends in
 *  darkness rather than at a hard edge. */
const BOTTOM_FADE =
  'linear-gradient(to bottom, black 0%, black 56%, rgba(0,0,0,0.35) 76%, transparent 89%)'
/** Softens the canvas' left and right edges into the page. */
const SIDE_FADE =
  'linear-gradient(to right, transparent 0%, black 9%, black 93%, transparent 100%)'

/**
 * Spline sizes its canvas from the render buffer, so it spills past the box we
 * give it. A mask must therefore be pinned to that box and told not to tile —
 * left on the default `repeat`, the gradient starts over below the element and
 * hands the overflow back its full opacity.
 */
const mask = (image: string) => ({
  maskImage: image,
  WebkitMaskImage: image,
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
})

export function HeroSection() {
  const reduce = useReducedMotion()

  // Cascade the hero in on mount, rather than on scroll.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.11, delayChildren: 0.15 },
    },
  }

  const item = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: 26, filter: 'blur(8px)' },
    show: reduce
      ? { opacity: 1, transition: { duration: 0.3 } }
      : {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.8, ease: EASE },
        },
  }

  return (
    <section className="relative w-full overflow-hidden bg-black/[0.96]">
      {/* Follows the cursor across the whole hero. Pure white at full opacity
          read as a glare sitting on top of the page, so it is now a wide, very
          faint cool light — ambient, not a highlight. The position classes it
          used to carry were dead: the component sets `left`/`top` inline. */}
      <Spotlight size={560} fill="rgba(190,200,225,0.11)" />

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

      {/* Ambient glow behind the robot — breathes slowly */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[820px] w-[820px] -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(150,150,160,0.16) 0%, rgba(90,90,100,0.06) 40%, transparent 70%)',
        }}
        animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 flex min-h-screen items-center pt-24">
        <div className="grid w-full items-center gap-8 py-12 md:grid-cols-[1fr_1.15fr] md:gap-4 md:py-0">
          {/* Left content */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="max-w-xl text-4xl font-medium leading-[1.1] tracking-tight md:text-[3.25rem]"
            >
              <span className="text-neutral-500">
                Humanoid robots learn from people first —{' '}
              </span>
              <span className="bg-gradient-to-br from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                we collect the human demonstration data that trains VLA models.
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href="#cta"
                className="group flex items-center gap-2 rounded-full bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_32px_rgba(255,255,255,0.28)]"
              >
                Get the data card
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#what-we-collect"
                className="group flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5 hover:text-neutral-50"
              >
                See the data types
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right content — 3D robot */}
          <motion.div
            className="relative h-[380px] w-full md:h-[620px]"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
          >
            {/* The scene carries its own lit floor, which reads as a bright
                smudge pasted over the page. Mask the canvas rather than
                dimming it with an overlay: masked pixels go fully
                transparent, so the glow disappears instead of showing
                through, and the legs dissolve into the black instead of
                being cut off by the container edge. */}
            <div className="absolute inset-0" style={mask(BOTTOM_FADE)}>
              {/* Nested so the two masks intersect — `mask-composite` is
                  spelled differently in WebKit, nesting needs no prefix. */}
              <div className="h-full w-full" style={mask(SIDE_FADE)}>
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
