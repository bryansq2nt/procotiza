'use client';
// Página de Ingresos: muestra la tabla de ingresos
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { TableView } from '../../components/TableView';
import { AdminRepository } from '../../../infrastructure/AdminRepository';
import { Income } from '../../../domain/models';

const columns = [
  { key: 'id' as keyof Income, label: 'ID' },
  { key: 'description' as keyof Income, label: 'Descripción' },
  { key: 'amount' as keyof Income, label: 'Monto' },
  { key: 'date' as keyof Income, label: 'Fecha' },
];

const repo = new AdminRepository();

const IncomesPage: React.FC = () => {
  const [data, setData] = useState<Income[]>([]);
  useEffect(() => { repo.listIncomes().then(setData); }, []);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-60 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-black">Ingresos</h2>
        <TableView columns={columns} data={data} />
      </main>
    </div>
  );
};

export default IncomesPage; 