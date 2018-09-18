import { Component, OnInit } from '@angular/core';
import { SensoresService } from '../../services/sensores/sensores.service';

@Component({
  selector: 'app-sensor-register',
  templateUrl: './sensor-register.component.html',
  styleUrls: ['./sensor-register.component.scss']
})
export class SensorRegisterComponent implements OnInit {

  estados: any = [];
  constructor(private postEstados: SensoresService) { }

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

