//Clases:

class Pantalon {
  constructor(id, cantidad, type, size, color, price, image, inCart) {
    (this.id = id),
      (this.cantidad = cantidad),
      (this.type = type),
      (this.size = size),
      (this.color = color),
      (this.price = price),
      (this.image = image),
      (this.inCart = inCart);
  }
  mostrar() {
    console.log(
      `Esta prenda es un/a ${this.type}, su talle es ${this.size}, es de color ${this.color} y cuesta $${this.price}.`
    );
  }
  mostrarPrenda() {
    console.log(`${this.type} 
        Talle ${this.size}
        Color ${this.color}
        Precio ${this.price}`);
  }
}

class Remera {
  constructor(id, cantidad, type, size, color, price, image, inCart) {
    (this.id = id),
      (this.cantidad = cantidad),
      (this.type = type),
      (this.size = size),
      (this.color = color),
      (this.price = price),
      (this.image = image),
      (this.inCart = inCart);
  }
  mostrar() {
    console.log(
      `Esta prenda es un/a ${this.type}, su talle es ${this.size}, es de color ${this.color} y cuesta $${this.price}.`
    );
  }
  mostrarPrenda() {
    console.log(`${this.type} 
        Talle ${this.size}
        Color ${this.color}
        Precio ${this.price}`);
  }
}

class Vestido {
  constructor(id, cantidad, type, size, color, price, image, inCart) {
    (this.id = id),
      (this.cantidad = cantidad),
      (this.type = type),
      (this.size = size),
      (this.color = color),
      (this.price = price),
      (this.image = image),
      (this.inCart = inCart);
  }
  mostrar() {
    console.log(
      `Esta prenda es un/a ${this.type}, su talle es ${this.size}, es de color ${this.color} y cuesta $${this.price}.`
    );
  }
  mostrarPrenda() {
    console.log(`${this.type} 
        Talle ${this.size}
        Color ${this.color}
        Precio ${this.price}`);
  }
}

class Campera {
  constructor(id, cantidad, type, size, color, price, image, inCart) {
    (this.id = id),
      (this.cantidad = cantidad),
      (this.type = type),
      (this.size = size),
      (this.color = color),
      (this.price = price),
      (this.image = image),
      (this.inCart = inCart);
  }
  mostrar() {
    console.log(
      `Esta prenda es un/a ${this.type}, su talle es ${this.size}, es de color ${this.color} y cuesta $${this.price}.`
    );
  }
  mostrarPrenda() {
    console.log(`${this.type} 
        Talle ${this.size}
        Color ${this.color}
        Precio ${this.price}`);
  }
}

const search = document.getElementById("search");
const form = document.getElementById("form");

// Variables, arrays y objetos:
let listProducts;

const getproducts = () => {
  fetch("./ropa.JSON")
    .then((res) => res.json())
    .then((data) => {
      listProducts = data;
      catalogoTodo(data);
    });
};
getproducts();

// const pantalon1 = new Pantalon(1,0,"Pantalon de bengalina con bolsillos atras", "L", "Marron", 2500, "./Assets/pantalonBengalina.jpg", 0);
// const pantalon2 = new Pantalon(2,0,"Pantalon de Jean", "Xs", "Verde", 3000, "./Assets/pantalonJean.jpg", 0);
// const pantalon3 = new Pantalon(3,0,"Pantalon Palazo", "Xl", "Azul", 5000, "./Assets/pantalonPalazzo.jpeg", 0);
// const pantalon4 = new Pantalon(4,0,"Pantalon de Jean Mom", "M", "Gris", 3500, "./Assets/pantalonMom.jpeg", 0);

// const remera1 = new Remera (5,0,"Remera de Algodon manga corta", "L", "Amarillo", 2000, "./Assets/remeraAmarilla.jpg", 0);
// const remera2 = new Remera (6,0,"Remera de Algodon manga larga", "S", "Azul Marino", 2300, "./Assets/remeraAzulMarino.jpg", 0);
// const remera3 = new Remera (7,0,"Remera de Poliester cuello en V", "XXL", "Azul", 3000, "./Assets/remeraPoliester.jpg", 0);
// const remera4 = new Remera (8,0,"Remera de Algodon cuello de tortuga", "M", "Gris", 3200, "./Assets/remeraTortuga.jpg", 0);

