const DATA_TYPES = [
  {
    number: '01',
    title: 'Bimanual teleop demonstrations',
    badge: 'CORE PRODUCT',
    description:
      'GELLO / leader-arm teleoperation across pick-and-place, folding, pouring and assembly tasks.',
    specs: [
      'RGB × 3–4 views + wrist camera',
      'joint states · actions · gripper state',
      '30–60 Hz · LeRobot / RLDS',
      '15–60 s episodes, language-annotated',
    ],
  },
  {
    number: '02',
    title: 'Humanoid data',
    suffix: '(Unitree G1 EDU)',
    description:
      'VR teleoperation: whole-body manipulation and locomotion — the most valuable embodiment-specific type for humanoid companies.',
    specs: ['Head camera · RGB-D', 'full-body joint states · IMU · actions'],
  },
  {
    number: '03',
    title: 'UMI data',
    suffix: '(handheld gripper, no robot)',
    description:
      'Handheld gripper with camera in real environments — cheapest type to collect, scales beyond the lab: apartments, cafés, stores.',
    specs: ['RGB fisheye', 'gripper pose (SLAM) · grip width'],
  },
  {
    number: '04',
    title: 'Egocentric video',
    description:
      'First-person capture of household and workplace tasks — for pre-training VLA and video models, sold by volume.',
    specs: ['RGB, optional gaze / IMU', 'timecode-level action annotation'],
  },
  {
    number: '05',
    title: 'Multi-view scene observations',
    description:
      'One task captured synchronously from 4–6 cameras plus an egocentric view — for representation learning, 3D reconstruction and cross-view learning.',
    specs: ['4–6 synchronized RGB streams', '+ egocentric camera'],
  },
  {
    number: '06',
    title: 'Failure & recovery data',
    description:
      'Failed attempts plus operator error correction — rare and in demand: most open datasets contain only successful episodes.',
    specs: ['Source-modality streams', 'failure / recovery segmentation'],
  },
]

export function DataTypesSection() {
  return (
    <section id="what-we-collect" className="border-t border-white/10 bg-black">
      <div className="container py-24">
        <p className="font-mono text-xs tracking-widest text-neutral-500">
          WHAT WE COLLECT
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-neutral-50 md:text-4xl">
          Six data types, one capture pipeline
        </h2>

        <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {DATA_TYPES.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[3rem_1fr_1fr] md:gap-8"
            >
              <span className="font-mono text-sm text-neutral-600">
                {item.number}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg text-neutral-50">
                    {item.title}
                    {item.suffix && (
                      <span className="text-neutral-500"> {item.suffix}</span>
                    )}
                  </h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
