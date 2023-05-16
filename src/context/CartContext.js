import { useState, createContext, useContext } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext (CartContext)

export const CartProvider = (props) => {

    const [cart, setCart] = useState ([])

    const isInCart = (id) => {

        return cart.some (prod => prod.id === id)

    } 

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            
            const indice = cart.findIndex (prod => prod.id === item.id)
            const auxiliar = [...cart]
            auxiliar[indice].quantity = quantity
            setCart (auxiliar)
        }else{

            const newItem = {
                ...item,
                quantity
            }

            setCart ([...cart, newItem])
        }
    }

    const removeItem = (id) => {
        setCart (cart.filter (prod => prod.id !== id))
    }

    const emptyCart = () => {
        setCart ([])
    }


    const getItemQuantity = () => {

        return cart.reduce ((accum, prod) => accum += prod.quantity, 0)
    }

    const totalPrice = () => {

        return cart.reduce ((accum,prod) => accum += (prod.quantity * prod.precio), 0) 
    }

    console.log (cart)

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

}
