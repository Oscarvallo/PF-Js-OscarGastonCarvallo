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
            <td style="padding:0">
            <button  id= restarUno><i class="bi bi-dash"></i></button>
            </td>
            <td style="padding:0;height:5px; width:5px">X${producto.cantidad} </td>
            <td style="padding:0"> 
            <button  id= sumarUno><i class="bi bi-plus-lg"></i></button>
            </td>
            <td>$${producto.cantidad * producto.precio}</td>
            <td class="text-end"><button class="btn btn-primary" onclick="eliminarProducto(${producto.id});" title="Eliminar Producto"><i class="bi bi-trash3"></i></button></td>
            </tr>`;
        }

        salida += `<tr>
        <td colspan="3">Total a Pagar</td>
        <td>$${totalPagarCarrito()}</td>
        <td>&nbsp;</td>
        </tr>`;
        salida += `</table>`;
    } else {
        salida = `<div class="alert alert-danger text-center" role="alert">No hay productos en el carrito</div>
      `
    }

    document.getElementById("productos").innerHTML = salida;
}




renderProductosCarrito();
renderBotonCarrito();