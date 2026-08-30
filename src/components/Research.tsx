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
          {p.links && Object.entries(p.links).some(([, url]) => url?.startsWith('http')) ? (
            <div className="mt-3 text-sm flex flex-wrap gap-3">
              {Object.entries(p.links)
                .filter((entry): entry is [string, string] => typeof entry[1] === 'string' && entry[1].startsWith('http'))
                .map(([label, url]) => (
                  <a key={label} className="underline" href={url} target="_blank" rel="noreferrer">{label}</a>
                ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
