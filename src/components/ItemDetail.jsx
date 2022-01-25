import React from "react";

export default function ItemDetail({ productId }) {

    return (
        <>
            <div>
                {(productId.id) ?
                    <>
                        <div className="ContenedorDetalle">
                            <div className="Detalle">
                                <p>{productId.name}</p>
                                <p>{productId.pictureURL}</p>
                                <p>Cantidad disponible: {productId.stock}</p>
                                <p>Precio: {productId.precio}</p>
                                <p>Tipo: {productId.categoria}</p>
                            </div>
                        </div>
                    </>
                    :
                    <>Cargando producto...</>
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