import { useEffect, useMemo, useState } from 'react'
import content from './content/site.json'
import type { SiteContent } from './lib/types'
import Navbar from './components/Navbar'
import About from './components/About'
import Section from './components/Section'
// import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Research'
import Publications from './components/Publications'
import Skills from './components/Skills'

export default function App() {
  const [data, setData] = useState<SiteContent | null>(null)

  useEffect(() => {
    // In a real app, you might fetch this; here we import JSON directly
    setData(content as SiteContent)
  }, [])

  const siteName = data?.meta.siteName ?? 'Your Name'

  useEffect(() => {
    document.title = siteName
  }, [siteName])

  return (
    <div>
      <Navbar content={data} />
      <main className="mt-10 space-y-3 md:space-y-3">
        <Section id="about" title="">
          <About content={data} />
        </Section>
        <Section id="research" title="Research">
          <Projects content={data} />
        </Section>
        <Section id="experience" title="Experience">
          <Experience content={data} />
        </Section>
        <Section id="publications" title="Publications">
          <Publications content={data} />
        </Section>
        <Section id="skills" title="Skills">
          <Skills content={data} />
        </Section>
      </main>
    </div>
  )
}
