import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

type AboutProps = {
  heading: string
  paragraphs: string[]
}

export function About({ heading, paragraphs }: AboutProps) {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="About" />
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.015em] text-foreground md:text-5xl">
              {heading}
            </h2>
            <div className="space-y-6 text-[17px] leading-[1.8] text-muted-foreground">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

