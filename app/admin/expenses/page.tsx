'use client';
// Página de Gastos: muestra la tabla de gastos
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { TableView } from '../../components/TableView';
import { AdminRepository } from '../../../infrastructure/AdminRepository';
import { Expense } from '../../../domain/models';

const columns = [
  { key: 'id' as keyof Expense, label: 'ID' },
  { key: 'description' as keyof Expense, label: 'Descripción' },
  { key: 'amount' as keyof Expense, label: 'Monto' },
  { key: 'date' as keyof Expense, label: 'Fecha' },
];

const repo = new AdminRepository();

const ExpensesPage: React.FC = () => {
  const [data, setData] = useState<Expense[]>([]);
  useEffect(() => { repo.listExpenses().then(setData); }, []);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-60 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-black">Gastos</h2>
        <TableView columns={columns} data={data} />
      </main>
    </div>
  );
};

export default ExpensesPage; 