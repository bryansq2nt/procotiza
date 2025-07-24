// CTASection: sección final de llamado a la acción
import React from 'react';

export const CTASection: React.FC = () => (
  <section className="py-16 bg-blue-600 flex flex-col items-center text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para agilizar tus cotizaciones?</h2>
    <a
      href="/signup"
      className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-white transition"
    >
      Regístrate ahora
    </a>
  </section>
); 