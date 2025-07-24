export interface Quote {
  id: string;
  clientName: string;
  clientAddress: string;
  serviceName: string;
  date: string;
  durationDays: number;
  total: number;
  breakdown: { label: string; amount: number }[];
  paymentTerms: string;
  warranty: string;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
} 