import React, { useEffect } from 'react'
import {
  Navbar,
  Hero,
  CompanySection,
  AboutMe,
  Skills,
  Projects,
  Contact,
  Footer
} from './components'

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

    // Initialize after DOM is ready
    const smoothScrollTimeout = setTimeout(initSmoothScroll, 100)

    // Cleanup
    return () => {
      clearTimeout(smoothScrollTimeout)
      anchorCleanups.forEach(cleanup => cleanup())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Main Content */}
      <Navbar />
      
      <main>
        <Hero />
        <CompanySection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
