import http from 'node:http';
import url from 'node:url';
import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';

const server = http.createServer();

server.on('request', async (request, response) => {
    const filePath = url.parse(request.url).pathname;
    const processPath = process.cwd();

    try {
        await fs.stat(processPath + filePath);

        const readStream = createReadStream(processPath + filePath);

        response.writeHead(200, { 'content-type': 'text/html' });

        readStream.pipe(response);
    } catch {
        response.writeHead(404, { 'content-type': 'text/plain' });
        response.write('Arquivo não encontrado');
        response.end();
    }
});

server.listen(3000);
