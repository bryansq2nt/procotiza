// Simula el guardado de datos de registro (mock)
import { SignUpData } from '../domain/SignUpData';

export class SignUpRepository {
  async save(data: SignUpData): Promise<void> {
    // Aquí iría la llamada real a la API
    console.log('SignUp data:', data);
  }
} 