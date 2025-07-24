import { Quote } from '../domain/Quote';

export async function getQuotes(): Promise<Quote[]> {
  return [
    {
      id: '1',
      clientName: 'Sra. Laura Martínez',
      clientAddress: '123 Elm St, Springfield, VA',
      serviceName: 'Instalación',
      date: '2024-07-25',
      durationDays: 0.5,
      total: 220,
      breakdown: [
        { label: 'Termostato Nest T3007ES', amount: 180 },
        { label: 'Instalación y configuración', amount: 40 },
      ],
      paymentTerms: 'Pago completo al finalizar',
      warranty: '12 meses en equipo y mano de obra',
      status: 'sent',
    },
    {
      id: '2',
      clientName: 'Springfield Apartments LLC',
      clientAddress: '456 Maple Ave, Springfield, VA',
      serviceName: 'Mantenimiento',
      date: '2024-07-20',
      durationDays: 2,
      total: 1500,
      breakdown: [
        { label: 'Limpieza de filtros y ductos', amount: 800 },
        { label: 'Revisión de compresores', amount: 400 },
        { label: 'Mano de obra extra', amount: 300 },
      ],
      paymentTerms: '50% al iniciar, 50% al completar',
      warranty: '90 días en servicio',
      status: 'accepted',
    },
    {
      id: '3',
      clientName: 'Construcciones López',
      clientAddress: '789 Oak Rd, Springfield, VA',
      serviceName: 'Instalación',
      date: '2024-07-18',
      durationDays: 4,
      total: 7200,
      breakdown: [
        { label: 'Unidad 5 Ton Goodman', amount: 5200 },
        { label: 'Ductos y registro', amount: 800 },
        { label: 'Instalación y prueba', amount: 1200 },
      ],
      paymentTerms: '30% anticipo, 70% contra entrega',
      warranty: '24 meses partes, 12 meses mano de obra',
      status: 'draft',
    },
    {
      id: '4',
      clientName: 'El Rincón Tradicional (restaurante)',
      clientAddress: '101 Commerce St, Springfield, VA',
      serviceName: 'Instalación',
      date: '2024-07-15',
      durationDays: 1,
      total: 1350,
      breakdown: [
        { label: 'Unidad 1.5 Ton Mitsubishi', amount: 900 },
        { label: 'Tuberías y soportes', amount: 150 },
        { label: 'Mano de obra', amount: 300 },
      ],
      paymentTerms: 'Pago completo al finalizar',
      warranty: '12 meses en equipo, 6 meses mano de obra',
      status: 'rejected',
    },
  ];
}
