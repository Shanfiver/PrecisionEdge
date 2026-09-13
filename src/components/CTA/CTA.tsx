import { Link } from 'react-router-dom'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import ctaBg from '../../assets/CTA-bg.png'
import './CTA.css'

export default function CTA() {
  const { ref, visible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`pe-cta pe-reveal-group${visible ? ' is-visible' : ''}`}>
      <img className="pe-cta__bg" src={ctaBg} alt="" aria-hidden="true" />

      <div className="pe-cta__content">
        <div className="pe-cta__text pe-reveal-item">
          <h2 className="pe-cta__heading">LET&apos;S BUILD YOUR NEXT PROJECT WITH PRECISION</h2>
          <p className="pe-cta__lead">
            Tell us about your project, required deliverables and schedule. Our team can review
            the scope and help define a detailing approach that fits your requirements.
          </p>
        </div>

        <Link to="/contact" className="pe-cta__button pe-reveal-item">
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
