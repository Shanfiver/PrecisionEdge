import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import industryImage from '../../assets/industry-mall.png'
import './Industry.css'

export default function Industry() {
  const { ref, visible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`pe-industry pe-reveal-group${visible ? ' is-visible' : ''}`}>
      <div className="pe-industry__content">
        <div className="pe-industry__text pe-reveal-item">
          <h2 className="pe-industry__heading">DETAILING SOLUTIONS FOR EVERY INDUSTRY</h2>
          <p className="pe-industry__lead">
            We support a broad range of structural steel applications, including industrial
            buildings, warehouses, manufacturing facilities, distribution centers, commercial
            structures, infrastructure and power &amp; energy projects
          </p>
        </div>
        <a href="#industries" className="pe-industry__cta pe-reveal-item">
          EXPLORE INDUSTRIES
        </a>
      </div>

      <div className="pe-industry__media pe-reveal-item">
        <img src={industryImage} alt="Multi-level retail and commercial interior structure" />
      </div>
    </section>
  )
}
