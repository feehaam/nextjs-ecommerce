import React, { useState, useEffect } from "react";
import styles from "../cart/cart.module.css";
import Item from "./items";
import Checkout from "../checkout";

export default function Cart({ addProduct, removeProduct }) {

  let totalItemsInCart = 0;

  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    }
    catch (e) {
      localStorage.clear();
    }
  }, [])

  const clearLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem("totalItems", 0);
    localStorage.setItem("totalPrice", 0);
    window.location.reload();
  }

  return (
    <div>
      <div className={styles.blank}></div>
      <div className={styles.container}>
        <div className={styles.title}>
          Cart
        </div>
        <div className={styles.items}>
          {
            Object.keys(cart).map((k) => <Item image={cart[k].image} title={cart[k].title} price={cart[k].price} quantity={cart[k].quantity} add={addProduct} remove={removeProduct} product={cart[k]} id={k} setCart={setCart} />)
          }
          {
            Object.keys(cart).map((k) => {
              totalItemsInCart++;
            })
          }

          {
            totalItemsInCart == 0 ? <div>There is no item in cart!<br></br>Go back to products list and add some product.</div> : ""
          }
        </div>
        <a href="../checkout" className={styles.order} >
          Checkout
        </a>
        <div className={styles.clear} onClick={()=>{clearLocalStorage()}}>
          Clear Cart
        </div>
      </div>
    </div>
  )
}
