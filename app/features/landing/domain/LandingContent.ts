// Define la estructura de contenido para la landing page
export interface LandingContent {
  title: string;
  subtitle: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
} 