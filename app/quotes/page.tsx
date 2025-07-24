'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Settings, Plus } from 'lucide-react';
import { getQuotes } from '../features/quotes/application/getQuotes';
import { QuoteCard } from '../features/quotes/ui/components/QuoteCard';
import { Quote } from '../features/quotes/domain/Quote';

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  
  useEffect(() => {
    getQuotes().then(setQuotes);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto mb-8">
        {/* Navegación admin */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/admin">
            <button className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Panel Admin</span>
            </button>
          </Link>
          
          <Link href="/admin">
            <button className="inline-flex items-center px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-4 h-4 mr-1" />
              <span className="text-sm">Admin</span>
            </button>
          </Link>
        </div>

        {/* Título */}
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Cotizaciones</h1>
            <p className="text-gray-600 mt-1">Gestiona todas las cotizaciones de tu negocio</p>
          </div>        
          <br />
        {/* Grid de cotizaciones */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map(q => (
            <QuoteCard key={q.id} {...q} />
          ))}
        </div>
      </div>

      {/* Botón flotante para nueva cotización */}
      <Link href="/quotes/new">
        <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 group">
          <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
        </button>
      </Link>
    </main>
  );
}