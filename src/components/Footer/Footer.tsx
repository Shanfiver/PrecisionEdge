import logo from '../../assets/pe-logo-white-hor.svg'
import phoneIcon from '../../assets/icons/phone.png'
import emailIcon from '../../assets/icons/email.png'
import locationIcon from '../../assets/icons/location.png'
import linkedinIcon from '../../assets/icons/linkedin.png'
import instagramIcon from '../../assets/icons/instagram.png'
import './Footer.css'

const LINK_COLUMNS = [
  {
    heading: 'COMPANY',
    links: ['About Us', 'Why Precision Edge', 'Technology & Process'],
  },
  {
    heading: 'SERVICES',
    links: [
      '3D Modeling & BIM',
      'Structural Steel Detailing',
      'Quality Checking',
      'Fabrication Support',
    ],
  },
  {
    heading: 'INDUSTRIES',
    links: [
      'Industrial Buildings',
      'Warehouses',
      'Manufacturing',
      'Distribution Centers',
      'Commercial Structures',
      'Infrastructure',
      'Power & Energy',
    ],
  },
] as const

export default function Footer() {
  return (
    <footer className="pe-footer">
      <div className="pe-footer__row">
        <div className="pe-footer__brand">
          <img className="pe-footer__logo" src={logo} alt="Precision Edge" width={257} height={77} />
          <p className="pe-footer__tagline">
            Structural Steel Detailing &amp; BIM Solutions. Accurate models. Reliable drawings.
            Fabrication-ready results
          </p>
          <ul className="pe-footer__contact">
            <li>
              <img src={phoneIcon} alt="" aria-hidden="true" />
              <a href="tel:+919444329120">+91-9444329120</a>
            </li>
            <li>
              <img src={emailIcon} alt="" aria-hidden="true" />
              <a href="mailto:info@precision-edge.in">info@precision-edge.in</a>
            </li>
            <li>
              <img src={locationIcon} alt="" aria-hidden="true" />
              <span>Namakkal, TN, India</span>
            </li>
          </ul>
        </div>

        {LINK_COLUMNS.map((column) => (
          <nav key={column.heading} className="pe-footer__column" aria-label={column.heading}>
            <p className="pe-footer__heading">{column.heading}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="pe-footer__bottom">
        <p className="pe-footer__copyright">
          © 2026 Precision Edge. All Rights Reserved. | <a href="#">TERMS</a> |{' '}
          <a href="#">PRIVACY</a>
        </p>
        <div className="pe-footer__social">
          <a href="#" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagramIcon} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
