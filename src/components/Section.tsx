import { ReactNode } from 'react'

export default function Section({ id, title, children }: { id: string, title?: string, children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="container max-w-5xl py-10 md:py-16">
        {title ? <h2 className="section-title mb-6">{title}</h2> : null}
        <div>{children}</div>
      </div>
    </section>
  )
}
