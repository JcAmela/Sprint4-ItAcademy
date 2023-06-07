// Ejercicio 1: Obtén el array de todos los directores.
function getAllDirectors(array) {
  let result = [];
  result = array.map(element => element.director);
  console.log("EJERCICIO 1 ->", result);
  return result;
  }
  
  // Ejercicio 2: Obtén las películas de un director específico.
  function getMoviesFromDirector(array, director) {
  let result = array.filter(e => e.director === director);
  console.log("EJERCICIO 2 ->", result);
  return result;
  }
  
  // Ejercicio 3: Calcula el promedio de las películas de un director dado.
  function moviesAverageOfDirector(array, director) {
    let directoresEscogidos = array.filter(e => e.director === director)
    let reducido = directoresEscogidos.reduce((total, valor) => {
      return total + valor;
    }, 0);
    let result = reducido / array.lenght
    console.log("EJERCICIO 3 ->", result);
    return result;
  }
  
  // Ejercicio 4: Ordena alfabéticamente por título.
  function orderAlphabetically(array) {
  
  }
  
  // Ejercicio 5: Ordena por año, de forma ascendente.
  function orderByYear() {
  
  }
  
  // Ejercicio 6: Calcula el promedio de las películas en una categoría.
  function moviesAverageByCategory() {
  
  }
  
  // Ejercicio 7: Modifica la duración de las películas a minutos.
  function hoursToMinutes() {
  
  }
  
  // Ejercicio 8: Obtén la mejor película de un año.
  function bestFilmOfYear() {
  
  }
  
  // Lo siguiente es necesario para que funcionen las pruebas unitarias.
  /* Configuración del entorno. No modificar el código siguiente. */
  if (typeof module !== 'undefined') {
  module.exports = {
  getAllDirectors,
  getMoviesFromDirector,
  moviesAverageOfDirector,
  orderAlphabetically,
  orderByYear,
  moviesAverageByCategory,
  hoursToMinutes,
  bestFilmOfYear,
  };
  }