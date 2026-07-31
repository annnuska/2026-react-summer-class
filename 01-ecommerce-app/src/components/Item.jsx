function Item({ item, handleAddToCart }) {
  return (
    <article className="item-card">
      <div className="item-meta">
        <span className="item-category">{item.category.name}</span>
        <span className="item-rating">★ {item.rating}</span>
      </div>
      <div className="item-image-container">
        <img src={item.images[0]} alt={item.title} className="item-image" />
        {item.stock <= 12 && (
          <span className="item-stock-badge">Only {item.stock} left</span>
        )}
      </div>
      <div className="item-info">
        <span className="item-brand">{item.brand}</span>
        <h3>{item.title}</h3>
        <p className="item-description">{item.description}</p>
      </div>
      <div className="item-footer">
        <span className="price">Rs. {item.price.toFixed(2)}</span>
        <button
          type="button"
          className="add-to-bag-button"
          onClick={handleAddToCart}
        >
          Add to bag
        </button>
      </div>
    </article>
  );
}

export default Item;