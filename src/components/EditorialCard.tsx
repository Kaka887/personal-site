import type { PropsWithChildren, ReactNode } from 'react'
import { cn } from '../utils/cn'

type EditorialCardProps = PropsWithChildren<{
  title: string
  meta?: ReactNode
  className?: string
  interactive?: boolean
}>

export function EditorialCard({ title, meta, className, interactive = false, children }: EditorialCardProps) {
  return (
    <article
      className={cn(
        'relative rounded-editorial border border-border bg-card p-6 shadow-editorial',
        'before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:rounded-t-editorial before:bg-accent',
        interactive
          ? 'transition-colors duration-200 hover:border-accent/40 hover:bg-muted/40 hover:shadow-[0_1px_2px_rgba(26,26,26,0.04),0_12px_24px_rgba(26,26,26,0.06)]'
          : '',
        className,
      )}
    >
      {meta ? <p className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">{meta}</p> : null}
      <h3 className="mt-2 font-serif text-2xl leading-tight tracking-[-0.01em] text-foreground">{title}</h3>
      <div className="mt-3 text-[17px] leading-[1.8] text-muted-foreground">{children}</div>
    </article>
  )
}

