import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { companyInfo } from '../config/company'
import AnimatedSVG from './AnimatedSVG'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* SVG decorativo no fundo */}
      <div className="hidden sm:block absolute top-12 left-8 opacity-5">
        <AnimatedSVG size={150} delay={1} />
      </div>
      <div className="hidden sm:block absolute bottom-16 right-12 opacity-8">
        <AnimatedSVG size={100} delay={1.5} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 sm:mb-12 relative font-bold">
          {t('contact.title')}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent"></div>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-base sm:text-lg text-text-gray mb-8 leading-relaxed">
              {t('contact.description')}
            </p>
            <div className="space-y-3">
              <a href={`mailto:${companyInfo.contactEmail}`} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-light p-4 bg-accent-dark border border-border-color hover:border-accent/50 hover:text-accent transition-all duration-300">
                <span className="text-sm uppercase tracking-[0.18em] text-accent">Email</span>
                <span className="break-all">{companyInfo.contactEmail}</span>
              </a>
              <a href="https://www.linkedin.com/in/alexandre-da-fonseca-junior-82477a1b5/" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-light p-4 bg-accent-dark border border-border-color hover:border-accent/50 hover:text-accent transition-all duration-300">
                <span className="text-sm uppercase tracking-[0.18em] text-accent">LinkedIn</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/alexandrefonsecajunior" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-light p-4 bg-accent-dark border border-border-color hover:border-accent/50 hover:text-accent transition-all duration-300">
                <span className="text-sm uppercase tracking-[0.18em] text-accent">GitHub</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
