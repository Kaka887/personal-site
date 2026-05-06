import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../utils/cn'

type RevealProps = PropsWithChildren<{
  className?: string
}>

export function Reveal({ className, children }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

