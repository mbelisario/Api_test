const libProp = require('./modules');
const fs = require('fs');

let resultado = libProp.sumarDosValoresSimple(5, 7);

/* A las funciones se les puede pasar una función con la definición esperada
   en este caso, la función fs.readFile en su tercer parámetro recibe una función
   con dos parámetros error (tipo node js error) y data (stream de datos)
   Acá se definió dentro de libProp (el otro include) la función "resultadoFile"
   que hace lo que se requiere en el con el resultado del file
   NOTA: el Read File es async, por eso usa el callback function "resultadoFile"
*/
fs.readFile('data.txt', 'utf-8', libProp.resultadoFile );

/* después sigo..*/
