import React from 'react';

const CartContext = React.createContext();

function CartProvider({ children }) {
    const [cart, setCart] = React.useState([]);
    return (
        <CartContext.Provider value={({ cart, setCart })}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };