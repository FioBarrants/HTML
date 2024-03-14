var mensaje= "batir fresas"
var hay_fresas;
var hay_peras;
var hay_mangos;

function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
  }

  function servir_vaso_de_agua() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
  }

  function jugo_de_peras() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
  }

  function jugo_de_mangos() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
  }
 
hay_peras = false;
hay_fresas = false;
hay_mangos = true;

if (hay_fresas) {
  mensaje= 'Batir las fresas';
  jugo_de_fresas();
} else if (hay_peras) {
  mensaje= 'Batir las peras';
  jugo_de_peras();
} else if (hay_mangos) {
  mensaje= 'Batir los mangos';
  jugo_de_mangos();
} else {
  mensaje= 'Servir vaso de agua';
  servir_vaso_de_agua();
}