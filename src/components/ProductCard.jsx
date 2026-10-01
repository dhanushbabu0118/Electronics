import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ product }) {
    return (
        <motion.div
            className="product-card"
            whileHover={{
                y: -8,
                scale: 1.02
            }}
            transition={{
                duration: 0.2
            }}
        >

            <div className="product-image">
                <span>{product.icon}</span>
            </div>

            <div className="product-info">
                <p className="product-category">{product.category}</p>

                <h3>{product.name}</h3>

                <p className="product-price">₹{product.price}</p>

                <Link
                    to={`/products/${product.id}`}
                    className="view-product"
                >
                    View Product
                </Link>
            </div>

        </motion.div>
    );
}

export default ProductCard;