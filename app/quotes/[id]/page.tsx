'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, DollarSign, Clock, CheckCircle, XCircle, Edit3, MoreVertical, Phone, Mail, FileText, Shield, CreditCard } from 'lucide-react';
import { downloadQuotePDF } from '../../utils/pdfGenerator';
// Simulación de datos - en producción esto vendría de tu API/base de datos
const getQuoteData = (id: string) => {
  // Aquí harías la llamada real a tu API con el ID
  return {
    id: id,
    clientName: 'Sra. Laura Martínez',
    clientPhone: '+1 (555) 123-4567',
    clientEmail: 'laura.martinez@email.com',
    clientAddress: '789 Oak Rd, Springfield, VA 22150',
    serviceName: 'Instalación de Sistema HVAC',
    serviceDescription: 'Instalación completa de sistema de aire acondicionado central de 5 toneladas con ductos nuevos y termostato inteligente.',
    date: '2024-07-24',
    scheduledDate: '2024-08-15',
    total: 7220,
    breakdown: [
      { label: 'Unidad 5 Ton Goodman GSXC180601', amount: 5200, description: 'Sistema de aire acondicionado central de alta eficiencia' },
      { label: 'Ductos y registros', amount: 800, description: 'Instalación de ductos flexibles y registros de aire' },
      { label: 'Termostato inteligente Nest', amount: 320, description: 'Termostato programable con conectividad WiFi' },
      { label: 'Instalación y pruebas', amount: 900, description: 'Mano de obra especializada e inspección final' }
    ],
    paymentTerms: '30% anticipo ($2,166), 70% contra entrega ($5,054)',
    warranty: '24 meses en partes, 12 meses en mano de obra',
    notes: 'Cliente requiere instalación los fines de semana. Acceso por puerta trasera.',
    status: 'sent' as const,
    createdDate: '2024-07-20',
    validUntil: '2024-08-20'
  };
};

const statusConfig = {
  draft: { 
    label: 'Borrador', 
    color: 'bg-slate-100 text-slate-700 border-slate-300',
    primaryAction: 'Enviar Cotización',
    primaryColor: 'bg-blue-600 hover:bg-blue-700'
  },
  sent: { 
    label: 'Enviada', 
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    primaryAction: 'Aceptar Cotización',
    primaryColor: 'bg-emerald-600 hover:bg-emerald-700'
  },
  accepted: { 
    label: 'Aceptada', 
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    primaryAction: 'Reagendar',
    primaryColor: 'bg-blue-600 hover:bg-blue-700'
  },
  rejected: { 
    label: 'Rechazada', 
    color: 'bg-red-50 text-red-700 border-red-200',
    primaryAction: 'Reenviar',
    primaryColor: 'bg-blue-600 hover:bg-blue-700'
  },
};

export default function QuoteDetailPage({ params }: { params: { id: string } }) {
  const [quoteData, setQuoteData] = useState(null);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  
  useEffect(() => {
    // Aquí harías la llamada real a tu API
    const data = getQuoteData(params.id);
    setQuoteData(data);
  }, [params.id]);

  if (!quoteData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando cotización...</p>
        </div>
      </div>
    );
  }

  const config = statusConfig[quoteData.status];

  const handlePrimaryAction = () => {
    switch(quoteData.status) {
      case 'sent':
        console.log('Aceptando cotización...');
        // Aquí llamarías a tu API para aceptar
        break;
      case 'accepted':
        setShowScheduleModal(true);
        break;
      default:
        console.log('Acción primaria:', config.primaryAction);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fijo */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/quotes" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Cotizaciones</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">
                Cotización #{quoteData.id}
              </h1>
            </div>

            {/* Estado y acciones principales */}
            <div className="flex items-center space-x-3">
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${config.color}`}>
                {config.label}
              </div>
              
              {/* Botón de acción principal */}
              <button 
                onClick={handlePrimaryAction}
                className={`${config.primaryColor} text-white px-6 py-2.5 rounded-lg font-medium transition-colors`}
              >
                {config.primaryAction}
              </button>

              {/* Menú de acciones secundarias */}
              <div className="relative">
                <button 
                  onClick={() => setShowActionsMenu(!showActionsMenu)}
                  className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <MoreVertical className="w-5 h-5" />
                </button>

                {showActionsMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    {quoteData.status === 'sent' && (
                      <>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                          <XCircle className="w-4 h-4 mr-2" />
                          Rechazar
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                          <Calendar className="w-4 h-4 mr-2" />
                          Reagendar
                        </button>
                      </>
                    )}
                    <Link href={`/quotes/${params.id}/edit`} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Editar Cotización
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button 
  onClick={() => downloadQuotePDF(quoteData)}
  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
>
  <FileText className="w-4 h-4 mr-2" />
  Descargar PDF
</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid gap-8">
          {/* Información del cliente */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Información del Cliente</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 text-lg mb-2">{quoteData.clientName}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{quoteData.clientPhone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{quoteData.clientEmail}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                    <span>{quoteData.clientAddress}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Fecha Preferida</label>
                  <div className="flex items-center mt-1">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="font-medium text-black">{new Date(quoteData.scheduledDate).toLocaleDateString('es-ES', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Válida Hasta</label>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-2 text-amber-600" />
                    <span className="font-medium text-black">{new Date(quoteData.validUntil).toLocaleDateString('es-ES')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio y desglose */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Detalle del Servicio</h2>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">{quoteData.serviceName}</h3>
              <p className="text-blue-800">{quoteData.serviceDescription}</p>
            </div>

            <div className="space-y-4">
              {quoteData.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.label}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-lg font-semibold text-gray-900">
                      ${item.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-green-600 flex items-center">
                  <DollarSign className="w-6 h-6 mr-1" />
                  {quoteData.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Términos y condiciones */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                Términos de Pago
              </h3>
              <p className="text-gray-700">{quoteData.paymentTerms}</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Garantía
              </h3>
              <p className="text-gray-700">{quoteData.warranty}</p>
            </div>
          </div>

          {/* Notas adicionales */}
          {quoteData.notes && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-semibold text-amber-900 mb-2">Notas Importantes</h3>
              <p className="text-amber-800">{quoteData.notes}</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal de reagendar */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reagendar Servicio</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nueva Fecha</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Motivo</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2" rows={3} placeholder="Razón del cambio de fecha..."></textarea>
              </div>
              <div className="flex space-x-3 pt-4">
                <button 
                  onClick={() => setShowScheduleModal(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay para cerrar menú */}
      {showActionsMenu && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setShowActionsMenu(false)}
        ></div>
      )}
    </div>
  );
}