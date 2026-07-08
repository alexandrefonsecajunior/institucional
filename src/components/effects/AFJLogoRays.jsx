import React from 'react'

const AFJLogoRays = ({ size = 70, className = '' }) => {
  const logoSize = {
    width: `${size}px`,
    height: `${size * 0.6}px`,
    fontSize: `${size * 0.35}px`,
  }

  return (
    <div
      aria-label="AFJ Sistemas"
      className={`relative select-none ${className}`}
      style={logoSize}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden border border-accent/40 bg-accent/5">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(56, 189, 248, 0.12) 42%, transparent 72%)',
            filter: 'blur(6px)',
          }}
        />
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80 animate-pulse" />
        <div className="absolute left-0 top-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40" />
        <div className="absolute left-0 bottom-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
        <div className="absolute inset-1 border border-blue-400/20" />

        <div className="relative z-10 flex items-center justify-center gap-1 font-mono font-bold tracking-wider">
          {['A', 'F', 'J'].map((letter) => (
            <span
              key={letter}
              className="inline-block text-accent drop-shadow-[0_0_8px_rgba(14,165,233,0.9)]"
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70" />
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70" />
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70" />
      </div>
    </div>
  )
}

export default AFJLogoRays
