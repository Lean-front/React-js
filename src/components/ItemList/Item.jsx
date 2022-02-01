import React from "react";
import { Link } from "react-router-dom";

export default function Item({ items }) {

    return (
        <>
            <div className="ContenedorProductos">
                <h2>{items.name}</h2>
                <img className="Imagen" src={items.img} />
                <p>Cantidad disponible: {items.stock}</p>
                <p>Precio: {items.precio}</p>
                <p>Tipo: {items.categoria}</p>
                <br />                
                <button className="BotonDetalle"><Link className="Link" to={`/item/${items.id}` }>VER DETALLES</Link></button>
            </div>
        </>
    )
}

