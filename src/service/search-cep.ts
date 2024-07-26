'use server'
import { apiAddress } from "./api";

export async function getAddress(cep: string): Promise<string> {
  try {
    const { data } = await apiAddress.get<string>(`/${cep}`);

    return data;
  } catch (error) {
    throw new Error('Erro ao obter o endereço');
  }
}
