import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {

    const { carrito, clear, fullPrice } = useContext(cartContext);

    return (
        <>
            <div className="ContenedorCarrito">
                {carrito.length === 0 ?
                    <div>
                        <button className="BotonVerProductos"><Link className="Link" to={"/"}>Ver productos</Link></button>
                    </div>
                    :
                    <>
                    { carrito.map(e => <CartItem key={e.item.id} prod={e} />) }
                    <div>
                        <p className="CarritoTotal">Total: ${fullPrice()}</p>
                        <button className="BotonFinCompra"><Link className="Link" to={"/finalizar"}>Finalizar mi compra</Link></button>
                        <br />
                        <button className="BotonCarritoVaciar" onClick={() => clear()}>Vaciar</button>
                    </div>
                    </>
                }
        </div>
        </>
    )
}

export default Cart;