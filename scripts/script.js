let title = document.getElementById("title")
// let showProducts = document.getElementById("showProducts")
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector('.div')

let cart = []
console.log(cart)

// MOSTRAR PRODUCTOS //
function mostrarProductos() {
    products.forEach((product) => {
        let card = document.createElement("div")
        showAllProducts.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        let name = document.createElement("h3")
        name.innerText = (product.name)
        let price = document.createElement("p")
        price.innerText = (product.price)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar al carrito")
        card.append(img, name, price, buyButton)

        buyButton.addEventListener("click", function () {
            cart.push(product)
            alert("Agregaste " + product.name + " al carrito")
            // divCart.innerHTML = ``
            div.innerHTML = ``
            showCart()
        })
    })
}
console.log(cart)


mostrarProductos()

// MOSTRAR CARRITO //
let cartView = document.getElementById("showProductsCart")
let goToCart = document.getElementById("goToCart")
let carrito = document.getElementById("cartList")
const buttonCart = document.getElementById("mostrarCarrito")

let alertCart = document.createElement("h2")
alertCart.setAttribute("class", "alerta")

if (!cart.lenght) {
    alertCart.innerText = ("El carrito está vacío")
    div.append(alertCart)
}



function showCart() {
    alertCart.remove()

    cart.forEach((element) => {
        const divCart = document.createElement('li')
        divCart.innerHTML += ` 
        <img src="${element.img}">
        <h3>${element.name}</h3>
        <h3>$${element.price}</h3>
        <button class="eliminar" data-id=${element.id}>X</button>`


        div.appendChild(divCart)
    })

    let eliminarItem = document.querySelector(".eliminar")

    // eliminarItem.onclick = (e) => {
        
    //         const cursoId = e.target.getAttribute(`data-id`)

    //         //filtro el carrito creando un nuevo array que NO contenga el elemento con el id que indique
    //         cart = cart.filter(curso => curso.id !== cursoId)

    //         console.log(cart)
    //         div.innerHTML = ``
    //         showCart()
        
    // }

    //REDUCE PRECIO TOTAL //
    const total = cart.map((item) => parseInt(item.price)).reduce((cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice, 0);
    console.log(total)

    // const total2 = cart.map((item) => item.price).reduce((cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice, 0);
    // console.log(total2)


    let totalCompra = document.createElement("h4")
    totalCompra.innerText = ("Total: " + total)
    div.append(totalCompra)

    //VACIAR CARRITO //
    let deleteCart = document.createElement("button")
    deleteCart.innerText = ("Vaciar carrito")
    div.append(deleteCart)

    deleteCart.onclick = () => {
     
        cart = []
        div.innerHTML = ``
        console.log(cart)
    }
}

buttonCart.onclick = () => {
    div.innerHTML = ``    
    showCart()
}

// FILTRAR PRODUCTOS // 
let buscador = document.getElementById("inputSearch")
let filtrar = document.getElementById("filtrar")

function filtrarPorCat() {
    let verTodo = document.createElement("button")
    verTodo.innerText = ("Ver Todo")
    showProducts.append(verTodo)
    const filteredProducts = products.filter((product) => product.category === buscador.value)
    console.log(filteredProducts)

    filteredProducts.forEach((filter) => {
        let cardFilter = document.createElement("div")
        showAllProducts.append(cardFilter)
        let imgFilter = document.createElement("img")
        imgFilter.setAttribute("src", filter.img)
        let nameFilter = document.createElement("h3")
        nameFilter.innerText = (filter.name)
        let priceFilter = document.createElement("p")
        priceFilter.innerText = (filter.price)
        let buyButtonFilter = document.createElement("button")
        buyButtonFilter.innerText = ("Agregar al carrito")
        cardFilter.append(imgFilter, nameFilter, priceFilter, buyButtonFilter)

    })

    verTodo.onclick = () => {
        showAllProducts.innerHTML = ``
        mostrarProductos()
    }
}

buscador.onchange = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
}

filtrar.onclick = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
}

//TERMINAR COMPRA

function terminarCompra() {
    class Usuario {
        constructor(nombre, direccion, mail) {
            this.nombre = nombre,
                this.direccion = direccion,
                this.mail = mail
        }
    }
    let nombre = document.getElementById("nombre")
    let direccion = document.getElementById("direccion")
    let mail = document.getElementById("email")
    let usuarioCompra = new Usuario(nombre.value, direccion.value, mail.value)
    console.log(usuarioCompra)
    console.log(cart)
}

let terminarPedido = document.getElementById("terminarPedido")

terminarPedido.onclick = (e) => {
    e.preventDefault()
    terminarCompra()
}