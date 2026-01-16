import Link from "next/link";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99.99",
      image: "/headphones.jpg",
    },
    { id: 2, name: "Smart Watch", price: "$199.99", image: "/watch.jpg" },
    { id: 3, name: "Gaming Keyboard", price: "$79.99", image: "/keyboard.jpg" },
    { id: 4, name: "USB-C Hub", price: "$49.99", image: "/hub.jpg" },
  ];

  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">DevShop</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Modern e-commerce built with Next.js and DevOps
        </p>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center">
                <div className="text-gray-400">Product Image</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-black transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DevOps Features Showcase */}
      <section className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">DevOps Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-blue-600 text-2xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-2">CI/CD Pipeline</h3>
            <p className="text-gray-600">
              Automated testing and deployment on every commit
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-blue-600 text-2xl mb-4">🐳</div>
            <h3 className="text-xl font-bold mb-2">Dockerized</h3>
            <p className="text-gray-600">
              Containerized for consistent development and production
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-blue-600 text-2xl mb-4">☁️</div>
            <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Infrastructure as Code with Terraform
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
