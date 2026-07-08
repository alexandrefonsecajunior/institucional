import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HologramEffect = ({ children, className = "", delay = 0 }) => {
  const hologramRef = useRef(null)
  const interferenceRef = useRef(null)
  const glitchRef = useRef(null)

  useEffect(() => {
    if (hologramRef.current && interferenceRef.current && glitchRef.current) {
      const hologram = hologramRef.current
      const interference = interferenceRef.current
      const glitch = glitchRef.current

      // Estado inicial
      gsap.set(hologram, {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(2px) brightness(1.2) contrast(1.1)'
      })

      gsap.set(interference, {
        opacity: 0
      })

      gsap.set(glitch, {
        opacity: 0
      })

      // Timeline de materialização
      const tl = gsap.timeline({ delay })

      // Fase 1: Interferência aparece
      tl.to(interference, {
        duration: 0.5,
        opacity: 0.8,
        ease: "power2.out"
      })

      // Fase 2: Glitch inicial
      .to(glitch, {
        duration: 0.1,
        opacity: 1,
        repeat: 3,
        yoyo: true,
        ease: "none"
      })

      // Fase 3: Elemento se materializa
      .to(hologram, {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px) brightness(1) contrast(1)',
        ease: "power2.out"
      }, "-=0.3")

      // Fase 4: Interferência diminui
      .to(interference, {
        duration: 1,
        opacity: 0.2,
        ease: "power2.out"
      }, "-=1")

      // Fase 5: Glitch final
      .to(glitch, {
        duration: 0.05,
        opacity: 0.8,
        repeat: 2,
        yoyo: true,
        ease: "none"
      }, "-=0.2")

      .to(glitch, {
        duration: 0.3,
        opacity: 0,
        ease: "power2.out"
      })

      // Animação contínua de estabilização
      const stabilization = gsap.to(interference, {
        duration: 2,
        opacity: 0.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: tl.duration()
      })

      // Glitch ocasional
      const occasionalGlitch = () => {
        if (Math.random() < 0.1) { // 10% de chance
          gsap.to(glitch, {
            duration: 0.05,
            opacity: 0.6,
            repeat: 1,
            yoyo: true,
            ease: "none"
          })
        }
      }

      const glitchInterval = setInterval(occasionalGlitch, 3000)

      return () => {
        tl.kill()
        stabilization.kill()
        clearInterval(glitchInterval)
      }
    }
  }, [delay])

  return (
    <div className={`relative ${className}`}>
      {/* Elemento principal */}
      <div ref={hologramRef} className="relative z-10">
        {children}
      </div>

      {/* Interferência holográfica */}
      <div 
        ref={interferenceRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(14, 165, 233, 0.1) 2px,
              rgba(14, 165, 233, 0.1) 4px
            )
          `,
          zIndex: 20
        }}
      />

      {/* Efeito glitch */}
      <div 
        ref={glitchRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 0, 0, 0.1) 25%,
              transparent 26%,
              transparent 74%,
              rgba(0, 255, 255, 0.1) 75%,
              transparent 100%
            )
          `,
          zIndex: 21
        }}
      />

      {/* Borda holográfica */}
      <div className="absolute inset-0 border border-accent/30 pointer-events-none" style={{ zIndex: 15 }}>
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />
      </div>

      {/* Pontos de energia nos cantos */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ zIndex: 22 }} />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ zIndex: 22, animationDelay: '0.5s' }} />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ zIndex: 22, animationDelay: '1s' }} />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ zIndex: 22, animationDelay: '1.5s' }} />
    </div>
  )
}

export default HologramEffect 