import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import AnimatedSVG from './AnimatedSVG'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-hero overflow-hidden pt-28 pb-16 lg:py-0">
      <div className="absolute inset-0 bg-gradient-radial"></div>

      {/* SVGs decorativos animados */}
      <div className="hidden sm:block absolute top-20 left-10 opacity-20 z-10">
        <AnimatedSVG size={120} delay={0.5} />
      </div>
      <div className="hidden sm:block absolute bottom-32 right-16 opacity-10 z-10">
        <AnimatedSVG size={80} delay={1.2} />
      </div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 opacity-15 z-10">
        <AnimatedSVG size={60} delay={2} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-20">
        <div className="text-center lg:text-left">
          <h1 className="hero-title mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t('hero.greeting')} <span className="text-gradient">{t('hero.name')}</span>
          </h1>

          <p className="hero-title inline-flex max-w-full mb-5 px-3 sm:px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] text-accent border border-accent/40 bg-accent/10">
            {t('hero.legal')}
          </p>
          
          <p className="hero-subtitle mb-6 text-lg sm:text-xl md:text-2xl text-text-gray font-light">
            {t('hero.subtitle')}
          </p>
          
          <p className="hero-description text-base sm:text-lg text-text-gray mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
            {t('hero.description')}
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-semibold border border-accent hover:bg-accent/80 hover:shadow-lg transition-all duration-300"
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent text-text-light border border-border-color font-semibold hover:border-accent hover:text-accent transition-all duration-300"
            >
              {t('hero.getInTouch')}
            </a>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="hero-image relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
            <img
              src="/assets/profile/perfil.jpeg"
              alt="Alexandre da Fonseca Junior"
              className="w-full h-full object-cover border-2 border-primary shadow-lg relative z-20"
            />
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border border-accent/30 z-10"></div>
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-border-color/20 z-0"></div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom z-20">
        <div className="w-6 h-6 border-r-2 border-b-2 border-primary transform rotate-45"></div>
      </div>
    </section>
  )
}

export default Hero 
