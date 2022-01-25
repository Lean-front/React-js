import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <ul>
                <li><Link to={"/"}>INICIO</Link></li>
                <li>TIENDA</li>
                <li>SOBRE NOSOTROS</li>
                <li>CONTACTO</li>
            </ul>
        </>
    )
}