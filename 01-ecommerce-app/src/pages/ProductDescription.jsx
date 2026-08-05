function ProductDescription() {
  return (
    <main className="product-page">
      <div className="product-image">
        <img
          src="https://via.placeholder.com/400"
          alt="Product"
        />
      </div>

      <div className="product-details">
        <p>Electronics</p>

        <h1>Sleek Mirror Finish Phone Case</h1>

        <h2>Rs. 27</h2>

        <p>
          Enhance your smartphone's look with this ultra-sleek mirror finish phone case.
        </p>

        <button>Add to Cart</button>
      </div>
    </main>
  );
}

export default ProductDescription;