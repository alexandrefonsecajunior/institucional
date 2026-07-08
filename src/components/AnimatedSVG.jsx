import React from 'react'

const AnimatedSVG = ({ size = 150, className = "", delay = 0 }) => {
  const animationStyle = {
    strokeDasharray: '290',
    strokeDashoffset: '290',
    animation: `drawPath 2s forwards ease-out ${delay}s`
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative">
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 150 150" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-accent animated-svg-container"
        >
          <path 
            d="M 20 75 Q 75 20 130 75 Q 75 130 20 75 Z" 
            className="animated-path"
            style={animationStyle}
          />
        </svg>
      </div>
    </div>
  )
}

export default AnimatedSVG 