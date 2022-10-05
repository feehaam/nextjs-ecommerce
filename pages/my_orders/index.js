import React, { useState, useEffect } from "react";
import Link from 'next/link'
import OrderItem from "./order_item";
import styles from "./myorders.module.css"
const MyOrders = () => {

    const [orders, setOrders] = useState({});

    let totalOrders = 0;

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
            Object.keys(orders).map((k) => {
              totalOrders++;
            })
          }
            {
                totalOrders < 1 ? <div className={styles.no}>
                    <a onClick={() => {
                        window.location.reload();
                    }}>No orders are placed. <br></br>
                        Go back to product page to place an order.</a>

                </div> : null
            }
            {
                Object.keys(orders).map((k, index) => <OrderItem key={index} id={k} time={orders[k].info[0]} cart={orders[k].info[1]} />)
            }
        </div>
    )
}

export default MyOrders;