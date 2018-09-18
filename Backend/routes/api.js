const express = require('express');
const router = express.Router();

var db="mongodb://localhost/agua-iot";

var mongojs = require('mongojs');
var flujo  = mongojs(db, ['flujo']);
var flujo_registro  = mongojs(db, ['flujo_registro']);
var persona = mongojs(db, ['persona']);
var semaforo = mongojs(db, ['semaforo']);
var sensor = mongojs(db, ['sensor']);
var vehiculo = mongojs(db, ['vehiculo']);


router.get('/', (req, res) => {
  res.send('api works');
});

//PERSONA 

router.get('/posts', function(req, res, next){
    persona.persona.find(function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


//SENSOR 

router.get('/sensores', function(req, res, next){
    sensor.sensor.find(function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});

router.delete('/sensoresd/:id', function(req, res, next){
    sensor.sensor.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


//SEMAFORO 

router.get('/grupos', function(req, res, next){
    semaforo.semaforo.distinct('grupo',{ },function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


router.get('/grupos/:id', function(req, res, next){
    semaforo.semaforo.find({"grupo":req.params.id},function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});

router.get('/flujo/:grupo/:flujo', function(req, res, next){
    flujo.flujo.find({grupo:parseInt(req.params.grupo),flujo:parseInt(req.params.flujo)},function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


router.delete('/task/:id', function(req, res, next){
    semaforo.semaforo.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});

router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};
    if(task.rojo){ updTask.rojo = task.rojo; }
    if(task.amarillo){ updTask.amarillo = task.amarillo; }
    if(task.verde){ updTask.verde = task.verde; }
    if(task.grupo){ updTask.grupo = task.grupo; }
    if(task.flujo){ updTask.flujo = task.flujo; }
    if(task.latitud){ updTask.latitud = task.latitud; }
    if(task.longitud){ updTask.longitud = task.longitud; }
        
    semaforo.semaforo.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


//VEHICULO

router.get('/mysql', function(req, res, next){

    res.header('Access-Control-Allow-Origin','*');

    vehiculo.vehiculo.find(function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


router.get('/agregarauto/:id', function(req, res, next){

    vehiculo.vehiculo.insert({rfid:req.params.id,fecha:fecha,hora:hora},function (err,data) {
        if(err){
            res.send(err);
            }
        res.json(data);
    });
      
});

router.delete('/autos/:id', function(req, res, next){
    vehiculo.vehiculo.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


router.post('/estados', function(req, res, next){
    var task = req.body;
    semaforo.semaforo.save(task, function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
})

router.get('/estados', function(req, res, next){
    semaforo.semaforo.find(function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


router.get('/estado/:id', function(req, res, next){
    vehiculo.vehiculo.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});


//FLUJO

router.get('/flujos', function(req, res, next){
    flujo.flujo.aggregate([{$group:{_id:{grupo:"$grupo",flujo:"$flujo"},cantidad:{$sum:1},prioridad:{$min:"$prioridad"}}}],function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data);
    });

});

router.get('/flujounico/:grupo/:flujo', function(req, res, next){
    flujo.flujo.distinct("rfid",{"grupo":req.params.grupo,"flujo":req.params.flujo},function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data.length);
    });
});


router.get('/flujos/:caja', function(req, res, next){
    flujo.flujo.find({"caja":req.params.caja}, function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data);
    });
});



//FLUJO REGISTRO

router.get('/flujohistorial', function(req, res, next){
    flujo_registro.flujo_registro.find({ },function(err, data){ 
        if(err){
            res.send(err);
        }
        res.json(data);
    });
});

router.get('/multashistorial', function(req, res, next){
    flujo_registro.flujo_registro.find({rojo:1},function(err, data){ 
        if(err){
            res.send(err);
        }
        res.json(data);
    });
});


router.get('/flujo_registro', function(req, res, next){

    flujo_registro.flujo_registro.distinct("rfid",{ },function(err, data){ 
        if(err){
            res.send(err);
        }
        res.json(data.length);
    });
});


router.get('/flujo_registro/bus', function(req, res, next){
    flujo_registro.flujo_registro.distinct("rfid",{tipo:"Bus"},function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data.length);
    });
});


router.get('/flujo_registro/minibus', function(req, res, next){
    flujo_registro.flujo_registro.distinct("rfid",{tipo:"Minibus"},function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/pesado', function(req, res, next){
    flujo_registro.flujo_registro.distinct("rfid",{tipo:"Pesado"},function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data.length);
    });
});    

router.get('/flujo_registro/policia', function(req, res, next){
    flujo_registro.flujo_registro.distinct("rfid",{tipo:"Policia"},function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/particular', function(req, res, next){
    flujo_registro.flujo_registro.distinct("rfid",{tipo:"Particular"},function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/ambulancia', function(req, res, next){
    flujo_registro.flujo_registro.distinct("rfid",{tipo:"Ambulancia"},function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data.length);
    });
});

router.get('/flujo_registro/infracciones', function(req, res, next){
    flujo_registro.flujo_registro.count({rojo:1},function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data);
    });
});




// IOT ===========================================================================================

//VEHICULO

router.get('/:id/:estado', function(req, res, next){   

    var dato=new Date();
    var fecha=dato.getFullYear()+"-"+((dato.getMonth())+1)+"-"+dato.getDate();
    var hora=dato.getHours()+":"+dato.getMinutes()+":"+dato.getSeconds();     

    vehiculo.vehiculo.insert({
        rfid:req.params.id,
        fecha:fecha,
        hora:hora,
        estado:req.params.estado},function (err,data) {
    if(err){
    res.send(err);
    }
    res.json(data);
    });      
});


router.get('/:id', function(req, res){

    var dato=new Date();
    var fecha=dato.getFullYear()+"-"+((dato.getMonth())+1)+"-"+dato.getDate();
    var hora=dato.getHours()+":"+dato.getMinutes()+":"+dato.getSeconds();

    vehiculo.vehiculo.insert({
        rfid:req.params.id,
        fecha:fecha,
        hora:hora},function (err,data) {
    if(err){
        respuesta.send(err);
        }
    res.json(data);
    });
});



function convertir(numero1,numero2) {

    var numero = numero1+""+numero2; 

    if(numero == "48"){return "0";} if(numero == "49"){return "1";}
    if(numero == "50"){return "2";} if(numero == "51"){return "3";}
    if(numero == "52"){return "4";} if(numero == "53"){return "5";}
    if(numero == "54"){return "6";} if(numero == "55"){return "7";}
    if(numero == "56"){return "8";} if(numero == "57"){return "9";}

    if(numero == "65"){return "A";} if(numero == "66"){return "B";}
    if(numero == "67"){return "C";} if(numero == "68"){return "D";}
    if(numero == "69"){return "E";} if(numero == "70"){return "F";}
    if(numero == "71"){return "G";} if(numero == "72"){return "H";}
    if(numero == "73"){return "I";} if(numero == "74"){return "J";}
    if(numero == "75"){return "K";} if(numero == "76"){return "L";}
    if(numero == "77"){return "M";} if(numero == "78"){return "N";}
    if(numero == "79"){return "O";} if(numero == "80"){return "P";}
    if(numero == "81"){return "Q";} if(numero == "82"){return "R";}
    if(numero == "83"){return "S";} if(numero == "84"){return "T";}
    if(numero == "85"){return "U";} if(numero == "86"){return "V";}
    if(numero == "87"){return "W";} if(numero == "88"){return "X";}
    if(numero == "89"){return "Y";} if(numero == "90"){return "Z";}   
}


//FLUJO

router.get('/cajai/:grupo/:flujo/:rfid/:codigo/:altura', function(req, res){

    var placa,tipo,carnet,otro,prioridad;

    for(var i=0;i<req.params.codigo.length;i++){

        if(i == 0){
         placa= convertir(req.params.codigo[i],req.params.codigo[i+1])+
                convertir(req.params.codigo[i+2],req.params.codigo[i+3])+
                convertir(req.params.codigo[i+4],req.params.codigo[i+5])+
                convertir(req.params.codigo[i+6],req.params.codigo[i+7])+
                convertir(req.params.codigo[i+8],req.params.codigo[i+9])+
                convertir(req.params.codigo[i+10],req.params.codigo[i+11])+
                convertir(req.params.codigo[i+12],req.params.codigo[i+13]);
        }
        
        if(i == 14){
        tipo = convertir(req.params.codigo[i],req.params.codigo[i+1]);
        }

        if(i == 16){
        carnet= convertir(req.params.codigo[i],req.params.codigo[i+1])+
                convertir(req.params.codigo[i+2],req.params.codigo[i+3])+
                convertir(req.params.codigo[i+4],req.params.codigo[i+5])+
                convertir(req.params.codigo[i+6],req.params.codigo[i+7])+
                convertir(req.params.codigo[i+8],req.params.codigo[i+9])+
                convertir(req.params.codigo[i+10],req.params.codigo[i+11])+
                convertir(req.params.codigo[i+12],req.params.codigo[i+13]);
        }

        if(i == 30){
        otro = convertir(req.params.codigo[i],req.params.codigo[i+1]);
        }

    }
    
    var clase="";    
    if(tipo == "B"){ clase = "Bus"; prioridad = 6;}
    if(tipo == "M"){ clase = "Minibus"; prioridad = 5;}
    if(tipo == "P"){ clase = "Pesado"; prioridad = 4;}
    if(tipo == "O"){ clase = "Policia"; prioridad = 8;}
    if(tipo == "T"){ clase = "Particular"; prioridad = 3;}
    if(tipo == "A"){ clase = "Ambulancia"; prioridad = 8;}


    var dato=new Date();
    var fecha=dato.getFullYear()+"-"+((dato.getMonth())+1)+"-"+dato.getDate();
    var hora=dato.getHours()+":"+dato.getMinutes()+":"+dato.getSeconds();

    flujo.flujo.insert({        
        grupo:parseInt(req.params.grupo),
        flujo:parseInt(req.params.flujo),
        rfid:req.params.rfid,
        prioridad:parseInt(prioridad),
        placa:placa,
        tipo:clase,
        carnet:carnet,
        otro:otro,        
        altura:25-parseInt(req.params.altura),
        fecha:fecha,
        hora:hora},function (err,data) {
    if(err){
    res.send(err);
    }
    res.json(data);
});
      
   flujo_registro.flujo_registro.insert({
        grupo:parseInt(req.params.grupo),
        flujo:parseInt(req.params.flujo),
        rfid:req.params.rfid,
        prioridad:parseInt(prioridad),
        placa:placa,
        tipo:clase,
        carnet:carnet,
        otro:otro,  
        posicion:"entrada",      
        altura:25-parseInt(req.params.altura),
        fecha:fecha,
        hora:hora},function (err,data) {
    });

});


router.get('/cajaf/:grupo/:flujo/:rfid/:codigo/:rojo/:amarillo/:verde', function(req, res){
    var placa,tipo,carnet,otro,prioridad;

    for(var i=0;i<req.params.codigo.length;i++){

        if(i == 0){
         placa= convertir(req.params.codigo[i],req.params.codigo[i+1])+
                convertir(req.params.codigo[i+2],req.params.codigo[i+3])+
                convertir(req.params.codigo[i+4],req.params.codigo[i+5])+
                convertir(req.params.codigo[i+6],req.params.codigo[i+7])+
                convertir(req.params.codigo[i+8],req.params.codigo[i+9])+
                convertir(req.params.codigo[i+10],req.params.codigo[i+11])+
                convertir(req.params.codigo[i+12],req.params.codigo[i+13]);
        }
        
        if(i == 14){
        tipo = convertir(req.params.codigo[i],req.params.codigo[i+1]);
        }

        if(i == 16){
        carnet= convertir(req.params.codigo[i],req.params.codigo[i+1])+
                convertir(req.params.codigo[i+2],req.params.codigo[i+3])+
                convertir(req.params.codigo[i+4],req.params.codigo[i+5])+
                convertir(req.params.codigo[i+6],req.params.codigo[i+7])+
                convertir(req.params.codigo[i+8],req.params.codigo[i+9])+
                convertir(req.params.codigo[i+10],req.params.codigo[i+11])+
                convertir(req.params.codigo[i+12],req.params.codigo[i+13]);
        }

        if(i == 30){
        otro = convertir(req.params.codigo[i],req.params.codigo[i+1]);
        }

    }
    
    var clase="";    
    if(tipo == "B"){ clase = "Bus"; prioridad = 6;}
    if(tipo == "M"){ clase = "Minibus"; prioridad = 5;}
    if(tipo == "P"){ clase = "Pesado"; prioridad = 4;}
    if(tipo == "O"){ clase = "Policia"; prioridad = 8;}
    if(tipo == "T"){ clase = "Particular"; prioridad = 3;}
    if(tipo == "A"){ clase = "Ambulancia"; prioridad = 8;}

    flujo.flujo.remove({
        grupo:parseInt(req.params.grupo),
        flujo:parseInt(req.params.flujo),        
        rfid:req.params.rfid},function (err,data) {
    if(err){
    res.send(err);
    }
    res.json(data);
    });

    var dato=new Date();
    var fecha=dato.getFullYear()+"-"+((dato.getMonth())+1)+"-"+dato.getDate();
    var hora=dato.getHours()+":"+dato.getMinutes()+":"+dato.getSeconds();

     flujo_registro.flujo_registro.insert({
        grupo:parseInt(req.params.grupo),
        flujo:parseInt(req.params.flujo),
        rfid:req.params.rfid,
        prioridad:parseInt(prioridad),
        placa:placa,
        tipo:clase,
        carnet:carnet,
        otro:otro,
        posicion:"salida",  
        rojo:parseInt(req.params.rojo),
        amarillo:parseInt(req.params.amarillo),
        verde:parseInt(req.params.verde),
        fecha:fecha,
        hora:hora},function (err,data) {
    });

});

/*app.get('/flujos', function(req, res, next){
    flujo.flujo.aggregate([{$group:{_id:"$caja",numero:{$sum:1}}}],function(err, estados){
        if(err){
            res.send(err);
        }
        res.json(estados);
        console.log(estados);
    });

});*/


//SENSOR 

router.get('/:grupo/:flujo/:humo/:sonido/:etanol/:temperatura/:humedad', function(req, res){
    
    var dato=new Date();
    var fecha=dato.getFullYear()+"-"+((dato.getMonth())+1)+"-"+dato.getDate();
    var hora=dato.getHours()+":"+dato.getMinutes()+":"+dato.getSeconds();   
   
    sensor.sensor.insert({     
        grupo:parseInt(req.params.grupo),
        flujo:parseInt(req.params.flujo),   
        humo:parseInt(req.params.humo),
        sonido:parseInt(req.params.sonido),
        etanol:parseInt(req.params.etanol),
        temperatura:parseInt(req.params.temperatura),
        humedad:parseInt(req.params.humedad),
        hora:hora,
        fecha:fecha},function (err,data) {
    if(err){
        respuesta.send(err);
        }
    res.json(data);
    });   
});


router.get('/sensor/avg/promedio', function(req, res){
    sensor.sensor.aggregate([{
        $group:{
            _id:null,
            humo:{$avg:"$humo"},
            sonido:{$avg:"$sonido"},
            etanol:{$avg:"$etanol"}
        }
    }],function (err,data) {
    if(err){
        respuesta.send(err);
        }
    res.json(data);
    });   
});

//SEMAFORO 

router.get("/admin/index/:id",function (req,res) {
	semaforo.semaforo.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, data){
        if(err){
        res.send(err);
        }
        res.json(data);
    });
});

module.exports = router;





