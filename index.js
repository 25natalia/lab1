const math = require('mathjs');
var colors = require('colors');

// Definir
const num11 = 5;
const num22 = 3;

//suma
const resultadoSuma = math.add(num11, num22);
console.log(colors.rainbow(`El resultado de la suma de ${num11} y ${num22} es: ${resultadoSuma}`));

const Big = require('big.js');

// Definir
const num111 = new Big(5);
const num222 = new Big(3);

//multiplicación
const resultadoMultiplicacion = num111.times(num222);
console.log(colors.red(`El resultado de la multiplicación de ${num111} y ${num222} es: ${resultadoMultiplicacion}`));
