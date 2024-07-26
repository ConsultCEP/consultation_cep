'use client'
import { SearchHistory } from '@/app/interface/IHistory';
import { createHistory, getAllHistory } from '@/service/history';
import { getAddress } from '@/service/search-cep';

import { ChangeEvent, ReactNode, createContext, useEffect, useState } from 'react';

interface SearchCepContext {
    handleChange: (element: ChangeEvent<HTMLInputElement>) => void;
    searchAddress: () => void;
    inputValue: string;
    address: string | undefined;
    history: SearchHistory[];
    lastResult: SearchHistory | undefined;
    isLoading: boolean;
    setTheme: (value: boolean) => void;
    theme: boolean;
}

export const SearchCepContext = createContext({} as SearchCepContext);

type Prop = {
  children: ReactNode,
}

export function SearchCepProvider({ children }: Prop) {
    const [inputValue, setInputValue] = useState<string>('');
    const [address, setAddress] = useState<string>();
    const [history, setHistory] = useState<SearchHistory[]>([]);
    const [lastResult, setLastReult] = useState<SearchHistory>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [theme, setTheme] = useState<boolean>(false)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setInputValue(target.value);
    };

    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllHistory();

        const order = data.slice().reverse();

        setHistory(order);

        setLastReult(order[0]);
      }

      fetchData()
    }, [address]);
  
    const searchAddress = async () => {
      setIsLoading(true);
      setInputValue('');

      try {
        const address = await getAddress(inputValue);
        
        await createHistory({
          search: inputValue,
          result: address,
        })

        setLastReult({
          search: inputValue,
          result: address,
        });

        setAddress(address);
      } catch (error) {
        setLastReult({
          search: inputValue,
          result: 'Não foi possivel encontrar seu CEP',
        });
      }

      setIsLoading(false);
    }

  const context = {
    handleChange,
    searchAddress,
    inputValue,
    address,
    history,
    lastResult,
    isLoading,
    setTheme,
    theme,
  };

  return (
    <SearchCepContext.Provider value={context}>
      {children}
    </SearchCepContext.Provider>
  )
}