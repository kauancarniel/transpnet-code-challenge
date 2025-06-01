'use client'

import { useEffect, useState } from 'react';
import { IProduct } from '@/interfaces/IProduct';
import { searchRequestApi } from '@/service/request';

interface PropsTypes {
  defaultApiData: IProduct[];
  setApiData: (products: IProduct[]) => void;
}

function SearchBar({ setApiData, defaultApiData }: PropsTypes) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      setApiData(defaultApiData);
    }
    else {
      const fetchData = async () => {
        const filteredRequest = await searchRequestApi(searchTerm);
        setApiData(filteredRequest);
      };
      fetchData();
    }
  }, [searchTerm])
  
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="h-4 w-4 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2
          text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm
          file:font-medium placeholder:text-muted-foreground focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-10"
      />
    </div>
  );
}

export default SearchBar;
