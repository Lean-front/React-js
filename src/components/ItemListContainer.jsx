import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemListContainer() {

    const [arrayProductos, setArrayProductos] = useState([]);

    const listaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id:"1", name: "producto1", stock: 30, initial: 0, precio:"30000", pictureURL: "url"},
                { id:"2", name: "producto2", stock: 25, initial: 0, precio:"25000", pictureURL: "url"},
                { id:"3", name: "producto3", stock: 40, initial: 0, precio:"27000", pictureURL: "url"},
            ])
        }, 2000)
    })

    useEffect(()=>{
        listaProductos
        .then(res => {setArrayProductos(res)})
    })

    return (
        <>
           {arrayProductos.map(items => <Item items={items} />)}
        </>
    );
}
