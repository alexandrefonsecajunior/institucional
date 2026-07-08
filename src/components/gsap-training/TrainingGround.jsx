import React, { useState } from 'react';
import Exercise01 from './exercises/Exercise01';
import Exercise02 from './exercises/Exercise02';
import Exercise03 from './exercises/Exercise03';
import Exercise04 from './exercises/Exercise04';
import Exercise05 from './exercises/Exercise05';

const TrainingGround = () => {
  const [currentExercise, setCurrentExercise] = useState(1);

  const exercises = [
    { id: 1, name: 'Animações Básicas', component: Exercise01, level: 'Fundamentos' },
    { id: 2, name: 'Propriedades Essenciais', component: Exercise02, level: 'Fundamentos' },
    { id: 3, name: 'Easing & Duração', component: Exercise03, level: 'Fundamentos' },
    { id: 4, name: 'Delays & Callbacks', component: Exercise04, level: 'Fundamentos' },
    { id: 5, name: 'Timeline Básica', component: Exercise05, level: 'Timelines' },
  ];

  const CurrentExerciseComponent = exercises.find(ex => ex.id === currentExercise)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎯 GSAP Training Ground
          </h1>
          <p className="text-blue-200 text-lg">
            Seu laboratório para dominar animações GSAP
          </p>
        </div>

        {/* Exercise Selector */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Escolha seu Exercício:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {exercises.map((exercise) => (
              <button
                key={exercise.id}
                onClick={() => setCurrentExercise(exercise.id)}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentExercise === exercise.id
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white/20 text-blue-100 hover:bg-white/30 hover:text-white'
                }`}
              >
                <div className="text-xs opacity-75 mb-1">{exercise.level}</div>
                <div>Ex. {exercise.id}</div>
                <div className="text-xs mt-1">{exercise.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Exercise */}
        <div className="bg-white/5 backdrop-blur rounded-xl p-8 min-h-[600px]">
          {CurrentExerciseComponent && <CurrentExerciseComponent />}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            💡 Como Praticar:
          </h3>
          <ul className="text-blue-200 space-y-2 text-sm">
            <li>• Leia a explicação de cada exercício</li>
            <li>• Implemente o código sugerido</li>
            <li>• Experimente modificar os valores</li>
            <li>• Tente criar suas próprias variações</li>
            <li>• Avance para o próximo quando se sentir confortável</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingGround; 