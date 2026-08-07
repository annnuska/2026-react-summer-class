import "./App.css";
import { useEffect, useState } from "react";
import Footer from './components/Footer.jsx';
import SearchForm from './components/SearchForm.jsx';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDescription from "./pages/ProductDescription";



function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
  const cartLength = cart.length; //derive state
  const [searchQuery, setSearchQuery] = useState("");
  function handleAddToCart(item, quantity=1) {
    setCart((cart) => {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem,
        );
      }
      

      return [
        ...cart,
        {
          id: item.id,
          title: item.title,
          image: item?.images?.[0],
          price: item.price,
          quantity: quantity,
        },
      ];
    });

    alert("Added to cart");

  }

  console.log(cart); 
  

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // fetch("https://api.escuelajs.co/api/v1/products").then((res) => res.json()).then((data) => console.log(data));



  useEffect(()=>{

        async function getProducts(){
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setItems(data);
  }
    getProducts();

  }, []);

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    const filteredItems = searchQuery
      ? items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase()),
        )
      : items;
    setItems(filteredItems);
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  //prop drilling: passing data from parent to child component through props
  //prop drilling solved using component composition: passing data from parent to child component through children prop

  /*return (
    <div className="page">
      <Header>
        <SearchForm
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onHandleSubmit={handleSearchSubmit}
        />
        <NavBar cartLength={cartLength} />
      </Header>
      <main>
<Home filteredItems={filteredItems} handleAddToCart={handleAddToCart} cart={cart}/>
      </main>
      <Footer />
    </div>
    
  );
}*/
  

  return (
  <Routes>
    <Route
      path="/"
      element={
        <Layout
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          cartLength={cartLength}
        />
      }
    >
     <Route
      index
      element={
        <Home
          filteredItems={filteredItems}
          handleAddToCart={handleAddToCart}
          cart={cart}
        />
      }
    />

      <Route
        path="products"
        element={
          <Products
            handleAddToCart={handleAddToCart}
            cart={cart}
          />
        }
      />

      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="product-description/:slug"element={ <ProductDescription
      handleAddToCart={handleAddToCart}/>
      }/></Route>
  </Routes>
);
}

export default App;