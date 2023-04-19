function renderProductosCarrito() {
    const productos = cargarProductosCarrito(); //? productos
    let salida = "";

    if (totalProductosCarrito() > 0) {
        salida += `<table class="table">
        <tr>
        <td colspan="5" class="text-end"><button class="btn btn-primary" onclick="vaciarCarrito()">Vaciar Carrito</button></td>
        <tr>`;

        for (producto of productos) {
            salida += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="60" /></td>
            <td>${producto.nombre}</td>
           
            <td >X${producto.cantidad} </td>
            
            <td>$${producto.cantidad * producto.precio}</td>
            <td class="text-end"><button class="btn btn-primary" onclick="eliminarProducto(${producto.id});" title="Eliminar Producto"><i class="bi bi-trash3"></i></button></td>
          
            </tr>
            `
            ;
        }
       

        salida += `<tr>
        <td colspan="3">Total a Pagar</td>
        <td>$${totalPagarCarrito()}</td>
        <td>&nbsp;</td>
        </tr>`;
    
        salida += `</table>`;
        salida += `<table class="table">
        <tr>
        <td colspan="5" class="text-end"><button id="comprar" class="btn btn-primary">Comprar</button></td>
        <tr>`;
    } else {
        salida = `<div class="alert alert-danger text-center" role="alert">No hay productos en el carrito</div>
      `
    }

    document.getElementById("productos").innerHTML = salida;
  
  
}



renderProductosCarrito();
renderBotonCarrito();

const btn = document.querySelector("#comprar");
const popup = document.querySelector("#popup_mensaje");

btn.addEventListener("click", () => {
    popup.classList.add("alert", "alert-danger");
    popup.innerText = "Se esta procesando tu pedido..";

    setTimeout(() => {
        popup.classList.remove("alert-danger");
        popup.classList.add("alert-success");
        popup.innerText = "Tu pedido fue procesado con éxito. ";
        
    }, 2000);
});
