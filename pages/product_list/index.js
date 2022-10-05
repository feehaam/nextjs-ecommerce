import React, { useState, useEffect } from "react";
import productsList from "./products_json";
import Card from "./card";
import styles from "../product_list/product_list.module.css"

const ProductList = ({addToCart, openProductDetails}) => {
  
  return (
    <div>
      <div className={styles.container}>
      {
        productsList.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} openProductDetails={openProductDetails}/>
        ))
      }
    </div>
    </div>
  )
}


export default ProductList;