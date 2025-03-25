function cargar() {
    alert("Bienvenido a la Tienda Deportiva Walon");
}

function verificarconexion() {
    if (navigator.onLine) {
        document.getElementById('estado').innerHTML = 'Estas Conectado a  Internet!';
    }
    else {
        document.getElementById('estado').innerHTML = 'No estas Conectado a Internet !';
    }
}


function compartir() {
    navigator.share({
        title: 'Compartir',
        text: 'Comparte contenido',
        url: window.location.href
    });
}


function cambiar() {
    document.getElementById("estado").style.background = "green";
}



function calcularTotal() {
    const precios = {
        Polos: 20,
        Pelotas:40,
        Zapatillas:100,
        Short: 15,
        Casacas:80,
        Medias:15,
        Canilleras:20,
        Guantes:35,
        Buzos:60,
    };

    const producto = document.getElementById('producto').value;

    console.log(producto)
    const cantidad = parseInt(document.getElementById('cantidad').value);
    let total = precios[producto] * cantidad;
    
    if (cantidad >= 6) {
        total *= 0.90; 
    }

    document.getElementById('total').innerText = `El total a pagar es: S/. ${total.toFixed(2)}`;
}

let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío</p>';
        return;
    }

    const resumen = carrito.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {});

    for (const [producto, cantidad] of Object.entries(resumen)) {
        const div = document.createElement('div');
        div.textContent = `${producto.charAt(0).toUpperCase() + producto.slice(1)}: ${cantidad}`;
        carritoContainer.appendChild(div);
    }
}

function filtrarProductos() {
    const categoria = document.getElementById('filtroCategoria').value;
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        if (categoria === 'todos' || producto.dataset.categoria === categoria) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.getElementById('toggle');
    let label_toggle = document.getElementById('label_toggle');

    toggle.addEventListener('change', (event) => {
        let checked = event.target.checked;

        document.body.classList.toggle('dark', checked);

        if (checked) {
            label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            label_toggle.style.color = "yellow";
        } else {
            label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            label_toggle.style.color = "#007bff";
        }
    });
});
