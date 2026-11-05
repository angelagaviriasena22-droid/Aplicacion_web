// 1. Selección de elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const botonLike = document.getElementById("btn-like");
const botonReset = document.getElementById("btn-reset");
const tablaBody = document.getElementById("tabla-body");

let contador = 0;

// 2. Escuchar evento de clic para incrementar
botonLike.addEventListener("click", () => {
    contador++;
    textoContador.textContent = contador;

  
    if (contador > 10) {
        textoContador.classList.add("alerta-superado");
    } else {
        textoContador.classList.remove("alerta-superado");
    }

    // Capturar hora exacta
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString();

    const nuevaFila = document.createElement("tr");

    const celdaNumero = document.createElement("td");
    celdaNumero.classList.add("cell-numero");
    celdaNumero.textContent = contador;

    const celdaHora = document.createElement("td");
    celdaHora.classList.add("cell-hora");
    celdaHora.textContent = horaFormateada;

    nuevaFila.appendChild(celdaNumero);
    nuevaFila.appendChild(celdaHora);


    tablaBody.insertBefore(nuevaFila, tablaBody.firstChild);
});


botonReset.addEventListener("click", () => {
    contador = 0;
    textoContador.textContent = contador;
    textoContador.classList.remove("alerta-superado"); // Restablece color azul
    tablaBody.innerHTML = ""; // Limpia la tabla
});