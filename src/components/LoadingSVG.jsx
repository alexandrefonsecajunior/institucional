import React from 'react'

const LoadingSVG = ({ size = 24, className = "" }) => {
  const animationStyle = {
    strokeDasharray: '200',
    strokeDashoffset: '200',
    animation: 'drawPathLoop 1.5s ease-in-out infinite'
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-current loading-svg"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="30" 
          className="loading-path"
          style={animationStyle}
        />
      </svg>
    </div>
  )
}

export default LoadingSVG 