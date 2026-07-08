import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Navbar,
  Hero,
  CompanySection,
  AboutMe,
  Skills,
  Projects,
  Contact,
  AnimationsShowcase,
  Footer
} from './components'

// GSAP Training
import TrainingGround from './components/gsap-training/TrainingGround'

// Advanced effects
import LightRays from './components/effects/LightRays'
import ParticleField from './components/effects/ParticleField'
import EnergyScanner from './components/effects/EnergyScanner'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const initSmoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]')
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault()
          const targetId = link.getAttribute('href').substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: targetElement,
                offsetY: 80
              },
              ease: 'power3.inOut'
            })
          }
        })
      })
    }

    // Section fade-in animations
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Initialize after DOM is ready
    setTimeout(initSmoothScroll, 100)

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Check if we should show training ground
  const showTraining = window.location.hash === '#training' || window.location.search.includes('training=true')

  if (showTraining) {
    return <TrainingGround />
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Advanced Effects Layer */}
      <LightRays />
      <ParticleField />
      <EnergyScanner />
      
      {/* Main Content */}
      <Navbar />
      
      <main>
        <Hero />
        <CompanySection />
        <AboutMe />
        <Skills />
        <Projects />
        <AnimationsShowcase />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
