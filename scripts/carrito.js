//JSON

const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-el-carrito"));
console.log(productosEnCarrito);

//const de elementos para llamar

const carritoVacio = document.getElementById("carrito-vacio");
const carritoProductos = document.getElementById("carrito-productos");
const carritoAcciones = document.getElementById("carrito-acciones");
const carritoComprado = document.getElementById("carrito-comprado");
 
//DOM

 if (productosEnCarrito) {
    
    carritoVacio.classList.add("disable");
    carritoProductos.classList.remove("disable");
    carritoAcciones.classList.remove("disable");

    carritoProductos.innerHTML= "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");

        div.innerHTML = `
        <img class="carrito-img" src="${producto.imagen}" alt="${producto.titulo}">
           
            
        <div class="carrito-titulo">
         <h3>Producto</h3>
         <p>${producto.titulo}</p>
        </div>

        <div class="carrito-precio">
            <h3>Precio</h3>
            <p>${producto.precio}</p>
        </div>

        <div class="carrito-cantidad">
            <h3>Cantidad</h3>
            <p>"${producto.cantidad}"</p>
        </div>

        <div class="carrito-subtotal">
            <h3>Subtotal</h3>
            <p>${producto.precio * producto.cantidad}</p>
        </div>

        <button class="carrito-eliminar">Eliminar</button>
        `;
        
     carritoProductos.append(div);
    });

 } else {
    carritoComprado.classList.add("disable");
 }