const productos = [
    {id:1, nombre:"Agua Mineral Bonacqua", descripcion:"Agua mineral Sin Gas", precio:700, imagen:"/img/agua-mineral-bonaqcua.jpg", categoria:"aguas"},
    {id:2, nombre:"Arroz Gallo", descripcion:"El arroz que no se pasa ", precio:800, imagen:"/img/arroz-gallo-Oro.jpg", categoria:"Arroz"},
    {id:3, nombre:"Mostachol Matarazo", descripcion:"Pasta Mostachol para todos los dias", precio:900, imagen:"/img/fideos-matarazo-mostachol.jpg", categoria:"Fideos"},
    {id:4, nombre:"Coca Cola", descripcion:"Gaseosa de 1.5l", precio:1000, imagen:"/img/coca-cola-1.5l.jpg", categoria:"Gaseosa"},
    {id:5, nombre:"Galletita Pepas", descripcion:"Echa con el mejor membrillo", precio:500, imagen:"/img/galletitas-Pepas.jpg", categoria:"Galletitas"},
    {id:6, nombre:"Leche La serenisima", descripcion:"Leche la serenisima.", precio:600, imagen:"/img/leche-la-serenisima.jpg", categoria:"Lacteos"},
    {id:7, nombre:"Salsa de tomate Knor",  descripcion:"Salsa de tomate.", precio:400, imagen:"/img/salsa-de-tomate-knor.jpg", categoria:"Salsas de tomate"},
   
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);