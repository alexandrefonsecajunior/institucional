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
    const anchorCleanups = []

    // Initialize smooth scrolling
    const initSmoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]')
      links.forEach(link => {
        const handleAnchorClick = (e) => {
          const href = link.getAttribute('href')
          const targetId = href?.substring(1)

          if (!targetId) return

          const targetElement = document.getElementById(targetId)

          if (!targetElement) return

          e.preventDefault()

          const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80

          window.scrollTo({
            top: Math.max(targetTop, 0),
            behavior: 'smooth',
          })

          if (window.location.hash !== href) {
            window.history.pushState(null, '', href)
          }
        }

        link.addEventListener('click', handleAnchorClick)
        anchorCleanups.push(() => link.removeEventListener('click', handleAnchorClick))
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
    const smoothScrollTimeout = setTimeout(initSmoothScroll, 100)

    // Cleanup
    return () => {
      clearTimeout(smoothScrollTimeout)
      anchorCleanups.forEach(cleanup => cleanup())
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
