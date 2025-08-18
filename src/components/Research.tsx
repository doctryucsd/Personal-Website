import type { SiteContent } from '../lib/types'

export default function Projects({ content }: { content: SiteContent | null }) {
  if (!content) return null
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {content.research.map((p, idx) => (
        <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
          <div className="font-semibold text-lg">{p.title}</div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{p.summary}</p>
          {p.tags?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="badge">{t}</span>)}</div>
          ) : null}
          {p.links && (
            <div className="mt-3 text-sm flex flex-wrap gap-3">
              {p.links.paper ? <a className="underline" href={p.links.paper} target="_blank" rel="noreferrer">Paper</a> : null}
              {p.links.code ? <a className="underline" href={p.links.code} target="_blank" rel="noreferrer">Code</a> : null}
              {p.links.slides ? <a className="underline" href={p.links.slides} target="_blank" rel="noreferrer">Slides</a> : null}
              {p.links.demo ? <a className="underline" href={p.links.demo} target="_blank" rel="noreferrer">Demo</a> : null}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
