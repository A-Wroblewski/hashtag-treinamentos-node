import http from 'node:http';
import { itemsStock } from './stock.js';
import { URL } from 'node:url';

const server = http.createServer();

server.on('request', (request, response) => {
    const urlObject = new URL(
        `http://${request.headers.host}${request.url}`
    );

    if (urlObject.pathname === '/') {
        const stringifiedJson = JSON.stringify(itemsStock);

        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(stringifiedJson);
        response.end();
    } else if (urlObject.pathname === '/unavailable-products') {
        if (request.method === 'POST') {
            response.writeHead(405, { 'content-type': 'text/plain' });
            response.write('Método não permitido');
            response.end();
            return;
        }

        const unavailableProducts = itemsStock.filter(
            product => product.amountLeft === 0
        );

        const stringifiedUnavailableProducts = JSON.stringify(unavailableProducts);

        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(stringifiedUnavailableProducts);
        response.end();
    } else if (urlObject.pathname === '/get-by-id') {
        const selectedProduct = itemsStock.find(
            product => product.id === Number(urlObject.searchParams.get('id'))
        );

        const stringifiedSelectedProduct = JSON.stringify(selectedProduct);

        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(stringifiedSelectedProduct);
        response.end();
    } else {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.write('Rota inexistente');
        response.end();
    }
});

server.listen(3000);
