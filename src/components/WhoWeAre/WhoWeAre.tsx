import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import mainImage from '../../assets/who-we-are-main-image.png'
import mapDark from '../../assets/map-dark.png'
import './WhoWeAre.css'

export default function WhoWeAre() {
  const { ref, visible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`pe-who pe-reveal-group${visible ? ' is-visible' : ''}`}>
      <img className="pe-who__map" src={mapDark} alt="" aria-hidden="true" />

      <div className="pe-who__grid">
        <div className="pe-who__header pe-reveal-item">
          <p className="pe-who__eyebrow">WHO WE ARE</p>
          <h2 className="pe-who__heading">ENGINEERING PRECISION BUILT FOR PERFORMANCE</h2>
        </div>

        <div className="pe-who__image pe-who__image--fade">
          <img
            src={mainImage}
            alt="Tower crane and structural steel framework on a construction site"
          />
        </div>

        <div className="pe-who__footer pe-reveal-item">
          <p className="pe-who__lead">
            Precision Edge is a dedicated structural steel detailing company
            delivering accurate, reliable and cost-effective detailing solutions to fabricators,
            contractors and engineering firms worldwide. We combine industry knowledge, advanced
            detailing technologies and a quality-focused workflow to support successful
            fabrication and construction projects
          </p>
          <a href="#about" className="pe-who__link">
            MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  )
}
