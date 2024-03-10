



let productos = [
  {id: 1, nombre: "creatina", categoria: "suplementos", stock: 2, info: "La creatina es un suplemento que sirve para aumentar la energia en tus entrenamientos, retrasar la fatiga y aumentar la masa muscular", rutaImg: "creatina star.jpg" , precio: 24000},
  {id: 2, nombre: "proteina", categoria: "suplementos", stock: 7, info: "La proteina sirve como un recuperador muscular luego del entrenamiento, restaura, recupera, aumenta la masa muscular y sirve para alcanzar los requerimientos diarios de proteina que el cuerpo nececita para el correcto funcionamiento", rutaImg: "proteina star.jpg" , precio: 22000},
  {id: 3, nombre: "aminoacidos", categoria: "suplementos", info: "Los BCAA (Aminoacidos) cumplen la funcion de complementar la alimentacion y ayudan a obtener las vitaminas, minerales y otros componentes indispensables para el organismo", rutaImg: "aminoacidos.jpg" , stock: 4, precio: 14000},
  {id: 4, nombre: "quemadores", categoria: "suplementos", stock: 1, info: "Los quemadores de grasa son un conjuntos de quimicos que causan un efecto termogenico en el cuerpo lo que produce que quememos mas calorias a lo largo del dia", rutaImg: "quemadore de grasa.jpg" , precio: 10200},
  {id: 5, nombre: "guantes deportivos", categoria: "accesorios", stock: 3, info: "Protegen tus manos y brindan un garre mas seguros para tu entrenamiento", rutaImg: "guantes deportivos.jpg" , precio: 7300},
  {id: 6, nombre: "straps", categoria: "accesorios", stock: 8, info: "Ayudan a un mejor agarre, evita que se te resbalen las mancuernas", rutaImg: "straps.jpg" , precio: 5600},
  {id: 7, nombre: "faja lumbar", categoria: "accesorios", stock: 7, info: "Proteje la zona lumbar de movimientos bruscos", rutaImg: "faja deportiva.jpg" , precio: 7000},
  {id: 8, nombre: "rodilleras", categoria: "accesorios", stock: 2, info: "Limitan el movimiento de la articulacion protegiendola de movimientos bruscos y lecibos", rutaImg: "rodilleras.jpg" , precio: 5000},
]

principal(productos)
function principal(productos) {
  articulosTienda(productos)
  filtrarProducto()
  

  let inputNombre = document.getElementById("inputNombre")
  let inputCategoria = document.getElementById("inputCategoria")

  let botonBuscar = document.getElementById("botonBuscar")
  botonBuscar.addEventListener("click", () => filtrarProducto(inputNombre.value, inputCategoria.value))

  let botonComprar = document.getElementById("comprar")
  botonComprar.addEventListener("click", finalizarCompra)
  
}

function articulosTienda(productos) {
  let  contenedor = document.getElementById("productos")
  contenedor.innerHTML = ""
  productos.forEach(producto => {
    let tarjetaprod = document.createElement("div")
    tarjetaprod.className = "producto"
    tarjetaprod.innerHTML = `
    <img src="./imagenes/${producto.rutaImg}" />
    <h2>${producto.nombre}</h2>
    <h4>${producto.precio}</h4>
    <h5>${producto.stock}</h5>
    <button id= ${producto.id}>Agregar al carrito</button> `

    contenedor.appendChild(tarjetaprod)

    let botonAgregarAlCarrito = document.getElementById(producto.id)
    botonAgregarAlCarrito.addEventListener("click", agregarAlCarrito)

    
    

    
  })
  
}

function filtrarProducto() {
  let productoFiltrado
  if (inputNombre && (!inputCategoria)) {
    productoFiltrado = productos.filter(producto => producto.nombre.includes(inputNombre.value))
    
  } else if ((!inputNombre) && inputCategoria) {
    productoFiltrado = productos.filter(producto => producto.categoria.includes(inputCategoria.value))
    console.log(productoFiltrado)

  } else if (inputNombre && inputCategoria) {
    productoFiltrado = productos.filter(producto => producto.nombre.includes(inputNombre.value) && producto.categoria.includes(inputCategoria.value))
    
  }
  
  articulosTienda(productoFiltrado)
  
}

function obtenerCarrito() {
  let carrito = []

  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
    
  }
  return carrito
  
}

function agregarAlCarrito(e) {
  let carrito = obtenerCarrito()

  let idBotonProducto = Number(e.target.id)
  let productoAgregado = productos.find(producto => producto.id === idBotonProducto)
  let productoEnCarrito = carrito.find(producto => producto.id === idBotonProducto)

  
    if (productoEnCarrito) {
      productoEnCarrito.unidades++
      productoEnCarrito.subtotal = productoEnCarrito.precio * productoEnCarrito.unidades
      
    } else {
      carrito.push({
        id: productoAgregado.id,
        nombre: productoAgregado.nombre,
        precio: productoAgregado.precio,
        unidades: 1,
        subtotal: productoAgregado.precio


      })
      
    
    
  }
      localStorage.setItem("carrito", JSON.stringify(carrito))
      carritoSeccion()
  
  
}

function carritoSeccion() {
  let carrito = obtenerCarrito()

  let contenedor = document.getElementById("carrito")
  contenedor.innerHTML = ""
  

  carrito.forEach(producto => {
    let item = document.createElement("div")
    item.innerText = producto.nombre + " " + producto.precio + " " + producto.unidades + " " + producto.subtotal
    item.innerHTML = `
    <div>${producto.nombre}</div>
    <div>${producto.precio}</div>
    <div>${producto.unidades}</div>
    <div>${producto.subtotal}</div>
    `

    contenedor.append(item)
  })
  
}

function finalizarCompra() {
  alert("Muchas gracias por su compra")
  localStorage.removeItem("carrito")
  carritoSeccion()
  
  
}

