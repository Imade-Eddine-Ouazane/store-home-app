import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/detail/Detail";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Increase the quantity if the item already exists in the cart
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add a new item to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <div>
     
    <BrowserRouter>  
      <Routes>
        
        <Route path="/" element={<Home addToCart={addToCart} cartItems={cartItems} />}/>
        <Route path="/Shop" element={<Shop addToCart={addToCart} cartItems={cartItems}  />} />
        <Route path="/Cart" element={<Cart addToCart={addToCart} cartItems={cartItems}  />} />
        <Route path="/detail/:id" element={<Detail  addToCart={addToCart} cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
