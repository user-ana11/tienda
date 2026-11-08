const productos = [
{
id:1,
nombre:"Pienso Premium",
descripcion:"Pienso completo para perros",
precio:39.99,
stock:10,
categoria:"Perros",
imagen:"piensoperro.webp"
},
{
id:2,
nombre:"Correa Antitirones",
descripcion:"Correa resistente",
precio:19.99,
stock:8,
categoria:"Perros",
imagen:"correa.webp"
},
{
id:3,
nombre:"Cama Deluxe perros",
descripcion:"Cama acolchada",
precio:49.99,
stock:5,
categoria:"Perros",
imagen:"cama.jpeg"
},
{
id:4,
nombre:"Rascador XXL",
descripcion:"Rascador para gatos",
precio:65.99,
stock:4,
categoria:"Gatos",
imagen:"rascador.webp"
},
{
id:5,
nombre:"Arena Premium",
descripcion:"Arena aglomerante",
precio:14.99,
stock:20,
categoria:"Gatos",
imagen:"arena.webp"
},
{
id:6,
nombre:"Fuente Automática",
descripcion:"Fuente para gatos",
precio:29.99,
stock:8,
categoria:"Gatos",
imagen:"fuente.webp"
},
{
id:7,
nombre:"Jaula Grande",
descripcion:"Jaula para pájaros",
precio:89.99,
stock:4,
categoria:"Pájaros",
imagen:"jaula.webp"
},
{
id:8,
nombre:"Comedero",
descripcion:"Comedero resistente",
precio:9.99,
stock:12,
categoria:"Pájaros",
imagen:"paj.jpg"
},
{
id:9,
nombre:"Mixtura Premium",
descripcion:"Comida para aves",
precio:12.99,
stock:15,
categoria:"Pájaros",
imagen:"com.webp"
},
{
id:10,
nombre:"pienso premium",
descripcion:"Comida para gatos",
precio:35.40,
stock:15,
categoria:"Gatos",
imagen:"purina.webp"
},
{
id:11,
nombre:"cama premium",
descripcion:"Cama para gatos",
precio:15.40,
stock:12,
categoria:"Gatos",
imagen:"cam.webp"
}
];

let carrito = [];

const contenedor = document.getElementById("productos");

function mostrarProductos(lista){

contenedor.innerHTML = "";

lista.forEach(producto => {

contenedor.innerHTML += `
<div class="card">

<img src="${producto.imagen}" alt="${producto.nombre}" class="fotoProducto">

<h3>${producto.nombre}</h3>

<p>${producto.descripcion}</p>

<p>Stock: ${producto.stock}</p>

<p class="precio">${producto.precio.toFixed(2)}€</p>

<button onclick="agregar(${producto.id})">
Añadir a la cesta
</button>

</div>
`;

});

}

function agregar(id){

carrito.push(id);

document.getElementById("contador").textContent =
carrito.length;

}

function abrirCarrito(){

document.getElementById("modal").style.display =
"flex";

pintarCarrito();

}

function cerrarCarrito(){

document.getElementById("modal").style.display =
"none";

}

function pintarCarrito(){

const caja =
document.getElementById("productosCarrito");

caja.innerHTML = "";

let total = 0;

carrito.forEach(id => {

const producto =
productos.find(p => p.id === id);

if(producto){

total += producto.precio;

caja.innerHTML += `
<div class="item-cesta">
<span>${producto.nombre}</span>
<span>${producto.precio.toFixed(2)}€</span>
</div>
`;

}

});

document.getElementById("total").textContent =
total.toFixed(2);

}

function finalizarCompra(){

alert("Compra realizada correctamente");

carrito = [];

document.getElementById("contador").textContent = "0";

pintarCarrito();

cerrarCarrito();

}

function filtrar(categoria){

if(categoria === "Todos"){

mostrarProductos(productos);
return;

}

const filtrados =
productos.filter(
p => p.categoria === categoria
);

mostrarProductos(filtrados);

}

document.getElementById("ordenar")
.addEventListener("change", function(){

let lista = [...productos];

if(this.value === "menor"){

lista.sort((a,b) =>
a.precio - b.precio);

}

else if(this.value === "mayor"){

lista.sort((a,b) =>
b.precio - a.precio);

}

mostrarProductos(lista);

});

mostrarProductos(productos);