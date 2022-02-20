import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartProvider";
import carrito from "../../img/carrito.png"

const CartWidget = () => {

    const { amountInCart } = useContext(cartContext)

    return (
        <>
            <div>
                <Link to={"/cart"}><img className="carrito" src={carrito} alt="carrito" /> </Link>
                <span className="carritoContador">{amountInCart()}</span>
            </div>
        </>
    )
}

export default CartWidget
