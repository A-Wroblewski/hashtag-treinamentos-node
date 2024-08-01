const fruit = {
    name: 'banana',
    colors: {
        color1: 'yellow',
        color2: 'black',
    },
};

// console.log(fruit);  // printa a fruta
// console.log(fruit.undefinedProperty1);  // printa "undefined"
// console.log(fruit.undefinedProperty1.undefinedProperty2);  // gera um erro

// uma maneira de previnir possíveis erros seria fazendo as checagens de existência da propriedade
if (fruit && fruit.undefinedProperty1 && fruit.undefinedProperty1.undefinedProperty2) {
    console.log('entrou no if');
} else {
    console.log('entrou no else');
}

// outro jeito mais simples é usar o operador "?." (optional chaining), que faz a mesma coisa do if
console.log(fruit.undefinedProperty1?.undefinedProperty2);

console.log('\n' + '--------------------------------------------------' + '\n');

const number = undefined;

// o operador "??" (nullish coalescing) retorna o valor da direita quando o valor da esquerda for
// "null" ou "undefined". No caso do valor da esquerda não for nenhum dos dois, ele é o retornado
console.log(number ?? 0);

console.log('\n' + '--------------------------------------------------' + '\n');

// o parâmetro rest recebe um número infinito de argumentos e os tranforma em um array, evitando
// assim a necessidade de criar uma função enorme que tenha vários parâmetros com valores padrão
function gradesAverage(name, surname, ...grades) {
    const gradesSum = grades.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    const gradesLength = grades.length;

    return `Student "${name} ${surname}" has a final grade of ${gradesSum / gradesLength}.`;
}

console.log(
    gradesAverage('firstName', 'lastName', 4.5, 4, 6, 7.5)
);

console.log('\n' + '--------------------------------------------------' + '\n');

const listA = [1, 2, 3, 4, 5];
const listB = listA;
const listC = [...listA];

listB[0] = 10;
listA[4] = 100;
listC[2] = 1000;

// ambas as listas são modificadas pois as variáveis apontam pro mesmo endereço na memória
console.log(listA);
console.log(listB);

// ao usar a sintaxe spread você consegue fazer uma cópia do objeto com um novo endereço na memória
// e modificar ele sem afetar o objeto original
// obs: a sintaxe spread é idêntica ao parâmetro rest, o que os difere é o contexto
console.log(listC);

console.log('\n' + '--------------------------------------------------' + '\n');
