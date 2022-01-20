import React, { useState } from "react";

export default function ItemCount({ max, min }) {

    const [amount, setAmount] = useState(0);

    function sumar() {
        if (amount < max) setAmount(amount + 1)
    }
    function resta() {
        if (amount > min) setAmount(amount - 1)
    }
    return (
        <>
            <div className="ContenedorBotonesNegPos">
                <button className="BotonNegativo" onClick={resta}>-</button>
                <p className="Cantidad">{amount}</p>
                <button className="BotonPositivo" onClick={sumar}>+</button>
            </div>
        </>
    )
}