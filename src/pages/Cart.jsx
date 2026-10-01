import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const totalAmount = cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    return (
        <div>
            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((product, index) => (
                        <div key={index}>
                            <h2>{product.name}</h2>

                            <p>Category: {product.category}</p>

                            <p>Price: ₹{product.price}</p>

                            <div>
                                <button onClick={() => updateQuantity(product.id, -1)}>
                                    -
                                </button>

                                <span> {product.quantity} </span>

                                <button onClick={() => updateQuantity(product.id, 1)}>
                                    +
                                </button>
                            </div>

                            <button onClick={() => removeFromCart(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <h2>Total: ₹{totalAmount}</h2>
                </div>
            )}
        </div>
    );
}

export default Cart;