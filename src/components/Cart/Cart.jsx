import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {

    const { carrito, clear } = useContext(cartContext);

    return (
        <>
            <div className="ContenedorCarrito">
                {carrito.length === 0 ?
                    <div>
                        <button><Link to={"/"}>Ver productos</Link></button>
                    </div>
                    :
                    <div>
                        {carrito.map(e => <CartItem key={e.item.id} prod={e} />)}
                        <button onClick={() => clear()}>Vaciar</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart;