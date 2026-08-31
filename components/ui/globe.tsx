'use client'

import React, { useEffect, useState } from 'react'
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion'
import { cn } from '@/lib/utils'

/** Equirectangular (2:1) Earth map, self-hosted so the loop and the marker
 *  maths can rely on the exact aspect ratio. */
const DEFAULT_TEXTURE = '/earth-texture.jpg'

/** Seconds for one full revolution while free-spinning. */
const SPIN_SECONDS = 30
/** Seconds to cover the last, partial turn onto the target longitude. */
const SETTLE_SECONDS = 2.6
/** Added to the glide for each whole extra revolution it has to fit in. */
const TURN_SECONDS = 2.2

export interface GlobeMarker {
  lat: number
  lon: number
  label: string
  /** Renders as a faint country caption rather than a pin with a pill. */
  muted?: boolean
}

interface GlobeProps {
  /** Diameter in px. The lighting is tuned for 250, and scales proportionally. */
  size?: number
  /** Applied to the outer wrapper. Pass `h-screen` for the standalone/full-page look. */
  className?: string
  showStars?: boolean
  /** Map texture. Must tile seamlessly left-to-right. */
  texture?: string
  /** Width/height of the texture. The rotation wraps on exactly this. */
  textureAspect?: number
  /** Magnification of the map. >1 zooms in and pulls mid-latitudes towards
   *  the middle of the disc. */
  zoom?: number
  /** Longitude/latitude the globe eases onto once `settle` turns true. */
  center?: { lat: number; lon: number }
  /** Flip to true (e.g. when the section scrolls into view) to stop the spin
   *  and glide to `center`. Without `center` the globe just keeps spinning. */
  settle?: boolean
  /** Whole extra revolutions to run through before landing on `center`, on top
   *  of the partial turn it already owes. One reads as a deliberate flourish. */
  settleTurns?: number
  /** Revealed once the globe has come to rest. */
  markers?: GlobeMarker[]
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
  zoom = 1,
  center,
  settle = false,
  settleTurns = 1,
  markers = [],
}) => {
  const reduce = useReducedMotion()

  const r = size / 250
  const px = (n: number) => `${n * r}px`

  // Rendered size of the map behind the disc.
  const mapW = size * textureAspect * zoom
  const mapH = size * zoom

  // Equirectangular projection -> pixels within the rendered map.
  const mapX = (lon: number) => ((lon + 180) / 360) * mapW
  const mapY = (lat: number) => ((90 - lat) / 180) * mapH

  // Offset that puts `center` in the middle of the disc. Vertically we pin the
  // top: the disc must stay covered, so only `zoom` moves the latitude down.
  const targetX = center ? size / 2 - mapX(center.lon) : 0

  const x = useMotionValue(0)
  const backgroundPosition = useMotionTemplate`${x}px 0px`
  const [atRest, setAtRest] = useState(false)

  const shouldSettle = settle && !!center

  useEffect(() => {
    if (reduce) {
      x.set(targetX)
      setAtRest(true)
      return
    }

    if (!shouldSettle) {
      setAtRest(false)
      // The map repeats every mapW, so sliding exactly one width loops seamlessly.
      const from = x.get()
      const controls = animate(x, [from, from - mapW], {
        duration: SPIN_SECONDS,
        ease: 'linear',
        repeat: Infinity,
      })
      return () => controls.stop()
    }

    // Carry on in the same direction — to the nearest equivalent longitude,
    // then `settleTurns` whole revolutions past it — so the globe winds up
    // for a last lap and decelerates instead of snapping backwards.
    const current = x.get()
    const turns = Math.max(0, Math.round(settleTurns))
    const k = Math.floor((current - targetX) / mapW) - turns
    const controls = animate(x, targetX + k * mapW, {
      duration: SETTLE_SECONDS + turns * TURN_SECONDS,
      // Picks up speed for the lap, then a long tail onto the mark.
      ease: turns > 0 ? [0.45, 0, 0.1, 1] : [0.16, 1, 0.3, 1],
    })
    controls.then(() => setAtRest(true))
    return () => controls.stop()
  }, [shouldSettle, targetX, mapW, settleTurns, reduce, x])

  return (
    <>
      <style>
        {`
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes globePing {
            0% { transform: scale(1); opacity: 0.55; }
            70% { transform: scale(2.6); opacity: 0; }
            100% { transform: scale(2.6); opacity: 0; }
          }
        `}
      </style>
      <div className={cn('flex items-center justify-center', className)}>
        {/* Positioning context for the stars and markers, which must sit
            outside the globe's overflow-hidden box to be visible. */}
        <div className="relative" style={{ width: size, height: size }}>
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              backgroundImage: `url('${texture}')`,
              backgroundSize: `${mapW}px ${mapH}px`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition,
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

          {/* Markers only make sense once the globe has stopped turning */}
          {center &&
            markers.map((m) => {
              const mx = targetX + mapX(m.lon)
              const my = mapY(m.lat)

              return (
                <motion.div
                  key={m.label}
                  className="absolute"
                  style={{ left: mx, top: my, translateX: '-50%', translateY: '-50%' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: atRest ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: atRest ? 0.15 : 0 }}
                >
                  {m.muted ? (
                    <span className="whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-white/45">
                      {m.label}
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3 items-center justify-center">
                        <span
                          className="absolute h-3 w-3 rounded-full bg-white/70"
                          style={{ animation: 'globePing 2.6s ease-out infinite' }}
                        />
                        <span className="relative h-2 w-2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.65)]" />
                      </span>
                      <span className="whitespace-nowrap rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-neutral-100 backdrop-blur-md">
                        {m.label}
                      </span>
                    </span>
                  )}
                </motion.div>
              )
            })}

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
