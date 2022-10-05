import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Details from "./details";

const OrderDetails = (cart) => {

    const router = useRouter();
    const id = router.query.id;

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
        <div>
            {console.log(id)}
            {
                Object.keys(orders).map((k, index) => <Details 
                    key={index}
                    oid={id}
                    id={k}
                    time={orders[k].info[0]}
                    name={orders[k].info[1]}
                    email={orders[k].info[2]}
                    phone={orders[k].info[3]}
                    address={orders[k].info[4]}
                    cart={orders[k].info[5]}
                />) 
            }
        </div>
    )
}

export default OrderDetails;
