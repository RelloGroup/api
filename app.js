const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
    res.json(req.body);
})
app.listen(8525, () => console.log('Server spuštěn!'));