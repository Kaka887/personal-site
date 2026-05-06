import { EditorialCard } from '../components/EditorialCard'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import type { WritingItem } from '../data/site'

type WritingProps = {
  items: WritingItem[]
}

export function Writing({ items }: WritingProps) {
  return (
    <section id="writing" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="Writing / Notes" />
          <div className="grid gap-5 lg:grid-cols-3">
            {items.map((item) => (
              <EditorialCard key={item.title} title={item.title} meta={`${item.date} · ${item.category}`} interactive>
                <p>{item.summary}</p>
                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center font-mono text-[11px] uppercase tracking-editorial text-accent transition-colors duration-150 hover:text-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  aria-label={`Read article: ${item.title}`}
                >
                  Read more
                </a>
              </EditorialCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

