import { Download } from 'lucide-react'
import { skills, experiences, education, resumeLink } from '../data/resume'

const Resume = () => {
  return (
    <section className="max-w-content mx-auto px-6 md:px-0 pt-16 pb-20">
      <div className="flex items-start justify-between gap-4 mb-12">
        <h1 className="font-serif text-3xl md:text-4xl">Resume</h1>
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-line px-4 py-2.5 rounded-md text-sm font-medium hover:border-ink transition-colors whitespace-nowrap"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      {/* Skills */}
      <div className="mb-14">
        <p className="text-xs font-mono text-accent uppercase tracking-wide mb-4">Skills</p>
        <div className="grid  gap-y-4">
          {skills.map((skill) => (
            <div key={skill.category} className="flex gap-3">
              <span className="text-sm font-medium min-w-[140px]">{skill.category}</span>
              <span className="text-sm text-muted">{skill.details}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-14">
        <p className="text-xs font-mono text-accent uppercase tracking-wide mb-4">Experience</p>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.title + exp.company} className="border-l-2 border-line pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-serif text-xl">{exp.title}</h3>
                <span className="text-xs font-mono text-muted">{exp.duration}</span>
              </div>
              <p className="text-sm text-muted mb-4">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp) => (
                  <li key={resp} className="text-sm text-ink leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent" />
                    {resp}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted">{exp.tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <p className="text-xs font-mono text-accent uppercase tracking-wide mb-4">Education</p>
        <div className="border-l-2 border-line pl-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="font-serif text-xl">{education.degree}</h3>
            <span className="text-xs font-mono text-muted">{education.year}</span>
          </div>
          <p className="text-sm text-muted mb-4">
            {education.institution} · {education.location}
          </p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="text-xs text-muted border border-line rounded px-2.5 py-1"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
