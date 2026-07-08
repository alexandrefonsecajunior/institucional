import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TMVLogoRays = ({ size = 48, className = "" }) => {
  const logoRef = useRef(null);
  const letterRefs = useRef([]);
  const rayRefs = useRef([]);
  const glowRef = useRef(null);
  const energyRingRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const letters = letterRefs.current;
    const rays = rayRefs.current;
    const glow = glowRef.current;
    const energyRing = energyRingRef.current;

    if (!logo) return;

    // Timeline master para raios de energia
    const rayTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

    // Configuração inicial
    gsap.set(letters, { 
      opacity: 1,
      color: '#0ea5e9',
      textShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9'
    });

    gsap.set(rays, {
      opacity: 0,
      scaleX: 0,
      transformOrigin: 'left center'
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.8
    });

    gsap.set(energyRing, {
      opacity: 0,
      scale: 0.5,
      rotation: 0
    });

    // Sequência principal de raios
    rayTimeline
      // Fase 1: Anel de energia aparece
      .to(energyRing, {
        duration: 0.6,
        opacity: 0.8,
        scale: 1.2,
        rotation: 180,
        ease: 'power2.out'
      })
      
      // Fase 2: Raios horizontais atravessam (staggered)
      .to(rays.slice(0, 3), {
        duration: 0.8,
        opacity: 0.9,
        scaleX: 1,
        ease: 'power3.out',
        stagger: 0.15
      }, '-=0.3')
      
      // Fase 3: Intensifica glow das letras
      .to(letters, {
        duration: 0.5,
        color: '#38bdf8',
        textShadow: '0 0 8px #0ea5e9, 0 0 16px #0ea5e9, 0 0 24px #38bdf8',
        ease: 'power2.out'
      }, '-=0.6')
      
      // Fase 4: Glow de fundo pulsa
      .to(glow, {
        duration: 0.4,
        opacity: 0.6,
        scale: 1.3,
        ease: 'power2.out'
      }, '-=0.4')
      
      // Fase 5: Raios diagonais cruzados
      .to(rays.slice(3, 6), {
        duration: 0.6,
        opacity: 0.8,
        scaleX: 1,
        ease: 'power2.out',
        stagger: 0.1
      }, '-=0.2')
      
      // Fase 6: Raios verticais
      .to(rays.slice(6, 8), {
        duration: 0.5,
        opacity: 0.7,
        scaleX: 1,
        ease: 'power2.out',
        stagger: 0.08
      }, '-=0.3')
      
      // Fase 7: Pico de energia - todos os efeitos ativos
      .to(letters, {
        duration: 0.3,
        scale: 1.05,
        textShadow: '0 0 12px #0ea5e9, 0 0 24px #38bdf8, 0 0 36px #0ea5e9',
        ease: 'power2.out'
      })
      
      // Fase 8: Dissipação gradual
      .to(rays, {
        duration: 0.8,
        opacity: 0,
        scaleX: 0.3,
        ease: 'power2.in',
        stagger: 0.05
      })
      .to([glow, energyRing], {
        duration: 0.6,
        opacity: 0,
        scale: 0.8,
        ease: 'power2.in'
      }, '-=0.5')
      .to(letters, {
        duration: 0.5,
        scale: 1,
        color: '#0ea5e9',
        textShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9',
        ease: 'power2.out'
      }, '-=0.3');

    // Animação contínua sutil das letras
    const letterPulse = gsap.timeline({ repeat: -1, yoyo: true });
    letterPulse.to(letters, {
      duration: 2.5,
      textShadow: '0 0 3px #0ea5e9, 0 0 6px #0ea5e9, 0 0 12px #0ea5e9',
      ease: 'power2.inOut',
      stagger: 0.2
    });

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(letters, {
        duration: 0.2,
        scale: 1.08,
        color: '#38bdf8',
        textShadow: '0 0 8px #0ea5e9, 0 0 16px #38bdf8, 0 0 24px #0ea5e9',
        ease: 'power2.out',
        stagger: 0.03
      });
      
      // Trigger de raios rápidos no hover
      gsap.to(rays.slice(0, 4), {
        duration: 0.3,
        opacity: 0.6,
        scaleX: 1,
        ease: 'power2.out',
        stagger: 0.05
      });
    };

    const handleMouseLeave = () => {
      gsap.to(letters, {
        duration: 0.3,
        scale: 1,
        color: '#0ea5e9',
        textShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9',
        ease: 'power2.out'
      });
      
      gsap.to(rays, {
        duration: 0.4,
        opacity: 0,
        scaleX: 0,
        ease: 'power2.in'
      });
    };

    logo.addEventListener('mouseenter', handleMouseEnter);
    logo.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      rayTimeline.kill();
      letterPulse.kill();
      logo.removeEventListener('mouseenter', handleMouseEnter);
      logo.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const logoSize = {
    width: `${size}px`,
    height: `${size * 0.6}px`,
    fontSize: `${size * 0.35}px`
  };

  return (
    <div 
      ref={logoRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={logoSize}
    >
      {/* Container principal */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        
        {/* Glow de fundo */}
        <div 
          ref={glowRef}
          className="absolute inset-0 opacity-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(56, 189, 248, 0.2) 40%, transparent 70%)',
            filter: 'blur(6px)'
          }}
        />

        {/* Anel de energia rotativo */}
        <div 
          ref={energyRingRef}
          className="absolute inset-0 opacity-0 rounded-full border-2 border-blue-400/60"
          style={{
            borderStyle: 'dashed',
            borderSpacing: '4px'
          }}
        />

        {/* Raios de energia - Horizontais */}
        <div
          ref={el => rayRefs.current[0] = el}
          className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 opacity-0"
          style={{ filter: 'blur(0.5px)' }}
        />
        <div
          ref={el => rayRefs.current[1] = el}
          className="absolute left-0 top-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0"
          style={{ filter: 'blur(0.8px)' }}
        />
        <div
          ref={el => rayRefs.current[2] = el}
          className="absolute left-0 bottom-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0"
          style={{ filter: 'blur(0.6px)' }}
        />

        {/* Raios diagonais - Esquerda para direita */}
        <div
          ref={el => rayRefs.current[3] = el}
          className="absolute w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 opacity-0"
          style={{ 
            transform: 'rotate(25deg)',
            transformOrigin: 'left center',
            filter: 'blur(0.7px)'
          }}
        />
        <div
          ref={el => rayRefs.current[4] = el}
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0"
          style={{ 
            transform: 'rotate(-25deg)',
            transformOrigin: 'left center',
            filter: 'blur(0.8px)'
          }}
        />
        <div
          ref={el => rayRefs.current[5] = el}
          className="absolute w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 opacity-0"
          style={{ 
            transform: 'rotate(45deg)',
            transformOrigin: 'left center',
            filter: 'blur(0.5px)'
          }}
        />

        {/* Raios verticais */}
        <div
          ref={el => rayRefs.current[6] = el}
          className="absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 via-cyan-300 to-blue-400 opacity-0"
          style={{ filter: 'blur(0.6px)' }}
        />
        <div
          ref={el => rayRefs.current[7] = el}
          className="absolute right-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-0"
          style={{ filter: 'blur(0.8px)' }}
        />

        {/* Letras TMV */}
        <div className="relative flex items-center justify-center gap-1 font-bold tracking-wider z-10">
          {['T', 'M', 'V'].map((letter, index) => (
            <span
              key={letter}
              ref={el => letterRefs.current[index] = el}
              className="relative inline-block font-mono select-none"
              style={{
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: '#0ea5e9',
                textShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9',
                transform: 'perspective(100px)',
                userSelect: 'none'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Partículas de energia nos cantos */}
        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-pulse" />
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70 animate-pulse" style={{
          animationDelay: '0.3s'
        }} />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70 animate-pulse" style={{
          animationDelay: '0.6s'
        }} />
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-pulse" style={{
          animationDelay: '0.9s'
        }} />

        {/* Linhas de energia nas bordas */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
      </div>
    </div>
  );
};

export default TMVLogoRays; 