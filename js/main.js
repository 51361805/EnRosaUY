/* window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
 */


const productos = [

    //VESTIDOS....................


    {
        id: "vestido1",
        titulo: "Vestido estampado floral",
        imagen: "./imagenes/VESTIDO1.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este vestido estampado floral es perfecto para lucir un look fresco y femenino. Con su diseño ajustado en la parte superior y falda fluida, te brindará comodidad y estilo en cualquier ocasión.",
        clase: "sectionVestidos",
        precio: 2500,
    },
    {
        id: "vestido2",
        titulo: "Vestido de encaje negro",
        imagen: "./imagenes/VESTIDO2.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO2.webp",
        descripcion: "Este elegante vestido de encaje negro es ideal para eventos especiales y ocasiones formales. El encaje delicado y el corte ajustado resaltarán tu figura y te harán lucir sofisticada y glamurosa.",
        clase: "sectionVestidos",
        precio: 3000,
    },
    {
        id: "vestido3",
        titulo: "Vestido de verano rayado",
        imagen: "./imagenes/VESTIDO3.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este vestido de verano rayado es ligero y cómodo, perfecto para disfrutar de días soleados. Su diseño casual y estampado a rayas te brindarán un look fresco y relajado.",
        clase: "sectionVestidos",
        precio: 1800,
    },
    {
        id: "vestido4",
        titulo: "Vestido de cóctel rojo",
        imagen: "./imagenes/VESTIDO4.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este impresionante vestido de cóctel rojo te hará destacar en cualquier fiesta. Con su corte elegante y color vibrante, serás el centro de atención y te sentirás radiante.",
        clase: "sectionVestidos",
        precio: 2800,
    },





    //REMERAS....................


    {
        id: "remera1",
        titulo: "Remera de alta calidad",
        imagen: "./imagenes/REMERA.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Esta remera está confeccionada con materiales de alta calidad que garantizan comodidad y durabilidad. Disponible en varios colores y tallas.",
        clase: "sectionRemeras",
        precio: 1800,
    },
    {
        id: "remera2",
        titulo: "Remera clásica",
        imagen: "./imagenes/REMERA1.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Una remera clásica y versátil que combina con cualquier estilo. Ideal para el uso diario y fácil de combinar con pantalones o faldas.",
        clase: "sectionRemeras",
        precio: 1800,
    },
    {
        id: "remera3",
        titulo: "Remera estampada",
        imagen: "./imagenes/REMERA2.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Diseño moderno y llamativo. Esta remera estampada te permitirá destacarte y expresar tu estilo único. Disponible en diferentes estampados.",
        clase: "sectionRemeras",
        precio: 1800,
    },
    {
        id: "remera4",
        titulo: "Remera deportiva",
        imagen: "./imagenes/REMERA3.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Ideal para actividades deportivas y entrenamientos. Esta remera te brinda comodidad y libertad de movimiento durante tus actividades físicas.",
        clase: "sectionRemeras",
        precio: 1800,
    },
    {
        id: "remera5",
        titulo: "Remera básica",
        imagen: "./imagenes/REMERA4.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Una remera básica y esencial en cualquier guardarropa. Versátil y cómoda, perfecta para combinar con diferentes prendas y ocasiones.",
        clase: "sectionRemeras",
        precio: 1800,
    },
    {
        id: "remera6",
        titulo: "Remera a rayas",
        imagen: "./imagenes/REMERA5.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Estilizada y moderna, esta remera a rayas añade un toque de estilo a tus conjuntos. Combínala con pantalones o faldas para un look sofisticado.",
        clase: "sectionRemeras",
        precio: 1800,
    },
    {
        id: "remera7",
        titulo: "Remera estampada floral",
        imagen: "./imagenes/REMERA6.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Una remera con estampado floral que te hará lucir fresca y femenina. Ideal para eventos casuales o para agregar un toque de primavera a tu outfit.",
        clase: "sectionRemeras",
        precio: 1800,
    },

    //LENCERIA....................


    {
        id: "lenceria1",
        titulo: "Conjunto de lencería rojo",
        imagen: "./imagenes/lenceria.jpg",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este conjunto de lencería rojo es perfecto para ocasiones especiales. Confeccionado con materiales de alta calidad y un diseño sensual que realza tu figura.",
        clase: "sectionLenceria",
        precio: 2500,
    },
    {
        id: "lenceria2",
        titulo: "Panty de encaje rojo",
        imagen: "./imagenes/lenceria1.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este panty de encaje rojo es seductor y cómodo. El encaje suave y el diseño de corte alto realzan tus curvas y te hacen sentir segura y sexy.",
        clase: "sectionLenceria",
        precio: 800,
    },
    {
        id: "lenceria3",
        titulo: "Babydoll de satén rojo",
        imagen: "./imagenes/lenceria2.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este encantador babydoll de satén rojo es elegante y coqueto. El tejido suave y fluido te brinda comodidad mientras resalta tu feminidad. Incluye tanga a juego.",
        clase: "sectionLenceria",
        precio: 1800,
    },
    {
        id: "lenceria4",
        titulo: "Bata de seda roja",
        imagen: "./imagenes/lenceria3.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Esta bata de seda roja es perfecta para añadir un toque de glamour a tus momentos de relajación. Suave y lujosa, te envolverá en elegancia y comodidad.",
        clase: "sectionLenceria",
        precio: 2200,
    },
    {
        id: "lenceria5",
        titulo: "Body de encaje rojo",
        imagen: "./imagenes/lenceria4.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este body de encaje rojo es sensual y sofisticado. El encaje delicado y los detalles de transparencias realzan tu figura y te hacen sentir irresistible.",
        clase: "sectionLenceria",
        precio: 1500,
    },
    {
        id: "lenceria6",
        titulo: "Sujetador push-up rojo",
        imagen: "./imagenes/lenceria5.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este sujetador push-up rojo te ofrece un realce y soporte adicional, creando un escote impactante. El diseño sexy y los detalles de encaje lo convierten en una prenda imprescindible.",
        clase: "sectionLenceria",
        precio: 1000,
    },
    {
        id: "lenceria7",
        titulo: "Tanga de encaje rojo",
        imagen: "./imagenes/lenceria6.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Esta tanga de encaje rojo es cómoda y seductora. El encaje suave y los detalles de lazo la convierten en una prenda íntima perfecta para ocasiones especiales.",
        clase: "sectionLenceria",
        precio: 600,
    },
    {
        id: "lenceria8",
        titulo: "Liga de encaje roja",
        imagen: "./imagenes/lenceria7.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Esta liga de encaje roja es el complemento perfecto para agregar un toque sensual a tu conjunto de lencería. Añade un toque de seducción a tu look íntimo.",
        clase: "sectionLenceria",
        precio: 350,
    },
    {
        id: "lenceria9",
        titulo: "Sujetador balconette rojo",
        imagen: "./imagenes/lenceria8.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este sujetador balconette rojo realza y levanta tus pechos, creando un escote irresistible. Con un diseño elegante y detalles de encaje, te sentirás confiada y sexy.",
        clase: "sectionLenceria",
        precio: 1200,
    },
    {
        id: "lenceria10",
        titulo: "Conjunto de lencería de encaje rojo",
        imagen: "./imagenes/lenceria9.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este conjunto de lencería de encaje rojo es deslumbrante y sofisticado. El encaje delicado y los detalles de transparencias crean un look sensual y seductor.",
        clase: "sectionLenceria",
        precio: 2800,
    },
    {
        id: "lenceria11",
        titulo: "Camisón de seda rojo",
        imagen: "./imagenes/lenceria10.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este camisón de seda rojo es elegante y cómodo. El tejido suave y fluido te envuelve en lujo mientras duermes o te relajas en casa.",
        clase: "sectionLenceria",
        precio: 2000,
    },
    {
        id: "lenceria12",
        titulo: "Pijama de satén rojo",
        imagen: "./imagenes/lenceria11.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este pijama de satén rojo te brinda estilo y comodidad. Perfecto para noches relajadas en casa, te sentirás sofisticada y cómoda al mismo tiempo.",
        clase: "sectionLenceria",
        precio: 2300,
    },
    {
        id: "lenceria13",
        titulo: "Medias de encaje rojas",
        imagen: "./imagenes/lenceria12.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Estas medias de encaje rojas añaden un toque sensual a tus conjuntos de lencería. Con detalles de encaje y una sujeción cómoda, te sentirás irresistible.",
        clase: "sectionLenceria",
        precio: 500,
    },
    {
        id: "lenceria14",
        titulo: "Corsé de encaje rojo",
        imagen: "./imagenes/lenceria13.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este corsé de encaje rojo es una prenda íntima impactante. Con su diseño ajustado y detalles de encaje, te ayudará a crear una figura seductora y femenina.",
        clase: "sectionLenceria",
        precio: 3200,
    },




    //SEXY............................................................
    {
        id: "sexy1",
        titulo: "Body de encaje rojo",
        imagen: "./imagenes/sexy.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este body de encaje rojo es sensual y provocativo. Con un diseño de encaje seductor y detalles de transparencias, te hará sentir sexy y segura de ti misma.",
        clase: "sectionSexy",
        precio: 2500,
    },
    {
        id: "sexy2",
        titulo: "Conjunto de lencería erótica rojo",
        imagen: "./imagenes/sexy1.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este conjunto de lencería erótica rojo está diseñado para momentos de intimidad y seducción. Con detalles atrevidos y un ajuste perfecto, te sentirás irresistible.",
        clase: "sectionSexy",
        precio: 1800,
    },
    {
        id: "sexy3",
        titulo: "Babydoll de encaje transparente",
        imagen: "./imagenes/sexy2.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este babydoll de encaje transparente es atrevido y sugerente. Con un diseño provocativo y detalles de encaje, te permitirá lucir tu lado más sensual.",
        clase: "sectionSexy",
        precio: 2000,
    },
    {
        id: "sexy4",
        titulo: "Liguero de encaje rojo",
        imagen: "./imagenes/sexy3.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este liguero de encaje rojo es el accesorio perfecto para completar tu conjunto de lencería sexy. Con un diseño seductor y detalles de encaje, añadirá un toque irresistible a tu look.",
        clase: "sectionSexy",
        precio: 800,
    },
    {
        id: "sexy5",
        titulo: "Tanga de encaje transparente",
        imagen: "./imagenes/sexy4.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Esta tanga de encaje transparente es provocativa y cómoda al mismo tiempo. El encaje suave y los detalles sensuales te harán sentir confiada y sexy.",
        clase: "sectionSexy",
        precio: 600,
    },
    {
        id: "sexy6",
        titulo: "Corset de cuero rojo",
        imagen: "./imagenes/sexy5.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este corset de cuero rojo es audaz y seductor. Con un diseño ajustado y detalles llamativos, te ayudará a resaltar tus curvas y a crear un look impactante.",
        clase: "sectionSexy",
        precio: 2800,
    },
    {
        id: "sexy7",
        titulo: "Medias de red con liguero",
        imagen: "./imagenes/sexy6.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Estas medias de red con liguero son un accesorio imprescindible para tus conjuntos de ropa sexy. Con un diseño provocativo y un ajuste cómodo, te harán sentir irresistible.",
        clase: "sectionSexy",
        precio: 500,
    },
    {
        id: "lenceria8",
        titulo: "Conjunto de lencería de encaje negro",
        imagen: "./imagenes/lenceria7.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Este conjunto de lencería de encaje negro es atrevido y sofisticado. El encaje delicado y el diseño ajustado resaltarán tus curvas y te harán sentir sexy y segura de ti misma.",
        clase: "sectionLenceria",
        precio: 2000,
    },
    {
        id: "lenceria9",
        titulo: "Bata de seda negra",
        imagen: "./imagenes/lenceria13.webp",
        imagen2:"./imagenes/VESTIDO2.webp",
        imagen3:"./imagenes/VESTIDO3.webp",
        imagenCarrito: "../imagenes/VESTIDO1.webp",
        descripcion: "Esta bata de seda negra es elegante y sensual. El tejido suave y fluido te envuelve en lujo, creando un look íntimo y sofisticado.",
        clase: "sectionLenceria",
        precio: 1500,
    }




    // Resto de los productos...
];
const contenedorProductos = document.querySelector("#contenedorProductos");
const seccionVestidos = document.querySelector(".sectionVestidos");
const seccionRemeras = document.querySelector(".sectionRemeras");
const seccionSexy = document.querySelector(".sectionSexy");
const seccionLenceria = document.querySelector(".sectionLenceria");
let botonesAgregar;

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("clothing-item", "item");
        div.innerHTML = `
        <img class="logo-img" src="./imagenes/logoImagen.svg" alt="${producto.id}">

       
 <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
 <!-- Indicadores -->
 <ol class="carousel-indicators">
     <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
     <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
     <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
 </ol>

 <!-- Slides -->
 <div class="carousel-inner">
     <div class="carousel-item active">
         <img class="pruebaimg" src="${producto.imagen}" class="d-block w-100" alt="Imagen 1">
     </div>
     <div class="carousel-item">
         <img  class="pruebaimg" src="${producto.imagen2}" class="d-block w-100" alt="Imagen 2">
     </div>
     <div class="carousel-item">
         <img class="pruebaimg" src="${producto.imagen3}" class="d-block w-100" alt="Imagen 3">
     </div>
 </div>

 <!-- Controles -->
 <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden"></span>
 </a>
 <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden"></span>
 </a>
</div>

        <img src="" alt="">
        <h3>${producto.titulo}</h3>
        <p>${producto.descripcion}</p>
        <span>$${producto.precio}</span>
        <button id="${producto.id}" class="buy-button">Comprar</button>
        `;

        // Agregar el producto al contenedor correspondiente según la clase
        if (producto.clase === "sectionVestidos") {
            seccionVestidos.appendChild(div);
        } else if (producto.clase === "sectionRemeras") {
            seccionRemeras.appendChild(div);
        } else if (producto.clase === "sectionSexy") {
            seccionSexy.appendChild(div);
        } else if (producto.clase === "sectionLenceria") {
            seccionLenceria.appendChild(div);
        }
    });

    // Actualizar los botones de agregar al carrito
    actualizarBotonesAgregar();
    actualizarNumeroCarrito(); // Agregar esta línea para mostrar la cantidad de productos en el carrito
}




