import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Exercise04 = () => {
  const sequenceRefs = useRef([]);
  const callbackRef = useRef(null);
  const chainRefs = useRef([]);
  const staggerRef = useRef([]);
  const [message, setMessage] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initialize positions
    [...sequenceRefs.current, callbackRef.current, ...chainRefs.current, ...staggerRef.current].forEach(el => {
      if (el) {
        gsap.set(el, { x: 0, y: 0, scale: 1, rotation: 0 });
      }
    });
  }, []);

  const demonstrateDelay = () => {
    setMessage('Animação com delays iniciada...');
    setIsAnimating(true);
    
    // Animações com delays progressivos
    sequenceRefs.current.forEach((box, index) => {
      if (box) {
        gsap.to(box, {
          duration: 1,
          x: 200,
          delay: index * 0.3, // Delay crescente
          rotation: 360,
          ease: 'back.out(1.7)',
          onStart: () => {
            if (index === 0) setMessage('Primeira caixa animando...');
            if (index === 1) setMessage('Segunda caixa animando...');
            if (index === 2) setMessage('Terceira caixa animando...');
          },
          onComplete: () => {
            if (index === sequenceRefs.current.length - 1) {
              setMessage('Sequência de delays completada!');
              setIsAnimating(false);
            }
          }
        });
      }
    });
  };

  const demonstrateCallbacks = () => {
    setMessage('Demonstrando callbacks...');
    setIsAnimating(true);
    
    gsap.to(callbackRef.current, {
      duration: 2,
      x: 300,
      scale: 1.5,
      rotation: 720,
      ease: 'power2.inOut',
      onStart: () => {
        setMessage('⏳ onStart: Animação iniciou!');
      },
      onUpdate: function() {
        // Callback executado a cada frame
        const progress = Math.round(this.progress() * 100);
        setMessage(`🔄 onUpdate: ${progress}% completo`);
      },
      onComplete: () => {
        setMessage('✅ onComplete: Animação terminada!');
        setIsAnimating(false);
        // Retorna automaticamente após 1 segundo
        setTimeout(() => {
          gsap.to(callbackRef.current, {
            duration: 1,
            x: 0,
            scale: 1,
            rotation: 0,
            onComplete: () => setMessage('🔄 Retornou à posição inicial')
          });
        }, 1000);
      },
      onReverseComplete: () => {
        setMessage('↩️ onReverseComplete: Animação reversa completa!');
      }
    });
  };

  const demonstrateChain = () => {
    setMessage('Cadeia de animações iniciando...');
    setIsAnimating(true);
    
    // Primeira animação
    gsap.to(chainRefs.current[0], {
      duration: 1,
      x: 100,
      ease: 'power2.out',
      onComplete: () => {
        setMessage('Primeira etapa da cadeia completa');
        
        // Segunda animação (executada após a primeira)
        gsap.to(chainRefs.current[1], {
          duration: 1,
          y: -50,
          rotation: 180,
          ease: 'bounce.out',
          onComplete: () => {
            setMessage('Segunda etapa da cadeia completa');
            
            // Terceira animação
            gsap.to(chainRefs.current[2], {
              duration: 1.5,
              scale: 2,
              backgroundColor: '#10b981',
              ease: 'elastic.out(1, 0.3)',
              onComplete: () => {
                setMessage('🎉 Cadeia completa!');
                setIsAnimating(false);
              }
            });
          }
        });
      }
    });
  };

  const demonstrateStagger = () => {
    setMessage('Efeito stagger iniciando...');
    setIsAnimating(true);
    
    // Anima todos os elementos com stagger
    gsap.to(staggerRef.current, {
      duration: 1.5,
      y: -100,
      rotation: 360,
      scale: 1.3,
      stagger: {
        amount: 2, // Tempo total para distribuir os delays
        from: "center", // Inicia do centro
        ease: "power2.out"
      },
      ease: 'back.out(1.7)',
      onComplete: () => {
        setMessage('✨ Efeito stagger completado!');
        setIsAnimating(false);
      }
    });
  };

  const resetAll = () => {
    setMessage('Resetando todas as animações...');
    
    const allElements = [
      ...sequenceRefs.current,
      callbackRef.current,
      ...chainRefs.current,
      ...staggerRef.current
    ].filter(Boolean);
    
    gsap.to(allElements, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      backgroundColor: '#3b82f6',
      onComplete: () => {
        setMessage('Reset completo!');
        setIsAnimating(false);
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Título e Explicação */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          ⏰ Exercício 4: Delays & Callbacks
        </h2>
        <p className="text-blue-200 mb-6">
          Controle o timing e responda a eventos das animações
        </p>
      </div>

      {/* Status Message */}
      <div className="bg-blue-500/20 rounded-lg p-4 text-center">
        <p className="text-blue-200">
          {message || 'Clique em um botão para começar...'}
        </p>
        {isAnimating && (
          <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div className="bg-blue-500 h-2 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Demonstração de Delays */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">⏱️ Delays Sequenciais:</h3>
        <div className="flex space-x-8 items-center justify-center mb-4">
          {[0, 1, 2].map(index => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-400 mb-2">Delay: {index * 0.3}s</div>
              <div
                ref={el => sequenceRefs.current[index] = el}
                className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demonstração de Callbacks */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">📞 Callbacks em Ação:</h3>
        <div className="flex justify-center">
          <div
            ref={callbackRef}
            className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
          >
            📞
          </div>
        </div>
      </div>

      {/* Demonstração de Chain */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">🔗 Cadeia de Animações:</h3>
        <div className="flex space-x-12 items-center justify-center">
          {[0, 1, 2].map(index => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-400 mb-2">Etapa {index + 1}</div>
              <div
                ref={el => chainRefs.current[index] = el}
                className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demonstração de Stagger */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">✨ Efeito Stagger:</h3>
        <div className="flex space-x-4 items-center justify-center">
          {[0, 1, 2, 3, 4].map(index => (
            <div
              key={index}
              ref={el => staggerRef.current[index] = el}
              className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button
          onClick={demonstrateDelay}
          disabled={isAnimating}
          className="px-4 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white rounded-lg font-medium transition-colors"
        >
          ⏱️ Delays
        </button>
        
        <button
          onClick={demonstrateCallbacks}
          disabled={isAnimating}
          className="px-4 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-500 text-white rounded-lg font-medium transition-colors"
        >
          📞 Callbacks
        </button>
        
        <button
          onClick={demonstrateChain}
          disabled={isAnimating}
          className="px-4 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white rounded-lg font-medium transition-colors"
        >
          🔗 Chain
        </button>
        
        <button
          onClick={demonstrateStagger}
          disabled={isAnimating}
          className="px-4 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-500 text-white rounded-lg font-medium transition-colors"
        >
          ✨ Stagger
        </button>
        
        <button
          onClick={resetAll}
          className="px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors col-span-2 md:col-span-2"
        >
          🔄 Reset Tudo
        </button>
      </div>

      {/* Explicações */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-indigo-500/20 rounded-lg p-4">
          <h3 className="text-indigo-400 font-semibold mb-3">⏰ Delays:</h3>
          <div className="space-y-2 text-sm text-indigo-200">
            <div><code>delay: 2</code> - Aguarda 2s antes de iniciar</div>
            <div><code>delay: index * 0.5</code> - Delays progressivos</div>
            <div><code>stagger: 0.2</code> - Delay automático entre elementos</div>
          </div>
        </div>

        <div className="bg-green-500/20 rounded-lg p-4">
          <h3 className="text-green-400 font-semibold mb-3">📞 Callbacks:</h3>
          <div className="space-y-2 text-sm text-green-200">
            <div><code>onStart</code> - Executado no início</div>
            <div><code>onUpdate</code> - Executado a cada frame</div>
            <div><code>onComplete</code> - Executado no fim</div>
            <div><code>onReverseComplete</code> - No fim da reversa</div>
          </div>
        </div>
      </div>

      {/* Código de Exemplo */}
      <div className="bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3">💻 Exemplos de Código:</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-blue-300 font-medium mb-2">Delay e Callbacks:</h4>
            <pre className="text-sm text-green-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`gsap.to(elemento, {
  duration: 2,
  x: 100,
  delay: 1,
  onStart: () => console.log('Iniciou!'),
  onComplete: () => console.log('Terminou!')
});`}
            </pre>
          </div>
          
          <div>
            <h4 className="text-orange-300 font-medium mb-2">Stagger:</h4>
            <pre className="text-sm text-green-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`gsap.to('.boxes', {
  duration: 1,
  y: -50,
  stagger: {
    amount: 2,      // Tempo total
    from: "center", // De onde começar
    ease: "power2.out"
  }
});`}
            </pre>
          </div>
        </div>
      </div>

      {/* Desafio */}
      <div className="bg-purple-500/20 rounded-lg p-6">
        <h3 className="text-purple-400 font-semibold mb-2">🏆 Desafio:</h3>
        <p className="text-purple-200 text-sm">
          Crie uma animação que use callbacks para modificar o DOM (trocar texto, adicionar classes) 
          e experimente o <code>stagger</code> com diferentes valores de <code>from</code>: 
          "start", "center", "end", "edges", "random"!
        </p>
      </div>
    </div>
  );
};

export default Exercise04; 