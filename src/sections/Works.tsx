import { EditorialCard } from '../components/EditorialCard'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import type { WorkItem } from '../data/site'

type WorksProps = {
  items: WorkItem[]
}

export function Works({ items }: WorksProps) {
  return (
    <section id="works" className="border-b border-border bg-muted/50">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="Works" />
          <div className="grid gap-5 lg:grid-cols-3">
            {items.map((item) => (
              <EditorialCard key={item.title} title={item.title} meta={item.type} interactive>
                <p>{item.summary}</p>
                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center font-mono text-[11px] uppercase tracking-editorial text-accent transition-colors duration-150 hover:text-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  aria-label={`Open work: ${item.title}`}
                >
                  View Work
                </a>
              </EditorialCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

