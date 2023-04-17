const buscarContenido = async () => {
    let texto_busqueda= document.getElementById("texto_busqueda").value
    console.log(texto_busqueda)
    const respuesta = await fetch("https://fakestoreapi.com/products"+ texto_busqueda)
    .then(res=>res.json())
    .then(json=>console.log(json))

}
document.getElementbyId("boton_buscar").addEventListener("click", buscarContenido);