import HeroBanner from './components/HeroBanner/HeroBanner'
import Strip from './components/Strip/Strip'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'
import Services from './components/Services/Services'
import Industry from './components/Industry/Industry'
import TechProcess from './components/TechProcess/TechProcess'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
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

export default App
