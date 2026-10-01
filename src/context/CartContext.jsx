import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((previousCart) => {
            const existingProduct = previousCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return previousCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...previousCart,
                { ...product, quantity: 1 },
            ];
        });
    };
    const removeFromCart = (indexToRemove) => {
        setCart((previousCart) =>
            previousCart.filter((_, index) => index !== indexToRemove)
        );
    };
    const updateQuantity = (productId, change) => {
        setCart((previousCart) =>
            previousCart
                .map((item) =>
                    item.id === productId
                        ? {
                            ...item,
                            quantity: item.quantity + change,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}