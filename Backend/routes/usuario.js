const express = require('express');
const router = express.Router();

var db = "mongodb://localhost/agua-iot";
var mongojs = require('mongojs');
var usuario = mongojs(db, ['usuario']);

router.get('/', (req, res) => {
    usuario.usuario.find(function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.get('/:id', function (req, res, next) {
    usuario.usuario.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.post('/estados', function (req, res) {
    usuario.usuario.save(req.body, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.delete('/:id', function (req, res) {
    usuario.usuario.remove({_id: mongojs.ObjectId(req.params.id)}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.put('/:id', function (req, res) {
    usuario.usuario.update({_id: mongojs.ObjectId(req.params.id)}, req.body, {}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});


/*//PERSONA

//SEMAFORO
router.get('/grupos', function (req, res, next) {
    semaforo.semaforo.distinct('grupo', {}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});


router.get('/grupos/:id', function (req, res, next) {
    semaforo.semaforo.find({"grupo": req.params.id}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.get('/flujo/:grupo/:flujo', function (req, res, next) {
    flujo.flujo.find({grupo: parseInt(req.params.grupo), flujo: parseInt(req.params.flujo)}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.get('/agregarauto/:id', function (req, res, next) {

    vehiculo.vehiculo.insert({rfid: req.params.id, fecha: fecha, hora: hora}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });

});

//FLUJO
router.get('/flujos', function (req, res, next) {
    flujo.flujo.aggregate([{
        $group: {
            _id: {grupo: "$grupo", flujo: "$flujo"},
            cantidad: {$sum: 1},
            prioridad: {$min: "$prioridad"}
        }
    }], function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });

});

router.get('/flujounico/:grupo/:flujo', function (req, res, next) {
    flujo.flujo.distinct("rfid", {"grupo": req.params.grupo, "flujo": req.params.flujo}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data.length);
    });
});


router.get('/flujos/:caja', function (req, res, next) {
    flujo.flujo.find({"caja": req.params.caja}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});


//FLUJO REGISTRO
router.get('/flujohistorial', function (req, res, next) {
    flujo_registro.flujo_registro.find({}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.get('/multashistorial', function (req, res, next) {
    flujo_registro.flujo_registro.find({rojo: 1}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});


router.get('/flujo_registro', function (req, res, next) {
    flujo_registro.flujo_registro.distinct("rfid", {}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data.length);
    });
});


router.get('/flujo_registro/bus', function (req, res, next) {
    flujo_registro.flujo_registro.distinct("rfid", {tipo: "Bus"}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data.length);
    });
});


router.get('/flujo_registro/minibus', function (req, res, next) {
    flujo_registro.flujo_registro.distinct("rfid", {tipo: "Minibus"}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/pesado', function (req, res, next) {
    flujo_registro.flujo_registro.distinct("rfid", {tipo: "Pesado"}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/policia', function (req, res, next) {
    flujo_registro.flujo_registro.distinct("rfid", {tipo: "Policia"}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/particular', function (req, res, next) {
    flujo_registro.flujo_registro.distinct("rfid", {tipo: "Particular"}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/ambulancia', function (req, res, next) {
    flujo_registro.flujo_registro.distinct("rfid", {tipo: "Ambulancia"}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/infracciones', function (req, res, next) {
    flujo_registro.flujo_registro.count({rojo: 1}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});*/

module.exports = router;