const express = require('express');
const router = express.Router();

var db = "mongodb://localhost/agua-iot";
var mongojs = require('mongojs');
var muestra = mongojs(db, ['muestra']);

router.get('/', (req, res) => {
    res.send('api muestra works');
});

module.exports = router;