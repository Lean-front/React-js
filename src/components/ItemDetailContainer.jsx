import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const { itemId } = useParams();

    const [productId, setProductId] = useState({});

    useEffect(() => {
        setTimeout(() => {

            let ListProducts = [
                { id: "01", name: "producto1", stock: 30, initial: 0, precio: "30000", categoria: "aDefinir1", pictureURL: "url" },
                { id: "02", name: "producto2", stock: 25, initial: 0, precio: "25000", categoria: "aDefinir1", pictureURL: "url" },
                { id: "03", name: "producto3", stock: 40, initial: 0, precio: "27000", categoria: "aDefinir2", pictureURL: "url" },
                { id: "04", name: "producto4", stock: 60, initial: 0, precio: "50000", categoria: "aDefinir2", pictureURL: "url" },
                { id: "05", name: "producto5", stock: 10, initial: 0, precio: "10000", categoria: "aDefinir3", pictureURL: "url" },
                { id: "06", name: "producto6", stock: 50, initial: 0, precio: "13000", categoria: "aDefinir3", pictureURL: "url" },
                { id: "07", name: "producto7", stock: 10, initial: 0, precio: "66000", categoria: "aDefinir3", pictureURL: "url" },]

            ListProducts = ListProducts.filter(item => item.id == itemId);

            let Product = ListProducts[0];

            setProductId(Product);

        }, 2000)
    },[itemId])

    return (
        <>
            <ItemDetail productId={productId}/>
        </>
    );
}
