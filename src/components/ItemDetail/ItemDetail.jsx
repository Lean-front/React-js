import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartProvider";
import ItemCount from "../ItemList/ItemCount";


export default function ItemDetail({ productId }) {

    const { addItem } = useContext(cartContext)
    const [count, setCount] = useState(true);

    function onAdd(amount) {
        addItem(productId, amount);
        setCount(false);
    };

    return (
        <>
            <div className="ContenedorItemDetail">
                {(productId.id) ?
                    <>
                        <div className="ContenedorDetalle">
                            <div>
                                <img className="ImagenDetalle" src={productId.img} alt="producto" />
                            </div>
                            <div className="ItemCountDetalle">
                                <h2>{productId.name}</h2>
                                <h3>${productId.precio}</h3>
                                <h4>Tipo: {productId.categoria}</h4>
                                <h5>Color: {productId.color}</h5>
                                <h5>Descripción: {productId.descr}</h5>
                                <h6>({productId.stock} disponibles)</h6>
                                <div>
                                    {
                                        (count) ?
                                            <ItemCount max={productId.stock} min={1} onAdd={onAdd} />
                                            :
                                            <button className="BotonVerCarrito"><Link className="Link" to={"/cart"}>Ver carrito</Link></button>
                                    }
                                </div>
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
