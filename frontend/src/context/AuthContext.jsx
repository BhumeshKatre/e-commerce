import { createContext, useContext, useState, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product, selectSize) => {

    const isAlreadyInCart = cartItem.some(
      (item) => item.product._id === product._id && item.selectSize === selectSize
    );
    console.log(isAlreadyInCart);
    if (isAlreadyInCart) {
      alert("Already item in cart");
      return;
    }
    
    setCartItem((prev) => [...prev, { product, selectSize }]);


  };


  useEffect(() => {
    setAllProducts(products);
  }, []);
console.log(cartItem);
  return (
    <AuthContext.Provider value={{ allProducts, addToCart , cartItem }}>
      {children}
    </AuthContext.Provider>
  );
};
