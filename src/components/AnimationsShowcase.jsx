import React from 'react'
import GSAPAnimatedSVG from './GSAPAnimatedSVG'

const AnimationsShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-dark-bg to-darker-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <GSAPAnimatedSVG size={100} delay={0} />
        </div>
        <div className="absolute top-20 right-20">
          <GSAPAnimatedSVG size={80} delay={0.8} />
        </div>
        <div className="absolute bottom-10 left-1/3">
          <GSAPAnimatedSVG size={120} delay={1.2} />
        </div>
        <div className="absolute bottom-20 right-10">
          <GSAPAnimatedSVG size={90} delay={1.8} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GSAPAnimatedSVG size={200} delay={2.5} />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-text-light mb-4">
          Animações Avançadas
        </h3>
        <p className="text-text-gray mb-8 max-w-2xl mx-auto">
          Experiências visuais criadas com GSAP para dar vida aos elementos da interface
        </p>
        <div className="flex justify-center">
          <GSAPAnimatedSVG size={150} delay={0.5} />
        </div>
      </div>
    </section>
  )
}

export default AnimationsShowcase 