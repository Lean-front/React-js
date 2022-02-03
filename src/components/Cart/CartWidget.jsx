import React from "react";
import { Link } from "react-router-dom";
import carrito from "../../img/carrito.png"

const CartWidget = () => {
    return (
        <>
            <div>
                <button className="BotonCarrito">
                    <Link to={"/cart"}>
                        <img className="carrito" src={carrito} alt="carrito" />
                    </Link>
                </button>
                <span className="carritoContador">0</span>
            </div>
        </>
    )
}

export default CartWidget
