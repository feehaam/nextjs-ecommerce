import React, { useState, useEffect } from "react";
import Modal from "./Modal/Modal";
import styles from "../product_list/card.module.css";

const Card = ({ product, addToCart, openProductDetails }) => {

    // A sate for managing the modal
    const [openModal, setOpenModal] = useState(false);

    function ModalHandle() {
        if (openModal == false) {
            setOpenModal(true);
        }
        else {
            setOpenModal(false);
        }
    }

    let id = product.id;
    let title = product.title;
    let price = product.price;
    let description = product.description;
    let category = product.category;
    let image = product.image;
    let rating = product.rating.rate;
    let rated = product.rating.count;

    return (
        <div id={styles.trans} className={styles.container}>
            <div className={styles.info}>
                <img className={styles.image} src={image} alt={styles.title}  onClick={() => openProductDetails(product)}></img>
                <div className={styles.details}>
                    <div className={styles.title}>
                        <div className={styles.titleSize}>
                            {title}
                        </div>
                    </div>
                    <div className={styles.tag}>
                        <div className={styles.left}>
                            Price
                        </div>
                        <div className={styles.right}>
                            {price}
                        </div>
                    </div>
                    <div className={styles.tag}>
                        <div className={styles.left}>
                            Category
                        </div>
                        <div className={styles.right}>
                            {
                                category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
                            }
                        </div>
                    </div>
                    <div className={styles.tag}>
                        <div className={styles.left}>
                            Rating
                        </div>
                        <div className={styles.right}>
                            {rating} ({rated})
                        </div>
                    </div>
                    <div className={styles.tag}>
                        <div className={styles.btn} onClick={ModalHandle}>
                            Quick View
                        </div>
                        <Modal open={openModal} product={product} addToCart={addToCart} onClose={() => setOpenModal(false)} />
                        <div className={styles.btn} onClick={() => addToCart(product)}>
                            Add To Cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;