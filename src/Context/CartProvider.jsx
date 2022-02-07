import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (productId, amount) => {
        if (isInCart(productId.id)) {
            const indexItem = carrito.findIndex(e => e.item.id === productId.id)
            carrito[indexItem].amount = carrito[indexItem].amount + amount;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, { item: productId, amount }])
        }
    }

    const removeItem = (id) => {
        const reCarrito = carrito.filter(e => e.item.id !== id)
        setCarrito(reCarrito);
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(Element => Element.item.id === id)
    }
    // Cantidad de productos mostrado en el icono del carrito
    const amountInCart = () =>{
        if (carrito.length === 0){
            return <span className="carritoContador">0</span>
        } else {
            return carrito.map((a) => a.amount).reduce((a,b) => a + b);
        }
    }
    // Precio total de los productos
    const fullPrice = () => {
        return carrito
            .map((i) => i.item.precio * i.amount)
            .reduce((a, b) => a + b);
    }
    
    return (
        <cartContext.Provider value={{ carrito, addItem, removeItem, clear, amountInCart, fullPrice }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider; 
