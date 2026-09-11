import industryImage from '../../assets/industry-mall.png'
import './Industry.css'

export default function Industry() {
  return (
    <section className="pe-industry">
      <div className="pe-industry__content">
        <div className="pe-industry__text">
          <h2 className="pe-industry__heading">DETAILING SOLUTIONS FOR EVERY INDUSTRY</h2>
          <p className="pe-industry__lead">
            We support a broad range of structural steel applications, including industrial
            buildings, warehouses, manufacturing facilities, distribution centers, commercial
            structures, infrastructure and power &amp; energy projects
          </p>
        </div>
        <a href="#industries" className="pe-industry__cta">
          EXPLORE INDUSTRIES
        </a>
      </div>

      <div className="pe-industry__media">
        <img src={industryImage} alt="Multi-level retail and commercial interior structure" />
      </div>
    </section>
  )
}
