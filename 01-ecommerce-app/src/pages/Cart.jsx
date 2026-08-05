function Cart() {
  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-item">
        <img
          src="https://via.placeholder.com/120"
          alt="Product"
        />

        <div>
          <h3>Product Name</h3>
          <p>Price: Rs. 2,499</p>
          <p>Quantity: 1</p>
        </div>
      </div>

      <hr />

      <h2>Total: Rs. 2,499</h2>

      <button>Proceed to Checkout</button>
    </main>
  );
}

export default Cart;