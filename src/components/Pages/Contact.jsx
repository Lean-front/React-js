import React from "react";

export default function Contact() {

    return (
        <>
            <div className="ContenedorFormulario">
                <h2>Contacto</h2>
                <input type="text" name="name" placeholder="Nombre y Apellido" />
                <input type="text" name="email" placeholder="E-mail" />
                <input type="text" name="mobile" placeholder="Celular" />
                <p>Desarrolle su consulta:</p>
                <textarea placeholder="haga su consulta" cols="30" rows="10"></textarea>
                <button type="reset">Enviar</button>
            </div>
        </>
    )
}
