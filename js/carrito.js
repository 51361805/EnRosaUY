


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
    button.addEventListener("click", function () {
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
    button.addEventListener("click", function () {
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
const observer = new MutationObserver(function (mutationsList) {
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



document.getElementById("checkout-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores de los campos del formulario
  var cardNumber = document.getElementById("card-number").value;
  var cardNumber1 = document.getElementById("card-number-1").value;
  var cardNumber2 = document.getElementById("card-number-2").value;
  var cardNumber3 = document.getElementById("card-number-3").value;
  var cardHolder = document.getElementById("card-holder").value;
  var cardExpirationMonth = document.getElementById("card-expiration-month").value;
  var cardExpirationYear = document.getElementById("card-expiration-year").value;
  var cardCCV = document.getElementById("card-ccv").value;
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  var ubicacion = document.getElementById("ubicacion").value;

  // Verificar si algún campo está vacío
  if (
    cardNumber === "" ||
    cardNumber1 === "" ||
    cardNumber2 === "" ||
    cardNumber3 === "" ||
    cardHolder === "" ||
    cardExpirationMonth === "" ||
    cardExpirationYear === "" ||
    cardCCV === "" ||
    nombre === "" ||
    apellido === "" ||
    telefono === "" ||
    ubicacion === ""
  ) {
    // Campos incompletos, mostrar alerta
    Swal.fire("Error", "Por favor, complete todos los campos antes de enviar el formulario.", "error");
  } else {
    // Campos completos, mostrar alerta de procesando pago
    Swal.fire({
      title: "Procesando pago",
      html: "Realizando pago. Por favor, espere...",
      timer: 4000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        // Se ejecuta cuando se cierra la alerta
        finalizarPago();
        
        localStorage.clear();
       
      }
    });
  }
});











// Si todos los campos están completos, ejecutar el código adicional
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
  const mensajeFinal = `¡Hola! Soy ${nombreCliente} y he realizado la siguiente compra:\n\n${cartDescription}\n\nDescripción de la Compra: ${descripcionUbicacion}\n\n.La Compra Fue Por Un valor Total De $ ${totalPagarElement.textContent}`;

  // Generar el enlace de WhatsApp con el mensaje
  const whatsappLink = `https://api.whatsapp.com/send?phone=59892878389&text=${encodeURIComponent(mensajeFinal)}`;

  // Abrir el enlace de WhatsApp en una nueva pestaña
  window.open(whatsappLink);
}

const finalizarPagoButton = document.getElementById("finalizar-pago");





















const cardId = document.getElementById('cardId')
const myForm = document.getElementById('checkout-form')
const noneForm = document.querySelector('.NoneForm');
if (productosEnCarrito.length === 0) {
  cardId.classList.add('NoneForm')
  myForm.classList.add('NoneForm');
} else {
  cardId.classList.remove('NoneForm')
  myForm.classList.remove('NoneForm');
}
mostrarCarritoEnHTML();



$(document).ready(function () {

  $('.input-cart-number').on('keyup change', function () {
    $t = $(this);

    if ($t.val().length > 3) {
      $t.next().focus();
    }

    var card_number = '';
    $('.input-cart-number').each(function () {
      card_number += $(this).val() + ' ';
      if ($(this).val().length == 4) {
        $(this).next().focus();
      }
    })

    $('.credit-card-box .number').html(card_number);
  });

  $('#card-holder').on('keyup change', function () {
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });

  $('#card-holder').on('keyup change', function () {
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });

  $('#card-expiration-month, #card-expiration-year').change(function () {
    m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
    m = (m < 10) ? '0' + m : m;
    y = $('#card-expiration-year').val().substr(2, 2);
    $('.card-expiration-date div').html(m + '/' + y);
  })

  $('#card-ccv').on('focus', function () {
    $('.credit-card-box').addClass('hover');
  }).on('blur', function () {
    $('.credit-card-box').removeClass('hover');
  }).on('keyup change', function () {
    $('.ccv div').html($(this).val());
  });


  /*--------------------
  CodePen Tile Preview
  --------------------*/
  setTimeout(function () {
    $('#card-ccv').focus().delay(1000).queue(function () {
      $(this).blur().dequeue();
    });
  }, 500);

  function getCreditCardType(accountNumber) {
    if (/^5[1-5]/.test(accountNumber)) {
      result = 'mastercard';
    } else if (/^4/.test(accountNumber)) {
      result = 'visa';
    } else if (/^(5018|5020|5038|6304|6759|676[1-3])/.test(accountNumber)) {
      result = 'maestro';
    } else {
      result = 'unknown'
    }
    return result;
  }

  $('#card-number').change(function () {
    console.log(getCreditCardType($(this).val()));
  })


});

