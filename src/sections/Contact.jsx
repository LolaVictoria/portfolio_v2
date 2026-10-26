
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'damilolaoniyide11@gmail.com',
    href: 'mailto:damilolaoniyide11@gmail.com',
  },
]

const SOCIALS = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'LolaVictoria',
    href: 'https://github.com/LolaVictoria',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Damilola Oniyide',
    href: 'https://linkedin.com/in/damilola-oniyide-9a013a205',
  },
  {
    icon: Twitter,
    label: 'X',
    value: '@1_and_only_lola',
    href: 'https://x.com/1_and_only_lola',
  },
]

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (status !== 'idle') {
      setStatus('idle')
      setFeedback('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')
    setFeedback('')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service is not configured yet.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        },
        { publicKey }
      )

      setStatus('success')
      setFeedback('Your message has been sent successfully. Thank you for reaching out!')

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Email sending failed:', error)

      setStatus('error')
      setFeedback(
        'Sorry, your message could not be sent. Please try again or email me directly at damilolaoniyide11@gmail.com.'
      )
    }
  }

  return (
    <section className="max-w-content mx-auto px-6 md:px-0 pt-16 pb-20">
      <h1 className="font-serif text-3xl md:text-4xl mb-2">
        Contact
      </h1>

      <p className="text-muted mb-12 max-w-[520px]">
        Open to remote roles and freelance work. Send me a message directly
        through this form.
      </p>

      <div className="grid md:grid-cols-2 gap-14">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-muted uppercase mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-line rounded-md px-3.5 py-2.5 text-sm bg-transparent focus:border-ink outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-muted uppercase mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                maxLength={254}
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full border border-line rounded-md px-3.5 py-2.5 text-sm bg-transparent focus:border-ink outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-mono text-muted uppercase mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              maxLength={200}
              value={form.subject}
              onChange={handleChange}
              placeholder="Project inquiry, collaboration, etc."
              className="w-full border border-line rounded-md px-3.5 py-2.5 text-sm bg-transparent focus:border-ink outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-muted uppercase mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={5}
              maxLength={5000}
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              className="w-full border border-line rounded-md px-3.5 py-2.5 text-sm bg-transparent focus:border-ink outline-none transition-colors resize-none"
            />
          </div>

          {feedback && (
            <div
              role="status"
              aria-live="polite"
              className={`flex items-start gap-2 text-sm ${
                status === 'success'
                  ? 'text-green-700'
                  : 'text-red-600'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle size={18} className="shrink-0 mt-0.5" />
              ) : (
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
              )}
              <p>{feedback}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={16} />
            {status === 'sending' ? 'Sending...' : 'Send message'}
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
                  <a
                    href={info.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {info.value}
                  </a>
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
                  <social.icon
                    size={16}
                    className="text-muted group-hover:text-ink transition-colors"
                  />
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
