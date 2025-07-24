// Footer: muestra enlaces a Privacidad y Contacto
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="py-6 bg-gray-100 text-center text-sm text-gray-500">
    <a href="/privacidad" className="hover:underline mx-2">Privacidad</a>
    |
    <a href="/contacto" className="hover:underline mx-2">Contacto</a>
  </footer>
); 