// const vestido1 = new Vestido (9,0,"Vestido de Algodon manga corta", "L", "Amarillo", 2700, "./Assets/vestidoAmarillo.jpg", 0);
// const vestido2 = new Vestido (10,0,"Vestido de Morley largo", "S", "Fucsia", 2900, "./Assets/vestidoFucsia.jpg", 0);
// const vestido3 = new Vestido (11,0,"Vestido de Algodon rustico", "XXL", "Azul", 3000, "./Assets/vestidoAzul.jpg", 0);
// const vestido4 = new Vestido (12,0,"Vestido de Jean corto", "M", "Gris", 3500, "./Assets/vestidoJean.jpg", 0);

// const campera1 = new Campera (13,0,"Campera de Algodon rustica", "L", "Amarillo", 5000, "./Assets/camperaAmarilla.jpg", 0);
// const campera2 = new Campera (14,0,"Campera de Acetato manga larga", "S", "Lila", 4500, "./Assets/camperaLila.jpg", 0);
// const campera3 = new Campera (15,0,"Campera de Cuero", "XXL", "Negro", 8000, "./Assets/camperaCuero.jpg", 0);
// const campera4 = new Campera (16,0,"Campera de Algodon cuello redondo", "M", "Gris", 3900, "./Assets/camperaGris.jpg", 0);

// let pantalones= []
// pantalones.push(pantalon1, pantalon2, pantalon3, pantalon4)

// let remeras= []
// remeras.push(remera1 , remera2, remera3, remera4)

// let vestidos= []
// vestidos.push(vestido1 , vestido2, vestido3, vestido4)

// let camperas= []
// camperas.push(campera1 , campera2, campera3, campera4)

// let stock = []
// stock.push(pantalon1, pantalon2, pantalon3, pantalon4, remera1 , remera2, remera3, remera4, vestido1 , vestido2, vestido3, vestido4, campera1 , campera2, campera3, campera4)

let productosEnCarrito = JSON.parse(
  localStorage.getItem("productosEnCarrito") || "[]"
);


let salir;


localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));

const btncomprar = document.getElementById("btncomprar")
let buttonTodo = document.getElementById("allProducts")
mostrarCarrito();

function catalogoTodo(array) {
 buttonTodo.innerHTML = "";
  array.forEach((prenda) => {
    let productos = document.createElement("div");
    productos.innerHTML = `
        
        <div id="${prenda.id}" class="card">
        <div class= "imgCont">
        <img class="ropaImg"  src="${prenda.image}"></div>
        <div class="cardContent">
        <h4 class="ropa"> ${prenda.type}</h4>
        <p>Talle: ${prenda.size}.
        Color: ${prenda.color}.
        Precio: $${prenda.price}.</p>
        <button id= "btnAnadir${prenda.id}" class= "addToCart"> Agregar al carrito</button>
        </div>
        </div>`;
    buttonTodo.append(productos);

    let btnAgregar = document.getElementById(`btnAnadir${prenda.id}`);

    btnAgregar.addEventListener("click", () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Añadiste la prenda!",
        showConfirmButton: false,
        timer: 1500,
      });
      agregarAlCarrito(prenda);
    });
  });
}

function agregarAlCarrito(prenda) {
  let verificacion =
    productosEnCarrito.find((producto) =>
      producto.id === prenda.id ? (producto.cantidad += 1) : ""
    ) !== undefined;

  if (!verificacion) {
    const copiaPrenda = { ...prenda };
    copiaPrenda.cantidad += 1;
    productosEnCarrito.push(copiaPrenda);
  }

  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );

  mostrarCarrito();
}

