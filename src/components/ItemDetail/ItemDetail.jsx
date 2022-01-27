import React from "react";
import ItemCount from "../ItemList/ItemCount";

export default function ItemDetail({ productId }) {

    function onAdd() {
        alert("El producto ha sido agregado");
    }

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
                                <ItemCount max={productId.stock} min={productId.initial} />
                                <br />
                                <button className="BotonAgregar" onClick={() => onAdd()}>AGREGAR</button>
                            </div>
                        </div>
                    </>
                    :
                    <><img className="Carga" src="https://image.flaticon.com/icons/png/512/101/101791.png"/></>
                }
            </div>
        </>
    );
}

/* <div className="ContenedorDetalles">
                <p>{items.name}</p>
                <p>Cantidad disponible: {items.stock}</p>
                <p>Precio: {items.precio}</p>
                <p>Precio: {items.categoria}</p>
            </div> */