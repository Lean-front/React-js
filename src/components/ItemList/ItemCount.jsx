import React, { useState } from "react";

export default function ItemCount({ max, min, onAdd }) {

    const [amount, setAmount] = useState(1);

    function sumar() {
        if (amount < max) setAmount(amount + 1)
    }
    function resta() {
        if (amount > min) setAmount(amount - 1)
    }

    return (
        <>
            <div className="ContenedorBotonesNegPos">
                <div>
                    <button className="BotonNegativo" onClick={resta}>-</button>
                    <p className="Cantidad">{amount}</p>
                    <button className="BotonPositivo" onClick={sumar}>+</button>
                </div>
                <button className="BotonAgregar" onClick={() => onAdd(amount)}>AGREGAR</button>
            </div>
        </>
    )
}