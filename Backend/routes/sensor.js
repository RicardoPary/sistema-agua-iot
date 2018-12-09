const express = require('express');
const router = express.Router();

var db = "mongodb://localhost/agua-iot";
var mongojs = require('mongojs');
var sensor = mongojs(db, ['sensor']);


router.get('/', function (req, res, next) {
    sensor.sensor.find(function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.get('/:temperatura/:ph/:turbidez/:conductividad', function (req, res) {

    var dato = new Date();
    var fecha = dato.getFullYear() + "-" + (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) + "-" + date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hora = dato.getHours() + ":" + dato.getMinutes() + ":" + dato.getSeconds();

    sensor.sensor.insert({
        grupo: parseInt(req.params.grupo),
        temperatura: parseFloat(req.params.temperatura),
        ph: parseFloat(req.params.ph),
        turbidez: parseFloat(req.params.turbidez),
        conductividad: parseFloat(req.params.conductividad),
        hora: hora,
        fecha: fecha
    }, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.send('Agregado correctamente');
    });
});

router.get('/current', function (req, res) {
    sensor.sensor.find({}).sort({"_id": -1}).limit(1, function (err, data) {
        if (err) {
            respuesta.send(err);
        }
        res.json(data);
    });
});

router.get('/avg', function (req, res) {
    sensor.sensor.aggregate(
        [{
            $group: {
                _id: null,
                temperatura: {$avg: "$temperatura"},
                ph: {$avg: "$ph"},
                turbidez: {$avg: "$turbidez"},
                conductividad: {$avg: "$conductividad"}
            }
        }], function (err, data) {
            if (err) {
                respuesta.send(err);
            }
            res.json(data);
        });
});

router.get('/avg/:fromdate/:todate', function (req, res) {
    sensor.sensor.aggregate(
        [
            {"$match": {"fecha": {"$gte": req.params.fromdate, "$lte": req.params.todate}}},
            {
                "$group": {
                    "_id": {},
                    temperatura: {$avg: "$temperatura"},
                    ph: {$avg: "$ph"},
                    turbidez: {$avg: "$turbidez"},
                    conductividad: {$avg: "$conductividad"}
                }
            }
        ], function (err, data) {
            if (err) {
                respuesta.send(err);
            }
            res.json(data);
        });
});

router.get('/:fromdate/:todate', function (req, res) {
    sensor.sensor.aggregate(
        [
            {"$match": {"fecha": {"$gte": req.params.fromdate, "$lte": req.params.todate}}}
        ], function (err, data) {
            if (err) {
                respuesta.send(err);
            }
            res.json(data);
        });
});

module.exports = router;