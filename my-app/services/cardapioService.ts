import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export type Categoria = 'ENTRADA' | 'PRATO_PRINCIPAL' | 'SOBREMESA' | 'BEBIDA' | 'LANCHE';

export const CATEGORIAS: { value: Categoria; label: string }[] = [
  { value: 'ENTRADA',        label: 'Entrada' },
  { value: 'PRATO_PRINCIPAL', label: 'Prato Principal' },
  { value: 'SOBREMESA',      label: 'Sobremesa' },
  { value: 'BEBIDA',         label: 'Bebida' },
  { value: 'LANCHE',         label: 'Lanche' },
];

export interface PratoRequest {
  nome: string;
  descricao?: string;
  preco: number;
  categoria: Categoria;
  urlImagem?: string;
  disponivel?: boolean;
}

export interface PratoResponse {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: Categoria;
  urlImagem: string;
  disponivel: boolean;
  criadoEm: string;
  atualizadoEm: string;
}

export const listarPratos       = async () => (await api.get<PratoResponse[]>('/pratos')).data;
export const buscarPrato        = async (id: number) => (await api.get<PratoResponse>(`/pratos/${id}`)).data;
export const criarPrato         = async (p: PratoRequest) => (await api.post<PratoResponse>('/pratos', p)).data;
export const atualizarPrato     = async (id: number, p: PratoRequest) => (await api.put<PratoResponse>(`/pratos/${id}`, p)).data;
export const deletarPrato       = async (id: number) => api.delete(`/pratos/${id}`);
