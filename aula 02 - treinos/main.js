import { readFile } from 'fs';

function print(stuff) {
    console.log(stuff);
}

let discount = 0;
const purchaseValue = 175;

if (purchaseValue >= 100) {
    discount = purchaseValue * 0.1;

    print('Você tem direito ao desconto!');
} else {
    print('Você não tem direito ao desconto :(');
}

print(`Preço total -> ${purchaseValue - discount}`);

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

const productsQuantity = {
    banana: 50,
    apple: 13,
    watermelon: 2,
    grape: 76,
    dragonFruit: 0,
    mango: 0,
    egg: 99999,
};

for (const product in productsQuantity) {
    if (productsQuantity[product] > 0) {
        print(`${product} disponível! Estoque total de ${productsQuantity[product]}`);
    } else {
        print(`${product} indisponível :(`);
    }
}

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

const trafficLight = 'green';

switch (trafficLight) {
    case 'green':
        print('Liberado!');
        break;
    case 'yellow':
        print('Corre!');
        break;
    case 'red':
        print('Pasri!');
        break;
    default:
        print('Você é daltônico.');
}

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

const apiURL = 'http://www.omdbapi.com/?apikey=62e048dd&t=avengers&y=2014';

// as requisições (feitas pelo comando "fetch()", o qual retorna uma promessa) devem receber o
// parâmetro "await", que serve para esperar o cumprimento de uma promessa. No caso de serem usadas
// dentro de uma função, essa função deve ser assíncrona, contendo o parâmetro "async"
let data = await fetch(apiURL);  // retorna a resposta completa da requisição
data = await data.json();  // filtra somente os dados fornecidos pelo json da api

print(data);
print(data['Title']);
print(data['Year']);

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

try {
    const x = y * 10;
    print(x);
} catch (error) {
    print(error);
}

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

print(1);
setTimeout(function () { print(2); }, 1500);
print(3);

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

function callbackReceiver(func) {
    func();
}

function callbackFunction() {
    print('sou o callback');
}

callbackReceiver(callbackFunction);

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

function readFileFunction(filePath) {
    readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            print(error);
            return;
        }
        print(data);
    });
}

const filePath = './aula 02 - treinos/textoExercício.txt';

readFileFunction(filePath);

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

const promiseFlag = false;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promiseFlag) {
            resolve('promise concluída');
        } else {
            reject('promise rejeitada');
        }
    }, 3000);
});

print(promise);

promise.then(response => {
    print(response);
}).catch(error => {
    print(error);
});

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

const promiseAllFlag = true;

const promiseAll1 = new Promise((res, rej) => {
    setTimeout(() => {
        if (promiseAllFlag) {
            res('promiseAll1 resolvida');
        } else {
            rej('promiseAll1 rejeitada');
        }
    }, 2000);
});

const promiseAll2 = new Promise((res, rej) => {
    setTimeout(() => {
        if (promiseAllFlag) {
            res('promiseAll2 resolvida');
        } else {
            rej('promiseAll2 rejeitada');
        }
    }, 4000);
});

const promiseAllArray = Promise.all([promiseAll1, promiseAll2]);

print(promiseAllArray.then(response => {
    print(response);
}).catch(error => {
    print(error);
}));

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

function personConstructor(personName, age) {
    return {
        personName: personName,
        age: age,
        sayHi: function () {
            console.log(`Name: ${this.personName} Age: ${this.age}`);
        }
    };
}

const person1 = personConstructor('meunome1', 51);
print(person1);
person1.sayHi();

const person2 = personConstructor('meunome2', 102);
print(person2);
person2.sayHi();

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

// construtores usam as regras do PascalCase para ajudar na identificação deles,
// além de precisarem da palavra "new" ao criar uma instância
function Person1(personName, age) {
    this.personName = personName;
    this.age = age;
    this.sayHi = function () {
        console.log(`Name: ${this.personName} Age: ${this.age}`);
    };
}

const person3 = new Person1('meunome3', 153);
print(person3);
person3.sayHi();

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

// eles também podem ser transformados em classes, que é um jeito mais moderno de cria-los
class Person2 {
    constructor(personName, age) {
        this.personName = personName;
        this.age = age;
        this.sayHi = function () {
            console.log(`Name: ${this.personName} Age: ${this.age}`);
        };
    }
}

const person4 = new Person2('meunome4', 204);
print(person4);
person4.sayHi();

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');

const yearlyBillsInDollars = [
    150_000, 110_000, 90_000, 70_000, 100_000, 120_000,
    130_000, 95_000, 120_000, 130_000, 120_000, 165_000,
];

// const yearlyBillsInBrazilianReal = yearlyBillsInDollars.map(
//     (monthlyValue) => { return monthlyValue * 5.57 }
// );

// as arrow functions podem ter os parênteses omitidos no caso de apenas um parâmetro necessário, e
// o retorno pode ser feito diretamente após a flecha se o corpo da função for de uma única linha
const yearlyBillsInBrazilianReal = yearlyBillsInDollars.map(
    monthlyValue => monthlyValue * 5.57
);

print(yearlyBillsInBrazilianReal);

const yearlyBillsHighProfits = yearlyBillsInDollars.filter(
    value => value >= 130_000
);

print(yearlyBillsHighProfits);

const yearlyBillsAverageValue = yearlyBillsInDollars.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
);

print(yearlyBillsAverageValue);

print('\n' + '------------------------------------------------------------'.repeat(2) + '\n');
