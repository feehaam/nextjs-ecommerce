import styles from "./product_details.module.css"

const ProductDetails = ({product, addToCart}) => {

    let id = product.id;
    let title = product.title;
    let price = product.price;
    let description = product.description;
    let category = product.category;
    let image = product.image;
    let rating = product.rating.rate;
    let rated = product.rating.count;

    return (
        <div>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.image}>
                        <img src={image} className={styles.imgfix}></img>
                    </div>
                    <div className={styles.details}>
                        {description}
                    </div>
                    <div className={styles.options}>
                        <table className={styles.tab}>
                            <tr>
                                <td>
                                    <div className={styles.option}>
                                        Price: {price}
                                    </div>
                                    <div className={styles.option}>
                                        Rating: {rating}({rated})
                                    </div>
                                    <div className={styles.option}>
                                        Category: {category}
                                    </div>
                                </td>

                                <td>
                                    <div className={styles.tabd}>
                                    <button className={styles.btn} onClick={() => {
                                        addToCart(product);
                                        alert("Item added to the cart.");
                                    }}>Add to cart</button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;