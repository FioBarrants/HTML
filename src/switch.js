document.querySelector('#header').innerHTML = "Dia invalido"
var dia
var mensaje 
var userInput =prompt("Ingrese el dia: ")

function dia_lunes() {
  mensaje = "Hoy es el dia lunes"

    document.querySelector('#header').innerHTML = mensaje
    
  }

  function dia_martes() {
    mensaje = "Hoy es el dia martes"
    document.querySelector('#header').innerHTML = mensaje
  }

  function dia_miercoles() {
  mensaje = "Hoy es el dia miercoles"
    document.querySelector('#header').innerHTML = mensaje
  }

  function dia_jueves() {
    mensaje = "Hoy es el dia jueves"
    document.querySelector('#header').innerHTML = mensaje
  }

  function dia_viernes() {
  mensaje = "Hoy es el dia viernes"
    document.querySelector('#header').innerHTML = mensaje
  }

  function dia_sabado() {
    mensaje = "Hoy es el dia sabado"
    document.querySelector('#header').innerHTML = mensaje
  }

  function dia_domingo() {
  mensaje = "Hoy es el dia domingo"
    document.querySelector('#header').innerHTML = mensaje
  }


dia = parseInt(userInput)
switch(dia){

    case 1:
       
        dia_lunes()
    break

    case 2:
    
        dia_martes()
    break

    case 3:
       
        dia_miercoles()
    break

    case 4:
   
      dia_jueves()
  break

    case 5:
  
    dia_viernes()
  break

  case 6:
    
    dia_sabado()
break

  case 7:
   
    dia_domingo()
  break

    default: 
    mensaje = "Dia invalido"
 
    break    
}