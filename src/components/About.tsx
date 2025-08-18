import type { SiteContent } from '../lib/types'

export default function About({ content }: { content: SiteContent | null }) {
  if (!content) return null
  const a = content.about
  return (
    <div className="space-y-4">
      <p className="text-slate-700 dark:text-slate-300">{a.summary}</p>
      <div className="flex flex-wrap gap-2">
        {a.highlights?.map((h) => (
          <span key={h} className="badge">{h}</span>
        ))}
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400">
        {a.location ? <div><strong>Location:</strong> {a.location}</div> : null}
        {a.languages?.length ? <div><strong>Languages:</strong> {a.languages.join(', ')}</div> : null}
      </div>
    </div>
  )
}
