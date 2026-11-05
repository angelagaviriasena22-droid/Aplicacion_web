const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tablaBody = document.getElementById("tabla-body");

let likes = 0;

boton.addEventListener("click", () => {
    likes++;
    textoContador.textContent = likes; 

    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString();

    const nuevaFila = document.createElement("tr");
    
    const celdaNumero = document.createElement("td");
    celdaNumero.textContent = likes;
    
    const celdaHora = document.createElement("td");
    celdaHora.textContent = horaFormateada;

    nuevaFila.appendChild(celdaNumero);
    nuevaFila.appendChild(celdaHora);

    tablaBody.insertBefore(nuevaFila, tablaBody.firstChild);
});