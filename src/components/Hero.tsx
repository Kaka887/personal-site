import { Button } from './Button'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

type HeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="paper-noise" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-20 md:px-8 md:pb-40 md:pt-32">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel label={eyebrow} />
            <h1 className="font-serif text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.12] tracking-[-0.02em] text-foreground">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-[1.8] text-muted-foreground md:text-[19px]">{subtitle}</p>
            <div className="mx-auto mt-10 h-px w-32 bg-border" aria-hidden="true" />
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={primaryCta.href} aria-label={primaryCta.label}>
                {primaryCta.label}
              </Button>
              <Button variant="secondary" href={secondaryCta.href} download aria-label={secondaryCta.label}>
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

