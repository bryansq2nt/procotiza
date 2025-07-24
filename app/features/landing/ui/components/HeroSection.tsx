// HeroSection: muestra el título, subtítulo y CTA principal de la landing
import React from 'react';

type Props = {
  title: string;
  subtitle: string;
};

export const HeroSection: React.FC<Props> = ({ title, subtitle }) => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">{title}</h1>
    <p className="text-lg md:text-2xl text-gray-600 mb-8">{subtitle}</p>
    <a
      href="/signup"
      className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    >
      Comienza gratis
    </a>
  </section>
); 