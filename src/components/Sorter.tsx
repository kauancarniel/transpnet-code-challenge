import { IProduct } from "@/interfaces/IProduct";

export default function Filters({ setApiData, defaultApiData }: {setApiData: (value: IProduct[]) => void, defaultApiData: IProduct[] }) {

  const orderBy = (value: string) => {
    if (value === 'Default') {
      setApiData(defaultApiData);
      return
    }

    switch (value) {
      case "TitleAZ":
        setApiData([...defaultApiData].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "TitleZA":
        setApiData([...defaultApiData].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case "PriceH":
        setApiData([...defaultApiData].sort((a, b) => b.price - a.price));
        break
      case "PriceL":
        setApiData([...defaultApiData].sort((a, b) => a.price - b.price));
        break
      case "StockH":
        setApiData([...defaultApiData].sort((a, b) => b.stock - a.stock));
        break
      case "StockL":
        setApiData([...defaultApiData].sort((a, b) => a.stock - b.stock));
        break
    }
  };

  return (
    <div className="ml-5">
      <span className="ml-6 mr-2">Order By: </span>
      <select 
        className='bg-gray-900 text-gray-100 text-sm rounded-md px-3 py-1.5 border border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            hover:border-gray-600 transition-colors cursor-pointer'
        onChange={({ target }) => orderBy(target.value)}
      >
        <option value="Default">Default</option>
        <option value="TitleAZ">Title (A-Z)</option>
        <option value="TitleZA">Title (Z-A)</option>
        <option value="PriceH">Price (Highest)</option>
        <option value="PriceL">Price (Lowest)</option>
        <option value="StockH">Stock (Highest)</option>
        <option value="StockL">Stock (Lowest)</option>
      </select>
    </div>
  );
}
