import { cn } from '@/lib/utils'

export function SphereGraphic({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute', className)}>
      {/* Body */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 42% 32%, rgba(150,150,160,0.20) 0%, rgba(70,70,80,0.10) 40%, rgba(0,0,0,0) 72%)',
        }}
      />

      {/* Rim */}
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.07]" />

      {/* Dot texture */}
      <div
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.45) 0.5px, transparent 0.5px)',
          backgroundSize: '16px 16px',
          maskImage:
            'radial-gradient(circle at 42% 32%, black 0%, transparent 68%)',
          WebkitMaskImage:
            'radial-gradient(circle at 42% 32%, black 0%, transparent 68%)',
        }}
      />

      {/* Specular highlight */}
      <div className="absolute left-[54%] top-[47%] h-3 w-3 rounded-full bg-white/70 blur-[3px]" />
    </div>
  )
}
