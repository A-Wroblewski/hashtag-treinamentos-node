import { EventEmitter } from 'node:events';

const myEmitter = new EventEmitter();

myEmitter.on('event', (parameter1, parameter2) =>
    console.log(
        `emissor disparado com os parâmetros: ${parameter1}, ${parameter2}`
    )
);

myEmitter.emit('event', 'banana', 'maçã');

console.log('--------------------------------------------------------------------------------');

class CompanySales extends EventEmitter {
    performSale() {
        console.log('Venda registrada');
        super.emit('Venda realizada!');
    }
}

const companySales = new CompanySales();

companySales.on('Venda realizada!', () => {
    console.log('---------------------------------');
    console.log('Vendido!!!');
    console.log('---------------------------------');
});
companySales.performSale();
