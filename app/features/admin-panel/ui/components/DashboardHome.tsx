import React from 'react';
import Link from 'next/link';
interface CardProps { link: string; icon: string; title: string; description: string; }

const cards: CardProps[] = [
  { link: '/quotes', icon: '📚', title: 'Ver cotizaciones', description: 'Aquí puedes ver las cotizaciones creadas, enviadas, aceptadas o rechazadas.' },
  { link: '/clients', icon: '👤', title: 'Mis clientes', description: 'Todos tus clientes: agrega, edita o elimina contactos.' },
  { link: '/services', icon: '⚙️', title: 'Mis servicios', description: 'Gestiona los servicios que ofreces y sus tarifas.' },
  { link: '/providers', icon: '🚚', title: 'Mis proveedores', description: 'Administra la lista de tus proveedores y sus datos de contacto.' },
  { link: '/expenses', icon: '💸', title: 'Mis gastos', description: 'Controla tus gastos operativos y registra nuevos movimientos.' },
  { link: '/incomes', icon: '💰', title: 'Mis ingresos', description: 'Lleva el registro de tus ingresos y analiza tu flujo de caja.' },
  { link: '/branches', icon: '🏢', title: 'Mis sucursales', description: 'Gestiona las ubicaciones de tu negocio y sus direcciones.' },
];

export function DashboardHome() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Bienvenido, Pedro!</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ link, icon, title, description }) => (
            <Link href={link}>
<div key={title} className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-shadow duration-200 p-8 flex flex-col items-center text-center">
              <div className="text-5xl text-blue-600 mb-4">{icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
              <p className="text-base text-gray-600 leading-relaxed">{description}</p>
            </div>
            </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
} 