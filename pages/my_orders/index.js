import React, { useState, useEffect } from "react";
import OrderItem from "./order_item";
import styles from "./myorders.module.css"
const MyOrders = () =>{

    const [orders, setOrders] = useState({});

    useEffect(() => {
        try {
            if (localStorage.getItem("orders")) {
                setOrders(JSON.parse(localStorage.getItem("orders")));
            }
        }
        catch (e) {
            //localStorage.clear();
        }
}, [])

    return (
        <div className={styles.container}>
            <div className={styles.title}>Your orders</div>
            
            {
                Object.keys(orders).map((k) => <OrderItem id={k} time={orders[k].info[0]} cart={orders[k].info[1]}/>)
            }
        </div>
    )
}

export default MyOrders;