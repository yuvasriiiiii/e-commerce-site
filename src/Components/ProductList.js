import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import LoadingSppinner from "./LoadingSpinner";
import { toast } from "react-toastify";
import no_product_img from "../no-product-img.jpg";

function ProductList({ products, filter, sort, onAddToCart }) {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (filter.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filter.category
      );
    }

    if (filter.priceRange) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.price >= filter.priceRange[0] &&
          product.price <= filter.priceRange[1]
      );
    }

    if (sort) {
      if (sort === "lowToHigh") {
        updatedProducts.sort((a, b) => a.price - b.price);
      } else if (sort === "highToLow") {
        updatedProducts.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredProducts(updatedProducts);
  }, [products, filter, sort]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  if (loading) return <LoadingSppinner />;

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <motion.div
          
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ duration: 0.5 }}
          >
            <ProductCard product={product} onAddCart={handleAddToCart} />
          </motion.div>
        ))
      ) : (
        <div className="no-product-found">
          <img src={no_product_img} width={400} height={400}/>
          <div >No products match your criteria.</div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
