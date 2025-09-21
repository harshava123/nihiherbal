import React, { useState, useEffect } from 'react'
import heroVideoDesktop from '../assets/herobg1.mp4'
import heroVideoMobile from '../assets/heromb.mp4'

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 ${isMobile ? 'hidden' : 'block'}`}
      >
        <source src={heroVideoDesktop} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Mobile Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 ${isMobile ? 'block' : 'hidden'}`}
      >
        <source src={heroVideoMobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default HeroSection
