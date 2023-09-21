const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/results/:n1/:n2', (request, response) => {
    const {n1, n2} = request.params;
    const result = parseFloat(n1) + parseFloat(n2);
    response.send(result.toString());
});

app.post('/results/:n1/:n2', (request, response) => {
    const {n1, n2} = request.params;
    const result = parseFloat(n1)*parseFloat(n2);
    response.send(result.toString());
});

app.put('/results/:n1/:n2', (request, response) => {
    const {n1, n2} = request.params;
    const result = parseFloat(n1)/parseFloat(n2);
    response.send(result.toString());
});

app.patch('/results/:n1/:n2', (request, response) => {
    const {n1, n2} = request.params;
    const result = Math.pow(parseFloat(n1), parseFloat(n2));
    response.send(result.toString());
});

app.delete('/results/:n1/:n2', (request, response) => {
    const {n1, n2} = request.params;
    const result = parseFloat(n1)-parseFloat(n2);
    response.send(result.toString());
});

app.listen(2202);