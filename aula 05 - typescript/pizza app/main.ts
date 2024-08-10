type Pizza = {
    id: number,
    pizzaName: string,
    pizzaPrice: number,
}

type Order = {
    orderID: number,
    pizza: Pizza,
    status: 'ordered' | 'completed',
}

function addNewPizza(pizzaName: string, pizzaPrice: number): void {
    pizzaMenu.push(
        {
            id: pizzaID++, pizzaName: pizzaName, pizzaPrice: pizzaPrice
        }
    );
}

function placeOrder(pizzaName: string): Order | undefined {
    for (const pizza in pizzaMenu) {
        const pizzaObject = pizzaMenu[pizza];

        if (pizzaName === pizzaObject.pizzaName) {
            cashInRegister += pizzaObject.pizzaPrice;

            const newOrder: Order = {
                orderID: orderID++, pizza: pizzaObject, status: 'ordered'
            };

            ordersQueue.push(newOrder);

            return newOrder;
        }
    }
}

function completeOrder(orderID: number): Order | undefined {
    for (let i = 0; i < ordersQueue.length; i++) {
        const ordersQueueOrderID = ordersQueue[i].orderID;

        if (ordersQueueOrderID === orderID) {
            const currentOrder = ordersQueue[i];

            currentOrder.status = 'completed';

            return currentOrder;
        }
    }
}

function getPizzaDetails(id: number | string): Pizza | string {
    let pizza: Pizza | undefined

    if (typeof id === 'number') {
        pizza = pizzaMenu.find(
            pizzaObject => pizzaObject.id === id
        )
    } else if (typeof id === 'string') {
        pizza = pizzaMenu.find(
            pizzaObject => pizzaObject.pizzaName === id
        )
    }

    if (pizza) {
        return pizza
    }

    return 'Nenhuma pízza encontrada'
}

let pizzaID = 1
let orderID = 1;
let cashInRegister = 100;

const ordersQueue: Order[] = [];

const pizzaMenu: Pizza[] = [
    {
        id: pizzaID++, pizzaName: 'Marguerita', pizzaPrice: 50
    },
    {
        id: pizzaID++, pizzaName: 'Mussarela', pizzaPrice: 55
    },
    {
        id: pizzaID++, pizzaName: 'Brasileira', pizzaPrice: 60
    },
    {
        id: pizzaID++, pizzaName: 'Cogumelos do Mario', pizzaPrice: 87
    },
];

addNewPizza('Pizza maluca', 150);
addNewPizza('Pizza mofada', 10);

placeOrder('Brasileira');
placeOrder('Pizza mofada');
placeOrder('Cogumelos do Mario');

console.log(ordersQueue);

completeOrder(1);

console.log(ordersQueue);

completeOrder(3);

console.log(ordersQueue);

console.log(getPizzaDetails(1));
console.log(getPizzaDetails('Pizza maluca'));
console.log(getPizzaDetails('Cogumelos do Mario'));

console.log(pizzaMenu)
