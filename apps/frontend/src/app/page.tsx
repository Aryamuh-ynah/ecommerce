import Product from "./components/Product";

export default function Home() {
  const products = [
    { name: "Wireless Headphones", price: 99.99 },
    { name: "Smart Watch", price: 199.99 },
    { name: "Laptop", price: 999.99 },
  ];

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>DevOps Electronics Store</h1>
      <p>Welcome to our store built with Next.js!</p>

      <h2>Featured Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
}
