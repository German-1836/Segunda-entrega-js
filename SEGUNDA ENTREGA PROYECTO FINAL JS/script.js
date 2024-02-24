alert(
  "Te doy la bienvenida a la tienda de Suplementos y Accesorios deportivos\n-GD Deportes-"
);

let nombre = prompt("Ingrese su nombre");
alert("Bienvenido " + nombre);

let mensaje =
  "Ingrese una opcion \n1- Todos nuestros productos\n2- Filtrar\n3- Comprar\n0- SALIR ";

let productos = [
  {id: 1, nombre: "CREATINA", categoria: "SUPLEMENTOS", stock: 2, info: "La creatina es un suplemento que sirve para aumentar la energia en tus entrenamientos, retrasar la fatiga y aumentar la masa muscular", precio: 24000},
  {id: 2, nombre: "PROTEINA", categoria: "SUPLEMENTOS", stock: 7, info: "La proteina sirve como un recuperador muscular luego del entrenamiento, restaura, recupera, aumenta la masa muscular y sirve para alcanzar los requerimientos diarios de proteina que el cuerpo nececita para el correcto funcionamiento", precio: 22000},
  {id: 3, nombre: "BCAA (Aminoacidos)", categoria: "SUPLEMENTOS", info: "Los BCAA (Aminoacidos) cumplen la funcion de complementar la alimentacion y ayudan a obtener las vitaminas, minerales y otros componentes indispensables para el organismo", stock: 4, precio: 14000},
  {id: 4, nombre: "QUEMADORES", categoria: "SUPLEMENTOS", stock: 1, info: "Los quemadores de grasa son un conjuntos de quimicos que causan un efecto termogenico en el cuerpo lo que produce que quememos mas calorias a lo largo del dia", precio: 10200},
  {id: 5, nombre: "GUANTES DEPORTIVOS", categoria: "ACCESORIOS", stock: 3, info: "Protegen tus manos y brindan un garre mas seguros para tu entrenamiento", precio: 7300},
  {id: 6, nombre: "STRAPS", categoria: "ACCESORIOS", stock: 8, info: "Ayudan a un mejor agarre, evita que se te resbalen las mancuernas", precio: 5600},
  {id: 7, nombre: "FAJA LUMBAR", categoria: "ACCESORIOS", stock: 7, info: "Proteje la zona lumbar de movimientos bruscos", precio: 7000},
  {id: 8, nombre: "RODILLERAS", categoria: "ACCESORIOS", stock: 2, info: "Limitan el movimiento de la articulacion protegiendola de movimientos bruscos y lecibos", precio: 5000},
];

function comprar() {
  let deseaComprar = prompt(
    "¿Desea adquirir algunos de nuestros productos?\n1- Si\n2- No");
  if (deseaComprar === "1") {
    alert("Dirijase a la opcion comprar para acceder a su producto");
  } else {
    alert("Volviendo al menu principal...");
  }
}

do {
  opcion = Number(prompt(mensaje));

  if (opcion === 1) {
    for (const producto of productos) {
      alert("Id: " + producto.id + "\n" + "Nombre: " + producto.nombre + "\n" + "Categoria: " + producto.categoria + "\n" + "Info: " + producto.info + "\n" + "Stock: " + producto.stock + "\n" + "Precio: " + producto.precio);
    }

    comprar();

  }
  if (opcion === 2) {
    let formaDeBusqueda = prompt("Ingrese forma de busqueda\nA- Por categoria\nB- Por nombre").toUpperCase();

    if (formaDeBusqueda === "A") {

      let categoriaAFiltrar = prompt("Ingrese categoria\n- SUPLEMENTOS\n- ACCESORIOS").toUpperCase();

      let productosFiltrado = productos.filter((producto) => producto.categoria === categoriaAFiltrar);

      for (const producto of productosFiltrado)
        alert("id: " + producto.id + "\n" + producto.nombre + "\n" + "Categoria: " + producto.categoria + "\n" + "Info: " + producto.info + "\n" + "Stock: " + producto.stock + "\n" + "Precio: " + producto.precio);
    }

    if (formaDeBusqueda === "B") {
      let productoABuscar = prompt("Ingrese nombre del producto").toUpperCase();
      let productoBuscado = productos.find(
        (producto) => producto.nombre === productoABuscar);

      if (productoBuscado) {
        alert("El producto " + productoABuscar + " se encuentra disponible en la tienda");
      } else {

        alert("El producto " + productoABuscar + " no se encontro en la tienda");
        alert("Volviendo al menu principal");
      }
    }
  }

  if (opcion === 3) {
    let comprarProducto = prompt(
      "Ingrese el nombre del producto que desea comprar").toUpperCase();

    let productoComprado = productos.find((producto) => producto.nombre === comprarProducto
    );

    if (productoComprado) {
      alert("El producto " + productoComprado.nombre + " fue agregado al carrito");
      alert("Volviendo al menu principal...");

    } else {
      alert("El producto solicitado no se encuentra en nuestra tienda");
    }
  }

  if (opcion < 0 || opcion > 3) {
    alert("La opcion ingresada es incorrecta, intente nuevamente");
  }
} while (opcion != 0) {
  alert("Gracias por visitar nuestra web");
}
