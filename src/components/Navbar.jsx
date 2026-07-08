import React, { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import LanguageToggle from './LanguageToggle'
import AFJLogoRays from './effects/AFJLogoRays'

const Navbar = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMobileNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar fixed top-0 w-full bg-dark-bg/95 backdrop-blur-sm z-50 py-4 transition-all duration-300 border-b border-border-color/20">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3" aria-label="Ir para o início">
          <AFJLogoRays size={70} className="text-accent" />
        </a>
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex list-none gap-2">
            <li><a href="#home" className="text-text-gray hover:text-accent transition-colors duration-300 px-3 py-2 text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">
              {t('nav.home')}
            </a></li>
            <li><a href="#company" className="text-text-gray hover:text-accent transition-colors duration-300 px-3 py-2 text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">
              {t('nav.company')}
            </a></li>
            <li><a href="#about" className="text-text-gray hover:text-accent transition-colors duration-300 px-3 py-2 text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">
              {t('nav.about')}
            </a></li>
            <li><a href="#skills" className="text-text-gray hover:text-accent transition-colors duration-300 px-3 py-2 text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">
              {t('nav.skills')}
            </a></li>
            <li><a href="#projects" className="text-text-gray hover:text-accent transition-colors duration-300 px-3 py-2 text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">
              {t('nav.projects')}
            </a></li>
            <li><a href="#contact" className="text-text-gray hover:text-accent transition-colors duration-300 px-3 py-2 text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">
              {t('nav.contact')}
            </a></li>
          </ul>
          <LanguageToggle />
        </div>
        
        <div 
          className={`md:hidden flex flex-col cursor-pointer ${isMenuOpen ? 'space-y-1' : 'space-y-1'}`} 
          onClick={handleMenuToggle}
        >
          <span className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </div>
      
      {/* Menu Mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-dark-bg border-t border-border-color/30`}>
        <ul className="flex flex-col py-6 px-6 space-y-1">
          <li><a href="#home" onClick={handleMobileNavClick} className="text-text-gray hover:text-accent transition-colors duration-300 px-4 py-3 block text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">{t('nav.home')}</a></li>
          <li><a href="#company" onClick={handleMobileNavClick} className="text-text-gray hover:text-accent transition-colors duration-300 px-4 py-3 block text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">{t('nav.company')}</a></li>
          <li><a href="#about" onClick={handleMobileNavClick} className="text-text-gray hover:text-accent transition-colors duration-300 px-4 py-3 block text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">{t('nav.about')}</a></li>
          <li><a href="#skills" onClick={handleMobileNavClick} className="text-text-gray hover:text-accent transition-colors duration-300 px-4 py-3 block text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">{t('nav.skills')}</a></li>
          <li><a href="#projects" onClick={handleMobileNavClick} className="text-text-gray hover:text-accent transition-colors duration-300 px-4 py-3 block text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">{t('nav.projects')}</a></li>
          <li><a href="#contact" onClick={handleMobileNavClick} className="text-text-gray hover:text-accent transition-colors duration-300 px-4 py-3 block text-sm hover:bg-accent/5 border border-transparent hover:border-accent/30">{t('nav.contact')}</a></li>
        </ul>
        <div className="px-6 pb-6">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar 
