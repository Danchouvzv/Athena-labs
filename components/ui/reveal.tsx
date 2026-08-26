'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

interface RevealProps {
  children: ReactNode
  className?: string
  /** Seconds to wait before starting — use `i * 0.08` to stagger a list. */
  delay?: number
  /** Distance travelled on the way in. */
  y?: number
  x?: number
  duration?: number
  /** Adds a focus-pull. Costs a repaint, so keep it for headings. */
  blur?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
  duration = 0.7,
  blur = false,
}: RevealProps) {
  // Honour the OS "reduce motion" setting: fade only, no travel.
  const reduce = useReducedMotion()

  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, y, x, ...(blur ? { filter: 'blur(8px)' } : {}) }

  const shown = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, x: 0, ...(blur ? { filter: 'blur(0px)' } : {}) }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      // Trigger on a fraction of the element rather than a pixel inset, so a
      // block that is only partly on screen (after an anchor jump, say) still
      // reveals instead of sitting invisible in view.
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduce ? 0.3 : duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export { EASE }
