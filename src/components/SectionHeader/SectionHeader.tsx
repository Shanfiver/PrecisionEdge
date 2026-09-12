import type { ReactNode } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import './SectionHeader.css'

interface SectionHeaderProps {
  eyebrow: string
  headingAccent: string
  headingBase: string
  lead: ReactNode
}

export default function SectionHeader({ eyebrow, headingAccent, headingBase, lead }: SectionHeaderProps) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <div ref={ref} className={`pe-section-header pe-reveal-group${visible ? ' is-visible' : ''}`}>
      <p className="pe-section-header__eyebrow pe-reveal-item">{eyebrow}</p>
      <h2 className="pe-section-header__heading pe-reveal-item">
        <span className="pe-section-header__heading-accent">{headingAccent}</span>
        <span className="pe-section-header__heading-base">{headingBase}</span>
      </h2>
      <p className="pe-section-header__lead pe-reveal-item">{lead}</p>
    </div>
  )
}
