// ----     S I M U L A D O R   I N T E R A C T I V O    E C O M M E R C E   



// Verifica que la oferta en los productos del array existe y aplica un descuento. 


function ofertasProductos (productos) {
    productos.forEach((elemento) => {
        if (elemento.ofertas) {
            descuento = (15 * elemento.precio) / 100
            elemento.precio = elemento.precio - descuento;
        }     
});
   return productos;
}

ofertasProductos(productos)



// Utiliza el metodo sort para ordenar de manera descendente los productos del array por su ID 

const productosOrdenadosDescendentes = [...productos].sort((a, b) => {
    if (a.id > b.id) {
        return -1;
    } 
    if (a.id < b.id) {
        return 1;
    }

    return 0;
})

// console.log(productosOrdenadosDescendentes)



// El usuario puede filtrar los productos del array que se encuentren en oferta.

function verOfertas(){
   let confirmacionVerOfertas = confirm ("¿Desea ver las ofertas de la tienda?")
    if (confirmacionVerOfertas){
        const filtrarOfertas = productos.filter((p) => {
        return p.ofertas
    })
    console.log(filtrarOfertas)
    } else {
       console.log(productos) 
    }
}

verOfertas()
    


// Permite al usuario buscar un producto determinado en el array utilizando el metodo find. 

function busquedaProducto(productos) {
    let ingresoProducto = prompt ("Ingrese el producto que desea buscar:").toUpperCase();
    const productoIngresado = productos.find(( elemento) =>{
    return elemento.nombre === ingresoProducto
    })
    return productoIngresado
}

console.log (busquedaProducto(productos))
