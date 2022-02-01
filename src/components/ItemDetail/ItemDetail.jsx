import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemList/ItemCount";

export default function ItemDetail({ productId }) {

    const [count, setCount] = useState(true);

    function onAdd(amount) {
        alert("Has agregado:"+ " " + productId.name + " " + "cantidad:" + amount);
        setCount(false);
    };

    return (
        <>
            <div>
                {(productId.id) ?
                    <>
                        <div className="ContenedorDetalle">
                            <div className="Detalle">
                                <h2>{productId.name}</h2>
                                <img className="ImagenDetalle" src={productId.img} />
                                <p>Cantidad disponible: {productId.stock}</p>
                                <p>Precio: {productId.precio}</p>
                                <p>Tipo: {productId.categoria}</p>
                                {
                                    (count) ?
                                    <ItemCount max={productId.stock} min={productId.initial} onAdd={onAdd}/>
                                    :
                                    <button className="BotonVerCarrito"><Link className="Link"to={"/cart"}>Ver carrito</Link></button>
                                }
                            </div>
                        </div>
                    </>
                    :
                    <><img className="Carga" src="https://image.flaticon.com/icons/png/512/101/101791.png" /></>
                }
            </div>
        </>
    );
}

// <ItemCount max={productId.stock} min={productId.initial} onAdd={onAdd}/>
/* <div className="ContenedorDetalles">
                <p>{items.name}</p>
                <p>Cantidad disponible: {items.stock}</p>
                <p>Precio: {items.precio}</p>
                <p>Precio: {items.categoria}</p>
            </div> */