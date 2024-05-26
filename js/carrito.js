// Función para mostrar los productos en el menú del carrito
function mostrarProductosEnCarrito() {
    var menuCarrito = document.getElementById('menuCarrito');
    // Limpiar el menú del carrito antes de mostrar los productos actualizados
    menuCarrito.innerHTML = '';
    productos.forEach(function(producto) {
      var nuevoProducto = document.createElement('li');
      nuevoProducto.textContent = producto;
      nuevoProducto.className = 'dropdown-item';
      menuCarrito.appendChild(nuevoProducto);
    });
  }

  // Al cargar la página, mostrar los productos en el menú del carrito
  window.onload = function() {
    mostrarProductosEnCarrito();
  };

  // Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    // Obtener la lista desplegable del carrito
    var menuCarrito = document.getElementById('menuCarrito');
    // Crear un nuevo elemento de lista para el producto
    var nuevoProducto = document.createElement('li');
    // Obtener el título del producto seleccionado
    var titulo = document.querySelector('[data-producto="' + producto + '"]').parentNode.querySelector('.card-title').textContent;
    // Asignar el título como contenido del elemento de lista
    nuevoProducto.textContent = titulo;
    nuevoProducto.className = 'dropdown-item';
    // Agregar el nuevo producto a la lista desplegable del carrito
    menuCarrito.appendChild(nuevoProducto);
  }
  
  // Manejar el clic en los botones "Agregar al Carrito"
  var botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
  botonesAgregarCarrito.forEach(function(boton) {
    boton.addEventListener('click', function() {
      // Obtener el nombre del producto del atributo de datos
      var producto = this.getAttribute('data-producto');
      // Agregar el producto al carrito
      agregarAlCarrito(producto);
    });
  });
  