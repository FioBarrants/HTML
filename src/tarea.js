document.querySelector('#header').innerHTML = "Estoy leyendo el documento tarea.js"

var tarea = [] // crear un array vacio sin elementos

function ver_tarea() {
    alert(tarea)//Muestra la ventana con los elementos
}

function agregar_tarea() {
    var tareas = prompt("Ingrese la tarea que desea agregar:")
    tarea.push(tareas)// Agregar la tarea
}

function modificar_tarea() {
    var posicion = parseInt(prompt("Ingrese la posicion de la tarea que desea modificar:"))
    var asignacion = (prompt("Ingrese el cambio de la nueva tarea:"))
    tarea[posicion] = asignacion
}

function eliminar_especificamente() {
    var tareass = parseInt(prompt("Ingrese la tarea que desea eliminar"))
    tarea.splice(tareass,1)// Elimina la tarea especificamente
}

var finalizar = true

do {

    var opcion = prompt("1. Ver lista de tareas\n2. Agregar una tarea\n3. Modificar una tarea\n4. Eliminar una tarea especifica\n5. Finalizar ")
    switch (parseInt(opcion)) {
        case 1:
            ver_tarea()
            break
        case 2:
            agregar_tarea()
            break
        case 3:
            modificar_tarea()
            break
        case 4:
            eliminar_especificamente()
            break
        case 5:
            finalizar = false//Se ambia el valor para que finalice.
            break
    }

} while (finalizar == true) // Termina cuando es diferente. 
