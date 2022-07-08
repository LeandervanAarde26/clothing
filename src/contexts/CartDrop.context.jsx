import { createContext, useReducer } from "react";
import createAction from "../utils/Reducer/Reducer.utils";

const addCartItem = (cartItems, productAdd) => {
    const existing = cartItems.find((cartItem) => cartItem.id === productAdd.id);

    if (existing) {
        return cartItems.map(cartItem =>
            cartItem.id === productAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...productAdd, quantity: 1 }];
}

const removeCartitem = (cartItems, productRemove) => {
    const existing = cartItems.find((cartItem) => cartItem.id === productRemove.id);
    if (existing.quantity === 1) {
        return (cartItems.filter(cartItem => cartItem.id !== productRemove.id));
    }
    return cartItems.map(cartItem =>
        cartItem.id === productRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

const clearCartitem = (cartItems, productRemove) => {
    return (cartItems.filter(cartItem => cartItem.id !== productRemove.id));
}

export const CartContext = createContext({
    showCart: false,
    setOpenCart: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    total: 0
});

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {

        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                showCart: payload
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



export const CartProvider = ({ children }) => {


    const [{ showCart, total, cartItems, cartCount }, dispatch] = useReducer(cartReducer, initialState);
    dispatch(
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { total: newTotal, cartCount: newCartCount, cartItems: newCartItems }))

    const setShowCart = (bool) => {
        dispatch(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
        )
    }

    const updateCartInfoReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItems) => total + cartItems.quantity, 0)
        const newTotal = newCartItems.reduce((total, cartItems) => total + cartItems.quantity * cartItems.price, 0)
    }


    const addItemToCart = (productAdd) => {
        const newCartItem = addCartItem(cartItems, productAdd);
        updateCartInfoReducer(newCartItem)
    };

    const removeItemFromCart = (productRemove) => {
        const newCartItem = removeCartitem(cartItems, productRemove);
        updateCartInfoReducer(newCartItem)
    };

    const clearItemFromCart = (productRemove) => {
        const newCartItem = clearCartitem(cartItems, productRemove);
        updateCartInfoReducer(newCartItem)
    };



    const val = { showCart, setShowCart, addItemToCart, cartItems, cartCount, total, removeItemFromCart, clearItemFromCart }

    return (
        <CartContext.Provider value={val}>
            {children}
        </CartContext.Provider>
    )
}