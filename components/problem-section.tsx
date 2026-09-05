import { Reveal } from '@/components/ui/reveal'

const PROBLEMS = [
  {
    number: '01',
    title: 'The arm costs more than the lab',
    badge: 'EDUCATION',
    description:
      'Imported manipulators start at $3,000 and run past $15,000. At that price a school buys one, locks it in a cabinet, and no student ever takes it apart.',
    specs: [
      '$3,000–15,000+ per imported arm',
      '2–4 months lead time',
      'plus customs, plus freight',
      'English-only manuals',
    ],
  },
  {
    number: '02',
    title: 'The curriculum stopped at the Arduino cart',
    description:
      'Programmes still end where line-following ends. Nothing in them reaches machine vision or kinematics, so students never touch ROS2, imitation learning or reinforcement learning — and the country keeps not producing Physical AI engineers.',
    specs: [
      'No machine vision, no kinematics',
      'Nowhere to practise ROS2',
      'No imitation / reinforcement learning',
    ],
  },
  {
    number: '03',
    title: 'The factory is not allowed to use the cloud',
    badge: 'INDUSTRY',
    description:
      'Plants cannot ship camera footage off site — security will not sign it off. And there is no local infrastructure to run neural networks where the cameras actually are.',
    specs: [
      'Footage cannot leave the site',
      'No on-premise inference hardware',
      'Uplinks that drop take the system with them',
    ],
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="border-t border-white/10 bg-black">
      <div className="container py-24">
        <p className="font-mono text-xs tracking-widest text-neutral-500">
          THE PROBLEM
        </p>
        <Reveal blur y={18}>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
            Physical AI is priced out of the rooms where it should be taught
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {PROBLEMS.map((item, i) => (
            <Reveal
              key={item.number}
              delay={i * 0.07}
              y={18}
              className="group grid grid-cols-1 gap-3 py-6 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[3rem_1fr_1fr] md:gap-8"
            >
              <span className="font-mono text-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-300">
                {item.number}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg text-neutral-50">{item.title}</h3>
                  {item.badge && (
                    <span className="rounded border border-white/20 px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-neutral-300">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-md text-sm text-neutral-400">
                  {item.description}
                </p>
              </div>
              <div className="font-mono text-xs leading-relaxed text-neutral-500 md:text-right">
                {item.specs.map((spec) => (
                  <p key={spec}>{spec}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
