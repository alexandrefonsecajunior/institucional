import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import PulseRotateSVG from './PulseRotateSVG'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* SVGs decorativos animados */}
      <div className="absolute top-16 left-12 opacity-10">
        <PulseRotateSVG size={100} delay={0.5} />
      </div>
      <div className="absolute bottom-20 right-8 opacity-8">
        <PulseRotateSVG size={80} delay={1.2} />
      </div>
      <div className="absolute top-1/2 left-8 opacity-6">
        <PulseRotateSVG size={60} delay={2} />
      </div>
      
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 relative font-bold">
          {t('skills.title')}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-on-scroll bg-accent-dark p-6 border border-border-color hover:border-accent/50 transition-all duration-300 relative group overflow-hidden">
            {/* SVG animado no hover */}
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
              <PulseRotateSVG size={50} delay={0} />
            </div>
            <h3 className="text-accent text-xl font-semibold mb-6">{t('skills.frontend')}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">React</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Vue.js</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">TypeScript</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Next.js</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">CSS3</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Tailwind</span>
            </div>
          </div>
          <div className="animate-on-scroll bg-accent-dark p-6 border border-border-color hover:border-accent/50 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
              <PulseRotateSVG size={50} delay={0.3} />
            </div>
            <h3 className="text-accent text-xl font-semibold mb-6">{t('skills.backend')}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Node.js</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Python</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Express</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">FastAPI</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">PostgreSQL</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">MongoDB</span>
            </div>
          </div>
          <div className="animate-on-scroll bg-accent-dark p-6 border border-border-color hover:border-accent/50 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
              <PulseRotateSVG size={50} delay={0.6} />
            </div>
            <h3 className="text-accent text-xl font-semibold mb-6">{t('skills.devops')}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Docker</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">AWS</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Git</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">CI/CD</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Linux</span>
              <span className="bg-dark-bg px-4 py-2 text-sm text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300 cursor-default">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 