const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const alerta = require('./routes/alerta');
const muestra = require('./routes/muestra');
const registro = require('./routes/registro');
const sensor = require('./routes/sensor');
const usuario = require('./routes/usuario');
const norma = require('./routes/norma');

const app = express();

// Parsers for POST data
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
/*app.use(express.static(path.join(__dirname, '../Frontend/dist/Frontend')));*/

// Set our api routes
app.use('/alerta', alerta);
app.use('/muestra', muestra);
app.use('/registro', registro);
app.use('/sensor', sensor);
app.use('/usuario', usuario);
app.use('/norma', norma);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist/Frontend/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Servidor Web:${port}`));