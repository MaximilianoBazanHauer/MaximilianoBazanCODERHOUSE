//Clases:

class Pantalon {
    constructor(id, cantidad, type, size, color, price, image, inCart){
        this.id = id,
        this.cantidad = cantidad,
        this.type = type,
        this.size = size,
        this.color = color,
        this.price = price,
        this.image = image,
        this.inCart = inCart
    }
    mostrar (){
        console.log(`Esta prenda es un/a ${this.type}, su talle es ${this.size}, es de color ${this.color} y cuesta $${this.price}.`);
    }
    mostrarPrenda (){
        console.log(`${this.type} 
        Talle ${this.size}
        Color ${this.color}
        Precio ${this.price}`)
    }
}


class Remera {
    constructor(id, cantidad, type, size, color, price, image, inCart){
        this.id = id,
        this.cantidad = cantidad,
        this.type = type,
        this.size = size,
        this.color = color,
        this.price = price,
        this.image = image,
        this.inCart = inCart
    }
    mostrar (){
        console.log(`Esta prenda es un/a ${this.type}, su talle es ${this.size}, es de color ${this.color} y cuesta $${this.price}.`);
    }
    mostrarPrenda (){
        console.log(`${this.type} 
        Talle ${this.size}
        Color ${this.color}
        Precio ${this.price}`)
    }
}


class Vestido {
    constructor(id, cantidad, type, size, color, price, image, inCart){
        this.id = id,
        this.cantidad = cantidad,
        this.type = type,
        this.size = size,
        this.color = color,
        this.price = price,
        this.image = image,
        this.inCart = inCart
    }
    mostrar (){
        console.log(`Esta prenda es un/a ${this.type}, su talle es ${this.size}, es de color ${this.color} y cuesta $${this.price}.`);
    }
    mostrarPrenda (){
        console.log(`${this.type} 
        Talle ${this.size}
        Color ${this.color}
        Precio ${this.price}`)
    }
}


class Campera {
    constructor(id, cantidad, type, size, color, price, image, inCart){
        this.id = id,
        this.cantidad = cantidad,
        this.type = type,
        this.size = size,
        this.color = color,
        this.price = price,
        this.image = image,
        this.inCart = inCart
    }
    mostrar (){
        console.log(`Esta prenda es un/a ${this.type}, su talle es ${this.size}, es de color ${this.color} y cuesta $${this.price}.`);
    }
    mostrarPrenda (){
        console.log(`${this.type} 
        Talle ${this.size}
        Color ${this.color}
        Precio ${this.price}`)
    }
}

// Variables, arrays y objetos:

const pantalon1 = new Pantalon(1,0,"Pantalon de bengalina con bolsillos atras", "L", "Marron", 2500, "./Assets/pantalonBengalina.jpg", 0);
const pantalon2 = new Pantalon(2,0,"Pantalon de Jean", "Xs", "Verde", 3000, "./Assets/pantalonJean.jpg", 0);
const pantalon3 = new Pantalon(3,0,"Pantalon Palazo", "Xl", "Azul", 5000, "./Assets/pantalonPalazzo.jpeg", 0);
const pantalon4 = new Pantalon(4,0,"Pantalon de Jean Mom", "M", "Gris", 3500, "./Assets/pantalonMom.jpeg", 0);

const remera1 = new Remera (5,0,"Remera de Algodon manga corta", "L", "Amarillo", 2000, "./Assets/remeraAmarilla.jpg", 0);
const remera2 = new Remera (6,0,"Remera de Algodon manga larga", "S", "Azul Marino", 2300, "./Assets/remeraAzulMarino.jpg", 0);
const remera3 = new Remera (7,0,"Remera de Poliester cuello en V", "XXL", "Azul", 3000, "./Assets/remeraPoliester.jpg", 0);
const remera4 = new Remera (8,0,"Remera de Algodon cuello de tortuga", "M", "Gris", 3200, "./Assets/remeraTortuga.jpg", 0);

