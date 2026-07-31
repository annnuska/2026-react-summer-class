import { useState } from "react";
import ItemList from "../components/ItemList";
import products from "../data/products";

function Home() {
  const [items, setItems] = useState(products);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function handleAddToCart(product) {
    const existItem = cart.find((item) => item.id === product.id);

    if (existItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);

    if (e.target.value === "") {
      setItems(products);
    }
  }

  function handleSearchSubmit(e) {
    e.preventDefault();

    const filteredItems = searchQuery
      ? products.filter(
          (item) =>
            item.title
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            item.brand
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            item.category.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        )
      : products;

    setItems(filteredItems);
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

      {/* Search Form */}

      <div className="search-container">
        <form
          className="search-form"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <button
            type="submit"
            className="search-button"
          >
            Search
          </button>
        </form>
      </div>

      <ItemList
        products={items}
        addToCart={handleAddToCart}
      />
    </>
  );
}

export default Home;