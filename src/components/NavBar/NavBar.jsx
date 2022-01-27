import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <ul>
                <li><Link to={"/"}>INICIO</Link></li>
                <li><Link to={"/categoria/celulares"}>CELULARES</Link></li>
                <li><Link to={"/categoria/tablets"}>TABLETS</Link></li>
                <li><Link to={"/categoria/notebooks"}>NOTEBOOKS</Link></li>
                <li><Link to={"/sobre"}>SOBRE NOSOTROS</Link></li>
                <li><Link to={"/contacto"}>CONTACTO</Link></li>
            </ul>
        </>
    )
}