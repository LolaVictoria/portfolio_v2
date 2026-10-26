
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'projects', label: 'Projects', path: '/projects' },
  { key: 'resume', label: 'Resume', path: '/resume' },
  { key: 'articles', label: 'Articles', path: '/articles' },
  { key: 'contact', label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const go = (path) => {
    navigate(path)
    setOpen(false)
  }

  const isActive = (item) => {
    if (item.path === '/') {
      return location.pathname === '/'
    }

    return location.pathname === item.path ||
      (item.path === '/articles' &&
        location.pathname.startsWith('/articles/'))
  }

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-0 flex items-center justify-between h-16">
        <button
          onClick={() => go('/')}
          className="font-serif text-lg tracking-tight text-ink"
        >
          Damilola Oniyide
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.path)}
              aria-current={isActive(item) ? 'page' : undefined}
              className={`text-sm transition-colors ${
                isActive(item)
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
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.path)}
              aria-current={isActive(item) ? 'page' : undefined}
              className={`text-left text-base ${
                isActive(item)
                  ? 'text-ink font-medium'
                  : 'text-muted hover:text-ink'
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

export default Navbar
