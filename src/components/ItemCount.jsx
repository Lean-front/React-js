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
            <button className="BotonNegativo" onClick={resta}>-</button>
            {amount}
            <button className="BotonPositivo" onClick={sumar}>+</button>
        </>
    )
}