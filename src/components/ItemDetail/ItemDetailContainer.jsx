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
                    return <p>NO EXISTE EL PRODUCTO</p>
                }
                setProductId({ id: doc.id, ...doc.data() });
            })
    }, [itemId])

    return (
        <>
            <ItemDetail productId={productId} />
        </>
    );
}
