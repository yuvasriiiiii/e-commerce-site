import React, { useState } from "react";

function FilterBar({ onFilter, onSort }) {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState("");


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilter("category", e.target.value); 
  };


  const handlePriceChange = (e) => {
    const value = e.target.value.split(",").map(Number); 
    setPriceRange(value);
    onFilter("priceRange", value); 
  };

  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div className="filter-sort-bar">
      <div className="filter">
        <h3>Filter:</h3>
        <select onChange={handleCategoryChange} value={category}>
          <option value="">All Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Unisex">Unisex</option>
        </select>

        <select onChange={handlePriceChange} value={priceRange.join(",")}>
          <option value="0,1000">All Prices</option>
          <option value="0,50">Under ₹50</option>
          <option value="50,100">Under ₹100</option>
          <option value="100,500">Under ₹500</option>
          <option value="500,1000">Under ₹1000</option>
        </select>
      </div>

      <div className="sort">
        <h3>Sort:</h3>
        <select onChange={handleSortChange} value={sortOrder}>
          <option value="">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
