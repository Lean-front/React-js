import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartProvider";
import ItemCount from "../ItemList/ItemCount";


export default function ItemDetail({ productId }) {

    const { addItem } = useContext(cartContext)
    const [count, setCount] = useState(true);

    function onAdd(amount) {
        alert("Has agregado:"+ productId.name + "cantidad:" + amount);
        addItem(productId, amount);
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
                                <img className="ImagenDetalle" src={productId.img} alt="producto"/>
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
                    <><img className="Carga" src="https://image.flaticon.com/icons/png/512/101/101791.png" alt="cargando" /></>
                }
            </div>
        </>
    );
}



// { productId, onAdd, added }


// <ItemCount max={productId.stock} min={productId.initial} onAdd={onAdd}/>
/* <div>
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
                                    (added) ?
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
             */