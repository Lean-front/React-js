import React, { useContext, useRef, useState } from "react";
import firebase from "firebase";
import { getFirestore } from "../../Firebase/firebase";
import { cartContext } from "../../Context/CartProvider";
import { Link } from "react-router-dom";

export default function Form() {

    const [ordenID, setOrdenID] = useState("");
    const { fullPrice, carrito, clear } = useContext(cartContext);

    const name = useRef();
    const address = useRef();
    const city = useRef();
    const state = useRef();
    const email = useRef();
    const mobile = useRef();

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const getOrder = {
            buyer: {
                name: name.current.value,
                address: address.current.value,
                city: city.current.value,
                state: state.current.value,
                email: email.current.value,
                mobile: mobile.current.value,
            },
            items: carrito,
            total: fullPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        orders.add(getOrder)
            .then(({ id }) => {
                console.log("Orden N°" + id);
                setOrdenID(id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>

            <div className="ContenedorFormulario">
                <h2>Complete con su información</h2>
                <input type="text" name="name" ref={name} placeholder="Nombre y Apellido" />
                <input type="text" name="address" ref={address} placeholder="Domicilio" />
                <div className="ContenedorFormulario--citys"> 
                    <input type="text" name="city" ref={city} placeholder="Ciudad" />
                    <input type="text" name="state" ref={state} placeholder="Provincia" />
                </div>
                <input type="text" name="email" ref={email} placeholder="E-mail" />
                <input type="text" name="mobile" ref={mobile} placeholder="Celular" />
                <button onClick={() => handleClick()}>Finalizar compra</button>
            </div>
            {ordenID && (
                <>
                    <div className="ContenedorFormularioFin">
                        <p className="CompraRealizada">Compra realizada, su orden es: {ordenID}</p>
                        <button className="BotonVerProductos" onClick={clear}><Link className="Link" to={"/"}>volver al inicio</Link></button>
                    </div>
                </>
            )}
        </>
    )
}