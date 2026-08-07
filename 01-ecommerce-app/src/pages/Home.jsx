import { useEffect, useState, useContext } from "react";
import ItemList from "../components/ItemList";
import { useFetch } from "@/hooks/useFetch";

function Home({ filteredItems }) {
  const [products, setProducts] = useState(filteredItems);
  const { products: categories } = useFetch(
    "https://api.escuelajs.co/api/v1/categories"
  );

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

        />
      </div>
    </>
  );
}

export default Home;