'use client'

import { IProduct } from "@/interfaces/IProduct";
import { requestApi } from "../service/request";
import { useEffect, useState } from "react";

export default function Home() {
  const [apiData, setApiData] = useState<IProduct[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestApi();
      setApiData(data)
      console.log(data);
      
    };
    fetchData();
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4 p-4">
      {apiData && apiData.map((product) => (
        <div key={product.id} className="p-4 bg-gray-500 rounded-md">
          <h1 className="align-center">{product.title}</h1>
          <h2>{product.category}</h2>
          <h2>{product.price}</h2>
          <img src={product.thumbnail} />
          <h2>{product.availabilityStatus}</h2>
        </div>
      ))}
    </div>
  )
}