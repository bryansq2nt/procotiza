// Envía los datos de registro usando el repositorio
import { SignUpData } from '../domain/SignUpData';
import { SignUpRepository } from '../infrastructure/SignUpRepository';

export async function submitSignUp(data: SignUpData): Promise<void> {
  const repo = new SignUpRepository();
  await repo.save(data);
} 