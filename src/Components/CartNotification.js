import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartNotification = ({ cart }) => {
  const [cartAdded, setCartAdded] = useState(false);

  const handleCartAnimation = () => {
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 600); 
  };

  if (cart.length > 0) {
    toast.success('Product added to the cart!');
    handleCartAnimation();
  }

  return (
    <div>
      <motion.div
        className="cart-icon"
        animate={{ scale: cartAdded ? 1.2 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaShoppingCart size={30} />
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default CartNotification;