function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".buy-button");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito = []; // Actualizar la declaración de la variable

function agregarAlCarrito(e) {
    const id = e.currentTarget.id;
    const productoSeleccionado = productos.find(producto => producto.id === id);


    if (productoSeleccionado) {
        productosEnCarrito.push(productoSeleccionado);
        guardarCarritoEnLocalStorage();
        console.log("Producto agregado al carrito:", productoSeleccionado);
        actualizarNumeroCarrito(); // Agregar esta línea para actualizar la cantidad de productos en el carrito




        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agregó su compra al carrito',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                container: 'my-swal-container',
                title: 'my-swal-title'
            }
        });

    } else {
        console.log("No se encontró el producto con ID:", id);
    }
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

function obtenerCarritoDelLocalStorage() {
    const carritoString = localStorage.getItem("carrito");
    if (carritoString) {
        return JSON.parse(carritoString);
    } else {
        return [];
    }
}

function actualizarNumeroCarrito() {
    const cartCount = document.querySelector("#cartCount");
    cartCount.textContent = productosEnCarrito.length;
}

// Obtener el carrito almacenado en el Local Storage
productosEnCarrito = obtenerCarritoDelLocalStorage();

// Llamar a la función cargarProductos para inicializar la visualización de productos en las secciones correspondientes
cargarProductos();



