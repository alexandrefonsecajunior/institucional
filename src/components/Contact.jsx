import React, { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { companyInfo } from '../config/company'
import AnimatedSVG from './AnimatedSVG'
import LoadingSVG from './LoadingSVG'

const Contact = () => {
  const { t } = useTranslation()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    
    // Mostrar SVG animado por 3 segundos
    setTimeout(() => {
      setFormSubmitted(false)
      alert(t('contact.form.successMessage'))
      e.target.reset()
    }, 3000)
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
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
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder={t('contact.form.name')} 
                required 
                className="w-full p-4 bg-accent-dark border border-border-color text-text-light focus:outline-none focus:border-accent transition-colors duration-300 placeholder-text-gray"
              />
            </div>
            <div>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder={t('contact.form.email')} 
                required 
                className="w-full p-4 bg-accent-dark border border-border-color text-text-light focus:outline-none focus:border-accent transition-colors duration-300 placeholder-text-gray"
              />
            </div>
            <div>
              <textarea 
                id="message" 
                name="message" 
                placeholder={t('contact.form.message')} 
                rows="5" 
                required 
                className="w-full p-4 bg-accent-dark border border-border-color text-text-light focus:outline-none focus:border-accent transition-colors duration-300 placeholder-text-gray resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-8 py-4 bg-accent text-white font-semibold border border-accent hover:bg-accent/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              disabled={formSubmitted}
            >
              {formSubmitted ? (
                <div className="flex items-center justify-center gap-3">
                  <LoadingSVG size={20} className="text-white" />
                  <span>Enviando...</span>
                </div>
              ) : (
                t('contact.form.send')
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 
