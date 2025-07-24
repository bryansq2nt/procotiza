// Devuelve el contenido estático de la landing alineado al público de dueños de negocio
import { LandingContent } from '../domain/LandingContent';

export function getLandingContent(): LandingContent {
  return {
    title: 'Genera cotizaciones automáticas en minutos',
    subtitle: 'Ahorra horas de trabajo y maximiza tu rentabilidad sin complicaciones.',
    features: [
      {
        icon: '⚙️',
        title: 'Automatización',
        description: 'Crea y envía cotizaciones con un solo clic, olvídate de tareas manuales.',
      },
      {
        icon: '⏱️',
        title: 'Ahorro de tiempo',
        description: 'Reduce horas dedicadas a preparar presupuestos y enfócate en hacer crecer tu negocio.',
      },
      {
        icon: '💰',
        title: 'Mayor rentabilidad',
        description: 'Minimiza errores y ajusta precios de forma inteligente para maximizar tus ganancias.',
      },
    ],
  };
}
