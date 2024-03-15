document.querySelector('#header').innerHTML = "Estoy leyendo el documento switch"
var fruta
var mensaje 
var userInput =prompt("Ingrese el sabor de su fruta: ")

function jugo_de_fresas() {
    document.querySelector('#header').innerHTML = mensaje
  }

  function jugo_de_naranja() {
    mensaje = "Batir naranjas y mandarinas"
    document.querySelector('#header').innerHTML = mensaje
  }

  function servir_vaso_de_agua() {
  mensaje = "servir vaso con agua"
    document.querySelector('#header').innerHTML = mensaje
  }

fruta = userInput.toLowerCase()
switch(fruta){
    case "fresa":
        mensaje = "Batir fresas"
        jugo_de_fresas()
    break
    case "naranja":
    case "mandarina":
        jugo_de_naranja()
    break
    default: 
        servir_vaso_de_agua()
    break    
}