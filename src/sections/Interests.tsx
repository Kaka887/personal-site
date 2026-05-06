import { EditorialCard } from '../components/EditorialCard'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import type { InterestItem } from '../data/site'

type InterestsProps = {
  items: InterestItem[]
}

export function Interests({ items }: InterestsProps) {
  return (
    <section id="interests" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="Interests" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <EditorialCard key={item.title} title={item.title}>
                <p>{item.description}</p>
              </EditorialCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

