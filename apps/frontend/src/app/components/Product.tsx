// This is a reusable component
export default function Product({
  name,
  price,
}: {
  name: string;
  price: number;
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
