import CartContext from "@/context/CartContext";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function CartProvider({ children }) {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const cartLength = cart.length;

  function addToCart(item, quantity = 1) {

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

    toast.success(`${item.title} added to cart!`);
    navigate("/cart");
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ addToCart, cartLength, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
