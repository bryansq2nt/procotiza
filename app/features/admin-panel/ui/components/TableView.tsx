'use client';
// TableView genérico para mostrar listas de datos
import React from 'react';

type Column<T> = { key: keyof T; label: string };

type Props<T> = {
  columns: Column<T>[];
  data: T[];
};

export function TableView<T extends { id: string }>({ columns, data }: Props<T>) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={String(col.key)} className="px-4 py-2 bg-blue-100 text-blue-800 font-semibold text-left">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.id} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
              {columns.map(col => (
                <td key={String(col.key)} className="px-4 py-2 text-gray-700">
                  {row[col.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 