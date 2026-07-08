import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Exercise01 = () => {
  const boxRef = useRef(null);
  const circleRef = useRef(null);
  const triangleRef = useRef(null);

  useEffect(() => {
    // Reset positions on component mount
    gsap.set([boxRef.current, circleRef.current, triangleRef.current], {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      opacity: 1
    });
  }, []);

  const animateTO = () => {
    // gsap.to() - anima DO estado atual PARA o estado final
    gsap.to(boxRef.current, {
      duration: 2,
      x: 300,
      rotation: 360,
      backgroundColor: '#10b981',
      ease: 'bounce.out'
    });
  };

  const animateFROM = () => {
    // gsap.from() - anima DE um estado inicial PARA o estado atual
    gsap.from(circleRef.current, {
      duration: 2,
      x: -300,
      scale: 0,
      opacity: 0,
      rotation: -360,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  const animateFROMTO = () => {
    // gsap.fromTo() - define AMBOS os estados: inicial E final
    gsap.fromTo(triangleRef.current, {
      // Estado inicial
      x: -200,
      y: -100,
      scale: 0.5,
      rotation: 0,
      opacity: 0.3
    }, {
      // Estado final
      duration: 2.5,
      x: 200,
      y: 100,
      scale: 1.5,
      rotation: 180,
      opacity: 1,
      ease: 'power2.inOut'
    });
  };

  const resetAll = () => {
    gsap.to([boxRef.current, circleRef.current, triangleRef.current], {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      opacity: 1,
      backgroundColor: '#3b82f6'
    });
  };

  return (
    <div className="space-y-6">
      {/* Título e Explicação */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          📖 Exercício 1: Animações Básicas
        </h2>
        <p className="text-blue-200 mb-6">
          Aprenda os 3 métodos fundamentais do GSAP: <code>to()</code>, <code>from()</code> e <code>fromTo()</code>
        </p>
      </div>

      {/* Área de Demonstração */}
      <div className="bg-gray-800/50 rounded-lg p-8 min-h-[400px] relative overflow-hidden">
        {/* Elementos para animar */}
        <div
          ref={boxRef}
          className="w-16 h-16 bg-blue-500 rounded-lg absolute top-20 left-20 flex items-center justify-center text-white font-bold"
        >
          TO
        </div>
        
        <div
          ref={circleRef}
          className="w-16 h-16 bg-blue-500 rounded-full absolute top-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm"
        >
          FROM
        </div>
        
        <div
          ref={triangleRef}
          className="w-0 h-0 absolute top-20 right-20"
          style={{
            borderLeft: '32px solid transparent',
            borderRight: '32px solid transparent',
            borderBottom: '55px solid #3b82f6',
          }}
        />
      </div>

      {/* Controles */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={animateTO}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
        >
          🎯 gsap.to()
        </button>
        
        <button
          onClick={animateFROM}
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
        >
          ⬅️ gsap.from()
        </button>
        
        <button
          onClick={animateFROMTO}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
        >
          🔄 gsap.fromTo()
        </button>
        
        <button
          onClick={resetAll}
          className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          🔄 Reset
        </button>
      </div>

      {/* Explicação Detalhada */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-green-500/20 rounded-lg p-4">
          <h3 className="text-green-400 font-semibold mb-2">gsap.to()</h3>
          <p className="text-green-200 text-sm">
            Anima DO estado atual PARA um novo estado. É o mais comum e intuitivo.
          </p>
          <code className="text-xs text-green-300 mt-2 block">
            gsap.to(elemento, {'{x: 300, rotation: 360}'}
          </code>
        </div>
        
        <div className="bg-purple-500/20 rounded-lg p-4">
          <h3 className="text-purple-400 font-semibold mb-2">gsap.from()</h3>
          <p className="text-purple-200 text-sm">
            Anima DE um estado inicial PARA o estado atual. Ótimo para entradas.
          </p>
          <code className="text-xs text-purple-300 mt-2 block">
            gsap.from(elemento, {'{x: -300, scale: 0}'}
          </code>
        </div>
        
        <div className="bg-orange-500/20 rounded-lg p-4">
          <h3 className="text-orange-400 font-semibold mb-2">gsap.fromTo()</h3>
          <p className="text-orange-200 text-sm">
            Controle total: define AMBOS os estados inicial e final.
          </p>
          <code className="text-xs text-orange-300 mt-2 block">
            gsap.fromTo(el, {'{scale: 0}'}, {'{scale: 1}'}
          </code>
        </div>
      </div>

      {/* Desafio */}
      <div className="bg-yellow-500/20 rounded-lg p-6 mt-6">
        <h3 className="text-yellow-400 font-semibold mb-2">🏆 Desafio:</h3>
        <p className="text-yellow-200 text-sm">
          Modifique o código para adicionar mais propriedades como <code>skew</code>, <code>borderRadius</code>, 
          ou experimente diferentes tipos de <code>ease</code> como "elastic", "bounce", "back".
        </p>
      </div>
    </div>
  );
};

export default Exercise01; 