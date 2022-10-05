import Router from "next/router";
import styles from "./orderitem.module.css"

const OrderItem = ({ id, time}) => {

    function openDetails(){
        Router.push({
            pathname: "../order_details",
            query : {id}
        });
    }

    return (
        <div className={styles.container}>
            <div onClick={() => openDetails()}>
                <div>Order number: <b>{id}</b></div>
                <div>Time of order placed: {time}</div>
            </div>
        </div>
    )
}
export default OrderItem;