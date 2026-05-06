import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import type { StatItem } from '../data/site'

type StatsProps = {
  items: StatItem[]
}

export function Stats({ items }: StatsProps) {
  return (
    <section id="highlights" className="border-b border-border bg-muted/50">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="Stats / Highlights" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <article key={item.label} className="rounded-editorial border border-border bg-card p-6 shadow-editorial">
                <p className="font-serif text-5xl leading-none tracking-[-0.03em] text-foreground md:text-6xl">{item.value}</p>
                <p className="mt-3 max-w-[22ch] text-[17px] leading-[1.7] text-muted-foreground">{item.label}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

