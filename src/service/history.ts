'use server'
import { revalidatePath } from "next/cache";
import { apiHistory } from "./api";
import { SearchHistory } from "@/app/interface/IHistory";

export async function getAllHistory(): Promise<SearchHistory[]> {
    try {
        const { data } = await apiHistory.get<SearchHistory[]>('');
        
        revalidatePath('/');

        return data;
    } catch (error) {
        throw new Error('Não foi possivel acessar o historico');
    }
}

export async function createHistory(search: SearchHistory) {
    try {
        const { data } = await apiHistory.post<SearchHistory>('', {
            ...search,
        });
    
        return data;
      } catch (error) {
        throw new Error('Não foi possivel inserir a ultima pesquisa');
      }
}