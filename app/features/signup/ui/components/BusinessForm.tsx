'use client';
// Formulario de datos del negocio (wizard paso 2)
import React, { useState, ChangeEvent } from 'react';
import { BusinessInfo } from '../../domain/SignUpData';

type Props = {
  value: BusinessInfo;
  onChange: (data: BusinessInfo) => void;
  onPrev: () => void;
  onSubmit: () => void;
};

const questions = [
  { key: 'businessName', label: '¿Cómo se llama tu negocio?', placeholder: 'Ej: ProCotiza S.A.' },
  { key: 'businessAddress', label: '¿Cuál es la dirección de tu negocio?', placeholder: 'Ej: Calle 456, Ciudad' },
  { key: 'businessPhone', label: '¿Cuál es el teléfono de tu negocio?', placeholder: 'Ej: 555-987-6543' },
  { key: 'businessEmail', label: '¿Cuál es el correo electrónico de tu negocio que quieres que aparezca en las cotizaciones?', placeholder: 'Ej: contacto@procotiza.com' },
  { key: 'businessLogoUrl', label: 'Carga el logo de tu negocio', placeholder: '' },
  { key: 'tagline', label: '¿Cuál es el tagline de tu negocio? (ej: Virginia Wired electrical experts)', placeholder: 'Ej: Soluciones rápidas para tu empresa' },
] as const;

type QuestionKey = typeof questions[number]['key'];

export const BusinessForm: React.FC<Props> = ({ value, onChange, onPrev, onSubmit }) => {
  const [step, setStep] = useState(0);
  const current = questions[step];
  const isValid =
    current.key === 'businessLogoUrl'
      ? !!value.businessLogoUrl
      : value[current.key] && value[current.key].length > 0;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [current.key]: e.target.value });
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onChange({ ...value, businessLogoUrl: url });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow p-8 flex flex-col items-center">
      <div className="w-full mb-6">
        <label className="block text-lg font-semibold mb-2 text-black">{current.label}</label>
        {current.key === 'businessLogoUrl' ? (
          <input
            type="file"
            accept="image/*"
            className="w-full p-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleFile}
          />
        ) : (
          <input
            type={current.key === 'businessEmail' ? 'email' : 'text'}
            className="w-full p-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder={current.placeholder}
            value={value[current.key]}
            onChange={handleInput}
          />
        )}
        {current.key === 'businessLogoUrl' && value.businessLogoUrl && (
          <img src={value.businessLogoUrl} alt="Logo preview" className="mt-4 h-20 object-contain" />
        )}
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
            onClick={onSubmit}
            disabled={!isValid}
          >
            Registrarse
          </button>
        )}
      </div>
      <div className="mt-4 text-sm text-gray-500">Pregunta {step + 1} de {questions.length}</div>
    </div>
  );
}; 