import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { companyInfo } from '../config/company'
import AnimatedSVG from './AnimatedSVG'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* SVG decorativo no fundo */}
      <div className="absolute top-12 left-8 opacity-5">
        <AnimatedSVG size={150} delay={1} />
      </div>
      <div className="absolute bottom-16 right-12 opacity-8">
        <AnimatedSVG size={100} delay={1.5} />
      </div>
      
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 relative font-bold">
          {t('contact.title')}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent"></div>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-lg text-text-gray mb-8 leading-relaxed">
              {t('contact.description')}
            </p>
            <div className="space-y-3">
              <a href={`mailto:${companyInfo.contactEmail}`} className="flex items-center gap-4 text-text-light p-4 bg-accent-dark border border-border-color hover:border-accent/50 hover:text-accent transition-all duration-300">
                <span className="text-sm uppercase tracking-[0.18em] text-accent">Email</span>
                <span>{companyInfo.contactEmail}</span>
              </a>
              <a href="https://linkedin.com/in/alexandredafonseca" className="flex items-center gap-4 text-text-light p-4 bg-accent-dark border border-border-color hover:border-accent/50 hover:text-accent transition-all duration-300">
                <span className="text-sm uppercase tracking-[0.18em] text-accent">LinkedIn</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/alexandredafonseca" className="flex items-center gap-4 text-text-light p-4 bg-accent-dark border border-border-color hover:border-accent/50 hover:text-accent transition-all duration-300">
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
