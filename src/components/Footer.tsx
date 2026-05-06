type FooterProps = {
  name: string
  note: string
}

export function Footer({ name, note }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">
          {new Date().getFullYear()} {name}
        </p>
        <p className="text-sm text-muted-foreground">{note}</p>
      </div>
    </footer>
  )
}

