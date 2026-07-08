import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ParticleField = ({ particleCount = 50, className = "" }) => {
  const containerRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    if (containerRef.current) {
      // Criar partículas
      const particles = []
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 1}px;
          height: ${Math.random() * 4 + 1}px;
          background: radial-gradient(circle, #0ea5e9, #38bdf8);
          border-radius: 50%;
          pointer-events: none;
          filter: blur(${Math.random() * 0.5}px);
          box-shadow: 0 0 ${Math.random() * 10 + 5}px #0ea5e9;
        `
        
        containerRef.current.appendChild(particle)
        particles.push(particle)
      }

      particlesRef.current = particles

      // Animar cada partícula
      particles.forEach((particle) => {
        // Posição inicial aleatória
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2
        })

        // Animação principal - movimento orgânico
        gsap.to(particle, {
          duration: Math.random() * 20 + 10, // 10-30s
          x: `+=${Math.random() * 400 - 200}`, // movimento aleatório
          y: `+=${Math.random() * 400 - 200}`,
          rotation: Math.random() * 360,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 5
        })

        // Animação de pulsação
        gsap.to(particle, {
          duration: Math.random() * 3 + 2, // 2-5s
          scale: `+=${Math.random() * 0.5 + 0.2}`,
          opacity: `+=${Math.random() * 0.3}`,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: Math.random() * 3
        })

        // Movimento vertical sutil (como flutuação)
        gsap.to(particle, {
          duration: Math.random() * 8 + 4,
          y: `+=${Math.random() * 100 + 50}`,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random() * 2
        })
      })

      // Efeito de interação com mouse
      const handleMouseMove = (e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY

        particles.forEach((particle) => {
          const rect = particle.getBoundingClientRect()
          const particleX = rect.left + rect.width / 2
          const particleY = rect.top + rect.height / 2

          const distance = Math.sqrt(
            Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
          )

          if (distance < 150) {
            const force = (150 - distance) / 150
            const angle = Math.atan2(particleY - mouseY, particleX - mouseX)
            
            gsap.to(particle, {
              duration: 0.3,
              x: `+=${Math.cos(angle) * force * 20}`,
              y: `+=${Math.sin(angle) * force * 20}`,
              scale: 1 + force * 0.5,
              ease: "power2.out"
            })
          }
        })
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        particles.forEach(particle => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle)
          }
        })
      }
    }
  }, [particleCount])

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    />
  )
}

export default ParticleField 