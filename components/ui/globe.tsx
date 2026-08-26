import React from 'react'
import { cn } from '@/lib/utils'

/** Equirectangular (2:1) Earth map — 2048x1024, wraps seamlessly at the seam. */
const DEFAULT_TEXTURE =
  'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'

interface GlobeProps {
  /** Diameter in px. The lighting is tuned for 250, and scales proportionally. */
  size?: number
  /** Applied to the outer wrapper. Pass `h-screen` for the standalone/full-page look. */
  className?: string
  showStars?: boolean
  /** Map texture. Must tile seamlessly left-to-right. */
  texture?: string
  /**
   * Width/height of the texture. With `background-size: cover` on a square box
   * the map renders `size * aspect` wide, and one rotation must shift by exactly
   * that much — otherwise the loop visibly jumps.
   */
  textureAspect?: number
}

/** Star offsets, authored against a 250px globe and scaled with it. */
const STARS = [
  { left: -20, top: 0, animation: 'twinkling 3s infinite' },
  { left: -40, top: 30, animation: 'twinkling-slow 2s infinite' },
  { left: 350, top: 90, animation: 'twinkling-long 4s infinite' },
  { left: 200, top: 290, animation: 'twinkling 3s infinite' },
  { left: 50, top: 270, animation: 'twinkling-fast 1.5s infinite' },
  { left: 250, top: -50, animation: 'twinkling-long 4s infinite' },
  { left: 290, top: 60, animation: 'twinkling-slow 2s infinite' },
]

const Globe: React.FC<GlobeProps> = ({
  size = 250,
  className,
  showStars = true,
  texture = DEFAULT_TEXTURE,
  textureAspect = 2,
}) => {
  const r = size / 250
  const px = (n: number) => `${n * r}px`

  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: var(--globe-shift, 400px) 0; }
          }
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
        `}
      </style>
      <div className={cn('flex items-center justify-center', className)}>
        {/* Positioning context for the stars, which must sit outside the
            globe's overflow-hidden box to be visible. */}
        <div
          className="relative"
          style={{ width: size, height: size }}
        >
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              backgroundImage: `url('${texture}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'left',
              backgroundRepeat: 'repeat-x',
              animation: 'earthRotate 30s linear infinite',
              ['--globe-shift' as string]: `${size * textureAspect}px`,
              boxShadow: [
                `0 0 ${px(20)} rgba(255,255,255,0.2)`,
                `-${px(5)} 0 ${px(8)} #c3f4ff inset`,
                `${px(15)} ${px(2)} ${px(25)} #000 inset`,
                `-${px(24)} -${px(2)} ${px(34)} #c3f4ff99 inset`,
                `${px(250)} 0 ${px(44)} #00000066 inset`,
                `${px(150)} 0 ${px(38)} #000000aa inset`,
              ].join(', '),
            }}
          />

          {/* Stars */}
          {showStars &&
            STARS.map((star, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: star.left * r,
                  top: star.top * r,
                  animation: star.animation,
                }}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default Globe
