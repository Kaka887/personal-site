import { useEffect } from 'react'
import type { WorkPhotoItem } from '../data/site'
import { assetPath } from '../utils/assetPath'

type PhotoLightboxProps = {
  item: WorkPhotoItem | null
  onClose: () => void
  fallbackImage: string
}

export function PhotoLightbox({ item, onClose, fallbackImage }: PhotoLightboxProps) {
  useEffect(() => {
    if (!item) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [item, onClose])

  if (!item) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-label={`Preview image: ${item.title}`}>
      <button
        type="button"
        className="absolute inset-0 bg-foreground/50 backdrop-blur-[1px]"
        onClick={onClose}
        aria-label="Close image preview"
      />
      <div className="relative w-full max-w-5xl overflow-hidden rounded-editorial border border-border bg-card shadow-editorial">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[6px] border border-border bg-background/95 font-mono text-[11px] uppercase tracking-editorial text-foreground transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          aria-label="Close preview"
        >
          Close
        </button>
        <img
          src={assetPath(item.image)}
          alt={item.alt}
          className="max-h-[75vh] w-full object-cover"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = assetPath(fallbackImage)
          }}
        />
        <div className="border-t border-border px-5 py-4 md:px-6">
          <h4 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-foreground">{item.title}</h4>
          <p className="mt-2 text-[16px] leading-[1.8] text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

