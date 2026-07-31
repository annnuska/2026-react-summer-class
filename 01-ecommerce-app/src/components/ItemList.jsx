import Item from "./Item";

function ItemList({ items, handleAddToCart }) {
  return (
    <section className="items-grid">
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))
      ) : (
        <p>No products are available</p>
      )}
    </section>
  );
}

export default ItemList;