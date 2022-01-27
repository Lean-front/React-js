import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function Item({ items }) {

    function onAdd() {
        alert("El producto ha sido agregado");
    }
    return (
        <>
            <div className="ContenedorProductos">
                <h2>{items.name}</h2>
                <img className="Imagen" src={items.img} />
                <p>Cantidad disponible: {items.stock}</p>
                <p>Precio: {items.precio}</p>
                <p>Tipo: {items.categoria}</p>
                <ItemCount max={items.stock} min={items.initial} />
                <br />
                <button className="BotonAgregar" onClick={() => onAdd()}>AGREGAR</button>
                <br />
                <button className="BotonDetalle"><Link to={`/item/${items.id}` }>VER DETALLES</Link></button>
            </div>
        </>
    )
}