const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const resultadosBusqueda = document.querySelector('#resultadosBusqueda');

function filtrarProductos() {
    const searchTerm = searchInput.value.toLowerCase();
    const productosFiltrados = productos.filter(producto =>
        producto.descripcion.toLowerCase().includes(searchTerm)
    );
    mostrarResultados(productosFiltrados);
}
function mostrarResultados(productos) {
    resultadosBusqueda.innerHTML = '';

    if (productos.length === 0) {
        Swal.fire('No hay resultados para la búsqueda')
        resultadosBusqueda.textContent = 'No se encontraron productos.';
        return;
    }

    productos.forEach(producto => {

        let timerInterval;
        Swal.fire({
            title: 'En búsqueda de productos',
            html: 'Realizando búsqueda. Por favor, espere...',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Leer más sobre cómo manejar el cierre a continuación */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('Se cerró automáticamente');
            }
        });

        const div = document.createElement('div');
        div.classList.add('clothing-item', 'item');
        div.innerHTML = `
            <div>
                <img src="${producto.imagen}" alt="${producto.id}">
                <h3>${producto.titulo}</h3>
                <p>${producto.descripcion}</p>
                <span>$${producto.precio}</span>
                <button id="${producto.id}" class="buy-button">Comprar</button>
            </div>
        `;
        resultadosBusqueda.appendChild(div);
    });
}


searchButton.addEventListener('click', filtrarProductos);










