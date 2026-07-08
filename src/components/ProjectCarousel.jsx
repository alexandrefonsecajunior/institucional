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
    <div className="project-carousel w-full max-w-7xl mx-auto overflow-hidden">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1}
        spaceBetween={16}
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
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 16,
            effect: 'slide',
          },
          768: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            effect: 'coverflow',
          },
          1024: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 40,
            effect: 'coverflow',
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!w-full sm:!w-[22rem] lg:!w-80">
            <div className="bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-500 overflow-hidden">
              {/* Project Image */}
              <div className="h-44 sm:h-48 bg-darker-bg border-b border-border-color overflow-hidden">
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
              <div className="p-5 sm:p-6">
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
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white font-semibold border border-accent hover:bg-accent/80 hover:shadow-lg transition-all duration-300"
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
    </div>
  )
}

export default ProjectCarousel 
