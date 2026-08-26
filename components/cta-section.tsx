'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="border-t border-white/10 bg-black bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_60%)]"
    >
      <div className="container py-24">
        <Reveal blur y={20}>
          <h2 className="max-w-xl text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
            See a sample episode and the full spec sheet.
          </h2>
        </Reveal>

        <Reveal delay={0.12} y={16}>
          <p className="mt-4 max-w-md text-sm text-neutral-400">
            Camera layouts, formats, QA process and pricing — in one data card.
          </p>
        </Reveal>

        <Reveal delay={0.24} y={16}>
          <form
            className="mt-8 flex flex-wrap items-center gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-64 max-w-full rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm text-neutral-50 transition-all duration-200 placeholder:text-neutral-500 focus:border-white/30 focus:bg-white/[0.03] focus:shadow-[0_0_24px_rgba(255,255,255,0.06)] focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center gap-2 rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_28px_rgba(255,255,255,0.25)]"
            >
              Get the data card
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <span className="text-sm text-neutral-500">
              or write to{' '}
              <a
                href="mailto:hello@athena-labs.ai"
                className="text-neutral-400 underline underline-offset-4 transition-colors hover:text-neutral-50"
              >
                hello@athena-labs.ai
              </a>
            </span>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
