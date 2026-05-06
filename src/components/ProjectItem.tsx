import type { ProjectItemData } from '../data/site'

type ProjectItemProps = {
  item: ProjectItemData
}

export function ProjectItem({ item }: ProjectItemProps) {
  return (
    <article className="grid gap-6 border-b border-border py-8 md:grid-cols-[140px_160px_minmax(0,1fr)] md:items-start">
      <p className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">{item.year}</p>
      <p className="font-mono text-[11px] uppercase tracking-editorial text-accent">{item.category}</p>
      <div>
        <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-foreground">{item.title}</h3>
        <p className="mt-3 max-w-3xl text-[17px] leading-[1.8] text-muted-foreground">{item.summary}</p>
      </div>
    </article>
  )
}

