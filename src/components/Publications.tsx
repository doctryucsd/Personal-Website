import type { SiteContent } from '../lib/types'
import { useMemo } from 'react'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlightAuthors(authors: string, aliases: string[]) {
  if (!aliases?.length) return authors
  const alts = aliases.filter(Boolean).map(escapeRegExp)
  const re = new RegExp(`(${alts.join('|')})`, 'gi')
  const parts = authors.split(re)

  return parts.map((part, i) =>
    alts.some(a => new RegExp(`^${a}$`, 'i').test(part))
      ? (
          <strong
            key={i}
            className="font-extrabold underline decoration-2 underline-offset-2"
          >
            {part}
          </strong>
        )
      : <span key={i}>{part}</span>
  )
}

export default function Publications({ content }: { content: SiteContent | null }) {
  if (!content) return null
  const me = content.meta?.me ?? []
  const pubs = content.publications

  const Item = ({ p }: any) => {
    const authorsNode = useMemo(() => highlightAuthors(p.authors, me), [p.authors, me])
    return (
      <li>
        <span>{authorsNode}.</span>{' '}
        <i>{p.title}</i>. {p.venue}{p.year ? ` ${p.year}` : ''}.
        {p.url ? <> <a className="underline" href={p.url} target="_blank" rel="noreferrer">link</a></> : null}
      </li>
    )
  }

  return (
    <div>
      <ul className="list-disc pl-5 space-y-3 md:space-y-4 marker:text-slate-400 leading-relaxed">
        {pubs.map((p, i) => <Item key={i} p={p} />)}
      </ul>
    </div>
  )
}
