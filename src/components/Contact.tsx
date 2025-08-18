import { Mail, Linkedin, Github, GraduationCap, FileText } from 'lucide-react'
import type { SiteContent } from '../lib/types'

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="btn">
      {children}
    </a>
  )
}

export default function Contact({ content }: { content: SiteContent | null }) {
  if (!content) return null
  const { meta, links, about } = content

  // If you added meta.photo in site.json and placed the file in /public
  const photoSrc = (meta as any).photo ? import.meta.env.BASE_URL + (meta as any).photo : null

  return (
    <div className="flex flex-col items-start md:items-center gap-5 md:gap-7 md:text-center">
      {/* Photo (optional) */}
      {photoSrc && (
        <img
          src={photoSrc}
          alt={`${meta.siteName} headshot`}
          className="h-28 w-28 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-800"
          loading="lazy"
        />
      )}

      {/* Name & tagline */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">{meta.siteName}</h1>
      </div>

      {/* Contact buttons */}
      <div className="flex flex-wrap gap-2">
        {links.email && (
          <LinkButton href={`mailto:${links.email}`}>
            <Mail className="h-4 w-4" /> {links.email}
          </LinkButton>
        )}
        {links.linkedin && (
          <LinkButton href={links.linkedin}>
            <Linkedin className="h-4 w-4" /> LinkedIn
          </LinkButton>
        )}
        {links.github && (
          <LinkButton href={links.github}>
            <Github className="h-4 w-4" /> GitHub
          </LinkButton>
        )}
        {links.githubSchool && (
          <LinkButton href={links.githubSchool}>
            <Github className="h-4 w-4" /> GitHub (UCSD)
          </LinkButton>
        )}
        {links.scholar && (
          <LinkButton href={links.scholar}>
            <GraduationCap className="h-4 w-4" /> Scholar
          </LinkButton>
        )}
        {links.resumeUrl && (
          <LinkButton href={links.resumeUrl}>
            <FileText className="h-4 w-4" /> Resume
          </LinkButton>
        )}
      </div>

      {/* --- Merged About content --- */}
      <div className="w-full max-w-3xl text-left md:text-center pt-2">
        {/* Summary */}
        {about?.summary && (
          <p className="text-slate-700 dark:text-slate-300">{about.summary}</p>
        )}

        {/* Highlights */}
        {about?.highlights?.length ? (
          <div className="mt-3 flex flex-wrap gap-2 justify-start md:justify-center">
            {about.highlights.map((h) => (
              <span key={h} className="badge">{h}</span>
            ))}
          </div>
        ) : null}

        {/* Location & Languages */}
        {(about?.location || about?.languages?.length) && (
          <div className="mt-3 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            {about.location ? <div><strong>Location:</strong> {about.location}</div> : null}
            {about.languages?.length ? (
              <div><strong>Languages:</strong> {about.languages.join(', ')}</div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
