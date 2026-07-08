import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import ProjectCarousel from './ProjectCarousel'
import PulseRotateSVG from './PulseRotateSVG'

const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      id: 'da-elite-express',
      name: t('projects.tabs.daElite.name'),
      url: 'https://www.daeliteexpress.com.br/',
      description: t('projects.tabs.daElite.description'),
      technologies: ['React', 'Tailwind CSS', 'Vercel', 'JavaScript']
    },
    {
      id: 'eg-pisos-epoxi',
      name: t('projects.tabs.egPisos.name'),
      url: 'https://eg-pisos-landing-page.vercel.app/',
      description: t('projects.tabs.egPisos.description'),
      technologies: ['React', 'Tailwind CSS', 'Vercel', 'Responsive Design']
    },
    {
      id: 'athly',
      name: t('projects.tabs.athly.name'),
      url: 'https://athlyproject.app/',
      description: t('projects.tabs.athly.description'),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel']
    },
    {
      id: 'eng-glass',
      name: t('projects.tabs.engGlass.name'),
      url: 'https://www.engglass.com.br/',
      description: t('projects.tabs.engGlass.description'),
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'SEO']
    },
    {
      id: 'fontec',
      name: t('projects.tabs.fontec.name'),
      url: 'https://www.fontec-eletricas.com.br/',
      description: t('projects.tabs.fontec.description'),
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'SEO']
    }
  ]

  return (
    <section id="projects" className="py-24 bg-darker-bg relative overflow-hidden">
      {/* SVG central dinâmico */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <PulseRotateSVG size={300} delay={1} />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 relative font-bold">
          {t('projects.title')}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent"></div>
        </h2>

        {/* Carousel de projetos reais */}
        <div className="mb-16">
          <ProjectCarousel projects={projects} />
        </div>

        {/* Projetos estáticos/exemplo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="animate-on-scroll bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-300 relative group overflow-hidden">
            <div className="h-32 bg-dark-bg border-b border-border-color flex items-center justify-center relative">
              <div className="text-2xl text-accent font-bold relative z-10">01</div>
            </div>
            <div className="p-6">
              <h3 className="text-accent text-xl font-semibold mb-4">{t('projects.projectsList.ecommerce.title')}</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                {t('projects.projectsList.ecommerce.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">React</span>
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">Node.js</span>
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">PostgreSQL</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-text-light transition-colors duration-300">{t('projects.viewDemo')}</a>
                <a href="#" className="text-accent hover:text-text-light transition-colors duration-300">{t('projects.viewCode')}</a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-300 relative group overflow-hidden">
            <div className="h-32 bg-dark-bg border-b border-border-color flex items-center justify-center relative">
              <div className="text-2xl text-accent font-bold relative z-10">02</div>
            </div>
            <div className="p-6">
              <h3 className="text-accent text-xl font-semibold mb-4">{t('projects.projectsList.taskManager.title')}</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                {t('projects.projectsList.taskManager.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">React</span>
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">Express</span>
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">Socket.io</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-text-light transition-colors duration-300">{t('projects.viewDemo')}</a>
                <a href="#" className="text-accent hover:text-text-light transition-colors duration-300">{t('projects.viewCode')}</a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-300 relative group overflow-hidden">
            <div className="h-32 bg-dark-bg border-b border-border-color flex items-center justify-center relative">
              <div className="text-2xl text-accent font-bold relative z-10">03</div>
            </div>
            <div className="p-6">
              <h3 className="text-accent text-xl font-semibold mb-4">{t('projects.projectsList.portfolio.title')}</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                {t('projects.projectsList.portfolio.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">React</span>
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">Tailwind</span>
                <span className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color">GSAP</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-text-light transition-colors duration-300">{t('projects.viewDemo')}</a>
                <a href="#" className="text-accent hover:text-text-light transition-colors duration-300">{t('projects.viewCode')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 
