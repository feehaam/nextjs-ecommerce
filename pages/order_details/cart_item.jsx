import React from "react";
import styles from "./cart_item.module.css"

const CartItem = ({ image, title, quantity, price, updateTotal}) => {
    
    updateTotal(price * quantity);

    return (
        <div className={styles.container}>
            <table className={styles.tbl}>
                <tr>
                    <td rowSpan={2}>
                        <img src={image} className={styles.image}></img>
                    </td>
                    <td colSpan={3} className={styles.title}>
                        {title}
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

export default CartItem;