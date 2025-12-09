import AboutIntro from '../AboutIntro/AboutIntro';
import ConcreteGrades from '../ConcreteGrades/ConcreteGrades';
import CTA from '../CTA/CTA';
import Footer from '../Footer/Footer';
import HeroBanner from '../HeroBanner/HeroBanner';
import Process from '../Process/Process';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Homepage = () => {
  return (
    <>
    <HeroBanner />
    <div className='standard-padding'>
    <AboutIntro />
      <Services />
      <Projects />
      {/* <ConcreteGrades /> */}
      <Process />
      </div>
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </>
  )
}

export default Homepage