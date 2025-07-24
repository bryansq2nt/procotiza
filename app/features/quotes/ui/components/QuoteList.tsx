import Link from 'next/link';
import { Quote } from '../../domain/Quote';

interface Props { quotes: Quote[]; }

export function QuoteList({ quotes }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-gray-600">Cliente</th>
            <th className="px-6 py-3 text-left text-gray-600">Fecha</th>
            <th className="px-6 py-3 text-right text-gray-600">Total</th>
            <th className="px-6 py-3 text-left text-gray-600">Dirección</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(q => (
            <tr key={q.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4">
                <Link href={`/quotes/${q.id}`} className="text-blue-600 hover:underline">
                  {q.clientName}
                </Link>
              </td>
              <td className="px-6 py-4">{new Date(q.date).toLocaleDateString('es-ES')}</td>
              <td className="px-6 py-4 text-right">${q.total.toLocaleString()}</td>
              <td className="px-6 py-4">{q.clientAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 