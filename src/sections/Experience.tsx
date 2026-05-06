import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import type { ExperienceItem } from '../data/site'

type ExperienceProps = {
  items: ExperienceItem[]
}

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="border-b border-border bg-muted/50">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="Experience" />
          <div className="divide-y divide-border border-y border-border">
            {items.map((item) => (
              <article key={`${item.period}-${item.role}`} className="grid gap-4 py-8 md:grid-cols-[170px_minmax(0,1fr)] md:gap-8">
                <p className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">{item.period}</p>
                <div>
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-foreground">{item.role}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-editorial text-accent">{item.organization}</p>
                  <p className="mt-3 text-[17px] leading-[1.8] text-muted-foreground">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

