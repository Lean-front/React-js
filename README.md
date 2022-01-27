Leandro Benavides - Primera entrega del proyecto CoderHouse al 27/01/22

Tienda e-commerce computación 

La tienda actualmente posee 3 categorias de productos = Celulares, Tablets y Notebooks

Composición: 

1) NavBar [INICIO, CELULARES, TABLETS, NOTEBOOKS, SOBRE NOSOTROS, CONTACTO, CARRITO]

1-a: El botón INICIO carga todos los productos de la tienda
1-b: Los botones CELULARES, TABLETS Y NOTEBOOKS filtran el contenido de la página colocando solamente los productos seleccionados según su categoría

2) ItemList [Item, ItemListContainer]

Item: contiene la composición con la cual se distribuiran los datos de un producto
ItemListContainer: contiene el array de productos y la lógica para filtrarlos segun su categoría

3) ItemDetail [ItemDetail, ItemDetailContainer]

ItemDetail: contiene la composición con la cual se distribuiran los datos completos de un producto en particular
ItemDetailContainer: contiene el array de productos y la lógica para ver el detalle completo de un producto seleccionado