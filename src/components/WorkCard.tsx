import { assetPath } from '../utils/assetPath'

type WorkCardProps = {
  kind: 'Report' | 'Presentation'
  title: string
  year: string
  description: string
  image: string
  alt: string
  link: string
  linkLabel: string
  fallbackImage: string
}

export function WorkCard({
  kind,
  title,
  year,
  description,
  image,
  alt,
  link,
  linkLabel,
  fallbackImage,
}: WorkCardProps) {
  return (
    <article className="relative rounded-editorial border border-border bg-card p-5 shadow-editorial before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:rounded-t-editorial before:bg-accent md:p-6">
      <div className="grid gap-5 md:grid-cols-[220px_minmax(0,1fr)] md:gap-6">
        <div className="overflow-hidden rounded-[6px] border border-border bg-muted">
          <img
            src={assetPath(image)}
            alt={alt}
            className="h-full w-full object-contain"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = assetPath(fallbackImage)
            }}
          />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">
            {kind} · {year}
          </p>
          <h4 className="mt-2 font-serif text-2xl leading-tight tracking-[-0.01em] text-foreground">{title}</h4>
          <p className="mt-3 text-[17px] leading-[1.8] text-muted-foreground">{description}</p>
          <a
            href={link}
            className="mt-5 inline-flex min-h-[44px] items-center rounded-[6px] border border-border px-4 font-mono text-[11px] uppercase tracking-editorial text-foreground transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            aria-label={`${linkLabel}: ${title}`}
          >
            {linkLabel}
          </a>
        </div>
      </div>
    </article>
  )
}

