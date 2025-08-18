import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { FileText } from 'lucide-react'
import type { SiteContent } from '../lib/types'

const links = [
  { id: 'contact', label: 'Contact' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
]

export default function Navbar({ content }: { content: SiteContent | null }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('contact')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -49% 0px', threshold: 0.01 }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const resumeUrl = content?.links?.resumeUrl || ''

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 dark:border-slate-800 backdrop-blur bg-white/70 dark:bg-slate-950/70">
      <nav className="container flex items-center justify-between h-16">
        <a href="#contact" className="font-semibold">
          {content?.meta?.siteName || 'Your Name'}
        </a>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`px-3 py-2 rounded-md text-sm ${active===l.id ? 'bg-slate-100 dark:bg-slate-900' : 'hover:bg-slate-100 dark:hover:bg-slate-900'}`}
              >
                {l.label}
              </a>
            ))}
          </div>
          {resumeUrl && (
            <a href={resumeUrl} className="btn text-sm" target="_blank" rel="noreferrer">
              <FileText className="h-4 w-4" /> Resume
            </a>
          )}
          <ThemeToggle />
          <button className="md:hidden btn py-1 px-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="container py-2 space-y-1">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
