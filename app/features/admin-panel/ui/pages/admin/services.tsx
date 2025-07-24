'use client';
// Página de Servicios: muestra la tabla de servicios
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { TableView } from '../../components/TableView';
import { AdminRepository } from '../../../infrastructure/AdminRepository';
import { Service } from '../../../domain/models';

const columns = [
  { key: 'id' as keyof Service, label: 'ID' },
  { key: 'name' as keyof Service, label: 'Servicio' },
  { key: 'price' as keyof Service, label: 'Precio' },
];

const repo = new AdminRepository();

const ServicesPage: React.FC = () => {
  const [data, setData] = useState<Service[]>([]);
  useEffect(() => { repo.listServices().then(setData); }, []);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-60 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-black">Servicios</h2>
        <TableView columns={columns} data={data} />
      </main>
    </div>
  );
};

export default ServicesPage; 