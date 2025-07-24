// FeaturesSection: muestra los beneficios clave en cards responsivas
import React from 'react';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  features: Feature[];
};

export const FeaturesSection: React.FC<Props> = ({ features }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
); 