import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TMVLogo = ({ size = 48, className = "" }) => {
  const logoRef = useRef(null);
  const letterRefs = useRef([]);
  const energyRef = useRef(null);
  const particleRefs = useRef([]);
  const glitchRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const letters = letterRefs.current;
    const energy = energyRef.current;
    const particles = particleRefs.current;
    const glitch = glitchRef.current;

    if (!logo) return;

    // Timeline master da logo
    const masterTl = gsap.timeline({ repeat: -1, repeatDelay: 4 });

    // Animação inicial das letras (materializando)
    gsap.set(letters, { 
      opacity: 0, 
      scale: 0,
      rotationY: 180,
      z: -100
    });

    // Partículas de energia
    gsap.set(particles, {
      opacity: 0,
      scale: 0,
      x: () => gsap.utils.random(-20, 20),
      y: () => gsap.utils.random(-20, 20)
    });

    // Sequência de materialização
    masterTl
      // Fase 1: Materialização holográfica
      .to(letters, {
        duration: 0.8,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        z: 0,
        ease: "back.out(1.7)",
        stagger: 0.15
      })
      // Fase 2: Pulso de energia
      .to(energy, {
        duration: 0.5,
        opacity: 0.8,
        scale: 1.2,
        ease: "power2.out"
      }, "-=0.3")
      .to(energy, {
        duration: 0.5,
        opacity: 0,
        scale: 0.8,
        ease: "power2.in"
      })
      // Fase 3: Partículas de energia
      .to(particles, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        stagger: 0.05
      }, "-=0.8")
      .to(particles, {
        duration: 1,
        opacity: 0,
        scale: 0,
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-50, 50),
        ease: "power2.in",
        stagger: 0.05
      })
      // Fase 4: Efeito glitch
      .to(glitch, {
        duration: 0.1,
        opacity: 0.3,
        x: 2,
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut"
      }, "-=0.5")
      .to(glitch, {
        duration: 0.1,
        opacity: 0,
        x: 0
      })
      // Fase 5: Estabilização
      .to(letters, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out"
      })
      .to(letters, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });

    // Animação contínua de hover (sutil)
    const hoverTl = gsap.timeline({ repeat: -1, yoyo: true });
    hoverTl.to(letters, {
      duration: 4,
      textShadow: "0 0 8px #0ea5e9, 0 0 16px #0ea5e9",
      ease: "power2.inOut",
      stagger: 0.1
    });

    // Animação ao fazer hover
    const handleMouseEnter = () => {
      gsap.to(letters, {
        duration: 0.3,
        scale: 1.1,
        rotationY: 5,
        ease: "power2.out",
        stagger: 0.05
      });
      
      gsap.to(energy, {
        duration: 0.3,
        opacity: 0.5,
        scale: 1.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(letters, {
        duration: 0.3,
        scale: 1,
        rotationY: 0,
        ease: "power2.out",
        stagger: 0.05
      });
      
      gsap.to(energy, {
        duration: 0.3,
        opacity: 0,
        scale: 1,
        ease: "power2.out"
      });
    };

    logo.addEventListener('mouseenter', handleMouseEnter);
    logo.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      masterTl.kill();
      hoverTl.kill();
      logo.removeEventListener('mouseenter', handleMouseEnter);
      logo.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const logoSize = {
    width: `${size}px`,
    height: `${size * 0.6}px`,
    fontSize: `${size * 0.4}px`
  };

  return (
    <div 
      ref={logoRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={logoSize}
    >
      {/* Container principal */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Efeito de energia de fundo */}
        <div 
          ref={energyRef}
          className="absolute inset-0 opacity-0"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(56, 189, 248, 0.1) 50%, transparent 100%)',
            filter: 'blur(8px)'
          }}
        />

        {/* Partículas de energia */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            ref={el => particleRefs.current[i] = el}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0"
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 4px #0ea5e9'
            }}
          />
        ))}

        {/* Borda holográfica */}
        <div className="absolute inset-0 border border-blue-400/30 rounded-sm animate-pulse" />
        <div className="absolute inset-0 border border-cyan-300/20 rounded-sm" style={{ 
          animation: 'pulse 2s ease-in-out infinite 0.5s' 
        }} />

        {/* Letras TMV */}
        <div className="relative flex items-center justify-center gap-1 font-bold tracking-wider">
          {['T', 'M', 'V'].map((letter, index) => (
            <span
              key={letter}
              ref={el => letterRefs.current[index] = el}
              className="relative inline-block text-white font-mono"
              style={{
                fontFamily: 'monospace',
                fontWeight: 'bold',
                textShadow: '0 0 5px #0ea5e9',
                transform: 'perspective(100px)'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Efeito glitch overlay */}
        <div 
          ref={glitchRef}
          className="absolute inset-0 flex items-center justify-center gap-1 font-bold tracking-wider opacity-0"
          style={{
            color: '#ff0080',
            fontFamily: 'monospace',
            mixBlendMode: 'difference'
          }}
        >
                     {['T', 'M', 'V'].map((letter) => (
             <span key={`glitch-${letter}`} className="inline-block">
               {letter}
             </span>
           ))}
        </div>

        {/* Scanner de energia */}
        <div 
          className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
          style={{
            animation: 'energyScan 4s ease-in-out infinite'
          }}
        />

        {/* Pontos de energia nos cantos */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse" style={{
          animationDelay: '0.5s'
        }} />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse" style={{
          animationDelay: '1s'
        }} />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{
          animationDelay: '1.5s'
        }} />
      </div>
    </div>
  );
};

export default TMVLogo; 