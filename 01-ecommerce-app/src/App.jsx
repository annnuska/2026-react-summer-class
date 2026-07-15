import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import products from "./data/products";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning("Product already added to cart");
      return;
    }

    setCart([...cart, product]);
    toast.success(`${product.title} added to cart`);
  }

  return (
    <>
      <Header cartCount={cart.length} />

      <ItemList
        products={products}
        addToCart={addToCart}
      />

      <Footer />

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;