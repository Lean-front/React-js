import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../Firebase/firebase"
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [productId, setProductId] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const miItem = itemCollection.doc(itemId);
        miItem.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('no existe ese documento');
                }
                setProductId({ id: doc.id, ...doc.data() });
            })
            .catch((err) => {
                console.log(err);
            })
    }, [itemId])

    return (
        <>
            <ItemDetail productId={productId} />
        </>
    );
}

/*
export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [productId, setProductId] = useState({});

    useEffect(() => {
        setTimeout(() => {

            let ListProducts = [
                { id: "01", name: "Celular Samsung A32", stock: 30, initial: 1, precio: "50000", categoria: "celulares", img: "https://http2.mlstatic.com/D_NQ_NP_922219-MLA48428094384_122021-O.webp" },
                { id: "02", name: "Apple Iphone 11", stock: 25, initial: 1, precio: "250000", categoria: "celulares", img: "https://http2.mlstatic.com/D_NQ_NP_796892-MLA46114829828_052021-O.webp" },
                { id: "03", name: "Tablet Samsung Galaxy Tab A7", stock: 40, initial: 1, precio: "27000", categoria: "tablets", img: "https://http2.mlstatic.com/D_NQ_NP_765874-MLA47146197629_082021-O.webp" },
                { id: "04", name: "Tablet Lenovo Tab k10", stock: 60, initial: 1, precio: "45000", categoria: "tablets", img: "https://http2.mlstatic.com/D_NQ_NP_972580-MLA48600236953_122021-O.webp" },
                { id: "05", name: "Notebook HP", stock: 30, initial: 1, precio: "55000", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_717043-MLA48644116183_122021-O.webp" },
                { id: "06", name: "Notebook Exo Smart", stock: 50, initial: 1, precio: "75000", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_853557-MLA48644020952_122021-O.webp" },
                { id: "07", name: "Notebook Lenovo IdeaPad", stock: 30, initial: 1, precio: "50000", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_710064-MLA42694520583_072020-O.webp" },
                { id: "08", name: "Celular Xiaomi 9A", stock: 20, initial:1, precio: "28000", categoria: "celulares", img: "https://http2.mlstatic.com/D_NQ_NP_981867-MLA48770610134_012022-O.webp" },
                { id: "09", name: "Tablet Philco TP7A6", stock: 50, initial: 1, precio: "11000", categoria: "tablets", img: "https://http2.mlstatic.com/D_NQ_NP_845915-MLA47848867480_102021-O.webp" },
                { id: "10", name: "Notebook Dell Inspiron 3505", stock: 60, initial: 1, precio: "135000", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_790874-MLA44939295335_022021-O.webp" },
            ]

            ListProducts = ListProducts.filter(item => item.id === itemId);

            let Product = ListProducts[0];

            setProductId(Product);

        }, 2000)
    }, [itemId])

    return (
        <>
            <ItemDetail productId={productId}/>
        </>
    );
}
*/