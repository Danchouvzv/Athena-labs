'use client'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="border-t border-white/10 bg-black bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_60%)]"
    >
      <div className="container py-24">
        <h2 className="max-w-xl text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
          See a sample episode and the full spec sheet.
        </h2>
        <p className="mt-4 max-w-md text-sm text-neutral-400">
          Camera layouts, formats, QA process and pricing — in one data card.
        </p>

        <form
          className="mt-8 flex flex-wrap items-center gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Work email"
            className="w-64 max-w-full rounded-md border border-white/15 bg-transparent px-4 py-2.5 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-white/30 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Get the data card ›
          </button>
          <span className="text-sm text-neutral-500">
            or write to{' '}
            <a
              href="mailto:hello@athena-labs.ai"
              className="text-neutral-400 underline underline-offset-4 hover:text-neutral-50"
            >
              hello@athena-labs.ai
            </a>
          </span>
        </form>
      </div>
    </section>
  )
}
