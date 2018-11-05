import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../shared/services/sensor.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent implements OnInit {

  estados: any = [];
  constructor(private postEstados: SensorService) { }

  ngOnInit() {

  	this.postEstados.getAllSensores().subscribe(estados => {
      this.estados = estados;
  	  });
  }

    /*deleteSensor(id){
    var estado = this.estados;
    this.postEstados.deleteSensor(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < estado.length;i++){
                    if(estado[i]._id == id){
                        estado.splice(i, 1);
                    }
                }
            }
        });
    }*/

}

