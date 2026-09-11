import ctaBg from '../../assets/CTA-bg.png'
import './CTA.css'

export default function CTA() {
  return (
    <section className="pe-cta">
      <img className="pe-cta__bg" src={ctaBg} alt="" aria-hidden="true" />

      <div className="pe-cta__content">
        <div className="pe-cta__text">
          <h2 className="pe-cta__heading">LET&apos;S BUILD YOUR NEXT PROJECT WITH PRECISION</h2>
          <p className="pe-cta__lead">
            Tell us about your project, required deliverables and schedule. Our team can review
            the scope and help define a detailing approach that fits your requirements.
          </p>
        </div>

        <a href="#contact" className="pe-cta__button">
          CONTACT US
        </a>
      </div>
    </section>
  )
}
