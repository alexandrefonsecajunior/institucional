import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const EnergyScanner = ({ className = "", scanInterval = 15 }) => {
  const scannerRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (scannerRef.current && overlayRef.current) {
      const scanner = scannerRef.current
      const overlay = overlayRef.current

      // Configurar scanner inicial
      gsap.set(scanner, {
        x: '-100%',
        scaleY: 1,
        opacity: 0
      })

      // Configurar overlay
      gsap.set(overlay, {
        opacity: 0
      })

      // Função de animação do scanner
      const runScan = () => {
        const tl = gsap.timeline()

        // Fase 1: Scanner aparece
        tl.to(scanner, {
          duration: 0.3,
          opacity: 1,
          ease: "power2.out"
        })

        // Fase 2: Scanner atravessa a tela
        .to(scanner, {
          duration: 3,
          x: 'calc(100vw + 100%)',
          ease: "power1.inOut"
        })

        // Fase 3: Efeito de energia residual
        .to(overlay, {
          duration: 0.1,
          opacity: 0.3,
          ease: "power2.out"
        }, "-=2.5")

        .to(overlay, {
          duration: 2,
          opacity: 0,
          ease: "power2.out"
        })

        // Fase 4: Scanner desaparece
        .to(scanner, {
          duration: 0.3,
          opacity: 0,
          ease: "power2.in"
        }, "-=0.5")

        // Reset para próximo scan
        .set(scanner, {
          x: '-100%'
        })

        return tl
      }

      // Primeira animação imediata
      const firstScan = runScan()

      // Configurar repetição
      const interval = setInterval(() => {
        runScan()
      }, scanInterval * 1000)

      return () => {
        clearInterval(interval)
        firstScan.kill()
      }
    }
  }, [scanInterval])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Overlay de energia */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
        style={{ zIndex: 2 }}
      />

      {/* Scanner principal */}
      <div 
        ref={scannerRef}
        className="absolute inset-y-0 w-2"
        style={{ zIndex: 3 }}
      >
        {/* Linha central brilhante */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent to-transparent opacity-90" />
        
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-60 blur-sm" />
        
        {/* Partículas laterais */}
        <div className="absolute -left-2 top-0 w-6 h-full">
          <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-accent rounded-full animate-pulse opacity-80" />
          <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.2s' }} />
          <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Rastro de energia */}
        <div className="absolute -left-8 inset-y-0 w-8 bg-gradient-to-r from-accent/20 to-transparent blur-md" />
        
        {/* Campo eletromagnético */}
        <div className="absolute -left-4 -right-4 inset-y-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Ondas de choque */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <div className="scanner-wave scanner-wave-1" />
        <div className="scanner-wave scanner-wave-2" />
        <div className="scanner-wave scanner-wave-3" />
      </div>
    </div>
  )
}

export default EnergyScanner 