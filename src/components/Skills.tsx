import type { SiteContent } from '../lib/types'

export default function Skills({ content }: { content: SiteContent | null }) {
  if (!content) return null
  const sections = Object.entries(content.skills)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {sections.map(([k, arr]) => (
        <div key={k} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
          <div className="font-semibold mb-2 capitalize">{k}</div>
          <div className="flex flex-wrap gap-2">
            {arr?.map((s) => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}
