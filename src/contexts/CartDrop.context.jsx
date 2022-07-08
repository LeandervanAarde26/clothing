import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/firebase/Reducer/Reducer.utils";

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
   showCart: false,
   setOpenCart: () => {},
   cartItems : [], 
   addItemToCart: () => {},
   removeItemFromCart: () => {},
   clearItemFromCart: () => {},
   cartCount: 0,
   total: 0
});



export const CART_ACTION_TYPES = {
   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
   SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, action) =>{
    const {type, payload} = action;
    switch (type){
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                showCart: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            
            return{
                ...state, 
                ...payload,
                
            }
          
        default:
            throw new Error(`Error in ${type} found in Cart Reducer function`)
    }
}
const initialState = {
    showCart: false, 
    cartItems: [],
    cartCount: 0,
    total: 0
}

export const CartProvider = ({children}) =>{

    const [{showCart, cartItems, total, cartCount}, dispatch] = useReducer(cartReducer, initialState);

    const updateCartInfoReducer = (newCartItems) =>{
        const newCartCount = newCartItems.reduce((total, cartItems) => total + cartItems.quantity, 0);
        const newTotal = newCartItems.reduce((total, cartItems) => total + cartItems.quantity * cartItems.price, 0);

        dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {cartCount: newCartCount, total: newTotal, cartItems: newCartItems}})
    }

    const setShowCart = (bool) =>{
        dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool});
    }

    const addItemToCart = (productAdd) =>{
        const newCartItems = addCartItem(cartItems, productAdd);
        updateCartInfoReducer(newCartItems);
    };

    const removeItemFromCart = (productRemove) =>{
        const newCartItems = removeCartitem(cartItems, productRemove);
        updateCartInfoReducer(newCartItems);
    };

    const clearItemFromCart = (productRemove) =>{
        const newCartItems = clearCartitem(cartItems, productRemove);
        updateCartInfoReducer(newCartItems);
    };
    const val = {
        showCart, 
        setShowCart, 
        addItemToCart, 
        cartItems, 
        cartCount, 
        total, 
        removeItemFromCart, 
        clearItemFromCart
    }
 
    return (
        <CartContext.Provider value={val}>
            {children}
        </CartContext.Provider>
    )

}