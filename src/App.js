import React, { useEffect, useState } from "react";
import data from "./data.json"; 
import CartNotification from "./Components/CartNotification";
import ProductList from "./Components/ProductList";
import "./Styles.css";
import FilterBar from "./Components/FilterBar";
import ScrollToTopButton from "./Components/ScrollToTop";
import Aos from "aos";
import 'aos/dist/aos.css'; 
function App() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState({ category: "", priceRange: [0, 1000] });
  const [sort, setSort] = useState("");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleFilterChange = (type, value) => {
    setFilter((prev) => ({ ...prev, [type]: value }));
  };


  const handleSortChange = (sortOrder) => {
    setSort(sortOrder);
  };
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: 'ease-out-back', 
      once: true,
    });
  }, []);
  return (
    <div className="App">
      <h1>Perfume Haven Product Listing</h1>
      <div className="filters">
        <div>
          <CartNotification cart={cart} />
        </div>
        <div>
          <FilterBar onFilter={handleFilterChange} onSort={handleSortChange} />
        </div>
      </div>

      <ProductList
        products={data}
        filter={filter || { category: "", priceRange: [0, 1000] }}
        sort={sort}
        onAddToCart={handleAddToCart}
      />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
