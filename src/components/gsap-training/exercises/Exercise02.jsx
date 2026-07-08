import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Exercise02 = () => {
  const positionRef = useRef(null);
  const scaleRef = useRef(null);
  const rotationRef = useRef(null);
  const opacityRef = useRef(null);
  const skewRef = useRef(null);
  const combinedRef = useRef(null);

  useEffect(() => {
    // Reset all elements
    const elements = [positionRef, scaleRef, rotationRef, opacityRef, skewRef, combinedRef];
    elements.forEach(ref => {
      if (ref.current) {
        gsap.set(ref.current, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          skewX: 0,
          skewY: 0,
          backgroundColor: '#3b82f6'
        });
      }
    });
  }, []);

  const animatePosition = () => {
    gsap.to(positionRef.current, {
      duration: 1.5,
      x: 200,
      y: 50,
      ease: 'power2.out'
    });
  };

  const animateScale = () => {
    gsap.to(scaleRef.current, {
      duration: 1.5,
      scaleX: 2,
      scaleY: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  const animateRotation = () => {
    gsap.to(rotationRef.current, {
      duration: 2,
      rotation: 720,
      ease: 'power2.inOut'
    });
  };

  const animateOpacity = () => {
    gsap.to(opacityRef.current, {
      duration: 1,
      opacity: 0.2,
      yoyo: true,
      repeat: 3,
      ease: 'power2.inOut'
    });
  };

  const animateSkew = () => {
    gsap.to(skewRef.current, {
      duration: 1.5,
      skewX: 20,
      skewY: -10,
      ease: 'back.out(1.7)'
    });
  };

  const animateCombined = () => {
    gsap.to(combinedRef.current, {
      duration: 2,
      x: 150,
      y: -30,
      scale: 1.5,
      rotation: 180,
      skewX: 15,
      opacity: 0.8,
      backgroundColor: '#10b981',
      borderRadius: '50%',
      ease: 'power2.inOut'
    });
  };

  const resetAll = () => {
    const elements = [positionRef, scaleRef, rotationRef, opacityRef, skewRef, combinedRef];
    elements.forEach(ref => {
      if (ref.current) {
        gsap.to(ref.current, {
          duration: 0.5,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          skewX: 0,
          skewY: 0,
          backgroundColor: '#3b82f6',
          borderRadius: '8px'
        });
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Título e Explicação */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          🎨 Exercício 2: Propriedades Essenciais
        </h2>
        <p className="text-blue-200 mb-6">
          Explore as principais propriedades que você pode animar com GSAP
        </p>
      </div>

      {/* Área de Demonstração */}
      <div className="bg-gray-800/50 rounded-lg p-8 min-h-[500px] relative overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {/* Position */}
          <div className="text-center">
            <h4 className="text-white text-sm mb-4">Position (x, y)</h4>
            <div
              ref={positionRef}
              className="w-12 h-12 bg-blue-500 rounded-lg mx-auto"
            />
          </div>

          {/* Scale */}
          <div className="text-center">
            <h4 className="text-white text-sm mb-4">Scale</h4>
            <div
              ref={scaleRef}
              className="w-12 h-12 bg-blue-500 rounded-lg mx-auto"
            />
          </div>

          {/* Rotation */}
          <div className="text-center">
            <h4 className="text-white text-sm mb-4">Rotation</h4>
            <div
              ref={rotationRef}
              className="w-12 h-12 bg-blue-500 rounded-lg mx-auto"
            />
          </div>

          {/* Opacity */}
          <div className="text-center">
            <h4 className="text-white text-sm mb-4">Opacity</h4>
            <div
              ref={opacityRef}
              className="w-12 h-12 bg-blue-500 rounded-lg mx-auto"
            />
          </div>

          {/* Skew */}
          <div className="text-center">
            <h4 className="text-white text-sm mb-4">Skew</h4>
            <div
              ref={skewRef}
              className="w-12 h-12 bg-blue-500 rounded-lg mx-auto"
            />
          </div>

          {/* Combined */}
          <div className="text-center">
            <h4 className="text-white text-sm mb-4">Combinado</h4>
            <div
              ref={combinedRef}
              className="w-12 h-12 bg-blue-500 rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={animatePosition}
          className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors text-sm"
        >
          📍 Position
        </button>
        
        <button
          onClick={animateScale}
          className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors text-sm"
        >
          📏 Scale
        </button>
        
        <button
          onClick={animateRotation}
          className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors text-sm"
        >
          🔄 Rotation
        </button>
        
        <button
          onClick={animateOpacity}
          className="px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors text-sm"
        >
          👻 Opacity
        </button>
        
        <button
          onClick={animateSkew}
          className="px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-medium transition-colors text-sm"
        >
          🔀 Skew
        </button>
        
        <button
          onClick={animateCombined}
          className="px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors text-sm"
        >
          🎭 Combinado
        </button>
        
        <button
          onClick={resetAll}
          className="px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors text-sm col-span-2"
        >
          🔄 Reset Tudo
        </button>
      </div>

      {/* Explicação das Propriedades */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="space-y-4">
          <h3 className="text-white font-semibold">🎯 Propriedades Básicas:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <code className="text-blue-300">x, y</code>
              <span className="text-gray-300">Posição horizontal/vertical</span>
            </div>
            <div className="flex justify-between">
              <code className="text-blue-300">scale</code>
              <span className="text-gray-300">Escala (tamanho)</span>
            </div>
            <div className="flex justify-between">
              <code className="text-blue-300">rotation</code>
              <span className="text-gray-300">Rotação em graus</span>
            </div>
            <div className="flex justify-between">
              <code className="text-blue-300">opacity</code>
              <span className="text-gray-300">Transparência (0-1)</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-white font-semibold">🎨 Propriedades Avançadas:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <code className="text-green-300">skewX, skewY</code>
              <span className="text-gray-300">Inclinação</span>
            </div>
            <div className="flex justify-between">
              <code className="text-green-300">scaleX, scaleY</code>
              <span className="text-gray-300">Escala por eixo</span>
            </div>
            <div className="flex justify-between">
              <code className="text-green-300">backgroundColor</code>
              <span className="text-gray-300">Cor de fundo</span>
            </div>
            <div className="flex justify-between">
              <code className="text-green-300">borderRadius</code>
              <span className="text-gray-300">Borda arredondada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Código de Exemplo */}
      <div className="bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3">💻 Exemplo de Código:</h3>
        <pre className="text-sm text-green-300 overflow-x-auto">
{`gsap.to(elemento, {
  duration: 2,
  x: 100,           // Move 100px para direita
  y: 50,            // Move 50px para baixo
  scale: 1.5,       // Aumenta 50%
  rotation: 360,    // Rotaciona 360°
  opacity: 0.8,     // 80% de opacidade
  skewX: 15,        // Inclina 15° no eixo X
  backgroundColor: '#10b981',
  ease: 'power2.out'
});`}
        </pre>
      </div>

      {/* Desafio */}
      <div className="bg-orange-500/20 rounded-lg p-6">
        <h3 className="text-orange-400 font-semibold mb-2">🏆 Desafio:</h3>
        <p className="text-orange-200 text-sm">
          Crie uma animação que use TODAS as propriedades em sequência. Dica: use <code>yoyo: true</code> 
          e <code>repeat: -1</code> para criar um loop infinito interessante!
        </p>
      </div>
    </div>
  );
};

export default Exercise02; 