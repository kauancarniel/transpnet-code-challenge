import { ICategoty } from "@/interfaces/Icategory";
import { IProduct } from "@/interfaces/IProduct";
import { getAllCategories, getByCategories } from "@/service/request";
import { useEffect, useState } from "react";

export default function Filters({ setApiData, defaultApiData }: {setApiData: (value: IProduct[]) => void, defaultApiData: IProduct[] }) {
  const [categories, setCategories] = useState<ICategoty[]>([]);

  useEffect(() => {
    const fetch = async () => {
    const data = await getAllCategories();
    setCategories(data)
    };
    fetch();
  }, [])

  const filterByCategory = (value: string) => {
    if (value === 'default') {
      setApiData(defaultApiData)
      return
    }
    const fetch = async () => {
    const data = await getByCategories(value);
    
    setApiData(data.products)
    };
    fetch();
  };

  return (
    <div className="ml-5">
      <span className="mr-2">Filter by Categories:</span>
      <select 
        className='bg-gray-900 text-gray-100 text-sm rounded-md px-3 py-1.5 border border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            hover:border-gray-600 transition-colors cursor-pointer'
        onChange={({ target }) => filterByCategory(target.value)}
      >
        <option key='default' value='default'>Default</option>
        { categories.map((category) => (
          <option key={ category.name } value={category.name}>{category.name}</option>
        )) }
      </select>
    </div>
  );
}
