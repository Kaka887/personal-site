import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import type { ContactLink } from '../data/site'

type ContactProps = {
  heading: string
  body: string
  email: string
  links: ContactLink[]
}

export function Contact({ heading, body, email, links }: ContactProps) {
  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-5xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="Contact" />
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.015em] text-foreground md:text-5xl">{heading}</h2>
          <p className="mt-6 max-w-3xl text-[18px] leading-[1.8] text-muted-foreground">{body}</p>

          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex font-mono text-xs uppercase tracking-editorial text-accent transition-colors duration-150 hover:text-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`Send email to ${email}`}
          >
            {email}
          </a>

          <ul className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground transition-colors duration-150 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`Open ${link.label}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