const vestido1 = new Vestido (9,0,"Vestido de Algodon manga corta", "L", "Amarillo", 2700, "./Assets/vestidoAmarillo.jpg", 0);
const vestido2 = new Vestido (10,0,"Vestido de Morley largo", "S", "Fucsia", 2900, "./Assets/vestidoFucsia.jpg", 0);
const vestido3 = new Vestido (11,0,"Vestido de Algodon rustico", "XXL", "Azul", 3000, "./Assets/vestidoAzul.jpg", 0);
const vestido4 = new Vestido (12,0,"Vestido de Jean corto", "M", "Gris", 3500, "./Assets/vestidoJean.jpg", 0);

const campera1 = new Campera (13,0,"Campera de Algodon rustica", "L", "Amarillo", 5000, "./Assets/camperaAmarilla.jpg", 0);
const campera2 = new Campera (14,0,"Campera de Acetato manga larga", "S", "Lila", 4500, "./Assets/camperaLila.jpg", 0);
const campera3 = new Campera (15,0,"Campera de Cuero", "XXL", "Negro", 8000, "./Assets/camperaCuero.jpg", 0);
const campera4 = new Campera (16,0,"Campera de Algodon cuello redondo", "M", "Gris", 3900, "./Assets/camperaGris.jpg", 0);

let pantalones= []
pantalones.push(pantalon1, pantalon2, pantalon3, pantalon4)

let remeras= []
remeras.push(remera1 , remera2, remera3, remera4)

let vestidos= []
vestidos.push(vestido1 , vestido2, vestido3, vestido4)

let camperas= []
camperas.push(campera1 , campera2, campera3, campera4)

let stock = []
stock.push(pantalon1, pantalon2, pantalon3, pantalon4, remera1 , remera2, remera3, remera4, vestido1 , vestido2, vestido3, vestido4, campera1 , campera2, campera3, campera4)

let productosEnCarrito = JSON.parse( localStorage.getItem("productosEnCarrito") || "[]")


// let cosasCarrito = new Set()

// let storageCarrito = JSON.parse(localStorage.getItem("productos")) == null ? [] : JSON.parse(localStorage.getItem("productos"))

let salir

localStorage.setItem("stock", JSON.stringify(stock))
stock = JSON.parse(localStorage.getItem("stock"))

localStorage.setItem("pantalones", JSON.stringify(pantalones))
pantalones = JSON.parse(localStorage.getItem("pantalones"))

localStorage.setItem("remeras", JSON.stringify(remeras))
remeras = JSON.parse(localStorage.getItem("remeras"))

localStorage.setItem("vestidos", JSON.stringify(vestidos))
vestidos = JSON.parse(localStorage.getItem("vestidos"))

localStorage.setItem("camperas", JSON.stringify(camperas))
camperas = JSON.parse(localStorage.getItem("camperas"))

localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito))


let buttonTodo = document.getElementById("allProducts")
let buttonRemera = document.getElementById("remera")
let buttonCampera = document.getElementById("campera")
let buttonPantalon = document.getElementById("pantalon")
let buttonVestido = document.getElementById("vestido")



 //FUNCIONES
