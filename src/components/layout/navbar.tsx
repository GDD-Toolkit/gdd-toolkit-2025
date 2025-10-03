import { useState, useRef, useEffect } from 'react'
// ...existing code...

type Menu = {
  label: string
  href?: string
  items?: { label: string; href: string }[]
}

const MENUS: Menu[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Development Ethics',
    items: [
      { label: 'Ethics Canvas', href: '/ethics-canvas' },
      { label: 'Worthwhile Development', href: '/worthwhile-development' },
      { label: 'Human-Centered Design', href: '/hcd' }
    ]
  },
  {
    label: 'Case Studies',
    items: [
      { label: 'Health', href: '/case-studies/health' },
      { label: 'Energy', href: '/case-studies/energy' },
      { label: 'Water', href: '/case-studies/water' }
    ]
  },
  {
    label: 'Resources',
    items: [
      { label: 'Readings', href: '/resources/readings' },
      { label: 'Tools', href: '/resources/tools' }
    ]
  },
  { label: 'Contacts', href: '/contacts' }
]

export default function Navbar() {
  const [open, setOpen] = useState<number | null>(null)
  const [mobile, setMobile] = useState(false)
  const closeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  const openMenu = (i: number) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpen(i)
  }

  const scheduleClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = window.setTimeout(() => setOpen(null), 150)
  }

  return (
    <header className="sticky top-0 z-50 border-b">
      <div className="bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-tight">
            <span className="px-3 py-1 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white border border-white/30">GDD</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {MENUS.map((m, i) =>
              m.items ? (
                <div
                  key={m.label}
                  className="relative"
                  onMouseEnter={() => openMenu(i)}
                  onMouseLeave={() => scheduleClose()}
                >
                  <button className="inline-flex items-center gap-1 hover:opacity-90">
                    {m.label} <span className="text-white/70">▾</span>
                  </button>
                  {open === i && (
                    <div
                      className="absolute left-0 mt-2 w-56 rounded-xl bg-white text-gray-900 shadow-lg border"
                      onMouseEnter={() => openMenu(i)}
                      onMouseLeave={() => scheduleClose()}
                    >
                      <ul className="py-2">
                        {m.items.map((it) => (
                          <li key={it.href}>
                            <a className="block px-3 py-2 hover:bg-gray-50 rounded-lg" href={it.href}>
                              {it.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                ) : (
                <a key={m.label} href={m.href} className="hover:opacity-90">
                  {m.label === 'Home' || m.label === 'Contacts' ? (
                    <span className="px-3 py-1 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white border border-white/30">{m.label}</span>
                  ) : (
                    m.label
                  )}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:block" />

          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/30"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-3 space-y-2 text-sm">
            {MENUS.map((m) =>
              m.items ? (
                <details key={m.label}>
                  <summary className="cursor-pointer py-2">{m.label}</summary>
                  <ul className="pl-3 py-1 space-y-1">
                    {m.items.map((it) => (
                      <li key={it.href}>
                        <a className="block px-2 py-1 rounded hover:bg-gray-50" href={it.href}>
                          {it.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a key={m.label} href={m.href} className="block py-2">
                  {m.label === 'Home' || m.label === 'Contacts' ? (
                    <span className="inline-block px-3 py-1 rounded-xl text-sm font-medium bg-black text-white">{m.label}</span>
                  ) : (
                    m.label
                  )}
                </a>
              )
            )}
            <div className="pt-2 border-t">
              <a href="/signin" className="block py-2">Sign In</a>
              <a href="/signup" className="block py-2">Sign Up</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
