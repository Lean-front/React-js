import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

export default function ItemListContainer() {

    const { categoriaId } = useParams();

    const [arrayProductos, setArrayProductos] = useState([]);

     const listaProductos = new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve([
                 { id:"01", name: "Celular Samsung A32", stock: 30, initial: 0, precio:"50000", categoria: "celulares", img: "https://http2.mlstatic.com/D_NQ_NP_922219-MLA48428094384_122021-O.webp"},
                 { id:"02", name: "Apple Iphone 11", stock: 25, initial: 0, precio:"250000", categoria: "celulares", img: "https://http2.mlstatic.com/D_NQ_NP_796892-MLA46114829828_052021-O.webp"},
                 { id:"03", name: "Tablet Samsung Galaxy Tab A7", stock: 40, initial: 0, precio:"27000", categoria: "tablets", img: "https://http2.mlstatic.com/D_NQ_NP_765874-MLA47146197629_082021-O.webp"},
                 { id:"04", name: "Tablet Lenovo Tab k10", stock: 60, initial: 0, precio:"45000", categoria: "tablets", img: "https://http2.mlstatic.com/D_NQ_NP_972580-MLA48600236953_122021-O.webp"},
                 { id:"05", name: "Notebook HP", stock: 30, initial: 0, precio:"55000", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_717043-MLA48644116183_122021-O.webp"},
                 { id:"06", name: "Notebook Exo Smart", stock: 50, initial: 0, precio:"75000", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_853557-MLA48644020952_122021-O.webp"},
                 { id:"07", name: "Notebook Lenovo IdeaPad", stock: 30, initial: 0, precio:"50000", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_710064-MLA42694520583_072020-O.webp"},
            ])
         }, 2000)
    })

    useEffect(() => {
        listaProductos.then(res =>{
            if (categoriaId > ''){
            let filtroProducto = res.filter(items => items.categoria === categoriaId);
            setArrayProductos(filtroProducto);
            }else{
            setArrayProductos(res)
            }
        });
    },[categoriaId]);

    return (
        <>
            {arrayProductos.map(items => <Item items={items} />)}
        </>
    );
}

