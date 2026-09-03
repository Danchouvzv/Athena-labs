import { ArrowUpRight, Cpu, ShieldCheck, Video } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

/** The lab ships more than the dataset. Each entry renders as one panel, so
 *  the next product is an object in this array and nothing else. */
const PRODUCTS = [
  {
    number: '01',
    name: 'Argus',
    status: 'LIVE',
    tagline: 'Argus sees everything.',
    summary:
      'Not another camera in the cloud — an AI box behind your own door.',
    description:
      'An NVIDIA Jetson box plugs into the CCTV you already own and reads every stream on site: people, vehicles, PPE, restricted zones. No footage leaves the building — only the events do.',
    points: [
      {
        icon: ShieldCheck,
        title: 'On your premises',
        body: 'Nothing is queued or shipped upstream for a verdict. Only the event crosses your firewall, and the box keeps working the moment your uplink does not.',
      },
      {
        icon: Video,
        title: 'Every camera you already own',
        body: 'Argus does not ask you to touch a single lens — it listens to the RTSP or ONVIF stream your cameras already speak.',
      },
      {
        icon: Cpu,
        title: 'Inference stays on the box',
        body: 'Detection and rule evaluation run on the Jetson’s own GPU, frame by frame, against the rules you set per zone.',
      },
    ],
    uses: ['PPE compliance', 'Traffic & plates', 'Audience & attention'],
    href: 'https://arguss-topaz.vercel.app/',
    cta: 'Request a demo',
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="border-t border-white/10 bg-black">
      <div className="container py-24">
        <p className="font-mono text-xs tracking-widest text-neutral-500">
          PRODUCTS
        </p>
        <Reveal blur y={18}>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
            What the lab ships
          </h2>
        </Reveal>
        <Reveal y={16} delay={0.06}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
            Alongside the demonstration data, we build the systems that run on
            the other end of it — vision models deployed where the cameras
            already are.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.name}
              delay={i * 0.08}
              y={20}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/20"
            >
              <div className="grid gap-10 p-8 md:grid-cols-[1.05fr_1fr] md:gap-12 md:p-12">
                {/* Pitch */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm text-neutral-600">
                      {product.number}
                    </span>
                    {/* The name is the product's own front door, so it links
                        out too — not everyone arrives ready to book a demo. */}
                    <h3 className="text-xl font-medium tracking-tight text-neutral-50">
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/name inline-flex items-center gap-1.5 transition-colors hover:text-white"
                      >
                        {product.name}
                        <ArrowUpRight className="h-4 w-4 text-neutral-600 transition-all duration-200 group-hover/name:translate-x-0.5 group-hover/name:-translate-y-0.5 group-hover/name:text-neutral-300" />
                      </a>
                    </h3>
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 py-0.5 pl-2 pr-2.5 font-mono text-[10px] tracking-widest text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 [animation-duration:2s]" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      {product.status}
                    </span>
                  </div>

                  <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-neutral-50 md:text-[1.75rem]">
                    {product.tagline}
                    <span className="block text-neutral-500">
                      {product.summary}
                    </span>
                  </p>

                  <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-400">
                    {product.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {product.uses.map((use) => (
                      <span
                        key={use}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-neutral-400"
                      >
                        {use}
                      </span>
                    ))}
                  </div>

                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_32px_rgba(255,255,255,0.28)]"
                  >
                    {product.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Spells out where the button goes */}
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 block font-mono text-[11px] tracking-wide text-neutral-600 transition-colors hover:text-neutral-300"
                  >
                    {product.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                </div>

                {/* How it works */}
                <ul className="divide-y divide-white/10 border-t border-white/10 md:border-l md:border-t-0 md:pl-12">
                  {product.points.map((point) => (
                    <li key={point.title} className="py-6 first:md:pt-0 last:pb-0">
                      <div className="flex items-center gap-2.5">
                        <point.icon className="h-4 w-4 shrink-0 text-neutral-500" />
                        <h4 className="text-sm text-neutral-200">
                          {point.title}
                        </h4>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                        {point.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* Keeps the list honest while there is only one shipped product */}
          <Reveal y={16} delay={0.1}>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-dashed border-white/10 px-8 py-6">
              <p className="font-mono text-xs tracking-widest text-neutral-600">
                MORE IN BUILD
              </p>
              <a
                href="#cta"
                className="text-sm text-neutral-400 underline underline-offset-4 transition-colors hover:text-neutral-50"
              >
                Tell us what you need
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
