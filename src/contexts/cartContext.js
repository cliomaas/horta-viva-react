import React from 'react';

const CartContext = React.createContext();

function CartProvider({ children }) {
    const [cart, setCart] = React.useState([]);
    const [cartAdd, setCartAdd] = React.useState(false);
    return (
        <CartContext.Provider value={({ cart, setCart, cartAdd, setCartAdd })}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };