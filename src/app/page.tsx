'use client'

import { IProduct } from "@/interfaces/IProduct";
import { requestApi } from "../service/request";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCart";

export default function Home() {
  const [apiData, setApiData] = useState<IProduct[] | undefined>(undefined);
  const [defaultApiData, setDefaultApiData] = useState<IProduct[] | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestApi();
      setApiData(data)
      console.log(data);
      
    };
    fetchData();
  }, [])

  if (!apiData) {
    return <p className="p-4 text-center mt-10">Loading...</p>;
  }

  const totalPages = Math.ceil(apiData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = apiData.slice(startIndex, endIndex);

  return (
    <div className="mb-15">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4">
        { currentItems.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        )) }
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}