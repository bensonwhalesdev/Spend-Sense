import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './BarChart'
import FAQSection from './Accordion'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className='bg-[#1C1F58]'>
      <Header />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default LandingPage