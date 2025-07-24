// Modelos mínimos para el panel de administración
export interface Client { id: string; name: string; contact: string; }
export interface Service { id: string; name: string; price: number; }
export interface QuoteSummary { id: string; clientName: string; total: number; status: string; }
export interface Supplier { id: string; name: string; contact: string; }
export interface Expense { id: string; description: string; amount: number; date: string; }
export interface Income { id: string; description: string; amount: number; date: string; }
export interface Branch { id: string; name: string; address: string; } 