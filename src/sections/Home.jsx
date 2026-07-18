import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react'
import PropTypes from 'prop-types'

const SOCIALS = [
  { icon: Github, href: 'https://github.com/LolaVictoria', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/damilola-oniyide-9a013a205', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/1_and_only_lola', label: 'X' },
]

const Home = ({ setActiveSection }) => {
  return (
    <section className="max-w-content mx-auto px-6 md:px-0 pt-16 md:pt-24 pb-20">
      <p className="fade-up text-sm text-muted mb-6" style={{ animationDelay: '0s' }}>
        Software engineer
      </p>

      <h1
        className="fade-up font-serif text-4xl md:text-6xl leading-[1.1] mb-8 max-w-[640px]"
        style={{ animationDelay: '0.08s' }}
      >
        I build web applications that turn complex problems into simple, working software.
      </h1>

      <p
        className="fade-up text-lg text-muted leading-relaxed max-w-[520px] mb-10"
        style={{ animationDelay: '0.16s' }}
      >
        Computer science graduate with a foundation in scalable web applications, from a
        clinical decision support system used by clinicians and patients, to an e-learning
        platform that makes coding approachable for children.
      </p>

      <div
        className="fade-up flex flex-wrap items-center gap-4"
        style={{ animationDelay: '0.3s' }}
      >
        <button
          onClick={() => setActiveSection('projects')}
          className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          View projects
          <ArrowDown size={16} />
        </button>
        <a
          href="mailto:damilolaoniyide11@gmail.com"
          className="inline-flex items-center gap-2 border border-line px-5 py-3 rounded-md text-sm font-medium text-ink hover:border-ink transition-colors"
        >
          <Mail size={16} />
          Get in touch
        </a>

        <div className="flex items-center gap-3 ml-auto">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-ink transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

Home.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
}

export default Home
