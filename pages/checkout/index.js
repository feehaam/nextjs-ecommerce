import React, { useState, useEffect } from "react";
import styles from "../checkout/checkout.module.css"

const Checkout = () => {

    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState({});

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

    useEffect(() => {
        try {
            if (localStorage.getItem("orders")) {
                setOrder(JSON.parse(localStorage.getItem("orders")));
            }
        }
        catch (e) {

        }
    }, [])

    let no;

    const clearLocalStorage = () => {
        localStorage.setItem("totalItems", 0);
        localStorage.setItem("totalPrice", 0);
        localStorage.setItem("cart", "");
        window.location.reload();
        window.location.replace("../order_details?id=" + no);
    }

    const placeOrder = (name, email, phone, address) => {
        var currentdate = new Date();
        var datetime = (currentdate.getMonth() + 1) + "/"
            + currentdate.getDate() + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        no = parseInt(Math.round(Math.random() * 999999));
        while (no < 100000) {
            no += 123456;
        }
        var info = [datetime, name, email, phone, address, cart];
        order[no] = { info };
        setOrder(order);

        console.log(order);
        localStorage.setItem("orders", JSON.stringify(order));

    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Enter your details to complete the order placement</div>
            <div className={styles.lab}>
                Full name
            </div>
            <div>
                <input className={styles.inp} type="text" id="name"></input>
            </div>
            <div className={styles.lab}>
                Email address
            </div>
            <div>
                <input className={styles.inp} type="email" id="email"></input>
            </div>
            <div className={styles.lab}>
                Phone no.
            </div>
            <div>
                <input className={styles.inp} type="number" id="phone"></input>
            </div>
            <div className={styles.lab}>
                Address
            </div>
            <div>
                <input className={styles.inp} type="text" id="address"></input>
            </div><br></br>

            <button className={styles.btn} onClick={() => validate()}>Place order</button>

        </div>
    )

    function validate() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;

        if (name.toString().length < 4) {
            alert("Enter your real name.");
        }
        else if (!email.toString().includes("@") || !email.toString().includes(".") || email.toString().length < 6) {
            alert("Provide a valid email address");
        }
        else if (phone.toString().length != 11) {
            if (phone.toString().startsWith("88") && phone.toString().length == 13)
                ;
            else {
                alert("Provide a valid phone number");
            }
        }
        else if (address.toString().length < 10) {
            alert("Type your full address of delivery.");
        }
        else {
            placeOrder(name, email, phone, address);
            clearLocalStorage();
        }

    }
}

export default Checkout;