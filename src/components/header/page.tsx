import Link from "next/link"

export default function Header() {

  return (
<header className="flex flex-row w-full px-4 py-6 bg-gray-900 shadow-sm mb-3">
  <div className="max-w-7x1 mx-auto ml-5">
    <h1 className="text-2xl font-semibold text-gray-300">Product Catalog</h1>
    <p className="text-sm text-gray-500">Browse, filter and sort products from the DummyJSON API</p>
  </div>
  <Link href="/ShoppingCart" className="px-4 py-3 bg-gray-900 shadow-sm mb-3">
    <button>Shopping Cart</button>
  </Link>
</header>
  );
}