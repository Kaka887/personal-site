type SectionLabelProps = {
  label: string
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="mb-8 flex items-center gap-4 text-accent">
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
      <span className="font-mono text-[11px] uppercase tracking-editorial text-accent">{label}</span>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}

