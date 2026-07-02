import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'
import './Navbar.css'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = personal.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo / initials */}
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">//</span>
          {initials || 'DEV'}
        </a>

        {/* Desktop links */}
        <nav className="navbar__links">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
          {personal.resumeUrl && (
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="navbar__resume-btn"
            >
              Resume
            </a>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${open ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        {personal.resumeUrl && (
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="navbar__resume-btn"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        )}
      </div>
    </header>
  )
}
