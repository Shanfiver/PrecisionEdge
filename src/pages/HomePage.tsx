import { useEffect } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Strip from '../components/Strip/Strip'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import Services from '../components/Services/Services'
import Industry from '../components/Industry/Industry'
import TechProcess from '../components/TechProcess/TechProcess'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

export default function HomePage() {
  // Cross-page nav links (e.g. from the Contact page's header) point at
  // "/#about" etc. On a fresh load of "/", the browser can't scroll to
  // those in-page anchors until React has actually rendered them, so do it
  // ourselves once mounted.
  useEffect(() => {
    if (!window.location.hash) return
    const id = window.location.hash.slice(1)
    document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <main>
        <HeroBanner />
        <Strip />
        <WhoWeAre />
        <Services />
        <Industry />
        <TechProcess />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
