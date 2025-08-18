import type { SiteContent } from '../lib/types'

export default function Experience({ content }: { content: SiteContent | null }) {
  if (!content) return null
  return (
    <div className="space-y-6">
      {content.experience.map((e, idx) => (
        <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-semibold">{e.role} • {e.org}</div>
            <div className="text-sm text-slate-500">{e.start} – {e.end}</div>
          </div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            {e.points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
          {e.tech?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {e.tech.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
