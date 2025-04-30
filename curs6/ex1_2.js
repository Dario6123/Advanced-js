const calc = require('./calculator.js'); // ./ sau ../ este obligatoriu !!!!
// sau
// import { sum, diff, product} from './calculator.js';
let operatie = process.argv

console.log(calc.sum(3, 2));
//console.log(calc.diff(3, 2));
//console.log(calc.product(3, 2));