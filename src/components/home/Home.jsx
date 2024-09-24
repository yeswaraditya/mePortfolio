import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from '../herosection/HeroSection'
import AboutMe from '../aboutme/AboutMe'
import Services from '../services/Services'
import HireMe from '../hireme/HireMe'
function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutMe/>
            <Services />
            <HireMe />
            
        </div>
    )
}

export default Home