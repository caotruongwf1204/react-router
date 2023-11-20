import React from "react";
import { useCart } from "../hooks/use-cart";
import { useState } from "react";


export default function ShoppingCart() {
  const { items } = useCart();
  


  if (items.length === 0) {
    return (
      <main>
        <h1>Shopping Cart is empty</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Shopping Cart</h1>
      <div className="shopping-cart">
        <img src="" alt="" />
        <h3>ten san pham</h3>

        
      </div>
    </main>
  );
}
