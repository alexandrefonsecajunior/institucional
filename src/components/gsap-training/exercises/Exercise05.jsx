import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Exercise05 = () => {
  const sequenceRefs = useRef([]);
  const complexRefs = useRef([]);
  const controlRefs = useRef([]);
  const [timelineStatus, setTimelineStatus] = useState('stopped');
  const [timelineProgress, setTimelineProgress] = useState(0);

  // Timeline instance
  const tl = useRef(null);
  const complexTl = useRef(null);
  const controlTl = useRef(null);

  useEffect(() => {
    // Initialize all elements
    const allElements = [
      ...sequenceRefs.current,
      ...complexRefs.current,
      ...controlRefs.current
    ].filter(Boolean);
    
    gsap.set(allElements, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      opacity: 1
    });

    // Create control timeline but don't play it
    controlTl.current = gsap.timeline({ paused: true });
    controlTl.current
      .to(controlRefs.current[0], { duration: 1, x: 100, rotation: 360 })
      .to(controlRefs.current[1], { duration: 1, y: -50, scale: 1.5 }, "-=0.5")
      .to(controlRefs.current[2], { duration: 1, x: -100, skewX: 20 });

    return () => {
      // Cleanup timelines
      if (tl.current) tl.current.kill();
      if (complexTl.current) complexTl.current.kill();
      if (controlTl.current) controlTl.current.kill();
    };
  }, []);

  const basicTimeline = () => {
    setTimelineStatus('playing');
    
    // Create a basic timeline
    tl.current = gsap.timeline({
      onUpdate: () => {
        if (tl.current) {
          setTimelineProgress(Math.round(tl.current.progress() * 100));
        }
      },
      onComplete: () => {
        setTimelineStatus('completed');
        setTimeout(() => setTimelineStatus('stopped'), 2000);
      }
    });

    // Add animations to timeline
    tl.current
      .to(sequenceRefs.current[0], {
        duration: 1,
        x: 150,
        backgroundColor: '#ef4444',
        ease: 'power2.out'
      })
      .to(sequenceRefs.current[1], {
        duration: 1,
        y: -80,
        rotation: 180,
        backgroundColor: '#10b981',
        ease: 'bounce.out'
      })
      .to(sequenceRefs.current[2], {
        duration: 1.5,
        scale: 1.8,
        borderRadius: '50%',
        backgroundColor: '#8b5cf6',
        ease: 'elastic.out(1, 0.3)'
      });
  };

  const complexTimeline = () => {
    setTimelineStatus('playing complex');
    
    complexTl.current = gsap.timeline({
      onComplete: () => {
        setTimelineStatus('complex completed');
        setTimeout(() => setTimelineStatus('stopped'), 2000);
      }
    });

    // Complex timeline with positioning
    complexTl.current
      .set(complexRefs.current, { opacity: 1 }) // Set initial state
      .from(complexRefs.current[0], {
        duration: 0.8,
        x: -200,
        opacity: 0,
        ease: 'power3.out'
      })
      .from(complexRefs.current[1], {
        duration: 0.8,
        y: 200,
        opacity: 0,
        ease: 'power3.out'
      }, "-=0.6") // Start 0.6s before previous ends
      .from(complexRefs.current[2], {
        duration: 0.8,
        scale: 0,
        rotation: 360,
        opacity: 0,
        ease: 'back.out(1.7)'
      }, "<0.2") // Start 0.2s after previous starts
      .to(complexRefs.current, {
        duration: 1,
        y: -30,
        ease: 'power2.inOut',
        stagger: 0.1
      })
      .to(complexRefs.current, {
        duration: 0.5,
        scale: 1.2,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
      }, "-=0.5");
  };

  const playTimeline = () => {
    if (controlTl.current) {
      controlTl.current.play();
      setTimelineStatus('playing controlled');
    }
  };

  const pauseTimeline = () => {
    if (controlTl.current) {
      controlTl.current.pause();
      setTimelineStatus('paused');
    }
  };

  const reverseTimeline = () => {
    if (controlTl.current) {
      controlTl.current.reverse();
      setTimelineStatus('reversing');
    }
  };

  const restartTimeline = () => {
    if (controlTl.current) {
      controlTl.current.restart();
      setTimelineStatus('restarting');
    }
  };

  const resetAll = () => {
    // Kill all timelines
    if (tl.current) tl.current.kill();
    if (complexTl.current) complexTl.current.kill();
    if (controlTl.current) controlTl.current.pause().progress(0);

    // Reset all elements
    const allElements = [
      ...sequenceRefs.current,
      ...complexRefs.current,
      ...controlRefs.current
    ].filter(Boolean);
    
    gsap.to(allElements, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      opacity: 1,
      backgroundColor: '#3b82f6',
      borderRadius: '8px',
      skewX: 0,
      onComplete: () => {
        setTimelineStatus('reset');
        setTimelineProgress(0);
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Título e Explicação */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          🎬 Exercício 5: Timeline Básica  
        </h2>
        <p className="text-blue-200 mb-6">
          Aprenda a criar sequências complexas de animações com controle total
        </p>
      </div>

      {/* Status e Progress */}
      <div className="bg-blue-500/20 rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-blue-200">
            Status: <span className="font-semibold">{timelineStatus}</span>
          </p>
          <p className="text-blue-200">
            Progresso: <span className="font-semibold">{timelineProgress}%</span>
          </p>
        </div>
        {timelineProgress > 0 && (
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-100"
              style={{ width: `${timelineProgress}%` }}
            />
          </div>
        )}
      </div>

      {/* Timeline Básica */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">🎯 Timeline Sequencial:</h3>
        <div className="flex space-x-8 items-center justify-center mb-6">
          {[0, 1, 2].map(index => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-400 mb-2">Passo {index + 1}</div>
              <div
                ref={el => sequenceRefs.current[index] = el}
                className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={basicTimeline}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            ▶️ Timeline Básica
          </button>
        </div>
      </div>

      {/* Timeline Complexa */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">🎭 Timeline com Posicionamento:</h3>
        <div className="flex space-x-12 items-center justify-center mb-6 min-h-[120px]">
          {[0, 1, 2].map(index => (
            <div
              key={index}
              ref={el => complexRefs.current[index] = el}
              className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
            >
              {['🌟', '⚡', '🔥'][index]}
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={complexTimeline}
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
          >
            🎪 Timeline Complexa
          </button>
        </div>
      </div>

      {/* Timeline com Controles */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">🎮 Timeline Controlável:</h3>
        <div className="flex space-x-8 items-center justify-center mb-6">
          {[0, 1, 2].map(index => (
            <div
              key={index}
              ref={el => controlRefs.current[index] = el}
              className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={playTimeline}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors text-sm"
          >
            ▶️ Play
          </button>
          <button
            onClick={pauseTimeline}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors text-sm"
          >
            ⏸️ Pause
          </button>
          <button
            onClick={reverseTimeline}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors text-sm"
          >
            ⏪ Reverse
          </button>
          <button
            onClick={restartTimeline}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors text-sm"
          >
            🔄 Restart
          </button>
        </div>
      </div>

      {/* Reset */}
      <div className="text-center">
        <button
          onClick={resetAll}
          className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          🔄 Reset Tudo
        </button>
      </div>

      {/* Explicações */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-indigo-500/20 rounded-lg p-4">
          <h3 className="text-indigo-400 font-semibold mb-3">🎬 Timeline Básica:</h3>
          <div className="space-y-2 text-sm text-indigo-200">
            <div><code>.to()</code> - Adiciona animação ao final</div>
            <div><code>.from()</code> - Adiciona animação from ao final</div>
            <div><code>.set()</code> - Define propriedades instantaneamente</div>
            <div><code>.fromTo()</code> - Controle total de from/to</div>
          </div>
        </div>

        <div className="bg-green-500/20 rounded-lg p-4">
          <h3 className="text-green-400 font-semibold mb-3">⏰ Posicionamento:</h3>
          <div className="space-y-2 text-sm text-green-200">
            <div><code>"-=0.5"</code> - Inicia 0.5s antes do anterior</div>
            <div><code>"+=0.3"</code> - Inicia 0.3s depois do anterior</div>
            <div><code>"&lt;"</code> - Inicia com o anterior</div>
            <div><code>"&lt;0.2"</code> - Inicia 0.2s após o anterior iniciar</div>
          </div>
        </div>
      </div>

      {/* Código de Exemplo */}
      <div className="bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3">💻 Exemplo de Timeline:</h3>
        <pre className="text-sm text-green-300 bg-gray-800 p-4 rounded overflow-x-auto">
{`const tl = gsap.timeline();

tl.to(elemento1, { duration: 1, x: 100 })
  .to(elemento2, { duration: 1, y: -50 }, "-=0.5") // Sobrepõe 0.5s
  .from(elemento3, { scale: 0, opacity: 0 }, "<0.2") // 0.2s após anterior
  .set(elemento4, { visibility: "visible" }) // Instantâneo
  .to([elemento1, elemento2], { 
    rotation: 360, 
    stagger: 0.1 
  });

// Controles
tl.play();     // Reproduz
tl.pause();    // Pausa
tl.reverse();  // Reverte
tl.restart();  // Reinicia`}
        </pre>
      </div>

      {/* Vantagens da Timeline */}
      <div className="bg-yellow-500/20 rounded-lg p-4">
        <h3 className="text-yellow-400 font-semibold mb-3">🌟 Vantagens da Timeline:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-200">
          <div>
            <strong>• Sequenciamento:</strong> Controle preciso da ordem
          </div>
          <div>
            <strong>• Sincronização:</strong> Sobreposição e timing perfeitos
          </div>
          <div>
            <strong>• Controles:</strong> Play, pause, reverse, restart
          </div>
          <div>
            <strong>• Performance:</strong> Otimizada para múltiplas animações
          </div>
        </div>
      </div>

      {/* Desafio */}
      <div className="bg-red-500/20 rounded-lg p-6">
        <h3 className="text-red-400 font-semibold mb-2">🏆 Desafio:</h3>
        <p className="text-red-200 text-sm">
          Crie uma timeline que anime 5 elementos com diferentes tipos de entrada: 
          fade in, slide from left, scale up, rotate in, e skew. Use posicionamento 
          para criar uma "onda" de animações. Adicione callbacks para mostrar mensagens 
          conforme cada elemento anima!
        </p>
      </div>
    </div>
  );
};

export default Exercise05; 