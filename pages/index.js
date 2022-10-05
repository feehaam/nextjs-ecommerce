import React, { useState, useEffect } from "react";
import ProductList from "./product_list"
import Cart from "./cart";
import ProductDetails from "./product_details";
import styles from "../styles/index.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyOrders from "./my_orders";

export default function Home() {

  let totalItems = 0, totalPrice = 0;

  const [ti, setTi] = useState(0);
  const [tp, setTp] = useState(0);

  const [currentPage, setCurrentPage] = useState("Products");

  function changePage(page){
    setCurrentPage(page);
  }

  // States for handling carts
  const [cart, setCart] = useState({});
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        console.log("Cart containing previous items, does exist.");
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    }
    catch (e) {
      console.log("Error in loading cart -> " + e);
      clearLocalStorage();
    }
  }, [])

  useEffect(() => {
    try {
      if (localStorage.getItem("totalItems")) {
        if (localStorage.getItem("totalItems")) {
          totalItems = parseInt(localStorage.getItem("totalItems"));
        }
        if (localStorage.getItem("totalPrice")) {
          totalPrice = parseInt(localStorage.getItem("totalPrice"));
        }

        setTi(totalItems);
        setTp(totalPrice);
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
  }

  const addToCart = (product) => {

    console.log("New product requested to add: ");
    console.log(product);

    let itemCode = parseInt(product.id);
    let title = product.title;
    let price = product.price;
    let description = product.description;
    let category = product.category;
    let image = product.image;
    let rating = product.rating.rate;
    let rated = product.rating.count;
    let quantity = 1;

    let update = cart;
    let newItem = 1;
    if (itemCode in update) {
      console.log("Item already exists, increasing quantity.");
      quantity = update[itemCode].quantity + 1;
      newItem = 0;
    }
    update[itemCode] = { title, description, category, image, price, rating, rated, quantity };
    setCart(update);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCounts(newItem, price);
  }
  

  function updateCounts(newItem, price){
    let total = parseInt(localStorage.getItem("totalItems"));
    let totalPrice = parseFloat(localStorage.getItem("totalPrice"));

    if (Number.isNaN(total) || Number.isNaN(totalPrice)) {
      total = 0;
      totalPrice = 0;
      localStorage.clear();
    }
    total = total + newItem;;
    console.log(total);
    localStorage.setItem("totalItems", total);

    totalPrice = totalPrice + parseFloat(price);
    if(total == 0) totalPrice = 0
    localStorage.setItem("totalPrice", totalPrice);

    counts();
  }

  const addProduct = (id) =>{
    let update = cart;
    update[id].quantity = update[id].quantity + 1;
    setCart(update);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCounts(0, update[id].price);
  }

  const removeProduct = (id) =>{
    let update = cart;
    let price = -update[id].price;
    let newItem = 0;
    update[id].quantity = update[id].quantity - 1;
    if(update[id].quantity <= 0){
      delete update[id];
      newItem = -1;
    }
    setCart(update);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCounts(newItem, price);
  }

  const counts = (product) => {
    totalItems = parseInt(localStorage.getItem("totalItems"));
    totalPrice = parseFloat(localStorage.getItem("totalPrice"));

    console.log(totalItems);
    console.log(totalPrice);

    setTi(totalItems);
    setTp(totalPrice);
  }

  const [product, setProduct] = useState({});
  function openProductDetails(p){
    setProduct(p);
    changePage("ProductDetails");
  }

  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.logo}  onClick={() => changePage("Products")}>PROJECT 2: React &amp; Next.js</div>
          <ul>
            <input type="checkbox" id="checkbox_toggle" className={styles.hidecb} />
            <label for="checkbox_toggle" className={styles.hamburger}>&#9776;</label>
            <div className={styles.menu}>
              <li><div className={styles.a} onClick={() => changePage("Products")}>Product List</div></li>
              <li><div className={styles.a} onClick={() => changePage("Cart")}>Cart <span class="badge badge-danger">{ti}</span> <span class="badge badge-info">${parseInt(tp)}</span></div></li>
              <li><div className={styles.a} onClick={() => changePage("Orders")}>My Orders</div></li>
            </div>
          </ul>
        </nav>
      </div>

      {
        currentPage.endsWith("Products") ? <ProductList addToCart={addToCart} openProductDetails={openProductDetails} /> : null
      }
      {
        currentPage.endsWith("Cart") ? <Cart addProduct={addProduct} removeProduct={removeProduct} /> : null
      }
      {
        currentPage.endsWith("Orders") ? <MyOrders /> : null
      }
      {
        currentPage.endsWith("ProductDetails") ? <ProductDetails product={product} addToCart={addToCart}/> : null
      }
      
    </div>
  )
}
