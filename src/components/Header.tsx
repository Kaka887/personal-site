import { useState } from 'react'
import type { NavItem } from '../data/site'

type HeaderProps = {
  name: string
  title: string
  navItems: NavItem[]
}

export function Header({ name, title, navItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-[2px]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          aria-label="Go to top of page"
          className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <p className="font-serif text-xl tracking-[-0.02em] text-foreground">{name}</p>
          <p className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">{title}</p>
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground transition-colors duration-150 hover:text-accent focus-visible:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[6px] border border-border text-foreground transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="font-mono text-[11px] uppercase tracking-editorial">{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-[6px] px-3 py-3 font-mono text-[11px] uppercase tracking-editorial text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

