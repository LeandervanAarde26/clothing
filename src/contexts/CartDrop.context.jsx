import { createContext, useState, useEffect } from "react";


export const CartContext = createContext({
   isCartOpen: false,
   setOpenCart: () => {}
})

export const CartProvider = ({children}) =>{
    const [showCart, setShowCart] = useState(false);
    const val = {showCart, setShowCart}
    return (
        <CartContext.Provider value={val}>
            {children}
        </CartContext.Provider>
    )

}