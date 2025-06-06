import { IProduct } from "@/interfaces/IProduct";
import Link from 'next/link';

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-950 text-white px-6 py-10">
      <div className="w-full max-w-5xl">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mb-10">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-96 object-contain rounded-xl bg-gray-800 p-4 w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-200 text-base">
              <strong>Description:</strong> {product.description}
            </p>
            <div className="text-sm text-gray-300 space-y-1">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Rating:</strong> {product.rating}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Stock:</strong> {product.availabilityStatus} - {product.stock}</p>
            </div>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-fit">
              Add to Cart
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Comments:</h2>
        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-400">{review.reviewerName}</h3>
              <p className={`text-sm font-medium ${review.rating >= 4 ? 'text-green-400' : review.rating >= 2 ? 'text-yellow-400' : 'text-red-400'}`}>
                Rating: {review.rating}
              </p>
              <p className="text-gray-200 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
