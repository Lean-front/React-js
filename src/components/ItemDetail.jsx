import React from "react";

export default function ItemDetail({ productoId }) {

    return (
        <>
            <div>
                {(productoId.id) ?
                    <>
                        <div className="ContenedorDetalle">
                            <p>{productoId.name}</p>
                            <p>{productoId.pictureURL}</p>
                            <p>Cantidad disponible: {productoId.stock}</p>
                            <p>Precio: {productoId.precio}</p>
                            <p>Tipo: {productoId.categoria}</p>
                        </div>
                    </>
                    :
                    <>Cargando...</>
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