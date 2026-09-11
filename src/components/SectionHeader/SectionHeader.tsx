import type { ReactNode } from 'react'
import './SectionHeader.css'

interface SectionHeaderProps {
  eyebrow: string
  headingAccent: string
  headingBase: string
  lead: ReactNode
}

export default function SectionHeader({ eyebrow, headingAccent, headingBase, lead }: SectionHeaderProps) {
  return (
    <div className="pe-section-header">
      <p className="pe-section-header__eyebrow">{eyebrow}</p>
      <h2 className="pe-section-header__heading">
        <span className="pe-section-header__heading-accent">{headingAccent}</span>
        <span className="pe-section-header__heading-base">{headingBase}</span>
      </h2>
      <p className="pe-section-header__lead">{lead}</p>
    </div>
  )
}
