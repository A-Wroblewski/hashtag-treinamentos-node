// import no ES modules
import { sumFunction } from './modules/module1.js';
import { subtractFunction } from './modules/module2.js';
import { multiplyFunction } from './modules/module3.js';
import { divideFunction } from './modules/module4.js';

// import no CommonJS
// const sumFunction = require('./modules/module1.js')
// const subtractFunction = require('./modules/module2.js')
// const multiplyFunction = require('./modules/module3.js')
// const divideFunction = require('./modules/module4.js')

console.log(sumFunction(10, 10));
console.log(subtractFunction(10, 10));
console.log(multiplyFunction(10, 10));
console.log(divideFunction(10, 10));
