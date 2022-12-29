let nombre;
let dinero;
let cantidad = prompt("Ingrese la cantidad de personas que pagaron");
let resultado = 0;
let valorUnidad = 0;

function solicitud(numero) {
  nombre = prompt(`Ingrese el nombre N°${numero + 1}:`);
  dinero = parseInt(prompt("Ingrese el dinero que pagó"));
  resultado += dinero;
}

function valorunidad() {
  valorUnidad = resultado / cantidad;
  alert("El valor que tiene que pagar cada uno es:\n$" + valorUnidad);
}

for (let i = 0; i < cantidad; i++) {
  solicitud(i);
}

valorunidad();
