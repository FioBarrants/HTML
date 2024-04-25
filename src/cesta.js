document.querySelector('#header').innerHTML = "Estoy leyendo el documento cesta.js"

var cesta = [] // crear un array vacio sin elementos


function ver_elemento() {
    alert(cesta)//Muestra la ventana con los elementos
}

function agregar_fruta() {
    var fruta = prompt("Ingrese la fruta que desea")
    cesta.push(fruta)// Agregar la fruta
}

function quitar_fruta() {
    cesta.pop()// Elimina la fruta
}

function eliminar_especificamente() {
    var fruta = prompt("Ingrese la fruta que desea eliminar")
    cesta.splice()// Elimina la fruta especificamente
}

var i = 0
do( 6 < i ){
    console.log( i+". " + frutas[i])
    i = i + 1

} while

var finalizar = true

do {

    var opcion = prompt("1. Ver elementos de la cesta\n2. Agregar una fruta a la cesta\n3. Quitar una fruta de la cesta\n4. Eliminar una fruta especifica\n5. Finalizar ")
    switch (parseInt(opcion)) {
        case 1:
            ver_elemento()
            break
        case 2:
            agregar_fruta()
            break
        case 3:
            quitar_fruta()
            break
        case 4:
            eliminar_especificamente()
            break
        case 5:
            finalizar = false//Se ambia el valor para que finalice.
            break
    }

} while (finalizar == true) // Termina cuando es diferente. 
