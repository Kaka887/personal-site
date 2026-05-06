import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../utils/cn'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: ButtonVariant
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'border border-accent bg-accent text-white hover:border-accent-secondary hover:bg-accent-secondary hover:text-white',
  secondary:
    'border border-foreground/70 bg-transparent text-foreground hover:border-accent hover:text-accent',
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex min-h-[44px] items-center justify-center rounded-[6px] px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

