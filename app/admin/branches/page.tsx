'use client';
// Página de Sucursales: muestra la tabla de sucursales
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { TableView } from '../../components/TableView';
import { AdminRepository } from '../../../infrastructure/AdminRepository';
import { Branch } from '../../../domain/models';

const columns = [
  { key: 'id' as keyof Branch, label: 'ID' },
  { key: 'name' as keyof Branch, label: 'Sucursal' },
  { key: 'address' as keyof Branch, label: 'Dirección' },
];

const repo = new AdminRepository();

const BranchesPage: React.FC = () => {
  const [data, setData] = useState<Branch[]>([]);
  useEffect(() => { repo.listBranches().then(setData); }, []);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-60 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-black">Sucursales</h2>
        <TableView columns={columns} data={data} />
      </main>
    </div>
  );
};

export default BranchesPage; 