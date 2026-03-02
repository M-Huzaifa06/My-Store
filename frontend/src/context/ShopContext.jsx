import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [all_products, setAll_Products] = useState([]);
  const [cartItems, setCartItems] = useState({});

  //  Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && Array.isArray(data.products)) {
          setAll_Products(data.products);
        } else {
          setAll_Products([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setAll_Products([]);
      });
      
  }, []);

  //  Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  //  Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
  setCartItems((prev) => ({
    ...prev,
    [itemId]: (prev[itemId] || 0) + 1,
  }));

  if (localStorage.getItem("auth-token")) {
    fetch("http://localhost:4000/addtocart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Product added to cart successfully");
        } else {
          console.error("Failed to add product:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  }
};

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));

    if (localStorage.getItem("auth-token")) {
    fetch("http://localhost:4000/removefromcart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Product removed from cart successfully");
        } else {
          console.error("Failed to remove product:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error removing product:", error);
      });
  }
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, quantity),
    }));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1),
    }));
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [productId, quantity]) => {
      const product = all_products.find(
        (p) => p.id === Number(productId)
      );
      return total + (product ? product.new_price * quantity : 0);
    }, 0);
  };

  const getCartDetails = () => {
    return Object.entries(cartItems)
      .filter(([, qty]) => qty > 0)
      .map(([productId, quantity]) => {
        const product = all_products.find(
          (p) => p.id === Number(productId)
        );
        if (!product) return null;

        return {
          ...product,
          cartQuantity: quantity,
          subtotal: product.new_price * quantity,
        };
      })
      .filter(Boolean);
  };

  const clearCart = () => {
    setCartItems({});
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    decreaseQuantity,
    getTotalItems,
    getTotalPrice,
    getCartDetails,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;