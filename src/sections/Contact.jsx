import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'damilolaoniyide11@gmail.com', href: 'mailto:damilolaoniyide11@gmail.com' },
  //{ icon: MapPin, label: 'Location', value: '', href: null },
]

const SOCIALS = [
  { icon: Github, label: 'GitHub', value: 'LolaVictoria', href: 'https://github.com/LolaVictoria' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Damilola Oniyide', href: 'https://linkedin.com/in/damilola-oniyide-9a013a205' },
  { icon: Twitter, label: 'X', value: '@1_and_only_lola', href: 'https://x.com/1_and_only_lola' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:damilolaoniyide11@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
  }

  return (
    <section className="max-w-content mx-auto px-6 md:px-0 pt-16 pb-20">
      <h1 className="font-serif text-3xl md:text-4xl mb-2">Contact</h1>
      <p className="text-muted mb-12 max-w-[520px]">
        Open to remote roles and freelance work. The fastest way to reach me is email.
      </p>

      <div className="grid md:grid-cols-2 gap-14">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted uppercase mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-line rounded-md px-3.5 py-2.5 text-sm bg-transparent focus:border-ink outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted uppercase mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full border border-line rounded-md px-3.5 py-2.5 text-sm bg-transparent focus:border-ink outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-muted uppercase mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Project inquiry, collaboration, etc."
              className="w-full border border-line rounded-md px-3.5 py-2.5 text-sm bg-transparent focus:border-ink outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-muted uppercase mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              className="w-full border border-line rounded-md px-3.5 py-2.5 text-sm bg-transparent focus:border-ink outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors"
          >
            <Send size={16} />
            Send message
          </button>
        </form>

        <div className="space-y-10">
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-wide mb-4">
              Contact info
            </p>
            <div className="space-y-3">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <info.icon size={16} className="text-muted" />
                  {info.href ? (
                    <a href={info.href} className="text-sm hover:text-accent transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-sm">{info.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-wide mb-4">
              You can also reach out on:
            </p>
            <div className="space-y-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <social.icon size={16} className="text-muted group-hover:text-ink transition-colors" />
                  <span className="text-sm group-hover:text-accent transition-colors">
                    {social.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
