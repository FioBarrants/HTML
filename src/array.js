document.querySelector('#header').innerHTML = "Estoy leyendo el documento arrays.js"

var cesta = ["Fresa","Pera","Cereza"]
var cestaVacia = [] // crear un array vacio sin elementos


console.log(cesta)

cesta[0] = "Uva"// El  para modificar el valor de una posicion.

console.log(cesta)

console.log(cesta.length)// Ver el tamaño del array.

cesta.push("Naranja")// Agrega un elemento al array.

console.log(cesta)

cesta.pop() // Elimina el ultimo elemento del array.
console.log(cesta)

cesta.push("piña")
cesta.push("Naranja")
console.log(cesta)

/*El segundo parametro (1) indica los elementos eliminar 
desde el indice proporcionado (2) */

cesta.splice(2,1)
console.log(cesta)

console.log(cesta[2])

var opcion = propmt("n1. Ver elementos de la cesta\n2. Agregar una fruta a la cesta\n3. Quitar una fruta de la cesta")

