import {Component, OnInit} from '@angular/core';
import {AutosService} from '../../services/autos/autos.service';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.scss']
})
export class CarRegisterComponent implements OnInit {

  estados: any = [];

  constructor(private postEstados: AutosService) {
  }

  rfid: any;
  fecha: any;
  hora: any;

  ngOnInit() {

    this.postEstados.getAllRegistros().subscribe(estados => {
      this.estados = estados;
    });
  }


  addAuto(event) {
    event.preventDefault();
    var newEstado = {
      rfid: this.rfid,
      fecha: this.fecha,
      hora: this.hora
    };
    this.postEstados.addAutos(newEstado)
      .subscribe(estado => {
        this.estados.push(estado);
      });
  }

  /*deleteAuto(id) {
    var estado = this.estados;
    this.postEstados.deleteAutos(id).subscribe(data => {
      if (data.n == 1) {
        for (var i = 0; i < estado.length; i++) {
          if (estado[i]._id == id) {
            estado.splice(i, 1);
          }
        }
      }
    });
  }*/

  /*updateAuto(estado) {
    var _estado = {
      _id: estado._id,
      rojo: estado.rojo,
      amarillo: estado.amarillo,
      verde: estado.verde,
      grupo: estado.grupo
    };
    this.postEstados.updateAutos(_estado).subscribe(data => {

    });
  }*/

}