mostrarCarrito()
function catalogoTodo(array){
    buttonTodo.innerHTML = ""
    array.forEach((prenda)=>{
        let productos = document.createElement("div")
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
        </div>`     
        buttonTodo.append(productos)

    

    let btnAgregar = document.getElementById(`btnAnadir${prenda.id}`)
    
    btnAgregar.addEventListener("click", ()=>{
        
        agregarAlCarrito(prenda)
        
    })
    
})
}


function agregarAlCarrito(prenda){
    
    let verificacion = productosEnCarrito.find((producto)=>producto.id === prenda.id ? producto.cantidad += 1: "") !== undefined
    
    if (!verificacion){
        // productosEnCarrito.find((producto)=>producto.id === prenda.id ? producto.cantidad += 1 : "")
        const copiaPrenda = {...prenda}
        copiaPrenda.cantidad += 1
        productosEnCarrito.push(copiaPrenda)
       
    }
    
    // productosEnCarrito = [...productosEnCarrito,prenda]
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito))
    
    mostrarCarrito()
    // console.log(verificacion)
}

function mostrarCarrito(){

    let lista = document.getElementById("list")
    lista.innerHTML= ""
   
//    let carro = productosEnCarrito.some((producto)=>{
//         producto.id === prenda.id ? console.log("producto agregado") : console.log(producto)
//     })
for(let prenda of productosEnCarrito){
    let li = document.createElement("li")
        li.innerHTML = `
        <h4>${prenda.type}</h4>
        <h4>Talle: ${prenda.size}</h4>
        <p>Precio: $${prenda.price}</p>
        <p>Total ${prenda.cantidad}</p>
        <button id ="btnQuitar${prenda.id}">Quitar</button>`
        lista.appendChild(li)
        let btnQuitar = document.getElementById(`btnQuitar${prenda.id}`)
        btnQuitar.addEventListener("click", ()=>{
        function verificarSiExiste(producto) {
           let verificacion = producto.id !== prenda.id
           
           return verificacion
        }
        productosEnCarrito = productosEnCarrito.filter(verificarSiExiste) 
        localStorage.setItem("productosEnCarrito",JSON.stringify (productosEnCarrito))  
        
        
        mostrarCarrito()
    })
}
const totalRef = document.getElementById("totalCarrito")
totalRef.textContent= `Total: $${sumaTotal()}`


    }
    
    function sumaTotal(){
       let suma = productosEnCarrito.reduce((acum, actual)=> actual.price * actual.cantidad + acum, 0)
       console.log(suma)
       return suma
    }
    
    
    function ocultarCatalogo(){
        buttonTodo.innerHTML = ""
    }


let btnMostrarTodo = document.getElementById("todo")
btnMostrarTodo.addEventListener("click", ()=>{
    catalogoTodo(stock)
})

let btnMostrarRemera = document.getElementById("remeras")
btnMostrarRemera.addEventListener("click", ()=>{
    catalogoTodo(remeras)
})

let btnMostrarCampera = document.getElementById("camperas")
btnMostrarCampera.addEventListener("click", ()=>{
    catalogoTodo(camperas)
})

let btnMostrarPantalon = document.getElementById("pantalones")
btnMostrarPantalon.addEventListener("click", ()=>{
    catalogoTodo(pantalones)
})

let btnMostrarVestido = document.getElementById("vestidos")
btnMostrarVestido.addEventListener("click", ()=>{
    catalogoTodo(vestidos)
})

let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
btnOcultarCatalogo.addEventListener("click", ()=>{
    ocultarCatalogo()
})


// let stockEnJson = JSON.stringify(stock)
// console.log(stockEnJson)
// localStorage.setItem("stock", stockEnJson)
// let stockEnJson2 = []






// let cart = document.querySelectorAll(".addToCart")

// for(let i=0;i<cart.length;i++){
    //     cart[i].addEventListener("click",()=>{
        //         totalCost(stock[i])
        //     })
        // }
        
        // function totalCost(remera){
//     let cartCost = localStorage.getItem("totalCost")
//     if(cartCost!=null){
//         cartCost=parseInt(cartCost)
//         localStorage.setItem("totalCost", cartCost+stock.price)
//     }
//     else{
//         localStorage.setItem("totalCost", stock.price)
//     }
// }








// let btnSearch = document.getElementById("buscar")
// btnSearch.addEventListener("click", ()=>{
//     busquedas()
// })

// function busquedas(){
//     function buscarPorTalle(){let buscarTalle = prompt("Ingrese el talle que desea buscar entre XXS, XS, S, XXM, XM, M, XXL , XL, L.")
        
//         let busqueda = stock.filter((talle)=>talle.size.toUpperCase() == buscarTalle.toUpperCase())
//         if(busqueda.length == 0){
//             alert("No se encontro ningúna prenda de tu talle.")
//         }else{
//             console.log("Estas son las prendas que tenemos de tu talle:")
//             console.log(busqueda)
//             for(let talleEncontrado of busqueda){
//                 talleEncontrado.mostrarPrenda()
//             }
//         }
//     }
// }
    


