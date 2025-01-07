import React, { useState } from "react";
import { motion } from "framer-motion";
// import { FaShoppingCart } from "react-icons/fa"; 
import AOS from "aos"

function ProductCard({ product, onAddCart }) {
  const [ripples, setRipples] = useState([]);
  const [cartAnimation, setCartAnimation] = useState(false);


  const handleRipple = (e) => {
    const rect = e.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = { x, y, size };
    setRipples((prev) => [...prev, ripple]);

    
    setTimeout(() => {
      onAddCart(product);
      setCartAnimation(true); 
      setTimeout(() => setCartAnimation(false), 500); 
    }, 100);
  };
  AOS.init();
  AOS.refresh();
  return (
    <motion.div
      data-aos="fade-up"
      className="product-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    //   transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={product.image}
        alt={product.name}
        width={250}
        height={250}
        className="product-img"
      />
      <div className="product_details">
        <div>
          <div className="product_name">
            {product.name} - {product.category}
          </div>
          <div className="price">Price - ₹{product.price}</div>
        </div>
        <div>
          <button onClick={handleRipple}>
            Add To Cart
            {ripples.map((ripple, idx) => (
              <span
                key={idx}
                className="ripple"
                style={{
                  width: ripple.size,
                  height: ripple.size,
                  left: ripple.x,
                  top: ripple.y,
                }}
              ></span>
            ))}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
