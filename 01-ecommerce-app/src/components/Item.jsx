function Item({ item, handleAddToCart }) {
  return (
    <article className="item-card">
      <div className="item-meta">
        <span className="item-category">
          {item.category?.name}
        </span>
      </div>

      <div className="item-image-container">
        <img
          src={item.images?.[0]}
          alt={item.title}
          className="item-image"
        />
      </div>

      <div className="item-info">
        <h3>{item.title}</h3>

        <p className="item-description">
          {item.description}
        </p>
      </div>

      <div className="item-footer">
        <span className="price">
          Rs. {item.price}
        </span>

        <button
          type="button"
          className="add-to-bag-button"
          onClick={() => handleAddToCart(item)}
        >
          Add to bag
        </button>
      </div>
    </article>
  );
}

export default Item;