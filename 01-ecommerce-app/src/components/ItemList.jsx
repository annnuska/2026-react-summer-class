import Item from "./Item";

function ItemList({ products }) {
  if (products.length === 0) {
    return <h2>No products available</h2>;
  }

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {products.length} Products Available
      </h2>

      <div className="items-grid">
        {products.map((product) => (
          <Item
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default ItemList;