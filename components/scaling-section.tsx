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
  return (
    <section className="border-t border-white/10 bg-black">
      <div className="container py-24">
        <h2 className="text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
          Scaling the capture
        </h2>

        <div className="mt-16 grid items-center gap-16 md:grid-cols-2 md:gap-8">
          <div className="space-y-14">
            {STATS.map((stat) => (
              <div key={stat.value} className="border-l border-white/15 pl-6">
                <p className="text-4xl font-light tracking-tight text-neutral-50 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-sm text-sm text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-end justify-center gap-12 md:gap-16">
            {BARS.map((bar) => (
              <div key={bar.name} className="flex flex-col items-center">
                <span className="mb-3 whitespace-nowrap font-mono text-[10px] text-neutral-500">
                  {bar.name}
                </span>
                <div
                  className="w-14 bg-gradient-to-t from-neutral-800 to-neutral-100"
                  style={{ height: bar.height }}
                />
                <span className="mt-3 font-mono text-[10px] text-neutral-600">
                  {bar.streams}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-8 text-sm text-neutral-400">
          {TAGS.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
