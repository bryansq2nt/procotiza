import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Eye, Check, Clock, FileText } from 'lucide-react';

interface Breakdown {
  label: string
  amount: number
}

interface Props {
  id: string
  clientName: string
  clientAddress: string
  serviceName: string
  date: string
  total: number
  breakdown: Breakdown[]
  paymentTerms: string
  warranty: string
  status: 'draft' | 'sent' | 'accepted' | 'rejected'
}

const statusConfig = {
  draft: { 
    label: 'Borrador', 
    color: 'bg-slate-100 text-slate-700 border-slate-200',
    icon: FileText
  },
  sent: { 
    label: 'Enviada', 
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Clock
  },
  accepted: { 
    label: 'Aceptada', 
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Check
  },
  rejected: { 
    label: 'Rechazada', 
    color: 'bg-red-50 text-red-700 border-red-200',
    icon: FileText
  },
}

// Datos de ejemplo para demostración
const sampleQuotes = [
  {
    id: '1',
    clientName: 'Sra. Laura Martínez',
    clientAddress: '789 Oak Rd, Springfield, VA',
    serviceName: 'Instalación',
    date: '2024-07-24',
    total: 220,
    breakdown: [
      { label: 'Unidad 5 Ton Goodman', amount: 5200 },
      { label: 'Ductos y registro', amount: 800 },
      { label: 'Instalación y prueba', amount: 1200 }
    ],
    paymentTerms: '30% anticipo, 70% contra entrega',
    warranty: '24 meses partes, 12 meses mano de obra',
    status: 'sent' as const
  },
  {
    id: '2',
    clientName: 'Springfield Apartments LLC',
    clientAddress: '123 Main St, Springfield, VA',
    serviceName: 'Mantenimiento',
    date: '2024-07-19',
    total: 1500,
    breakdown: [
      { label: 'Servicio 5 unidades', amount: 1200 },
      { label: 'Repuestos', amount: 300 }
    ],
    paymentTerms: 'Pago contra entrega',
    warranty: '6 meses mano de obra',
    status: 'accepted' as const
  },
  {
    id: '3',
    clientName: 'Construcciones López',
    clientAddress: '456 Business Ave, Springfield, VA',
    serviceName: 'Instalación',
    date: '2024-07-17',
    total: 7200,
    breakdown: [
      { label: 'Sistema comercial 10 Ton', amount: 6500 },
      { label: 'Instalación especializada', amount: 700 }
    ],
    paymentTerms: '50% anticipo, 50% contra entrega',
    warranty: '36 meses partes, 24 meses mano de obra',
    status: 'draft' as const
  },
  {
    id: '4',
    clientName: 'El Rincón Tradicional',
    clientAddress: '789 Restaurant Row, Springfield, VA',
    serviceName: 'Instalación',
    date: '2024-07-14',
    total: 1350,
    breakdown: [
      { label: 'Unidad restaurante 3 Ton', amount: 1100 },
      { label: 'Instalación', amount: 250 }
    ],
    paymentTerms: 'Pago contra entrega',
    warranty: '12 meses partes y mano de obra',
    status: 'rejected' as const
  }
];

export const QuoteCard: React.FC<Props> = ({
  id,
  clientName,
  clientAddress,
  serviceName,
  date,
  total,
  breakdown,
  paymentTerms,
  warranty,
  status,
}) => {
  const [expanded, setExpanded] = useState(false);
  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 overflow-hidden">
      {/* Header compacto con info esencial */}
      <div className="p-5 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-1">
              {clientName}
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="truncate">{clientAddress.split(',')[0]}</span>
            </div>
          </div>
          
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${config.color}`}>
            <StatusIcon className="w-4 h-4 mr-1.5" />
            {config.label}
          </div>
        </div>

        {/* Info crítica en una fila */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {serviceName}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(date).toLocaleDateString('es-ES', { 
                day: 'numeric', 
                month: 'short' 
              })}
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center text-2xl font-bold text-gray-900">
              <DollarSign className="w-5 h-5 text-green-600 mr-1" />
              {total.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Detalles expandibles */}
      {expanded && (
        <div className="px-5 pb-4 border-t border-gray-100 bg-gray-50">
          <div className="pt-4 space-y-3 text-sm">
            <div>
              <span className="font-medium text-gray-700">Desglose:</span>
              <div className="mt-1 space-y-1">
                {breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between text-gray-600">
                    <span>{item.label}</span>
                    <span className="font-medium">${item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-700">Pago:</span>
                <p className="text-gray-600 mt-1">{paymentTerms}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Garantía:</span>
                <p className="text-gray-600 mt-1">{warranty}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer con acciones */}
      <div className="px-5 py-4 border-t border-gray-100 bg-white">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
          >
            <Eye className="w-4 h-4 mr-1" />
            {expanded ? 'Ocultar detalles' : 'Ver detalles'}
          </button>
          
          <div className="flex space-x-2">
            {status === 'sent' && (
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                <Check className="w-4 h-4 mr-1" />
                Aceptar
              </button>
            )}
            <a
              href={`/quotes/${id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Ver completa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de demostración
const QuoteDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cotizaciones</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleQuotes.map((quote) => (
            <QuoteCard key={quote.id} {...quote} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteDemo;