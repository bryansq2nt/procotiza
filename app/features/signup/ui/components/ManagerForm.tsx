'use client';
// Formulario de datos del responsable (wizard paso 1)
import React, { useState } from 'react';
import { ManagerInfo } from '../../domain/SignUpData';

type Props = {
  value: ManagerInfo;
  onChange: (data: ManagerInfo) => void;
  onNext: () => void;
};

const questions = [
  { key: 'name', label: '¿Cuál es tu nombre completo?', placeholder: 'Ej: Juan Pérez' },
  { key: 'phone', label: '¿Cuál es tu teléfono de contacto?', placeholder: 'Ej: 555-123-4567' },
  { key: 'email', label: '¿Cuál es tu correo electrónico?', placeholder: 'Ej: juan@email.com' },
  { key: 'address', label: '¿Cuál es tu dirección?', placeholder: 'Ej: Calle 123, Ciudad' },
] as const;

type QuestionKey = typeof questions[number]['key'];

export const ManagerForm: React.FC<Props> = ({ value, onChange, onNext }) => {
  const [step, setStep] = useState(0);
  const current = questions[step];
  const isValid = value[current.key] && value[current.key].length > 0;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [current.key]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow p-8 flex flex-col items-center">
      <div className="w-full mb-6">
        <label className="block text-lg font-semibold mb-2 text-black">{current.label}</label>
        <input
          type={current.key === 'email' ? 'email' : 'text'}
          className="w-full p-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          placeholder={current.placeholder}
          value={value[current.key]}
          onChange={handleInput}
        />
      </div>
      <div className="flex w-full justify-between">
        <button
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold"
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
        >
          Anterior
        </button>
        {step < questions.length - 1 ? (
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => isValid && setStep(step + 1)}
            disabled={!isValid}
          >
            Siguiente
          </button>
        ) : (
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={onNext}
            disabled={!isValid}
          >
            Siguiente
          </button>
        )}
      </div>
      <div className="mt-4 text-sm text-gray-500">Pregunta {step + 1} de {questions.length}</div>
    </div>
  );
}; 