import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/pe-logo-color-hor.svg'
import './Header.css'

const NAV_LINKS = [
  { label: 'ABOUT US', href: '/#about' },
  { label: 'SERVICES', href: '/#services' },
  { label: 'INDUSTRIES', href: '/#industries' },
  { label: 'CAPABILITIES', href: '/#capabilities' },
]

/**
 * Standalone site header for interior ("subpage") pages — Contact, About,
 * Services, etc. The home page keeps its own transparent header embedded
 * in HeroBanner (it overlays the hero photo/slider and has its own
 * carefully-tuned mobile positioning), so this is a separate component
 * rather than an extraction from it.
 *
 * Deliberately uses its OWN `pe-site-header` / `pe-site-nav` class names
 * rather than reusing HeroBanner's `pe-header` / `pe-nav` — this app has no
 * CSS scoping, so two components sharing class names share every rule
 * written for them, including each other's media-query overrides. An
 * earlier version of this file did reuse those names and it broke
 * HeroBanner's mobile header positioning (Header.css's unscoped `.pe-header`
 * rule won the cascade over HeroBanner.css's mobile-only override).
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="pe-site-header">
      <Link to="/" className="pe-site-header__logo" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Precision Edge" width={299} height={90} />
      </Link>

      <button
        type="button"
        className={`pe-site-header__toggle${menuOpen ? ' is-open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`pe-site-nav${menuOpen ? ' is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <Link to="/contact" className="pe-site-nav__cta" onClick={() => setMenuOpen(false)}>
          CONTACT US
        </Link>
      </nav>
    </header>
  )
}
