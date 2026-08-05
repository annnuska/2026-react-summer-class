function Checkout() {
  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      <form>
        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <input type="text" placeholder="Address" />

        <input type="text" placeholder="Phone Number" />

        <h3>Order Summary</h3>

        <p>Items: 1</p>

        <p>Total: Rs. 2,499</p>

        <button type="button">
          Place Order
        </button>
      </form>
    </main>
  );
}

export default Checkout;