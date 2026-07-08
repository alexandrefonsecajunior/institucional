const ProjectCarousel = ({ projects }) => {
  const projectScreenshots = {
    'da-elite-express': '/assets/screenshots/da-elite-express.jpg',
    'eg-pisos-epoxi': '/assets/screenshots/eg-pisos-epoxi.jpg',
    athly: '/assets/screenshots/athly.jpg',
    'eng-glass': '/assets/screenshots/eng-glass.jpg',
    fontec: '/assets/screenshots/fontec.jpg',
  }

  const ProjectCard = ({ project }) => (
    <div className="h-full bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-500 overflow-hidden">
      <div className="h-44 sm:h-48 bg-darker-bg border-b border-border-color overflow-hidden">
        {projectScreenshots[project.id] ? (
          <img
            src={projectScreenshots[project.id]}
            alt={`Screenshot do ${project.name}`}
            loading="lazy"
            decoding="async"
            width="1200"
            height="675"
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-text-gray">
            <div className="w-12 h-12 text-accent mb-3 opacity-60">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21,15 16,10 5,21" />
              </svg>
            </div>
            <p className="text-sm font-medium">{project.name}</p>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span className="text-text-gray text-xs font-medium">Site Ativo</span>
        </div>

        <h3 className="text-accent text-xl font-semibold mb-3 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-text-gray text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

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

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white font-semibold border border-accent hover:bg-accent/80 hover:shadow-lg transition-all duration-300"
        >
          <span>Ver Projeto</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
    </div>
  )

  return (
    <div className="project-carousel w-full max-w-7xl mx-auto">
      <div className="project-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 sm:-mx-6 sm:gap-6 sm:px-6 lg:mx-0 lg:px-0">
        {projects.map((project) => (
          <article key={project.id} className="w-[82vw] max-w-xs shrink-0 snap-center sm:w-[22rem] sm:max-w-none lg:w-80">
            <ProjectCard project={project} />
          </article>
        ))}
      </div>

      <p className="mt-2 text-center text-xs text-text-gray">
        Deslize para ver mais projetos.
      </p>
    </div>
  )
}

export default ProjectCarousel 
