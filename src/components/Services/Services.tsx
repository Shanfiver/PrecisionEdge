import SectionHeader from '../SectionHeader/SectionHeader'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import bgGraphic from '../../assets/Services-bg.png'
import modelingImg from '../../assets/3D Modeling & BIM.png'
import detailingImg from '../../assets/Structural Steel Detailing.png'
import qualityImg from '../../assets/Quality Checking.png'
import fabricationImg from '../../assets/Fabrication Support.png'
import './Services.css'

const SERVICES = [
  {
    title: '3D Modeling & BIM',
    description: 'Build coordinated digital models for better project understanding',
    image: modelingImg,
    variant: 'photo',
  },
  {
    title: 'Structural Steel Detailing',
    description: 'Develop accurate assembly, single-part and erection drawings',
    image: detailingImg,
    variant: 'photo',
  },
  {
    title: 'Quality Checking',
    description: 'Apply structured reviews to improve accuracy and consistency',
    image: qualityImg,
    variant: 'photo',
  },
  {
    title: 'Fabrication Support',
    description: 'Deliver fabrication-oriented files and documentation',
    image: fabricationImg,
    variant: 'drawing',
  },
] as const

export default function Services() {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <section className="pe-services">
      <img className="pe-services__bg" src={bgGraphic} alt="" aria-hidden="true" />

      <div className="pe-services__inner">
        <SectionHeader
          eyebrow="OUR CORE SERVICES"
          headingAccent="BUILT ON DETAIL "
          headingBase="DELIVERED WITH PRECISION"
          lead="From 3D modeling and BIM coordination to structural steel detailing, quality checking
            and fabrication support, we provide end-to-end solutions designed to move projects
            forward with clarity and confidence."
        />

        <div ref={ref} className={`pe-services__grid pe-reveal-group${visible ? ' is-visible' : ''}`}>
          {SERVICES.map((service) => (
            <article key={service.title} className="pe-service-card pe-reveal-item">
              <div className={`pe-service-card__media pe-service-card__media--${service.variant}`}>
                <img src={service.image} alt="" />
              </div>
              <div className="pe-service-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
