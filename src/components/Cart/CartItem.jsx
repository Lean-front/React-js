import React, { useContext } from "react"
import { cartContext } from "../../Context/CartProvider";

const CartItem = ({prod}) => {

    const { removeItem } = useContext(cartContext)

    return (
        <>
            <div>
                <h2>{prod.item.name}</h2>
                <p>Cantidad: {prod.amount}</p>
                <button onClick={() => removeItem(prod.item.id)}>X</button>
            </div>
        </>
    )
}

export default CartItem;