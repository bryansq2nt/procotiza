'use client';
// Dashboard principal: muestra Sidebar y mensaje de bienvenida
import React from 'react';
import { Sidebar } from '../../components/Sidebar';

const managerName = 'Juan Pérez'; // Mock

const Dashboard: React.FC = () => (
  <div className="flex min-h-screen">
    <Sidebar />
    <main className="flex-1 ml-0 md:ml-60 p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-black">Bienvenido, {managerName}</h1>
      <p className="text-gray-700">Selecciona una sección del menú para comenzar.</p>
    </main>
  </div>
);

export default Dashboard; 