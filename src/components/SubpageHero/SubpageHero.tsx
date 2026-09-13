import Header from '../Header/Header'
import bgGraphics from '../../assets/subpage-hero/background-graphics.png'
import fgGraphics from '../../assets/subpage-hero/foreground-graphics.png'
import accentGraphic from '../../assets/subpage-hero/graphic.svg'
import './SubpageHero.css'

interface SubpageHeroProps {
  title: string
  subtitle?: string
}

/**
 * Hero band at the top of every interior ("subpage") page — Contact, About,
 * Services, etc. Structure and assets are derived from the Figma "Subpage
 * hero" template (node 2995:459): a soft background graphic and a
 * steel-structure photo bleeding in from the right behind a large page
 * title and one-line subheading, with the site's standard header on top.
 */
export default function SubpageHero({ title, subtitle }: SubpageHeroProps) {
  return (
    <section className="pe-subpage-hero">
      <Header />

      {/* Band establishes the section's height (from __art alone); __content
          is absolutely positioned within it so it overlays the graphics
          instead of pushing the next section down. */}
      <div className="pe-subpage-hero__band">
        <div className="pe-subpage-hero__art" aria-hidden="true">
          <div className="pe-subpage-hero__bg-wrap">
            <img className="pe-subpage-hero__bg" src={bgGraphics} alt="" />
          </div>
          <div className="pe-subpage-hero__fg-wrap">
            <img className="pe-subpage-hero__fg" src={fgGraphics} alt="" />
          </div>
          <img className="pe-subpage-hero__accent" src={accentGraphic} alt="" />
          <div className="pe-subpage-hero__overlay" />
        </div>

        <div className="pe-subpage-hero__content">
          <h1 className="pe-subpage-hero__title">{title}</h1>
          {subtitle && <p className="pe-subpage-hero__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
