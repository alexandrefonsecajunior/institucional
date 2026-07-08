import React from 'react'

const PulseRotateSVG = ({ size = 150, className = "", delay = 0 }) => {
  const animationStyle = {
    transformOrigin: 'center center',
    animation: `pulseRotate 3s infinite alternate ease-in-out ${delay}s`
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative">
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 150 150"
          className="pulse-rotate-svg-container"
        >
          <circle 
            className="animated-circle-pulse" 
            cx="75" 
            cy="75" 
            r="50"
            style={animationStyle}
          />
        </svg>
      </div>
    </div>
  )
}

export default PulseRotateSVG 