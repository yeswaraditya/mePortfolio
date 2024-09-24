import React from 'react'
import HeroSection from '../herosection/HeroSection'
import Navbar from '../navbar/Navbar'
import Services from '../services/Services'

function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Services />
        </div>
    )
}

export default Home