import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from '../herosection/HeroSection'
import AboutMe from '../aboutme/AboutMe'
import Services from '../services/Services'
import Testimonals from '../testmonials/Testimonials'
import HireMe from '../hireme/HireMe'
import WhatsappCommunity from '../whatsappCommunity/WhatsappCommunity'
import Skills from '../skills/Skills'
import NewsLetter from '../newsLetter/NewsLetter'
function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutMe />
            <Skills />
            <Services />
            <Testimonals />
            <HireMe />
            <WhatsappCommunity />
            <NewsLetter/>
        </div>
    )
}

export default Home