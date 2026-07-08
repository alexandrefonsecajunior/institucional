import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const ProjectCarousel = ({ projects }) => {

  const projectScreenshots = {
    'da-elite-express': '/assets/screenshots/da-elite-express.png',
    'eg-pisos-epoxi': '/assets/screenshots/eg-pisos-epoxi.png',
    athly: '/assets/screenshots/athly.png',
    'eng-glass': '/assets/screenshots/eng-glass.png',
    fontec: '/assets/screenshots/fontec.png',
  }

  return (
    <div className="project-carousel w-full max-w-7xl mx-auto">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={30}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="modern-project-swiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            effect: 'slide',
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            effect: 'coverflow',
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
            effect: 'coverflow',
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="w-80">
            <div className="bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-500 overflow-hidden">
              {/* Project Image */}
              <div className="h-48 bg-darker-bg border-b border-border-color overflow-hidden">
                {projectScreenshots[project.id] ? (
                  <img 
                    src={projectScreenshots[project.id]} 
                    alt={`Screenshot do ${project.name}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-text-gray">
                    <div className="w-12 h-12 text-accent mb-3 opacity-60">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21,15 16,10 5,21"/>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">{project.name}</p>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Status Indicator */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span className="text-text-gray text-xs font-medium">Site Ativo</span>
                </div>

                <h3 className="text-accent text-xl font-semibold mb-3 group-hover:text-text-light transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-text-gray text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-dark-bg px-3 py-1 text-xs text-text-light border border-border-color hover:border-accent/50 hover:text-accent transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-dark-bg px-3 py-1 text-xs text-text-gray border border-border-color">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action Button */}
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold border border-accent hover:bg-accent/80 hover:shadow-lg transition-all duration-300"
                >
                  <span>Ver Projeto</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="help-section">
        <div className="help-content">
          <div className="help-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9,9a3,3 0 1,1 6,0c0,2 -3,3 -3,3"/>
              <path d="M12 17h.01"/>
            </svg>
          </div>
          <div className="help-text">
            <h4>Need project screenshots?</h4>
            <p>Use tools like ScreenshotOne API, Full Page Screen Capture, or browser DevTools to capture your websites.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel 
