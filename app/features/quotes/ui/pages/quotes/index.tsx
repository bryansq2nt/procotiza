import React, { useEffect, useState } from 'react';
import Link from 'next/link';
  import { ArrowLeft, Settings } from 'lucide-react';
  import { getQuotes } from '../../../application/getQuotes';
  import { QuoteList } from '../../components/QuoteList';
  import { Quote } from '../../../domain/Quote';

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  
  useEffect(() => {
    getQuotes().then(setQuotes);
  }, []);

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      {/* Header con navegación mejorada */}
      <div className="max-w-6xl mx-auto mb-6">
        {/* Breadcrumb y navegación admin */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/admin">
            <a className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Volver al Panel Admin</span>
            </a>
          </Link>
          
          <Link href="/admin">
            <a className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors">
              <Settings className="w-4 h-4 mr-1" />
              <span className="text-sm">Admin</span>
            </a>
          </Link>
        </div>

        {/* Título y acción principal */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Cotizaciones</h1>
            <p className="text-gray-600 mt-1">Gestiona todas las cotizaciones de tu negocio</p>
          </div>
          
          <Link href="/quotes/new">
            <a className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
              + Nueva Cotización
            </a>
          </Link>
        </div>
      </div>

      <QuoteList quotes={quotes} />
    </main>
  );
}