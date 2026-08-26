import Image from 'next/image'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Athena Labs"
      width={1027}
      height={876}
      priority
      // The mark is dark-on-transparent; inverted it reads as a light cube on the dark UI.
      className={cn(
        'h-[30px] w-auto select-none invert transition-transform duration-300 group-hover:scale-105',
        className
      )}
    />
  )
}
