import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";

import products from "./data/products";

function App() {
  return (
    <div className="page">
      <Header />

      <section className="hero">
        <p className="eyebrow">
          Welcome
        </p>

        <h1>Trend Shop</h1>

        <p className="hero-text">
          Discover the latest fashion,
          electronics, accessories and more.
        </p>
      </section>

      <ItemList products={products} />

      <Footer />
    </div>
  );
}

export default App;