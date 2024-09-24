import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from '../herosection/HeroSection'
import AboutMe from '../aboutme/AboutMe'
import Services from '../services/Services'
import HireMe from '../hireme/HireMe'
import WhatsappCommunity from '../whatsappCommunity/WhatsappCommunity'
function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutMe />
            <Services />
            <HireMe />
            <WhatsappCommunity />
        </div>
    )
}

export default Home