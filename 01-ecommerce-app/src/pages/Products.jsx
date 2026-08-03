import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

function Products({ handleAddToCart, cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");

      const data = await res.json();

      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <>
      <h1>All Products</h1>

      <ItemList
        items={products}
        handleAddToCart={handleAddToCart}
        cart={cart}
      />
    </>
  );
}

export default Products;