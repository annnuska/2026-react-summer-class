import "./App.css";
import { useEffect, useState } from "react";
import Footer from './components/Footer.jsx';
import SearchForm from './components/SearchForm.jsx';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const cartLength = cart.length; //derive state
  const [searchQuery, setSearchQuery] = useState("");
  function handleAddToCart(item) {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
  }

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
    if (searchQuery === "") {
      setItems(initialItems);
    }
  }

  //prop drilling: passing data from parent to child component through props
  //prop drilling solved using component composition: passing data from parent to child component through children prop

  return (
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
}










export default App;