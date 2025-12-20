import AboutIntro from '../AboutIntro/AboutIntro';
import CTA from '../CTA/CTA';
import Footer from '../Footer/Footer';
import HeroBanner from '../HeroBanner/HeroBanner';
import Process from '../Process/Process';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Homepage = () => {
  return (
    <>
      <HeroBanner />
      <div className='standard-padding'>
        <AboutIntro />
        <Services />
        <Projects />
        <Process />
      </div>
      <CTA />
      <Footer />
    </>
  )
}

export default Homepage