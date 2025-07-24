'use client';
// Sidebar de navegación para el panel de administración
import React, { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/clients', label: 'Clientes' },
  { href: '/admin/services', label: 'Servicios' },
  { href: '/admin/quotes', label: 'Cotizaciones' },
  { href: '/admin/suppliers', label: 'Proveedores' },
  { href: '/admin/expenses', label: 'Gastos' },
  { href: '/admin/incomes', label: 'Ingresos' },
  { href: '/admin/branches', label: 'Sucursales' },
];

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-blue-700 text-white min-h-screen w-60 px-4 py-8 fixed top-0 left-0 z-20 hidden md:block">
      <div className="font-bold text-2xl mb-8">ProCotiza</div>
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="hover:underline block py-2 px-2 rounded">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}; 