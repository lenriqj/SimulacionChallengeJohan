/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:
  // var nuevoarreglo=[];
  // for(i of array){
  //   nuevoarreglo.push(i[propiedad]);
  // }
  // return nuevoarreglo;
  nuevoArray=[];
  nuevoArray= array.map(function(i){
       return i[propiedad];
  });
  return nuevoArray;
  

}
console.log(pluck(productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }],"price"));

// No modifiques nada debajo de esta linea //

module.exports = pluck