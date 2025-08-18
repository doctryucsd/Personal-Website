export type SiteContent = {
  meta: {
    siteName: string
    // tagline: string
    description?: string
    ogImage?: string
    photo?: string
  }
  links: {
    email?: string
    linkedin?: string
    github?: string
    githubSchool?: string
    scholar?: string
    resumeUrl?: string
  }
  about: {
    summary: string
    highlights?: string[]
    location?: string
    languages?: string[]
  }
  experience: Array<{
    role: string
    org: string
    start: string
    end: string
    points: string[]
    tech?: string[]
  }>
  projects: Array<{
    title: string
    summary: string
    links?: {
      paper?: string
      code?: string
      slides?: string
      demo?: string
    }
    tags?: string[]
  }>
  publications: Array<{
    authors: string
    title: string
    venue: string
    year?: string
    url?: string
    selected?: boolean
  }>
  skills: {
    programming?: string[]
    ml?: string[]
    hardware?: string[]
    languages?: string[]
    [key: string]: string[] | undefined
  }
}
