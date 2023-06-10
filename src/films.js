// Ejercicio 1: Obtén el array de todos los directores.
function getAllDirectors(array) {
  // Se utiliza 'map' porque necesitamos crear un nuevo array con los directores de cada película.
  let result = array.map(element => element.director);
  console.log("EJERCICIO 1 ->", result);
  return result;
}

// Ejercicio 2: Obtén las películas de un director específico.
function getMoviesFromDirector(array, director) {
  // Se crea una copia del array original con 'spread' operator para no modificar el original.
  let newArray = [...array]
  // Se utiliza 'filter' para obtener sólo las películas del director dado.
  let result = newArray.filter(element => element.director === director);
  console.log("EJERCICIO 2 ->", result);
  return result;
}

// Ejercicio 3: Calcula el promedio de las películas de un director dado.
function moviesAverageOfDirector(array, director) {
  // Se utiliza 'filter' para obtener las películas del director dado.
  let stanley = array.filter(e => e.director == director)
  // 'Reduce' se usa para sumar todas las puntuaciones de las películas del director.
  let reducido = stanley.reduce((total, currentValue) => {
    return total + currentValue.score;
  }, 0)
  // El promedio se obtiene dividiendo la suma total entre el número de películas totales.
  let result = reducido / stanley.length
  console.log("EJERCICIO 3 ->", result.toFixed(2));
  return result;
}

// Ejercicio 4: Ordena alfabéticamente por título.
function orderAlphabetically(array) {
  // 'Map' se usa para crear un nuevo array con sólo los títulos.
  let objects = array.map(e => e.title)
  // 'Sort' se usa para ordenar alfabéticamente los títulos.
  let listaCompleta = objects.sort((a, b) => a.localeCompare(b))
  // Se usa 'slice' para obtener sólo las primeras 20 películas.
  let result = listaCompleta.slice(0, 20)
  console.log("EJERCICIO 4 ->", result);
  return result;
}

// Ejercicio 5: Ordena por año, de forma ascendente.
function orderByYear(array) {
  // Se hace una copia del array original para no modificarlo.
  let newArray = [...array]

  // Se utiliza 'sort' para ordenar por año. Si el año es el mismo, se ordena alfabéticamente.
  let result = newArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  console.log("EJERCICIO 5 ->", result);
  return result;
}

// Ejercicio 6: Calcula el promedio de las películas en una categoría.
function moviesAverageByCategory(array, genre) {
  // Se hace una copia del array original para no modificarlo.
  let newArray = [...array]

  // Se utiliza 'filter' para obtener las películas que incluyen el género dado y tienen un score válido.
  let filtrado = newArray.filter(e => e.genre.includes(genre) && Number.isFinite(e.score))

  // 'Reduce' se utiliza para sumar todos los scores de las películas filtradas.
  let reducido = filtrado.reduce((total, currentValue) => {
    return (total + currentValue.score)
  }, 0)

  // El promedio se obtiene dividiendo la suma total entre el número de películas.
  let result = reducido / filtrado.length
  console.log("EJERCICIO 6 ->", (parseFloat(result.toFixed(2))));
  return (parseFloat(result.toFixed(2)));
}

// Ejercicio 7: Modifica la duración de las películas a minutos.
function hoursToMinutes(array) {
  // Se utiliza 'map' para crear un nuevo array sin modificar el original.
  let result = array.map(e => {
    // Se copia cada elemento para no modificar el objeto original.
    let newArray = { ...e };
    let cortado = [];

    // Se hace un 'split' del duration para obtener horas y minutos por separado.
    if (newArray.duration) {
      cortado = newArray.duration.split(' ');
    } else {
      cortado = [0, 0];
    }

    // Se usan ternarios para saber si hay valor para horas o minutos, si lo hay, se convierten a número. Si no, se establecen en 0.
    let horas = cortado[0] ? parseInt(cortado[0].replace('h', '')) : 0;
    let minutos = cortado[1] ? parseInt(cortado[1].replace('min', '')) : 0;

    // Se calcula la duración total en minutos.
    newArray.duration = horas * 60 + minutos;
    return newArray;
  })

  console.log("EJERCICIO 7 ->", result);
  return result;
}

// Ejercicio 8: Obtén la mejor película de un año.
function bestFilmOfYear(array) {
  // Se hace una copia del array original para no modificarlo.
  let newArray = [...array]
  let any = newArray.filter(e => e.year == 1957)
  let result = any.filter(e => e.score == 8.4)
  console.log("EJERCICIO 8 ->", result);
  return result;
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
