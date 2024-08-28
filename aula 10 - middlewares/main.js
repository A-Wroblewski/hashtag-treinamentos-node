import helmet from 'helmet';
import express from 'express';

import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';

import { registerRequest } from './middlewares/test.js';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(registerRequest);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.send('oi');
});

app.listen(3000, () => console.log('server de pé'));
