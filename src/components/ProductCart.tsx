import { IProduct } from "@/interfaces/IProduct";

export default function ProductCard({ product }: { product: IProduct }) {


  return (
    <div >
      <div className="p-4 bg-gray-500 rounded-md">
        <h1 className="font-bold text-center mb-5">{product.title}</h1>
        <h2>Category: {product.category}</h2>
        <img src={product.thumbnail} alt={product.title} />
        <h2 className="text-center mb-5">Price: ${product.price}</h2>
        <div className="text-center p-2 mr-5">
          <button className="border rounded-md mr-5">Add to Cart</button>
          <button className="border rounded-md">Buy Now</button>
        </div>
        <h2>Stock: {product.availabilityStatus}</h2>
      </div>
    </div>
  );
}