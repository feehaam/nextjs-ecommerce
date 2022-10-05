import { useState } from "react";
import CartItem from "../order_details/cart_item"
import styles from "./details.module.css"

const Details = ({ oid, id, time, name, email, phone, address, cart }) => {

    const [total, setTotal] = useState(0.0);

    if (oid != id) return;

    let T = 0;

    function updateTotal(p){
        T += p;
        console.log(T);
        setTotal(T/2);
    }


    return (
        <div className={styles.container}>
            <div className={styles.title}>Order details</div>
            <div className={styles.item}>Order id: {id}</div>
            <div className={styles.item}>Time placed: {time}</div>
            <div className={styles.item}>Name: {name}</div>
            <div className={styles.item}>Email: {email}</div>
            <div className={styles.item}>Phone: {phone}</div>
            <div className={styles.item}>Address: {address}</div>
            <div className={styles.cart}>
                {Object.keys(cart).map((k) => <CartItem image={cart[k].image} title={cart[k].title} quantity={cart[k].quantity} price={cart[k].price} updateTotal={updateTotal}/>)}
            </div>
            <div className={styles.btn}>Total: ${total}</div>
            <br></br>
        </div>
    )
}

export default Details;