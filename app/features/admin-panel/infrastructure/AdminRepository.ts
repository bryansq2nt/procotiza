// Repositorio para obtener listas de cada entidad (mock)
import { getClients, getServices, getQuotes, getSuppliers, getExpenses, getIncomes, getBranches } from '../application/dataStubs';

export class AdminRepository {
  async listClients() { return getClients(); }
  async listServices() { return getServices(); }
  async listQuotes() { return getQuotes(); }
  async listSuppliers() { return getSuppliers(); }
  async listExpenses() { return getExpenses(); }
  async listIncomes() { return getIncomes(); }
  async listBranches() { return getBranches(); }
} 