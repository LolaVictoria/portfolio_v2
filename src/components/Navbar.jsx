import { useState } from 'react'
import PropTypes from 'prop-types'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'projects', label: 'Projects' },
  { key: 'resume', label: 'Resume' },
  { key: 'articles', label: 'Articles' },
  { key: 'contact', label: 'Contact' },
]

const Navbar = ({ activeSection, setActiveSection }) => {
  const [open, setOpen] = useState(false)

  const go = (key) => {
    setActiveSection(key)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-0 flex items-center justify-between h-16">
        <button
          onClick={() => go('home')}
          className="font-serif text-lg tracking-tight text-ink"
        >
          Damilola Oniyide
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className={`text-sm transition-colors ${
                activeSection === item.key
                  ? 'text-ink font-medium'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className={`text-left text-base ${
                activeSection === item.key ? 'text-ink font-medium' : 'text-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
}

export default Navbar
