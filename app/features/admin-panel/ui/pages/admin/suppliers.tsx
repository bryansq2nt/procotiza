'use client';
// Página de Proveedores: muestra la tabla de proveedores
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { TableView } from '../../components/TableView';
import { AdminRepository } from '../../../infrastructure/AdminRepository';
import { Supplier } from '../../../domain/models';

const columns = [
  { key: 'id' as keyof Supplier, label: 'ID' },
  { key: 'name' as keyof Supplier, label: 'Proveedor' },
  { key: 'contact' as keyof Supplier, label: 'Contacto' },
];

const repo = new AdminRepository();

const SuppliersPage: React.FC = () => {
  const [data, setData] = useState<Supplier[]>([]);
  useEffect(() => { repo.listSuppliers().then(setData); }, []);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-60 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-black">Proveedores</h2>
        <TableView columns={columns} data={data} />
      </main>
    </div>
  );
};

export default SuppliersPage; 