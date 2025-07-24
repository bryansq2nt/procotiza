// Stubs para obtener datos mock de cada entidad
import { Client, Service, QuoteSummary, Supplier, Expense, Income, Branch } from '../domain/models';

export async function getClients(): Promise<Client[]> {
  return [
    { id: '1', name: 'Empresa Uno', contact: 'Juan Pérez' },
    { id: '2', name: 'Empresa Dos', contact: 'Ana Gómez' },
  ];
}

export async function getServices(): Promise<Service[]> {
  return [
    { id: '1', name: 'Consultoría', price: 1200 },
    { id: '2', name: 'Instalación', price: 800 },
  ];
}

export async function getQuotes(): Promise<QuoteSummary[]> {
  return [
    { id: '1', clientName: 'Empresa Uno', total: 1500, status: 'enviada' },
    { id: '2', clientName: 'Empresa Dos', total: 900, status: 'borrador' },
  ];
}

export async function getSuppliers(): Promise<Supplier[]> {
  return [
    { id: '1', name: 'Proveedor A', contact: 'proveedorA@email.com' },
    { id: '2', name: 'Proveedor B', contact: 'proveedorB@email.com' },
  ];
}

export async function getExpenses(): Promise<Expense[]> {
  return [
    { id: '1', description: 'Compra de materiales', amount: 500, date: '2024-06-01' },
    { id: '2', description: 'Pago de servicios', amount: 300, date: '2024-06-02' },
  ];
}

export async function getIncomes(): Promise<Income[]> {
  return [
    { id: '1', description: 'Venta a Empresa Uno', amount: 2000, date: '2024-06-03' },
    { id: '2', description: 'Venta a Empresa Dos', amount: 1500, date: '2024-06-04' },
  ];
}

export async function getBranches(): Promise<Branch[]> {
  return [
    { id: '1', name: 'Sucursal Centro', address: 'Calle 123, Ciudad' },
    { id: '2', name: 'Sucursal Norte', address: 'Avenida 456, Ciudad' },
  ];
} 