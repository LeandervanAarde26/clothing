import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productAdd) =>{
    const existing = cartItems.find((cartItem) => cartItem.id === productAdd.id);

    if(existing){
        return cartItems.map(cartItem =>
            cartItem .id === productAdd.id
            ? {...cartItem, quantity:cartItem.quantity +1}
            : cartItem
        )
    }
    return [...cartItems,{...productAdd, quantity: 1}]; 
}

const removeCartitem = (cartItems, productRemove) =>{
    const existing = cartItems.find((cartItem) => cartItem.id === productRemove.id);

    if(existing.quantity === 1){
        return (cartItems.filter(cartItem => cartItem.id !== productRemove.id));
    }
    return cartItems.map(cartItem =>
        cartItem .id === productRemove.id
        ? {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    )

}

const clearCartitem = (cartItems, productRemove) =>{
    return (cartItems.filter(cartItem => cartItem.id !== productRemove.id));

}


export const CartContext = createContext({
   isCartOpen: false,
   setOpenCart: () => {},
   cartItems : [], 
   addItemToCart: () => {},
   removeItemFromCart: () => {},
   clearItemFromCart: () => {},
   cartCount: 0,
   total: 0
})

export const CartProvider = ({children}) =>{
    
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0)
        setCartCount(newCartCount)

        const newTotal = cartItems.reduce((total, cartItems) => total + cartItems.quantity * cartItems.price, 0)
        setTotal(newTotal);
    }, [cartItems])
    const addItemToCart = (productAdd) =>{
        setCartItems(addCartItem(cartItems, productAdd));
    };

    const removeItemFromCart = (productRemove) =>{
        setCartItems(removeCartitem(cartItems, productRemove));
    };

    const clearItemFromCart = (productRemove) =>{
        setCartItems(clearCartitem(cartItems, productRemove));
    };
    const val = {showCart, setShowCart, addItemToCart, cartItems, cartCount, total, removeItemFromCart, clearItemFromCart}
 
  
    return (
        <CartContext.Provider value={val}>
            {children}
        </CartContext.Provider>
    )

}