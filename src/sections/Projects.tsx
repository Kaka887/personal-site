import { ProjectItem } from '../components/ProjectItem'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import type { ProjectItemData } from '../data/site'

type ProjectsProps = {
  items: ProjectItemData[]
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel label="Selected Projects" />
          <div className="border-t border-border">
            {items.map((item) => (
              <ProjectItem key={item.title} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

