const express = require('express');
const router = express.Router();

var db = "mongodb://localhost/agua-iot";
var mongojs = require('mongojs');
var sensor = mongojs(db, ['sensor']);


/*GET*/
router.get('/', function(req, res, next){
    sensor.sensor.find(function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data);
    });
});



router.get('/:temperatura/:ph/:turbidez/:conductividad', function (req, res) {

    var dato = new Date();
    var fecha = dato.getFullYear() + "-" + ((dato.getMonth()) + 1) + "-" + dato.getDate();
    var hora = dato.getHours() + ":" + dato.getMinutes() + ":" + dato.getSeconds();

    sensor.sensor.insert({
        grupo: parseInt(req.params.grupo),
        temperatura: parseInt(req.params.temperatura),
        ph: parseInt(req.params.ph),
        turbidez: parseInt(req.params.turbidez),
        conductividad: parseInt(req.params.conductividad),
        hora: hora,
        fecha: fecha
    }, function (err, data) {
        if (err) {
            respuesta.send(err);
        }
        res.json(data);
    });
});

router.get('/:id/:estado', function (req, res, next) {

    var dato = new Date();
    var fecha = dato.getFullYear() + "-" + ((dato.getMonth()) + 1) + "-" + dato.getDate();
    var hora = dato.getHours() + ":" + dato.getMinutes() + ":" + dato.getSeconds();

    vehiculo.vehiculo.insert({
        rfid: req.params.id,
        fecha: fecha,
        hora: hora,
        estado: req.params.estado
    }, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});


router.get('/:id', function (req, res) {

    var dato = new Date();
    var fecha = dato.getFullYear() + "-" + ((dato.getMonth()) + 1) + "-" + dato.getDate();
    var hora = dato.getHours() + ":" + dato.getMinutes() + ":" + dato.getSeconds();

    vehiculo.vehiculo.insert({
        rfid: req.params.id,
        fecha: fecha,
        hora: hora
    }, function (err, data) {
        if (err) {
            respuesta.send(err);
        }
        res.json(data);
    });
});

router.get('/sensor/avg/promedio', function (req, res) {
    sensor.sensor.aggregate([{
        $group: {
            _id: null,
            humo: {$avg: "$humo"},
            sonido: {$avg: "$sonido"},
            etanol: {$avg: "$etanol"}
        }
    }], function (err, data) {
        if (err) {
            respuesta.send(err);
        }
        res.json(data);
    });
});

router.get("/admin/index/:id", function (req, res) {
    semaforo.semaforo.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

module.exports = router;