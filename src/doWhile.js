document.querySelector('#header').innerHTML = "Estoy leyendo el documento doWhile"

function suma() {
    var numero1 = prompt(" Ingrese numero 1")
    var numero2 = prompt(" Ingrese numero 2")
    alert(parseInt(numero1) + parseInt(numero2))
}

function resta() {
    var numero1 = prompt(" Ingrese numero 1")
    var numero2 = prompt(" Ingrese numero 2")
    alert(parseInt(numero1) - parseInt(numero2))
}

function multiplicacion() {
    var numero1 = prompt(" Ingrese numero 1")
    var numero2 = prompt(" Ingrese numero 2")
    alert(parseInt(numero1) * parseInt(numero2))
}

function division() {
    var numero1 = prompt(" Ingrese numero 1")
    var numero2 = prompt(" Ingrese numero 2")
    alert(parseInt(numero1) / parseInt(numero2))
}


var finalizar = true

do {

    var respuesta = prompt("1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Para salir")
    switch (parseInt(respuesta)) {
        case 1:
            suma()
            break
        case 2:
            resta()
            break
        case 3:
            multiplicacion()
            break
        case 4:
            division()
            break
        case 5:
            finalizar = false//Se ambia el valor para que finalice.
            break

    }

} while (finalizar == true) // Termina cuando es diferente. 