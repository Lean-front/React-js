import React from "react";
import { NavLink } from "react-router-dom";
import tecnologo from "../../img/tecnologo.png"

export default function NavBar() {

    return (
        <>
            <img className="TiendaLogo" src={tecnologo} alt="tecnoshop logo" />
            <ul>
                <li><NavLink exact to={"/"} className="LinkNavBar" activeClassName="pageActivo">INICIO</NavLink></li>
                <li><NavLink to={"/categoria/celulares"} className="LinkNavBar" activeClassName="pageActivo">CELULARES</NavLink></li>
                <li><NavLink to={"/categoria/tablets"} className="LinkNavBar" activeClassName="pageActivo">TABLETS</NavLink></li>
                <li><NavLink to={"/categoria/notebooks"} className="LinkNavBar" activeClassName="pageActivo">NOTEBOOKS</NavLink></li>
                <li><NavLink to={"/sobre"} className="LinkNavBar" activeClassName="pageActivo">SOBRE NOSOTROS</NavLink></li>
                <li><NavLink to={"/contacto"} className="LinkNavBar" activeClassName="pageActivo">CONTACTO</NavLink></li>
            </ul>
        </>
    )
}