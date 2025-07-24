'use client';
// Orquesta el wizard de registro (2 etapas)
import React, { useState } from 'react';
import { ManagerInfo, BusinessInfo } from '../../domain/SignUpData';
import { ManagerForm } from './ManagerForm';
import { BusinessForm } from './BusinessForm';
import { submitSignUp } from '../../application/submitSignUp';
import Link from 'next/link';

const initialManager: ManagerInfo = { name: '', phone: '', email: '', address: '' };
const initialBusiness: BusinessInfo = { businessName: '', businessAddress: '', businessPhone: '', businessEmail: '', businessLogoUrl: '', tagline: '' };

export const FormWizard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [manager, setManager] = useState<ManagerInfo>(initialManager);
  const [business, setBusiness] = useState<BusinessInfo>(initialBusiness);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    await submitSignUp({ manager, business });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow p-8 text-center mt-12">
        <h2 className="text-2xl font-bold mb-4 text-black">¡Registro exitoso!</h2>
        <p className="text-gray-600 mb-6">Te hemos registrado correctamente. Pronto recibirás un correo de bienvenida.</p>
        <Link href="/admin" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          Ir al panel de administración
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-2">
      {step === 0 ? (
        <ManagerForm value={manager} onChange={setManager} onNext={() => setStep(1)} />
      ) : (
        <BusinessForm value={business} onChange={setBusiness} onPrev={() => setStep(0)} onSubmit={handleSubmit} />
      )}
    </div>
  );
}; 