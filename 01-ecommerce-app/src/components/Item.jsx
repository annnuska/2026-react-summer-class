function Item({ product }) {
  return (
    <div
      className="item-card"
      style={{
        backgroundColor: product.stock === 0 ? "#d1d5db" : "white",
      }}
    >
      <div className="item-meta">
        <span className="item-category">
          {product.category.name}
        </span>

        <span className="item-rating">
          {"★".repeat(Math.round(product.rating))}
        </span>
      </div>

      <div className="item-image-container">
        <img
          src={product.images[0]}
          alt={product.title}
          className="item-image"
        />

        {product.stock <= 12 && product.stock > 0 && (
          <div className="item-stock-badge">
            Only {product.stock} left
          </div>
        )}
      </div>

      <div className="item-info">
        <p className="item-brand">{product.brand}</p>

        <h3>{product.title}</h3>

        <p className="item-description">
          {product.description}
        </p>

        <p>Rating: {product.rating}</p>

        {product.rating >= 4.8 && (
          <p>Best Seller</p>
        )}

        {product.price > 250 && (
          <p>Premium</p>
        )}
      </div>

      <div className="item-footer">
        <span className="price">
          ${product.price}
        </span>

        <button
          className="add-to-bag-button"
          disabled={product.stock === 0}
        >
          {product.stock === 0
            ? "Sold Out"
            : "Add to Bag"}
        </button>
      </div>
    </div>
  );
}

export default Item;