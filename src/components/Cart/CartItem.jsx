import React, { useContext } from "react"
import { cartContext } from "../../Context/CartProvider";

const CartItem = ({prod}) => {

    const { removeItem } = useContext(cartContext)

    return (
        <>
            <div className="ContenedorCompra">
                <img className="ProductoEnCarrito" src={prod.item.img} alt="producto"/>
                <h2>{prod.item.name}</h2>
                <p>Cantidad: {prod.amount}</p>
                <button className="BotonNegativo" onClick={() => removeItem(prod.item.id)}>X</button>
            </div>
        </>
    )
}

export default CartItem;