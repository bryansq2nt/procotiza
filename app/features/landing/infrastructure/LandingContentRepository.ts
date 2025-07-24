// Repositorio para obtener el contenido de la landing (simula fetch a fuente de datos)
import { getLandingContent } from '../application/getLandingContent';
import { LandingContent } from '../domain/LandingContent';

export class LandingContentRepository {
  fetch(): LandingContent {
    return getLandingContent();
  }
} 