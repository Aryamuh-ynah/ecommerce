import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DevShop
        </Link>
        
        <div className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600">
            Cart (0)
          </Link>
        </div>

        <div className="flex gap-4">
          <button className="text-gray-700 hover:text-blue-600">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}
