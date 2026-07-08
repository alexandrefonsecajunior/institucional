import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import AnimatedSVG from './AnimatedSVG'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 bg-darker-bg relative overflow-hidden">
      {/* SVG decorativo no fundo */}
      <div className="absolute top-16 right-8 opacity-5">
        <AnimatedSVG size={200} delay={0.8} />
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 relative font-bold">
          {t('about.title')}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent"></div>
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <p className="text-lg text-text-gray leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-text-gray leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="animate-on-scroll text-center p-6 bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-300 relative group">
                {/* SVG animado no card */}
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <AnimatedSVG size={40} delay={0} />
                </div>
                <span className="block text-4xl font-bold text-accent mb-2">3+</span>
                <span className="text-text-gray text-sm">{t('about.stats.experience')}</span>
              </div>
              <div className="animate-on-scroll text-center p-6 bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-300 relative group">
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <AnimatedSVG size={40} delay={0.3} />
                </div>
                <span className="block text-4xl font-bold text-accent mb-2">50+</span>
                <span className="text-text-gray text-sm">{t('about.stats.projects')}</span>
              </div>
              <div className="animate-on-scroll text-center p-6 bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-300 relative group">
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <AnimatedSVG size={40} delay={0.6} />
                </div>
                <span className="block text-4xl font-bold text-accent mb-2">15+</span>
                <span className="text-text-gray text-sm">{t('about.stats.technologies')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe 
