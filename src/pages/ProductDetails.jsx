import { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import products from "../data/products";
import { useCart } from "../context/CartContext";

import airpods1 from "../assets/product-images/airpods-1.jpg";
import airpods2 from "../assets/product-images/airpods-2.jpg";
import airpods3 from "../assets/product-images/airpods-3.jpg";

function ProductDetails() {
    const { addToCart } = useCart();
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [currentImage, setCurrentImage] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    const images = [
        airpods1,
        airpods2,
        airpods3,
    ];

    return (
        <div className="product-details">

            <div className="product-details-image">

                <button
                    className="slider-button"
                    onClick={() =>
                        setCurrentImage(
                            currentImage === 0
                                ? images.length - 1
                                : currentImage - 1
                        )
                    }
                >
                    ❮
                </button>

                <img
                    src={images[currentImage]}
                    alt={product.name}
                />

                <button
                    className="slider-button"
                    onClick={() =>
                        setCurrentImage(
                            currentImage === images.length - 1
                                ? 0
                                : currentImage + 1
                        )
                    }
                >
                    ❯
                </button>

            </div>

            <div className="product-details-info">

                <p>{product.category}</p>

                <h1>{product.name}</h1>

                <h2>₹{product.price}</h2>

                <p>
                    Experience premium quality and powerful performance
                    with this BOAT product.
                </p>

                <button
                    onClick={() => {
                        addToCart(product);
                        toast.success("Product added to cart!");
                    }}
                >
                    Add to Cart
                </button>

                <button
                    onClick={() => {
                        const newStatus = !isWishlisted;
                        setIsWishlisted(newStatus);

                        if (newStatus) {
                            toast.success("Added to wishlist!");
                        } else {
                            toast("Removed from wishlist!");
                        }
                    }}
                >
                    {isWishlisted ? "❤️ Added to Wishlist" : "Add to Wishlist"}
                </button>

            </div>

        </div>
    );
}

export default ProductDetails;