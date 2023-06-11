function obtenerCarritoDelLocalStorage() {
  const carritoString = localStorage.getItem("carrito");
  if (carritoString) {
    return JSON.parse(carritoString);
  } else {
    return [];
  }
}
function mostrarCarritoEnHTML() {
  const cartSection = document.querySelector(".cart-section");
  cartSection.innerHTML = "";

  productosEnCarrito.forEach(producto => {
    const productItem = document.createElement("tr");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
        <tr>
          <td><img class="imgCarrito" src="${producto.imagenCarrito}" alt="${producto.titulo}"></td>
          <td>
            <h3>${producto.titulo}</h3>
            <p class="product-description">${producto.descripcion}</p>
          </td>
          <td>
            <span class="product-price">$${producto.precio}</span>
          </td>
          <td>
            <div class="number-input">
              <button class="decrement">-</button>
              <input type="number" value="1" min="1">
              <button class="increment">+</button>
            </div>
          </td>
          <td><button class="remove-button" data-id="${producto.id}">Eliminar compra</button></td>
        </tr>
      `;

    cartSection.appendChild(productItem);
  });

  const cartCount = document.querySelector("#cartCount");
  cartCount.textContent = productosEnCarrito.length;

  asignarEventosEliminarProducto();
}

function eliminarProductoDelLocalStorage(productoId) {
  const carritoString = localStorage.getItem("carrito");

  Swal.fire({
    title: '¿Estás seguro?',
    text: '¡No podrás revertir esto!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo del carrito'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '¡Eliminado!',
        'El producto ha sido eliminado del carrito.',
        'success'
      );

      if (carritoString) {
        const carrito = JSON.parse(carritoString);
        const nuevosProductosEnCarrito = carrito.filter(producto => producto.id !== productoId);
        localStorage.setItem("carrito", JSON.stringify(nuevosProductosEnCarrito));
        productosEnCarrito = nuevosProductosEnCarrito; // Actualizar la variable global con el nuevo carrito
        calcularTotalPagar(); // Calcular y actualizar el total a pagar
        mostrarCarritoEnHTML(); // Actualizar la visualización del carrito en el HTML
      }
    }
  });
}

function asignarEventosEliminarProducto() {
  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach(button => {
    button.addEventListener("click", function() {
      const productoId = button.dataset.id;
      eliminarProductoDelLocalStorage(productoId);
    });
  });
}




let productosEnCarrito = obtenerCarritoDelLocalStorage();
mostrarCarritoEnHTML();

function asignarEventosEliminarProducto() {
  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach(button => {
    button.addEventListener("click", function() {
      const productoId = button.dataset.id;
      eliminarProductoDelLocalStorage(productoId);
    });
  });
}
function calcularTotalPagar() {
  const totalPagarElement = document.getElementById("totalPagar");

  // Calcular el total a pagar sumando los precios de todos los productos en el carrito
  const totalPagar = productosEnCarrito.reduce((total, producto) => {
    return total + producto.precio;
  }, 0);

  // Actualizar el contenido del elemento en HTML
  totalPagarElement.textContent = totalPagar;
}

// Llama a la función para calcular y mostrar el total al cargar la página o al actualizar el carrito
calcularTotalPagar();

const totalPagarElement = document.getElementById("totalPagar");

// Crear una instancia de MutationObserver con una función de callback
const observer = new MutationObserver(function(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.target === totalPagarElement) {
     
    }
  }
});

// Configurar las opciones del MutationObserver
const observerOptions = {
  childList: true,
  subtree: true
};

// Observar cambios en el contenido del elemento totalPagarElement
observer.observe(totalPagarElement, observerOptions);






function actualizarBotonesIncrementoDecremento() {
  const botonesDecremento = document.querySelectorAll(".decrement");
  const botonesIncremento = document.querySelectorAll(".increment");

  botonesDecremento.forEach(boton => {
    boton.addEventListener("click", decrementarCantidad);
  });

  botonesIncremento.forEach(boton => {
    boton.addEventListener("click", incrementarCantidad);
  });
}




function decrementarCantidad(e) {
  const inputCantidad = e.currentTarget.parentNode.querySelector("input");
  let cantidad = parseInt(inputCantidad.value);

  if (cantidad > 1) {
    cantidad--;
  }

  inputCantidad.value = cantidad;
}





function incrementarCantidad(e) {
  const inputCantidad = e.currentTarget.parentNode.querySelector("input");
  let cantidad = parseInt(inputCantidad.value);

  cantidad++;

  inputCantidad.value = cantidad;
}




actualizarBotonesIncrementoDecremento();





function actualizarBotonEliminar() {
  const botonesEliminar = document.querySelectorAll(".remove-button");

  botonesEliminar.forEach(boton => {
    const productoId = boton.dataset.id;
    boton.addEventListener("click", () => {
      eliminarProductoDelLocalStorage(productoId);
      mostrarCarritoEnHTML();
    });
  });
}





actualizarBotonEliminar();

const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: 'TEST-62ce6c41-a664-49e8-a636-375d2034c9bd', // Reemplaza con tu access token de Mercado Pago
});

const crearPreferencia = async () => {
  const preference = {
    items: [
      {
        title: 'Producto 1',
        unit_price: 10,
        quantity: 1,
      },
      {
        title: 'Producto 2',
        unit_price: 20,
        quantity: 2,
      },
    ],
    back_urls: {
      success: 'https://tusitio.com/pago-exitoso',
      failure: 'https://tusitio.com/pago-fallido',
      pending: 'https://tusitio.com/pago-pendiente',
    },
    auto_return: 'approved',
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.id;
    const paymentLink = response.body.init_point;
    console.log('Preference ID:', preferenceId);
    console.log('Payment Link:', paymentLink);
  } catch (error) {
    console.error('Error:', error);
  }
};

crearPreferencia();



















const descripcionUbicacion = document.getElementById('ubicacion').value;
const checkoutForm = document.getElementById("checkout-form");

checkoutForm.addEventListener("change", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores de los inputs
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const ubicacion = document.getElementById("ubicacion").value;

  // Realizar alguna acción con los datos capturados
  // Por ejemplo, mostrarlos en la consola
  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
  console.log("Teléfono:", telefono);
  console.log("Ubicación:", ubicacion);

  // Luego puedes realizar otras acciones, como enviar los datos a un servidor, procesar el pago, etc.
  // Aquí solo se muestra un ejemplo básico de captura de datos.
});
function finalizarPago() {
  // Obtener los datos del carrito
  const cartItems = productosEnCarrito.map(producto => {
    return `${producto.titulo} - ${producto.descripcion} - $${producto.precio}`;
  });

  // Crear la descripción del carrito
  const cartDescription = cartItems.join('\n');

  // Obtener el nombre del cliente
  const nombreCliente = document.getElementById("nombre").value;

  // Obtener la descripción de la ubicación
  const descripcionUbicacion = document.getElementById("ubicacion").value;

  // Crear el mensaje final con el nombre del cliente, los detalles del carrito y la descripción de la ubicación
  const mensajeFinal = `¡Hola! Soy ${nombreCliente} y he realizado la siguiente compra:\n\n${cartDescription}\n\nDescripción de la Compra: ${descripcionUbicacion}\n\n.La Compra Fue Por Un valor Total De $ ${ totalPagarElement.textContent}`;

  // Generar el enlace de WhatsApp con el mensaje
  const whatsappLink = `https://api.whatsapp.com/send?phone=59892878389&text=${encodeURIComponent(mensajeFinal)}`;

  // Abrir el enlace de WhatsApp en una nueva pestaña
  window.open(whatsappLink);

  
}


const finalizarPagoButton = document.getElementById("finalizar-pago");

finalizarPagoButton.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar el envío automático del formulario
  finalizarPago();
});

 

