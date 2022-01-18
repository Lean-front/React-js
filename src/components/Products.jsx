import React from "react";
import ItemCount from "./ItemCount";

export default function Products({ items }) {

    function onAdd() {
        alert("El producto ha sido agregado");
    }
    return (
        <>
            <div className="ContenedorProductos">
                <p>{items.name}</p>
                <p>Cantidad disponible: {items.stock}</p>
                <ItemCount max={items.stock} min={items.initial} />
                <br />
                <button className="BotonAgregar" onClick={() => onAdd()}>AGREGAR</button>
            </div>
        </>
    )
}