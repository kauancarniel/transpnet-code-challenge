import { IProduct } from "@/interfaces/IProduct";

export default function ProductCard({ product }: { product: IProduct }) {

  return (
     <div className="flex justify-center items-center">
      <div className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-64 p-4 flex flex-col items-center">
        <h1 className="font-bold text-center text-lg mb-2">{product.title}</h1>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-48 h-32 object-cover rounded-md mb-2"
        />
        <h2 className="text-sm text-gray-300">Category: {product.category}</h2>
        <h2 className="text-sm text-gray-300">Price: ${product.price}</h2>
        <h2 className="text-sm text-gray-300">Stock: {product.availabilityStatus}</h2>
      </div>
    </div>
  );
}