function mostrarCarrito() {
  let lista = document.getElementById("list");
  lista.innerHTML = "";
  
 
  for (let prenda of productosEnCarrito) {
    let li = document.createElement("li");
    li.innerHTML = `
        <h4>${prenda.type}</h4>
        <h4>Talle: ${prenda.size}</h4>
        <p>Precio: $${prenda.price}</p>
        <p>Total ${prenda.cantidad}</p>
        <button id ="btnQuitar${prenda.id}">Quitar</button>`;
    lista.appendChild(li);
    let btnQuitar = document.getElementById(`btnQuitar${prenda.id}`);
    btnQuitar.addEventListener("click", () => {
      function verificarSiExiste(producto) {
        let verificacion = producto.id !== prenda.id;

        return verificacion;
      }
      productosEnCarrito = productosEnCarrito.filter(verificarSiExiste);
      localStorage.setItem(
        "productosEnCarrito",
        JSON.stringify(productosEnCarrito)
      );

      mostrarCarrito();
    });
  }
  const totalRef = document.getElementById("totalCarrito");
  totalRef.textContent = `Total: $${sumaTotal()}`;
}

function sumaTotal() {
  let suma = productosEnCarrito.reduce(
    (acum, actual) => actual.price * actual.cantidad + acum,
    0
  );
  console.log(suma);
  console.log(productosEnCarrito);
  return suma;
}


function ocultarCatalogo() {
  buttonTodo.innerHTML = "";
}

// BOTONES

let navButtons = document.getElementById("navButtons");

navButtons.addEventListener("click", (eve) => {
  if (eve.target.matches(".boton")) {
    const datasetCategoria = eve.target.dataset.categoria;

    if (datasetCategoria === "todo") {
      catalogoTodo(listProducts);
    } else {
      filterProducts(datasetCategoria);
    }
  }
});

function filterProducts(categoria) {
  let filter = listProducts.filter((item) => item.prop === categoria);
  catalogoTodo(filter);
}

let btnOcultarCatalogo = document.getElementById("ocultarCatalogo");
btnOcultarCatalogo.addEventListener("click", () => {
  ocultarCatalogo();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let filter;
  if (search.value === "") {
    Swal.fire({
      icon: "error",
      title: "Ocurrio Un Error!!",
      text: "Campos Vacios Verifique!!",
    });
  } else {
    filter = listProducts.filter(
      (item) => item.size === search.value.toUpperCase().trim()
    );
  }

  if (filter.length > 0) {
    catalogoTodo(filter);
    return;
  }
  Swal.fire({
    icon: "error",
    title: "Ocurrio Un Error!!",
    text: "Error Talla No Existe!!!",
    icon: 'error',
  });
});

btncomprar.addEventListener("click",()=>{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
Swal.fire({
  title: '¿Estas seguro que quieres comprar?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Si, estoy seguro!',
  cancelButtonText: 'No, todavia no!',
  cancelButtonColor: '#d33',
    confirmButtonColor: '#3085d6',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Estupendo!',
      'Tus prendas fueron compradas. Muchas Gracias.',
      'success'
    )
    borrarCarrito()
  } else if (
    result.dismiss === Swal.DismissReason.cancel
  ) {
    Swal.fire(
      'Perfecto',
      'Podemos seguir comprando :)',
      'info'
    )
  }
})
})

function borrarCarrito(){
  let borraCarrito = document.getElementById("list")
  borraCarrito.innerHTML=""
  localStorage.removeItem('productosEnCarrito');
  const borraAcum = document.getElementById("totalCarrito");
  borraAcum.textContent = `Total: $0`;
  productosEnCarrito = []
}


let btnBorrar = document.getElementById("btnBorrar")
btnBorrar.addEventListener("click",()=>{
  Swal.fire({
    title: '¿Estas seguro?',
    text: "Borraras todo el carrito de compras!",
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Si, borrar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'Tu carrito ha sido borrado.',
        'success'
      )
    }
    borrarCarrito()
  })
})
