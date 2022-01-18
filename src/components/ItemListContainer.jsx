import React, { useState } from "react";
import Products from "./Products";

export default function ItemListContainer() {
    
    const [arrayProductos, setArrayProductos] = useState([
        { name: "producto1", stock: 10, initial: 0 },
        { name: "producto2", stock: 15, initial: 0 },
        { name: "producto3", stock: 20, initial: 0 },
    ]);

    return (
        <>
            {
                arrayProductos.map(items => <Products items={items} />)
            }
        </>
    );
}
