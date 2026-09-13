import SubpageHero from '../components/SubpageHero/SubpageHero'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer/Footer'
import phoneIcon from '../assets/icons/phone.png'
import emailIcon from '../assets/icons/email.png'
import locationIcon from '../assets/icons/location.png'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <>
      <main>
        <SubpageHero
          title="Contact Us"
          subtitle="Tell us about your project — our team will get back to you shortly."
        />

        <section className="pe-contact">
          <div className="pe-contact__grid">
            {/* Column 1 — Contact details */}
            <div className="pe-contact__details">
              <h2 className="pe-contact__heading">Get in touch</h2>
              <p className="pe-contact__lead">
                Whether you need structural steel detailing, BIM coordination, or fabrication
                support — reach out and our team will help scope the work.
              </p>

              <ul className="pe-contact__list">
                <li>
                  <img src={phoneIcon} alt="" aria-hidden="true" />
                  <div>
                    <p className="pe-contact__label">Phone</p>
                    <a href="tel:+919444329120">+91-9444329120</a>
                  </div>
                </li>
                <li>
                  <img src={emailIcon} alt="" aria-hidden="true" />
                  <div>
                    <p className="pe-contact__label">Email</p>
                    <a href="mailto:contact@precision-edge.in">contact@precision-edge.in</a>
                  </div>
                </li>
                <li>
                  <img src={locationIcon} alt="" aria-hidden="true" />
                  <div>
                    <p className="pe-contact__label">Location</p>
                    <span>Namakkal, TN, India</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 2 — Contact form */}
            <div className="pe-contact__form-wrap">
              <h2 className="pe-contact__heading">Send a message</h2>
              <p className="pe-contact__lead">We usually reply within one business day.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
