import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const GSAPAnimatedSVG = ({ size = 150, className = "", delay = 0 }) => {
  const rectRef = useRef(null)

  useEffect(() => {
    if (rectRef.current) {
      // Animação GSAP
      gsap.to(rectRef.current, {
        duration: 2,
        x: 30,
        y: 30, 
        rotation: 360,
        scale: 1.2,
        fill: "#0ea5e9", // Cor secundária do tema
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: delay
      })
    }
  }, [delay])

  // Calcular dimensões proporcionais
  const rectSize = (size * 100) / 150
  const rectPosition = (size * 25) / 150
  const borderRadius = (size * 10) / 150

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative">
        <svg 
          width={size} 
          height={size} 
          viewBox={`0 0 ${size} ${size}`}
          className="gsap-svg-container"
        >
          <rect 
            ref={rectRef}
            x={rectPosition}
            y={rectPosition}
            width={rectSize}
            height={rectSize}
            fill="#6366f1" // Cor accent inicial do tema
            rx={borderRadius}
            ry={borderRadius}
            className="gsap-animated-rect"
          />
        </svg>
      </div>
    </div>
  )
}

export default GSAPAnimatedSVG 