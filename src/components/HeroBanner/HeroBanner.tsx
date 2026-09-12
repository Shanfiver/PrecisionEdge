import { useCallback, useEffect, useState } from 'react'
import logo from '../../assets/pe-logo-color-hor.svg'
import heroBg from '../../assets/hero-bg-clouds.png'
import heroPhoto1 from '../../assets/hero-slide-1.png'
import heroPhoto2 from '../../assets/hero-slide-2.png'
import heroPhoto3 from '../../assets/hero-slide-3.png'
import heroPhoto4 from '../../assets/hero-slide-4.png'
import heroMap from '../../assets/map.png'
import heroGraphic from '../../assets/graphic-hero.png'
import btnArrow from '../../assets/icons/btn-arrow.svg'
import './HeroBanner.css'

const NAV_LINKS = [
  { label: 'ABOUT US', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'INDUSTRIES', href: '#industries' },
  { label: 'CAPABILITIES', href: '#capabilities' },
]

// One object per slide — edit any field below to change that slide's copy,
// or swap the `bg`/`photo` imports above (and reference them here) to
// change its imagery. Keep new copy roughly the same length as what's here:
// the slider's height is sized to fit it, like any carousel.
const SLIDES = [
  {
    id: 1,
    bg: heroBg,
    photo: heroPhoto1,
    photoAlt: '3D MODELING & BIM SOLUTIONS',
    eyebrow: '3D MODELING & BIM SOLUTIONS',
    headingAccent: 'BUILD',
    headingBase: 'THE MODEL RIGHT',
    lead: 'Accurate 3D models for better coordination and project understanding.',
    statLine1: 'Better models. Better coordination.',
    statLine2: 'Better outcomes.',
  },
  {
    id: 2,
    bg: heroBg,
    photo: heroPhoto2,
    photoAlt: 'STRUCTURAL STEEL DETAILING',
    eyebrow: 'STRUCTURAL STEEL DETAILING',
    headingAccent: 'DETAILING',
    headingBase: 'THAT BUILDS CONFIDENCE',
    lead: 'Precise drawings developed for seamless fabrication and erection.',
    statLine1: 'Precision in every member.',
    statLine2: 'Clarity in every drawing.',
  },
  {
    id: 3,
    bg: heroBg,
    photo: heroPhoto3,
    photoAlt: 'QUALITY CHECKING & CONTROL',
    eyebrow: 'QUALITY CHECKING & CONTROL',
    headingAccent: 'QUALITY',
    headingBase: 'BUILT INTO EVERY DETAIL',
    lead: 'Rigorous reviews ensuring accuracy, consistency, and reliable deliverables.',
    statLine1: 'Review early. Resolve issues.',
    statLine2: 'Deliver with confidence.',
  },
  {
    id: 4,
    bg: heroBg,
    photo: heroPhoto4,
    photoAlt: 'FABRICATION SUPPORT',
    eyebrow: 'FABRICATION SUPPORT',
    headingAccent: 'FROM DETAILING',
    headingBase: 'TO FABRICATION',
    lead: 'Fabrication-ready files and documentation aligned with project requirements.',
    statLine1: 'Accurate information.',
    statLine2: 'Efficient fabrication. Fewer surprises.',
  },
]

const AUTOPLAY_MS = 6500

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M7.5 4L13.5 10L7.5 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function HeroBanner() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused || menuOpen || prefersReducedMotion()) return
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, menuOpen])

  return (
    <section
      className="pe-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Art layer: sits behind the header (which stays transparent) and
          behind the content layer below, so the photo shows through both. */}
      <div className="pe-hero__art">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={slide.id}
              className={`pe-hero__slide${isActive ? ' is-active' : ''}`}
              aria-hidden={!isActive}
            >
              <div className="pe-hero__banner">
                <div className="pe-hero__bg" style={{ backgroundImage: `url(${slide.bg})` }} aria-hidden="true" />
                <img className="pe-hero__photo" src={slide.photo} alt={isActive ? slide.photoAlt : ''} />
                <div className="pe-hero__overlay" aria-hidden="true" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Static decorations shared by every slide (not per-slide content),
          positioned relative to .pe-hero as a whole. */}
      <img className="pe-hero__map" src={heroMap} alt="" aria-hidden="true" />
      <img className="pe-hero__graphic" src={heroGraphic} alt="" aria-hidden="true" />

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
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="pe-nav__cta">
            CONTACT US
          </a>
        </nav>
      </header>

      <div className="pe-hero__content-slides">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={slide.id}
              className={`pe-hero__slide${isActive ? ' is-active' : ''}`}
              aria-hidden={!isActive}
            >
              <div className="pe-hero__content">
                <p className="pe-hero__eyebrow">{slide.eyebrow}</p>

                <h1 className="pe-hero__heading">
                  <span className="pe-hero__heading-accent">{slide.headingAccent}</span>
                  <span className="pe-hero__heading-base">{slide.headingBase}</span>
                </h1>

                <span className="pe-hero__divider" aria-hidden="true" />

                <p className="pe-hero__lead">{slide.lead}</p>

                <div className="pe-hero__actions">
                  <a href="#contact" className="pe-btn pe-btn--primary" tabIndex={isActive ? undefined : -1}>
                    CONNECT WITH US
                    <img className="pe-btn__arrow" src={btnArrow} alt="" aria-hidden="true" width={26} height={26} />
                  </a>
                  <a href="#services" className="pe-btn pe-btn--secondary" tabIndex={isActive ? undefined : -1}>
                    EXPLORE OUR SERVICES
                  </a>
                </div>

                <div className="pe-hero__stat">
                  <span className="pe-hero__stat-bar" aria-hidden="true" />
                  <p>
                    {slide.statLine1}
                    <br />
                    {slide.statLine2}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <button
        type="button"
        className="pe-hero__arrow pe-hero__arrow--prev"
        aria-label="Previous slide"
        onClick={() => goTo(activeIndex - 1)}
      >
        <ChevronIcon />
      </button>
      <button
        type="button"
        className="pe-hero__arrow pe-hero__arrow--next"
        aria-label="Next slide"
        onClick={() => goTo(activeIndex + 1)}
      >
        <ChevronIcon />
      </button>

      <div className="pe-hero__dots" role="tablist" aria-label="Hero slides">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to slide ${index + 1}`}
            className={`pe-hero__dot${index === activeIndex ? ' is-active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
