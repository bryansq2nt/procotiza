'use client';
// Página de Cotizaciones: muestra la tabla de cotizaciones
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { TableView } from '../../components/TableView';
import { AdminRepository } from '../../../infrastructure/AdminRepository';
import { QuoteSummary } from '../../../domain/models';

const columns = [
  { key: 'id' as keyof QuoteSummary, label: 'ID' },
  { key: 'clientName' as keyof QuoteSummary, label: 'Cliente' },
  { key: 'total' as keyof QuoteSummary, label: 'Total' },
  { key: 'status' as keyof QuoteSummary, label: 'Estado' },
];

const repo = new AdminRepository();

const QuotesPage: React.FC = () => {
  const [data, setData] = useState<QuoteSummary[]>([]);
  useEffect(() => { repo.listQuotes().then(setData); }, []);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-60 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-black">Cotizaciones</h2>
        <TableView columns={columns} data={data} />
      </main>
    </div>
  );
};

export default QuotesPage; 