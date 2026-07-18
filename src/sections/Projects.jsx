import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section className="max-w-content mx-auto px-6 md:px-0 pt-16 pb-20">
      <h1 className="font-serif text-3xl md:text-4xl mb-2">Projects</h1>
      <p className="text-muted mb-12 max-w-[520px]">
        A mix of shipped client work and self-directed builds used to learn system design
        and full-stack architecture in depth.
      </p>

      <div className="divide-y divide-line border-t border-b border-line">
        {projects.map((project) => (
          <div key={project.title} className="py-8 grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
            <div>
              <h2 className="font-serif text-xl mb-1">{project.title}</h2>
              <p className="text-xs font-mono text-accent uppercase tracking-wide">
                {project.tag}
              </p>
            </div>
            <div>
              <p className="text-ink leading-relaxed mb-3 max-w-[560px]">
                {project.description}
              </p>
              <p className="text-sm text-muted mb-4">{project.stack}</p>
              <div className="flex gap-5 text-sm">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink font-medium hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 border border-line rounded-md p-8 text-center">
        <h3 className="font-serif text-xl mb-2">Interested in collaborating?</h3>
        <p className="text-muted mb-5">Let's build something together.</p>
        <a
          href="mailto:damilolaoniyide11@gmail.com"
          className="inline-flex bg-ink text-paper px-5 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          Start a project
        </a>
      </div>
    </section>
  )
}

export default Projects
