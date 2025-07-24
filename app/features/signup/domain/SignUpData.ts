// Define los tipos de datos para el registro (manager y negocio)
export interface ManagerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export interface BusinessInfo {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  businessLogoUrl: string;
  tagline: string;
}

export interface SignUpData {
  manager: ManagerInfo;
  business: BusinessInfo;
} 