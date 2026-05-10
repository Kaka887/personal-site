import { useState } from 'react'
import { PhotoLightbox } from '../components/PhotoLightbox'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { WorkCard } from '../components/WorkCard'
import type { WorkPhotoItem, WorksData } from '../data/site'
import { assetPath } from '../utils/assetPath'

type WorksProps = {
  items: WorksData
}

export function Works({ items }: WorksProps) {
  const [activePhoto, setActivePhoto] = useState<WorkPhotoItem | null>(null)

  return (
    <section id="works" className="border-b border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="Works" />

          <header className="max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.015em] text-foreground md:text-5xl">作品分享☺️</h2>
            <p className="mt-5 text-[18px] leading-[1.8] text-muted-foreground">
              一些自己在生活、学习和实习过程中做过的东西和产出……
            </p>
          </header>

          <div className="mt-16 border-t border-border pt-10">
            <div className="mb-7 flex items-center justify-between gap-4">
              <h3 className="font-serif text-3xl tracking-[-0.01em] text-foreground">Photo Gallery</h3>
              <p className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">Click to Preview</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.gallery.map((photo) => (
                <article
                  key={photo.title}
                  className="overflow-hidden rounded-editorial border border-border bg-card shadow-editorial transition-colors duration-200 hover:border-accent/40"
                >
                  <button
                    type="button"
                    onClick={() => setActivePhoto(photo)}
                    className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                    aria-label={`Preview photo: ${photo.title}`}
                  >
                    <div className="overflow-hidden border-b border-border bg-muted">
                      <img
                        src={assetPath(photo.image)}
                        alt={photo.alt}
                        className="aspect-[4/3] h-full w-full object-cover transition-opacity duration-200 hover:opacity-95"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null
                          event.currentTarget.src = assetPath('works/photos/placeholder.svg')
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-foreground">{photo.title}</h4>
                      <p className="mt-3 text-[16px] leading-[1.8] text-muted-foreground">{photo.description}</p>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <h3 className="font-serif text-3xl tracking-[-0.01em] text-foreground">Reports</h3>
            <div className="mt-7 grid gap-5">
              {items.reports.map((report) => (
                <WorkCard
                  key={report.title}
                  kind="Report"
                  title={report.title}
                  year={report.year}
                  description={report.description}
                  image={report.image}
                  alt={report.alt}
                  link={report.link}
                  linkLabel="View Report"
                  fallbackImage="works/reports/placeholder.svg"
                />
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <h3 className="font-serif text-3xl tracking-[-0.01em] text-foreground">Presentations</h3>
            <div className="mt-7 grid gap-5">
              {items.presentations.map((presentation) => (
                <WorkCard
                  key={presentation.title}
                  kind="Presentation"
                  title={presentation.title}
                  year={presentation.year}
                  description={presentation.description}
                  image={presentation.image}
                  alt={presentation.alt}
                  link={presentation.link}
                  linkLabel="View Slides"
                  fallbackImage="works/ppt/placeholder.svg"
                />
              ))}
            </div>
          </div>

          <PhotoLightbox
            item={activePhoto}
            onClose={() => setActivePhoto(null)}
            fallbackImage="works/photos/placeholder.svg"
          />

          <div className="sr-only" aria-live="polite">
            {activePhoto ? `Previewing ${activePhoto.title}` : 'No photo preview open'}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
