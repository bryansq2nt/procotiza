'use client';
// Página de Clientes: muestra la tabla de clientes
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { TableView } from '../../components/TableView';
import { AdminRepository } from '../../../infrastructure/AdminRepository';
import { Client } from '../../../domain/models';

const columns = [
  { key: 'id' as keyof Client, label: 'ID' },
  { key: 'name' as keyof Client, label: 'Nombre' },
  { key: 'contact' as keyof Client, label: 'Contacto' },
];

const repo = new AdminRepository();

const ClientsPage: React.FC = () => {
  const [data, setData] = useState<Client[]>([]);
  useEffect(() => { repo.listClients().then(setData); }, []);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-60 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-black">Clientes</h2>
        <TableView columns={columns} data={data} />
      </main>
    </div>
  );
};

export default ClientsPage; 