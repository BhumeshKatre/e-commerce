import { createContext, useContext, useState, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate();

  const [checkoutInfo, setCheckoutInfo] = useState({
    subtotal: 0,
    shippingCharge: 0,
    total: 0,
  });

  const addToCart = (product, selectSize) => {
    const isAlreadyInCart = cartItem.some(
      (item) =>
        item.product._id === product._id && item.selectSize === selectSize
    );
    console.log(isAlreadyInCart);
    if (isAlreadyInCart) {
      alert("Already item in cart");
      return;
    }
    setCartItem((prev) => [...prev, { product, selectSize }]);
  };

  const handleProceedBtn = (subtotal, shippingCharge) => {
    setCheckoutInfo({
      subtotal: subtotal,
      shippingCharge: shippingCharge,
      total: shippingCharge + subtotal,
    });
    navigate("/place-order");
  };

  useEffect(() => {
    setAllProducts(products);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        allProducts,
        addToCart,
        cartItem,
        checkoutInfo,
        setCheckoutInfo,
        handleProceedBtn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
