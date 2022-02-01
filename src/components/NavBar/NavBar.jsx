import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <ul>
                <li><Link className="LinkNavBar" to={"/"}>INICIO</Link></li> 
                <li><Link className="LinkNavBar" to={"/categoria/celulares"}>CELULARES</Link></li>
                <li><Link className="LinkNavBar" to={"/categoria/tablets"}>TABLETS</Link></li>
                <li><Link className="LinkNavBar" to={"/categoria/notebooks"}>NOTEBOOKS</Link></li>
                <li><Link className="LinkNavBar" to={"/sobre"}>SOBRE NOSOTROS</Link></li>
                <li><Link className="LinkNavBar" to={"/contacto"}>CONTACTO</Link></li>
            </ul>
        </>
    )
}