import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../Firebase/firebase"
import Item from "./Item";

export default function ItemListContainer() {

    const { categoriaId } = useParams();

    const [arrayProductos, setArrayProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items")
        itemCollection.get()
            .then((querySnapShot) => {
                if (categoriaId > '') {
                    let prod = querySnapShot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    });
                    let categoriaP = prod.filter((items => items.categoria === categoriaId));
                    setArrayProductos(categoriaP);
                }
                else {
                    setArrayProductos(querySnapShot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    }))
                }
            })
    }, [categoriaId])

    return (
        <>
            {arrayProductos.map(items => <Item items={items} />)}
        </>
    );
}