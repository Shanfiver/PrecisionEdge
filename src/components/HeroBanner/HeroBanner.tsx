import { useState } from 'react'
import logo from '../../assets/pe-logo-color-hor.svg'
import heroBg from '../../assets/hero-bg-clouds.png'
import heroPhoto from '../../assets/hero-image.png'
import heroMap from '../../assets/map.png'
import heroGraphic from '../../assets/graphic-hero.png'
import './HeroBanner.css'

const NAV_LINKS = [
  { label: 'ABOUT US', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'INDUSTRIES', href: '#industries' },
  { label: 'CAPABILITIES', href: '#capabilities' },
]

function ArrowIcon() {
  return (
    <svg className="pe-btn__arrow" width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <circle cx="13" cy="13" r="13" fill="white" />
      <path
        d="M8.5 13H17.5M17.5 13L13.5 9M17.5 13L13.5 17"
        stroke="#E06B1B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function HeroBanner() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="pe-hero">
      <div className="pe-hero__banner">
        <div className="pe-hero__bg" style={{ backgroundImage: `url(${heroBg})` }} aria-hidden="true" />
        <img
          className="pe-hero__photo"
          src={heroPhoto}
          alt="Structural steel detailer reviewing fabrication drawings on site"
        />
        <div className="pe-hero__overlay" aria-hidden="true" />
      </div>
      <img className="pe-hero__map" src={heroMap} alt="" aria-hidden="true" />

      <header className="pe-header">
        <a href="/" className="pe-header__logo">
          <img src={logo} alt="Precision Edge" width={299} height={90} />
        </a>

        <button
          type="button"
          className={`pe-header__toggle${menuOpen ? ' is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`pe-nav${menuOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.label === 'SERVICES' ? 'is-active' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="pe-nav__cta">
            CONTACT US
          </a>
        </nav>
      </header>

      <div className="pe-hero__content">
        <p className="pe-hero__eyebrow">STRUCTURAL STEEL DETAILING &amp; BIM SOLUTIONS</p>

        <h1 className="pe-hero__heading">
          <span className="pe-hero__heading-accent">PRECISION</span>
          <span className="pe-hero__heading-base">IN EVERY CONNECTION</span>
        </h1>

        <span className="pe-hero__divider" aria-hidden="true" />

        <p className="pe-hero__lead">Accurate models. Reliable drawings. Fabrication-ready results</p>

        <div className="pe-hero__actions">
          <a href="#contact" className="pe-btn pe-btn--primary">
            CONNECT WITH US
            <ArrowIcon />
          </a>
          <a href="#services" className="pe-btn pe-btn--secondary">
            EXPLORE OUR SERVICES
          </a>
        </div>

        <div className="pe-hero__stat">
          <span className="pe-hero__stat-bar" aria-hidden="true" />
          <p>
            GLOBAL PROJECTS
            <br />
            STRONGER TOMORROW
          </p>
        </div>
      </div>

      <img className="pe-hero__graphic" src={heroGraphic} alt="" aria-hidden="true" />
    </section>
  )
}
