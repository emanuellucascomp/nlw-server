import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.send('Listagem de usuários')
})

app.listen(3333);