import type { SiteContent } from '../lib/types'

export default function Publications({ content }: { content: SiteContent | null }) {
  if (!content) return null
  const selected = content.publications.filter(p => p.selected)
  const rest = content.publications.filter(p => !p.selected)
  const Item = ({ p }: any) => (
    <li className="mb-2">
      <span className="font-medium">{p.authors}.</span> <i>{p.title}</i>. {p.venue}{p.year ? ` ${p.year}` : ''}.
      {p.url ? <> <a className="underline" href={p.url} target="_blank" rel="noreferrer">link</a></> : null}
    </li>
  )
  return (
    <div>
      {selected.length ? (
        <div className="mb-4">
          <div className="font-semibold mb-2">Selected</div>
          <ul>{selected.map((p, i) => <Item key={i} p={p} />)}</ul>
        </div>
      ) : null}
      <ul>{rest.map((p, i) => <Item key={i} p={p} />)}</ul>
    </div>
  )
}
