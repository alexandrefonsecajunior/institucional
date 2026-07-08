import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Exercise03 = () => {
  const ballRefs = useRef([]);
  const customBallRef = useRef(null);

  // Diferentes propriedades de easing para demonstração
  const easingTypes = [
    { name: 'linear', ease: 'none', color: '#ef4444', duration: 2 },
    { name: 'power2.out', ease: 'power2.out', color: '#f59e0b', duration: 2 },
    { name: 'back.out', ease: 'back.out(1.7)', color: '#10b981', duration: 2 },
    { name: 'elastic.out', ease: 'elastic.out(1, 0.3)', color: '#3b82f6', duration: 2 },
    { name: 'bounce.out', ease: 'bounce.out', color: '#8b5cf6', duration: 2 },
    { name: 'circ.inOut', ease: 'circ.inOut', color: '#ec4899', duration: 2 }
  ];

  useEffect(() => {
    // Initialize all balls at starting position
    ballRefs.current.forEach((ball, index) => {
      if (ball) {
        gsap.set(ball, {
          x: 0,
          backgroundColor: easingTypes[index].color
        });
      }
    });
    
    if (customBallRef.current) {
      gsap.set(customBallRef.current, { x: 0 });
    }
  }, []);

  const animateAll = () => {
    ballRefs.current.forEach((ball, index) => {
      if (ball) {
        gsap.to(ball, {
          duration: easingTypes[index].duration,
          x: 400,
          ease: easingTypes[index].ease
        });
      }
    });
  };

  const resetAll = () => {
    ballRefs.current.forEach(ball => {
      if (ball) {
        gsap.to(ball, {
          duration: 0.5,
          x: 0,
          ease: 'power2.out'
        });
      }
    });
    
    if (customBallRef.current) {
      gsap.to(customBallRef.current, {
        duration: 0.5,
        x: 0,
        ease: 'power2.out'
      });
    }
  };

  const demonstrateDuration = () => {
    // Demonstra diferentes durações
    const durations = [0.5, 1, 2, 3];
    ballRefs.current.slice(0, 4).forEach((ball, index) => {
      if (ball) {
        gsap.to(ball, {
          duration: durations[index],
          x: 300,
          ease: 'power2.out'
        });
      }
    });
  };

  const customEasingDemo = () => {
    // Demonstração com easing customizado
    gsap.to(customBallRef.current, {
      duration: 3,
      x: 350,
      ease: 'power4.inOut',
      // Demonstra como combinar com outras propriedades
      scale: 1.5,
      rotation: 360,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <div className="space-y-6">
      {/* Título e Explicação */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          ⏱️ Exercício 3: Easing & Duração
        </h2>
        <p className="text-blue-200 mb-6">
          Entenda como o timing e as curvas de easing controlam o "feeling" das suas animações
        </p>
      </div>

      {/* Demonstração de Easing Types */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">🎯 Comparação de Easing Types:</h3>
        <div className="space-y-4 mb-6">
          {easingTypes.map((type, index) => (
            <div key={type.name} className="flex items-center space-x-4">
              <div className="w-20 text-right">
                <code className="text-xs text-gray-300">{type.name}</code>
              </div>
              <div className="flex-1 bg-gray-700/50 rounded-full h-12 relative overflow-hidden">
                <div
                  ref={el => ballRefs.current[index] = el}
                  className="w-12 h-12 rounded-full absolute top-0 left-0 flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: type.color }}
                >
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={animateAll}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
        >
          🚀 Comparar Easings
        </button>
        
        <button
          onClick={demonstrateDuration}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
        >
          ⏱️ Diferentes Durações
        </button>
        
        <button
          onClick={customEasingDemo}
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
        >
          ✨ Easing Customizado
        </button>
        
        <button
          onClick={resetAll}
          className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          🔄 Reset
        </button>
      </div>

      {/* Custom Ball Demo */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">🎭 Demonstração Customizada:</h3>
        <div className="bg-gray-700/50 rounded-full h-16 relative overflow-hidden">
          <div
            ref={customBallRef}
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full absolute top-0 left-0 flex items-center justify-center text-white font-bold"
          >
            ✨
          </div>
        </div>
      </div>

      {/* Explicações dos Easing Types */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-500/20 rounded-lg p-4">
          <h3 className="text-blue-400 font-semibold mb-3">📚 Easings Básicos:</h3>
          <div className="space-y-2 text-sm">
            <div><code className="text-blue-300">none</code> - Linear, velocidade constante</div>
            <div><code className="text-blue-300">power1/2/3/4.in/out/inOut</code> - Curvas suaves</div>
            <div><code className="text-blue-300">back.out</code> - Ultrapassa e volta</div>
            <div><code className="text-blue-300">circ.inOut</code> - Curva circular</div>
          </div>
        </div>

        <div className="bg-green-500/20 rounded-lg p-4">
          <h3 className="text-green-400 font-semibold mb-3">🎪 Easings Especiais:</h3>
          <div className="space-y-2 text-sm">
            <div><code className="text-green-300">elastic.out</code> - Efeito elástico</div>
            <div><code className="text-green-300">bounce.out</code> - Efeito de ricochete</div>
            <div><code className="text-green-300">steps(5)</code> - Animação em passos</div>
            <div><code className="text-green-300">rough</code> - Movimento irregular</div>
          </div>
        </div>
      </div>

      {/* Explicação de Duração */}
      <div className="bg-yellow-500/20 rounded-lg p-4">
        <h3 className="text-yellow-400 font-semibold mb-3">⏰ Sobre Duração:</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-yellow-300">Rápida (0.1-0.5s):</strong>
            <p className="text-yellow-200">Micro-interações, hover effects</p>
          </div>
          <div>
            <strong className="text-yellow-300">Média (0.5-1.5s):</strong>
            <p className="text-yellow-200">Transições de estado, modals</p>
          </div>
          <div>
            <strong className="text-yellow-300">Lenta (1.5s+):</strong>
            <p className="text-yellow-200">Animações narrativas, onboarding</p>
          </div>
        </div>
      </div>

      {/* Código de Exemplo */}
      <div className="bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3">💻 Exemplos de Código:</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-blue-300 font-medium mb-2">Easing Básico:</h4>
            <pre className="text-sm text-green-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`gsap.to(elemento, {
  duration: 2,
  x: 100,
  ease: "power2.out"  // Rápido no início, lento no fim
});`}
            </pre>
          </div>
          
          <div>
            <h4 className="text-purple-300 font-medium mb-2">Easing com Parâmetros:</h4>
            <pre className="text-sm text-green-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`gsap.to(elemento, {
  duration: 1.5,
  scale: 1.2,
  ease: "elastic.out(1, 0.3)"  // Força: 1, Período: 0.3
});`}
            </pre>
          </div>
        </div>
      </div>

      {/* Desafio */}
      <div className="bg-red-500/20 rounded-lg p-6">
        <h3 className="text-red-400 font-semibold mb-2">🏆 Desafio:</h3>
        <p className="text-red-200 text-sm">
          Crie uma animação que use 3 easings diferentes em sequência na mesma propriedade. 
          Dica: Use <code>delay</code> para criar uma sequência ou explore <code>steps()</code> 
          para criar um efeito de "stop-motion"!
        </p>
      </div>
    </div>
  );
};

export default Exercise03; 