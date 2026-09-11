import SectionHeader from '../SectionHeader/SectionHeader'
import checkIcon from '../../assets/icons/01-model-checking.png'
import reviewIcon from '../../assets/icons/02-drawing-review.png'
import loopIcon from '../../assets/icons/03-revision.png'
import targetIcon from '../../assets/icons/04-QC-Audit.svg'
import directIcon from '../../assets/icons/05-final-deliveryirect.png'
import teklaLogo from '../../assets/Tekla.png'
import autocadLogo from '../../assets/Autocad.png'
import advanceSteelLogo from '../../assets/Advanced-steel.png'
import './TechProcess.css'

const STEPS = [
  {
    icon: checkIcon,
    title: 'MODEL CHECKING',
    description: '3D model verification for accuracy, clashes, and constructability',
  },
  {
    icon: reviewIcon,
    title: 'DRAWING REVIEW',
    description: 'Initial review for standards, completeness, and client requirements.',
  },
  {
    icon: loopIcon,
    title: 'REVISION',
    description: 'Multi-level quality checks against project standards and specifications.',
  },
  {
    icon: targetIcon,
    title: 'QC AUDIT',
    description: 'Dimensional accuracy and detailing validation for error-free deliverables',
  },
  {
    icon: directIcon,
    title: 'FINAL DELIVERY',
    description: 'Final review and approval before delivering fabrication-ready files',
  },
] as const

export default function TechProcess() {
  return (
    <section className="pe-tech">
      <div className="pe-tech__inner">
        <SectionHeader
          eyebrow="TECHNOLOGY & PROCESS"
          headingAccent="ADVANCED TECHNOLOGY "
          headingBase="ASSURED QUALITY"
          lead="We combine industry-leading software, streamlined workflows and rigorous quality
            checks to deliver accurate, coordinated and fabrication-ready solutions."
        />

        <div className="pe-tech__steps">
          {STEPS.map((step) => (
            <div key={step.title} className="pe-tech-step">
              <img className="pe-tech-step__icon" src={step.icon} alt="" aria-hidden="true" />
              <h3 className="pe-tech-step__title">{step.title}</h3>
              <p className="pe-tech-step__description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="pe-tech__logos">
          <img src={teklaLogo} alt="Tekla" />
          <img src={autocadLogo} alt="Autodesk AutoCAD" />
          <img src={advanceSteelLogo} alt="Autodesk Advance Steel" />
        </div>
      </div>
    </section>
  )
}
