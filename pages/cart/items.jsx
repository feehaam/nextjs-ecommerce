import React from "react";
import styles from "../cart/items.module.css";

const Item = ({ image, title, quantity, price, add, remove, product, id, setCart }) => {
    return (
        <div className={styles.container}>
            <table className={styles.tbl}>
                <tr>
                    <td rowSpan={2} className={styles.btnC}>
                        <span className={styles.btn} onClick={() => {
                            remove(id);
                            setCart(JSON.parse(localStorage.getItem("cart")));
                        }}>
                            -
                        </span>
                    </td>
                    <td rowSpan={2}>
                        <img src={image} className={styles.image}></img>
                    </td>
                    <td colSpan={3} className={styles.title}>
                        {title}
                    </td>
                    <td rowSpan={2} className={styles.btnC}>
                        <span className={styles.btn} onClick={() => {
                            add(id)
                            setCart(JSON.parse(localStorage.getItem("cart")));
                        }}>
                            +
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className={styles.items}>
                        $ {price}
                    </td>
                    <td className={styles.items}>
                        {quantity}
                    </td>
                    <td className={styles.items}>
                        $ {price * quantity}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Item;