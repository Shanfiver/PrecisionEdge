import type { CSSProperties } from 'react'
import modelingIcon from '../../assets/strip-modeling-icon.svg'
import detailingIcon from '../../assets/strip-detailing-icon.png'
import qualityIcon from '../../assets/strip-quality-icon.svg'
import fabricationIcon from '../../assets/strip-fabrication-icon.svg'
import './Strip.css'

const ITEMS = [
  {
    icon: modelingIcon,
    label: '3D MODELING & BIM',
    size: 46,
    bg: '#133b67',
  },
  {
    icon: detailingIcon,
    label: 'STRUCTURAL STEEL DETAILING',
    size: 36,
    bg: '#184372',
  },
  {
    icon: qualityIcon,
    label: 'QUALITY CHECKING',
    size: 46,
    bg: '#1b4b7e',
  },
  {
    icon: fabricationIcon,
    label: 'FABRICATION SUPPORT',
    size: 42,
    bg: '#1e548d',
  },
]

export default function Strip() {
  return (
    <section className="pe-strip">
      <ul className="pe-strip__track">
        {ITEMS.map((item) => (
          <li key={item.label} className="pe-strip__item" style={{ background: item.bg }}>
            <img
              className="pe-strip__icon"
              src={item.icon}
              alt=""
              aria-hidden="true"
              style={{ '--icon-size': `${item.size}px` } as CSSProperties}
            />
            <p className="pe-strip__label">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
