import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

function Home({ filteredItems, handleAddToCart, cart }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(filteredItems);

  useEffect(() => {
    async function getCategories() {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories" );
      const data = await res.json();
      setCategories(data);
    }

    getCategories();
  }, []);

  useEffect(() => {
    setProducts(filteredItems);
  }, [filteredItems]);

  async function handleCategory(id) {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${id}/products`
);
    const data = await res.json();
    setProducts(data);
  }

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Fresh picks</p>

        <h1>Only the items you'll love</h1>

        <p className="hero-text">
          Discover simple, stylish essentials for everyday living.
        </p>
      </section>

      <div className="home-container">
        <aside>
          <h3>Categories</h3>

          {categories.map((category) => (
            <label key={category.id}>
              <input
                type="checkbox"
                onChange={() => handleCategory(category.id)}
              />
              {category.name}
            </label>
          ))}
        </aside>

        <ItemList
          items={products}
          handleAddToCart={handleAddToCart}
          cart={cart}
        />
      </div>
    </>
  );
}

export default Home;