function hacerReserva() {
    let botonSucuralCliente = document.getElementById("boton-sucursal")
    botonSucuralCliente.addEventListener("click", seleccionarSucursal)
}


function seleccionarSucursal() {
    let sectionSeleccionarSucursal = document.getElementById("seleccionar-sucursal")
    sectionSeleccionarSucursal.style.display = "none"

    let inputPalermo = document.getElementById("suc-palermo")
    let inputCaballito = document.getElementById("suc-caballito")
    let spanSucursalCliente = document.getElementById("reserva-cliente")
    
    if (inputPalermo.checked) {
        spanSucursalCliente.innerHTML = "Sucursal Gurruchaga 1332 - Palermo"    
    } else if (inputCaballito.checked) {
        spanSucursalCliente.innerHTML = "Sucursal Malvinas Argentinas 4040 - Caballito"
    } else {
        alert("Selecciona una sucursal")
    }
}


window.addEventListener("load", hacerReserva)