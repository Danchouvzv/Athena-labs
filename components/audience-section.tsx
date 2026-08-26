const GROUPS = [
  {
    number: '01',
    title: 'Data aggregators & marketplaces',
    names: ['Micro1', 'Cortex AI', 'Sensei', 'Awign'],
  },
  {
    number: '02',
    title: 'Foundation model & AI labs',
    names: ['Physical Intelligence', 'Skild AI', 'NVIDIA (GR00T team)', 'Figure AI'],
  },
  {
    number: '03',
    title: 'Humanoid & robot manufacturers',
    names: ['1X Technologies', 'Agility Robotics', 'Apptronik', 'Boston Dynamics'],
  },
  {
    number: '04',
    title: 'Industrial automation',
    names: ['Covariant', 'Universal Robots', 'KUKA', 'Toyota Research Institute'],
  },
]

export function AudienceSection() {
  return (
    <section id="who-its-for" className="border-t border-white/10 bg-black">
      <div className="container py-24">
        <p className="font-mono text-xs tracking-widest text-neutral-500">
          WHO IT&apos;S FOR
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
          Built for the teams training robot foundation models
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group) => (
            <div key={group.number}>
              <span className="font-mono text-xs text-neutral-600">
                {group.number}
              </span>
              <h3 className="mt-2 text-base text-neutral-50">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                {group.names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
