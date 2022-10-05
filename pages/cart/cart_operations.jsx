import React, { useEffect, useState } from "react";

export default function CartOperations() {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        console.log("Cart containing previous items, does exist.");
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    }
    catch (e) {
      console.log("Error in loading cart -> " + e);
      localStorage.clear();
    }
  }, [])

  const showCarts = () => {
    if (localStorage.getItem("cart")) {
      console.log("PRINTING CART...");
      console.log(cart);
    }
  }

  const saveCart = (myCart) => {
    myCart = JSON.stringify(myCart);
    localStorage.setItem("cart", myCart);
    console.log("Cart saved.");
  }

  const addToCart = (itemCode, title, description, price, rating, rated, qty) => {
    let newCart = cart;
    if (itemCode in cart) {
      console.log('Item already exists in the cart. Increasing quantity.');
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    else {
      console.log('Item does not exist, adding into cart');
      newCart[itemCode] = { title, description, price, rating, rated, qty };
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const removeFromCart = (itemCode) => {
    let myCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - 1;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    console.log("Clearing cart...");
    setCart({});
    saveCart({});
  }


}

